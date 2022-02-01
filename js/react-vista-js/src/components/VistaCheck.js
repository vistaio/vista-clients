
import React from 'react';

import { VistaContext } from './VistaContext';

class VistaCheck extends React.Component {
    static contextType = VistaContext;

    constructor(props) {
        super(props);

        this.state = {
            hasChecked: false,
            granted: false,
        }
    }

    componentDidMount = async () => {
        if (!this.state.hasChecked) {
            const vistaClient = new this.context.vistaClient(this.context.secret, this.props.branch, this.props.hostname);
            const grants = await vistaClient.users.check(this.props.user_id,
                this.props.action,
                this.props.resource_type,
                this.props.resource_id,
                this.props.branch).catch((err) => {
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
        return (<React.Fragment>
            {this.renderedComponent()}
        </React.Fragment>);
    }
}

export { VistaCheck };
