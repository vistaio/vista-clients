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
  allRoles: Role[],
  label?: string,
  userRoles: string[],
  grantRole: (grantRoleId: string) => void,
  revokeRole: (revokeRoleId: string) => void,
  className?: string,
  style?: React.CSSProperties,
}

function UserRoleGrantSelect(props: UserRoleGrantSelectProps) {
  const { label, userRoles, allRoles, className, style, grantRole, revokeRole } = props;

  return (
    <FormControl
      sx={{ minWidth: '200px' }}
    >
      <InputLabel>{label || ''}</InputLabel>
      <Select
        multiple
        value={userRoles}
        onChange={(event) => {
          const updatedRoleIds = event.target.value as string[];

          // role revoked
          if (updatedRoleIds.length < userRoles.length) {
            const updatedSet = new Set(updatedRoleIds);
            const revokedRoleId = userRoles.find((r) => !updatedSet.has(r));

            if (revokedRoleId) {
              revokeRole(revokedRoleId);
            }
          } else { // role granted
            const userRolesSet = new Set(userRoles);
            const grantedRoleId = updatedRoleIds.find((r) => !userRolesSet.has(r));

            if (grantedRoleId) {
              grantRole(grantedRoleId);
            }
          }
        }}
        label={label || ''}
        className={className}
        style={style || {}}>
        {
          allRoles.map((role) => {
            return <MenuItem key={role.id} value={role.id}> {role.id} </MenuItem>;
          })
        }
      </Select>
    </FormControl>
  );
}

type GrantChangeFn = (userId: string, roleId: string, orgId: string, branch: string) => Promise<unknown>;

interface VistaGrantProps extends WithStyles<typeof styles> {
  resourceId: string,
  resourceType: string,
  hostname: string,
  branch: string,
  orgId: string,
  onGrant: GrantChangeFn,
  onRevoke: GrantChangeFn,
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
  usersetIdToGrants: { [id: string]: Grant[] },
  roles: Role[],
  selectedUserId: string,
  selectedRoleIds: string[],
  userIds: string[],
}

class _VistaGrant extends React.Component<VistaGrantProps, VistaGrantState> {
  static contextType = VistaContext;
  declare context: React.ContextType<typeof VistaContext>;

  static defaultProps = {
    styles: {},
    title: "Add Teammates",
  }

  constructor(props: VistaGrantProps, context?: any) { // eslint-disable-line
    super(props);

    this.state = {
      client: context.defaultClient as VistaClient,
      selectedUserId: '',
      selectedRoleIds: [],
      roles: [],
      usersetIdToGrants: {},
      userIds: [],
    };
  }

  async componentDidMount() {
    const users = await this.state.client.withBranch(this.props.branch).users.list(this.props.orgId);
    const userIds = users.map((u: { id: string }) => u.id);
    const roles = await this.state.client.roles.list(this.props.orgId);
    const allGrants: Grant[] = await this.state.client.grants.listUnflattened(null, null, null, null, null, null, this.props.orgId);
    const usersetIdToGrants: { [id: string]: Grant[] } = {};
    allGrants.forEach((grant) => {
      if (!usersetIdToGrants[grant.userset_id]) {
        usersetIdToGrants[grant.userset_id] = [];
      }

      if (grant.relation_type === 'ROLE') {
        usersetIdToGrants[grant.userset_id].push(grant);
      }
    });

    this.setState({
      userIds,
      roles,
      usersetIdToGrants,
    });
  }

  onGrantChange = async (userId: string, roleId: string, changeFn: GrantChangeFn) => {
    const { branch, orgId, onGrant } = this.props;
    if (!onGrant) {
      return;
    }

    const success = await changeFn(userId, roleId, orgId, branch);

    if (success) {
      const allGrants: Grant[] = await this.state.client.grants.listUnflattened(null, null, null, null, null, null, orgId);
      const usersetIdToGrants: { [id: string]: Grant[] } = {};
      allGrants.forEach((grant) => {
        if (!usersetIdToGrants[grant.userset_id]) {
          usersetIdToGrants[grant.userset_id] = [];
        }

        if (grant.relation_type === 'ROLE') {
          usersetIdToGrants[grant.userset_id].push(grant);
        }
      });

      this.setState({
        usersetIdToGrants,
      });
    }
    return success;
  }

  render() {
    const { classes, styles, userIdMap, title, onGrant, onRevoke } = this.props;
    const { selectedUserId, selectedRoleIds, roles, usersetIdToGrants, userIds } = this.state;

    return (
      <div className={classes.container} style={styles.container}>
        <h1 className={classes.title} style={styles.title}>{title}</h1>
        <div className={classes.newGrantRow} style={styles.newGrantRow}>
          <div className={classes.userSelect} style={styles.userSelect}>
            <FormControl sx={{ 'width': '100%' }}>
              <InputLabel>Select User</InputLabel>
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
                  userIdMap ?
                    Object.entries(userIdMap).map(([id, name]) => {
                      return <MenuItem key={id} value={id}> {name}</MenuItem>;
                    }) :
                    userIds.map((id: string) => {
                      return <MenuItem key={id} value={id}>{id}</MenuItem>
                    })
                }
              </Select>
            </FormControl>
          </div>

          <div className={classes.roleSelect} style={styles.roleSelect}>
            <UserRoleGrantSelect
              label="Select Role"
              userRoles={selectedRoleIds}
              grantRole={(grantedRoleId) => {
                selectedRoleIds.push(grantedRoleId);
                this.setState({
                  selectedRoleIds,
                });
              }}
              revokeRole={(revokedRoleId) => {
                this.setState({
                  selectedRoleIds: selectedRoleIds.filter((id) => id !== revokedRoleId),
                });
              }}
              allRoles={selectedUserId.length ? roles.filter((role) => !usersetIdToGrants[selectedUserId].map((g) => g.relation).includes(role.id)) : roles} />
          </div>

          <Button
            className={classes.grantButton}
            style={styles.grantButton}
            variant="contained"
            disabled={!(selectedUserId.length && selectedRoleIds.length)}
            onClick={async () => {
              for (const roleId of selectedRoleIds) {
                await this.onGrantChange(selectedUserId, roleId, onGrant);
              }
            }}>
            Grant
          </Button>
        </div>
        <div className={classes.grantList} style={styles.grantList}>
          <List>
            {
              Object.keys(usersetIdToGrants).map((usersetId: string) => {
                const grants = usersetIdToGrants[usersetId];
                const roleIds = grants.map((g) => g.relation);
                return (
                  <ListItem
                    key={usersetId}
                    className={classes.grantRow}
                    style={styles.grantRow}
                    secondaryAction={
                      <UserRoleGrantSelect
                        userRoles={roleIds}
                        grantRole={(grantedRoleId) => {
                          grants.push({
                            userId: usersetId,
                            relation: grantedRoleId,
                            userset_id: usersetId,
                            relation_type: 'ROLE',
                          })

                          usersetIdToGrants[usersetId] = grants;

                          this.onGrantChange(usersetId, grantedRoleId, onGrant);
                          this.setState({
                            usersetIdToGrants,
                          })
                        }}
                        revokeRole={(revokedRoleId) => {
                          const newGrants = grants.filter((g) => g.relation !== revokedRoleId);
                          usersetIdToGrants[usersetId] = newGrants;

                          this.onGrantChange(usersetId, revokedRoleId, onRevoke);
                          this.setState({
                            usersetIdToGrants,
                          })
                        }}
                        className={classes.grantRoleSelect}
                        style={styles.grantRoleSelect}
                        allRoles={roles} />
                    }>
                    <ListItemText primary={usersetId} />
                  </ListItem>
                );
              })
            }
          </List>
        </div>
      </div >
    );
  }
}

const VistaGrant = withStyles(styles)(_VistaGrant);
export { VistaGrant };
