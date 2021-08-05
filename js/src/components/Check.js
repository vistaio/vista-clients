import {React} from 'react';

import Config from '../config/config.js';
import VistaClient from '../index.js';

class VistaCheckProvider extends React.Component {
    constructor() {
        this.state = {

        }
    }

    checkPermission() {
        const vistaClient = new VistaClient(this.props.secret);
        const checkStatus = vistaClient.users.check(this.props.user_id, this.props.action, this.props.resource_type, this.props.resource_id, this.props.environment);

        return checkStatus;
    }
}

