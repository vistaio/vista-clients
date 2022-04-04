import React from 'react';

import { withStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DataTable from 'react-data-table-component';

import { VistaContext } from './VistaContext';


const styles = {
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

function PermissionsTableRow(props) {
  const { row, classes, styles, text } = props;
  return (
    <p
      className={row.inheritedFrom ? classes.permissionsTableRowInherited : classes.permissionsTableRow}
      style={row.inheritedFrom ? styles.permissionsTableRowInherited : styles.permissionsTableRow}
    >{text}</p>
  );
}

function PermissionsTable(props) {
  const { classes, styles, title } = props;
  return (
    <div className={classes.permissionsTable}>
      <DataTable
        title={title}
        columns={[
          {
            name: 'Resource Type',
            selector: 'resourceType',
            sortable: true,
            cell: row => <PermissionsTableRow text={row.resourceType} classes={classes} styles={styles} row={row} />
          },
          {
            name: 'Attribute',
            selector: 'attribute',
            sortable: true,
            right: true,
            cell: row => <PermissionsTableRow text={row.attribute} classes={classes} styles={styles} row={row} />
          },
          {
            name: 'Actions',
            selector: 'actions',
            sortable: true,
            right: true,
            cell: row => <PermissionsTableRow text={row.actions.join(', ')} classes={classes} styles={styles} row={row} />
          },
          {
            name: 'Inherited From',
            selector: 'inheritedFrom',
            sortable: true,
            right: true,
            cell: row => <PermissionsTableRow text={row.inheritedRow} classes={classes} styles={styles} row={row} />
          },
        ]}
        data={(() => {
          const { rolesById, role } = props;

          if (!role) {
            return [];
          }

          // add permissions for parent roles
          const tableKeys = {};

          const parentIds = [...role.parent_roles];
          const seen = new Set();
          const tablePermissions = [];
          while (parentIds.length) {
            const parentId = parentIds.pop(0);
            if (seen.has(parentId)) {
              continue
            }

            seen.add(parentId);

            const parentRole = rolesById[parentId];
            for (const rt in parentRole.resource_types_to_attributes_to_actions) {
              for (const attribute in parentRole.resource_types_to_attributes_to_actions[rt]) {
                const actions = parentRole.resource_types_to_attributes_to_actions[rt][attribute];

                const key = `${rt}_${attribute}`;
                if (tableKeys[key]) {
                  return
                }

                tablePermissions.push({
                  id: key,
                  actions: actions,
                  resourceType: rt,
                  attribute: attribute,
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
      >
      </DataTable>
    </div >
  );
}

class _VistaRoles extends React.Component {
  static contextType = VistaContext;
  static defaultProps = {
    styles: {},
  }

  state = {
    rolesById: {},
    selectedRoleId: '',
  }

  async componentDidMount() {
    const client = new this.context.vistaClient(this.context.secret, this.props.branch, this.props.hostname);
    const roles = await client.roles.list(this.props.orgId);
    const rolesById = {};
    roles.forEach((role) => {
      rolesById[role.id] = role;
    });

    const selectedRoleId = roles.length ? roles[0].id : '';
    this.setState({
      client,
      rolesById,
      selectedRoleId,
    });
  }

  render() {
    const { classes, styles } = this.props;
    const { rolesById, selectedRoleId } = this.state;

    return (
      <div className={classes.container} style={styles.container}>
        <List className={classes.rolesList} style={styles.rolesList} disablePadding={true}>
          {
            Object.values(rolesById).map((role) => {
              return (
                <ListItem
                  key={role.id}
                  disablePadding
                  className={classes.roleListRow}
                  style={styles.roleListRow}>
                  <ListItemButton
                    className={classes.rolesListRow}
                    style={styles.rolesListRow}
                    selected={selectedRoleId === role.id}
                    disableRipple
                    onClick={() => this.setState({ selectedRoleId: role.id })}>
                    <ListItemText primary={role.id} />
                  </ListItemButton>
                </ListItem>
              );
            })
          }
        </List>
        <PermissionsTable title={`${selectedRoleId} Permissions`} rolesById={rolesById} role={rolesById[selectedRoleId]} classes={classes} styles={styles} />
      </div>
    );
  }
}

const VistaRoles = withStyles(styles)(_VistaRoles);
export { VistaRoles };
