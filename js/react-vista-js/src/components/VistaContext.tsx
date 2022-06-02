import React from 'react';

import VistaClient from '@vista.io/vista-api-client';


const VistaContext = React.createContext({
    secret: '',
    defaultClient: new VistaClient('', '', ''),
});

type VistaProviderProps = {
    secret: string,
    branch: string,
    hostname: string,
    children: React.ReactNode,
}

class VistaProvider extends React.Component<VistaProviderProps> {
    render() {
        const { secret, branch, hostname } = this.props;
        const client = new VistaClient(secret, branch, hostname);
        return (
            <VistaContext.Provider
                value={{
                    secret: this.props.secret,
                    defaultClient: client,
                }}>
                {this.props.children}
            </VistaContext.Provider >
        );
    }
}

export { VistaContext, VistaProvider, VistaClient };