import React from 'react';

import VistaClient from '@vista.io/vista-api-client';

const VistaContext = React.createContext();

class VistaProvider extends React.Component {
    render() {
        return (
        <VistaContext.Provider
            value={{
                secret: this.props.secret,
                vistaClient: VistaClient,
            }}
        >
            {this.props.children}
        </VistaContext.Provider>);
    }
}

export { VistaContext, VistaProvider };