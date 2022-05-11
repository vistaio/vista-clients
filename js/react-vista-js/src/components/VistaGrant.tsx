import React from 'react';

import { withStyles, Styles, WithStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import VistaClient from '@vista.io/vista-api-client';

import { VistaContext } from './VistaContext';


interface GrantStyles {
  container: React.CSSProperties,
  title: React.CSSProperties
  newGrantRow: React.CSSProperties,
  userSelect: React.CSSProperties,
  roleSelect: React.CSSProperties,
  grantButton: React.CSSProperties,
  grantRow: React.CSSProperties,
  grantList: React.CSSProperties,
  grantRoleSelect: React.CSSProperties,
}

const styles: Styles<any, any> = { // eslint-disable-line
  container: {
    height: '500px',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',
    padding: '50px',
    marginBottom: '50px',
  },
  title: {
    marginTop: '0px',
  },
  newGrantRow: {
    display: 'flex',
    marginBottom: '20px',
  },
  userSelect: {
    flexGrow: '1',
    marginRight: '10px',
  },
  roleSelect: {
    marginRight: '10px',
  },
  grantButton: {},
  grantRow: {
    height: '75px'
  },
  grantList: {
    flexGrow: '1',
    width: '100%',
    padding: '0',
    border: 'solid',
    borderColor: 'lightgray',
    borderWidth: '1px',
    overflow: 'scroll',
    margin: '0',
  },
  grantRoleSelect: {},
};

interface Role {
  id: string,
}

interface UserRoleGrantSelectProps extends WithStyles<typeof styles> {
  roles: Role[],
  label?: string,
  value: string,
  onChange: (value: string) => void,
  className?: string,
  style?: React.CSSProperties,
}

function UserRoleGrantSelect(props: UserRoleGrantSelectProps) {
  const { label, value, roles, onChange, className, style } = props;
  return (
    <FormControl
      sx={{ minWidth: '200px' }}
    >
      <InputLabel>{label || ''}</InputLabel>
      <Select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        label={label || ''}
        className={className}
        style={style || {}}>
        {
          roles.map((role) => {
            return <MenuItem key={role.id} value={role.id}> {role.id} </MenuItem>;
          })
        }
      </Select>
    </FormControl>
  );
}

interface VistaGrantProps extends WithStyles<typeof styles> {
  resourceId: string,
  resourceType: string,
  hostname: string,
  branch: string,
  orgId: string,
  onGrant: (body: unknown) => Promise<unknown>,
  onGrantError: (err: Error) => void,
  styles: GrantStyles,
  userIdMap: { [userId: string]: string },
}

interface Grant {
  userId: string,
  relation: string,
  userset_id: string,
  relation_type: 'ROLE' | 'ACTION',
}

interface VistaGrantState {
  client: VistaClient,
  grants: Grant[],
  roles: Role[],
  selectedUserId: string,
  selectedRoleId: string,
}

class _VistaGrant extends React.Component<VistaGrantProps, VistaGrantState> {
  static contextType = VistaContext;
  declare context: React.ContextType<typeof VistaContext>;

  static defaultProps = {
    styles: {},
  }

  constructor(props: VistaGrantProps, context?: any) { // eslint-disable-line
    super(props);

    this.state = {
      client: new context.vistaClient(context.secret, props.branch, props.hostname),
      selectedUserId: '',
      selectedRoleId: '',
      roles: [],
      grants: [],
    };
  }

  async componentDidMount() {
    const roles = await this.state.client.roles.list(this.props.orgId);
    const allGrants = await this.state.client.grants.listUnflattened(this.props.orgId);
    const grants = allGrants.filter((g: Grant) => g.relation_type === 'ROLE');

    this.setState({
      roles,
      grants,
    });
  }

  grant = async (userId: string, roleId: string) => {
    const { resourceId, resourceType, branch, orgId, onGrant, onGrantError } = this.props;
    if (!onGrant) {
      return;
    }

    // grant
    const grantRequest = {
      id: userId,
      relation: roleId,
      resource_id: resourceId,
      resource_type: resourceType,
      branch: branch,
    };

    const success = await onGrant(grantRequest).catch((err: Error) => {
      if (onGrantError) {
        return onGrantError(err);
      }

      console.log(err);
    });

    if (success) {
      const allGrants = await this.state.client.grants.listUnflattened(orgId);
      const grants = allGrants.filter((g: Grant) => g.relation_type === 'ROLE');
      this.setState({
        grants,
      });
    }
    return success;
  }

  render() {
    const { classes, styles, userIdMap } = this.props;
    const { selectedUserId, selectedRoleId, roles, grants } = this.state;

    return (
      <div className={classes.container} style={styles.container}>
        <h1 className={classes.title} style={styles.title}> Add Teammates </h1>
        <div className={classes.newGrantRow} style={styles.newGrantRow}>
          <div className={classes.userSelect} style={styles.userSelect}>
            <FormControl sx={{ 'width': '100%' }}>
              <InputLabel>Select User </InputLabel>
              <Select
                value={selectedUserId}
                onChange={(event) => {
                  this.setState({
                    selectedUserId: event.target.value,
                  })
                }
                }
                label="Select User"
              >
                {
                  Object.entries(userIdMap).map(([id, name]) => {
                    return <MenuItem key={id} value={id}> {name} </MenuItem>;
                  })
                }
              </Select>
            </FormControl>
          </div>

          <div className={classes.roleSelect} style={styles.roleSelect}>
            <UserRoleGrantSelect
              label="Select Role"
              value={selectedRoleId}
              onChange={(rid) => {
                this.setState({
                  selectedRoleId: rid,
                })
              }}
              roles={roles} />
          </div>

          <Button
            className={classes.grantButton}
            style={styles.grantButton}
            variant="contained"
            disabled={!(selectedUserId.length && selectedRoleId.length)}
            onClick={async () => {
              const success = await this.grant(selectedUserId, selectedRoleId);
              if (success) {
                this.setState({
                  selectedUserId: '',
                  selectedRoleId: '',
                });
              }
            }}>
            Grant
          </Button>
        </div>
        <div className={classes.grantList} style={styles.grantList}>
          <List>
            {
              grants.map((grant) => {
                return (
                  <ListItem
                    key={`${grant.userset_id}_${grant.relation}`
                    }
                    className={classes.grantRow}
                    style={styles.grantRow}
                    secondaryAction={
                      <UserRoleGrantSelect
                        value={grant.relation}
                        onChange={async (rid) => {
                          await this.grant(grant.userset_id, rid);
                        }}
                        className={classes.grantRoleSelect}
                        style={styles.grantRoleSelect}
                        roles={roles} />
                    }>
                    <ListItemText primary={grant.userset_id} />
                  </ListItem>
                );
              })
            }
          </List>
        </div>
      </div>
    );
  }
}

const VistaGrant = withStyles(styles)(_VistaGrant);
export { VistaGrant };
