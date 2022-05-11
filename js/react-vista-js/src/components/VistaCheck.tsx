
import React from 'react';

import { VistaContext } from './VistaContext';


interface VistaCheckProps {
    action: string,
    branch: string,
    children: null,
    denyComponent: React.Component,
    handleError: (err: Error) => void,
    hostname: string,
    orgId: string,
    resourceId: string,
    resourceType: string,
    userId: string,
}

interface VistaCheckState {
    hasChecked: boolean,
    granted: boolean,
}

class VistaCheck extends React.Component<VistaCheckProps, VistaCheckState> {
    static contextType = VistaContext;
    declare context: React.ContextType<typeof VistaContext>;

    state = {
        hasChecked: false,
        granted: false,
    }

    componentDidMount = async () => {
        if (!this.state.hasChecked) {
            const vistaClient = new this.context.vistaClient(this.context.secret, this.props.branch, this.props.hostname);
            const grants = await vistaClient.users.check(this.props.userId,
                this.props.action,
                this.props.resourceId,
                this.props.resourceType,
                this.props.branch).catch((err: Error) => {
                    if (this.props.handleError) {
                        this.props.handleError(err);
                    } else {
                        console.log(err);
                    }
                });

            const granted = grants.length > 0;
            if (granted) {
                this.setState({
                    hasChecked: true,
                    granted,
                });
            }
        }
    }

    renderedComponent() {
        if (this.state.hasChecked && this.state.granted) {
            return this.props.children;
        } else {
            return this.props.denyComponent ? this.props.denyComponent : null;
        }
    }

    render() {
        return (
            <>
                {this.renderedComponent()}
            </>
        );
    }
}

export { VistaCheck };
