import React from 'react';

import { withStyles, Styles, WithStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DataTable from 'react-data-table-component';

import { VistaContext } from './VistaContext';
import VistaClient from '@vista.io/vista-api-client';


interface VistaRolesStyles {
  container: React.CSSProperties,
  title: React.CSSProperties,
  rolesList: React.CSSProperties,
  rolesListRow: React.CSSProperties,
  rolesListRowText: React.CSSProperties,
  permissionsTable: React.CSSProperties,
  permissionsTableRowInherited: React.CSSProperties,
  permissionsTableRow: React.CSSProperties,
}

const styles: Styles<any, any> = { // eslint-disable-line
  container: {
    height: '500px',
    width: '1000px',
    display: 'flex',
    border: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',
  },
  title: {
    marginTop: '0px',
  },
  rolesList: {
    height: '100%',
    width: '200px',
    overflow: 'scroll',
    borderRight: '1px solid lightgray',
  },
  rolesListRow: {
    height: '60px',
  },
  rolesListRowText: {
    fontSize: '100px',
  },
  permissionsTable: {
    height: '100%',
    flexGrow: '1',
  },
  permissionsTableRowInherited: {
    color: 'grey',
  },
  permissionsTableRow: {},
};

interface PermissionsTableRowProps extends WithStyles<typeof styles> {
  row: PermissionsTableRowData,
  styles: VistaRolesStyles,
  text: string,
}

function PermissionsTableRow(props: PermissionsTableRowProps) {
  const { row, classes, text } = props;
  const styles = props.styles || classes;
  return (
    <p
      className={row.inheritedFrom ? classes.permissionsTableRowInherited : classes.permissionsTableRow}
      style={row.inheritedFrom ? styles.permissionsTableRowInherited : styles.permissionsTableRow}
    > {text} </p>
  );
}

interface PermissionsTableProps extends WithStyles<typeof styles> {
  rolesById: { [id: string]: Role },
  role: Role,
  styles: VistaRolesStyles,
  title: string,
}

interface PermissionsTableRowData {
  id: string,
  actions: string[],
  resourceType: string,
  attribute: string,
  inheritedFrom: string,
}

function PermissionsTable(props: PermissionsTableProps) {
  const { classes, styles, title } = props;
  return (
    <div className={classes.permissionsTable}>
      <DataTable<PermissionsTableRowData>
        title={title}
        columns={
          [
            {
              name: 'Resource Type',
              selector: () => 'resourceType',
              sortable: true,
              cell: row => <PermissionsTableRow text={row.resourceType} classes={classes} styles={styles} row={row} />
            },
            {
              name: 'Attribute',
              selector: () => 'attribute',
              sortable: true,
              right: true,
              cell: row => <PermissionsTableRow text={row.attribute} classes={classes} styles={styles} row={row} />
            },
            {
              name: 'Actions',
              selector: () => 'actions',
              sortable: true,
              right: true,
              cell: row => <PermissionsTableRow text={row.actions.join(', ')} classes={classes} styles={styles} row={row} />
            },
            {
              name: 'Inherited From',
              selector: () => 'inheritedFrom',
              sortable: true,
              right: true,
              cell: row => <PermissionsTableRow text={row.inheritedFrom} classes={classes} styles={styles} row={row} />
            },
          ]}
        data={(() => {
          const { rolesById, role } = props;

          if (!role) {
            return [];
          }

          // add permissions for parent roles
          const tableKeys: { [key: string]: boolean } = {};

          const parentIds = [...role.parent_roles];
          const seen = new Set();
          const tablePermissions: PermissionsTableRowData[] = [];
          while (parentIds.length) {
            const parentId = parentIds.shift();
            if (!parentId || seen.has(parentId)) {
              continue
            }

            seen.add(parentId);

            const parentRole = rolesById[parentId];
            for (const rt in parentRole.resource_types_to_attributes_to_actions) {
              for (const attribute in parentRole.resource_types_to_attributes_to_actions[rt]) {
                const actions = parentRole.resource_types_to_attributes_to_actions[rt][attribute];

                const key = `${rt}_${attribute}`;
                if (tableKeys[key]) {
                  continue
                }

                tablePermissions.push({
                  actions,
                  attribute,
                  id: key,
                  resourceType: rt,
                  inheritedFrom: parentRole.id,
                });

                tableKeys[key] = true;
              }
            }

            parentIds.push(...parentRole.parent_roles);
          }


          // added grants
          for (const resourceType in role.resource_types_to_attributes_to_actions) {
            for (const attribute in role.resource_types_to_attributes_to_actions[resourceType]) {
              const key = `${resourceType}_${attribute}`;
              const actions = role.resource_types_to_attributes_to_actions[resourceType][attribute];
              if (!tableKeys[key]) {
                tablePermissions.push({
                  id: key,
                  actions,
                  attribute,
                  resourceType,
                  inheritedFrom: '',
                });

                tableKeys[key] = true;
              }
            }
          }

          return tablePermissions;
        })()}
      />
    </div>
  );
}

interface Role {
  id: string,
  parent_roles: string[],
  resource_types_to_attributes_to_actions: { [rt: string]: { [attr: string]: string[] } },
}

interface VistaRolesProps extends WithStyles<typeof styles> {
  orgId: string,
  branch: string,
  styles?: VistaRolesStyles;
  hostname?: string,
}

interface VistaRolesState {
  client: VistaClient,
  rolesById: { [id: string]: Role },
  selectedRoleId: string,
}

class _VistaRoles extends React.Component<VistaRolesProps, VistaRolesState> {
  static contextType = VistaContext;
  declare context: React.ContextType<typeof VistaContext>;
  static defaultProps = {
    styles: {},
  }

  constructor(props: VistaRolesProps, context?: any) { // eslint-disable-line
    super(props);

    this.state = {
      client: new context.vistaClient(context.secret, props.branch, props.hostname || ''),
      rolesById: {},
      selectedRoleId: '',
    };
  }

  async componentDidMount() {
    const roles = await this.state.client.roles.list(this.props.orgId);
    const rolesById: { [id: string]: Role } = {};
    roles.forEach((role: Role) => {
      rolesById[role.id] = role;
    });

    const selectedRoleId = roles.length ? roles[0].id : '';
    this.setState({
      rolesById,
      selectedRoleId,
    });
  }

  render() {
    const { classes } = this.props;
    const styles = this.props.styles || classes;
    const { rolesById, selectedRoleId } = this.state;

    return (
      <div className={classes.container} style={styles.container}>
        <List className={classes.rolesList} style={styles.rolesList} disablePadding={true}>
          {
            Object.values(rolesById).map((role) => {
              return (
                <ListItem
                  key={role.id}
                  disablePadding>
                  <ListItemButton
                    className={classes.rolesListRow}
                    style={styles.rolesListRow}
                    selected={selectedRoleId === role.id}
                    disableRipple
                    onClick={() => this.setState({ selectedRoleId: role.id })}>
                    <ListItemText primary={role.id} />
                  </ListItemButton>
                </ListItem >
              );
            })
          }
        </List >
        <PermissionsTable title={`${selectedRoleId} Permissions`} rolesById={rolesById} role={rolesById[selectedRoleId]} classes={classes} styles={styles} />
      </div >
    );
  }
}

const VistaRoles = withStyles(styles)(_VistaRoles);
export { VistaRoles };
