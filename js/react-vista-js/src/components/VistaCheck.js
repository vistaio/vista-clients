
import React from 'react';

import VistaClient from '@vista.io/vista-api-client';

class VistaCheck extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasChecked: false,
            granted: false,
        }
    }

    componentDidMount = async () => {
        if (!this.state.hasChecked) {
            const vistaClient = new VistaClient(this.props.public_key, this.props.hostname);
            const checkStatus = await vistaClient.users.check(this.props.user_id,
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

            if (checkStatus) {
                this.setState({
                    hasChecked: true,
                    granted: checkStatus.granted,
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
