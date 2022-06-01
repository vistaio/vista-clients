import React from 'react';

import VistaClient from '@vista.io/vista-api-client';


const VistaContext = React.createContext({
    secret: '',
    vistaClient: VistaClient,
});

type VistaProviderProps = {
    secret: string,
    children: React.ReactNode,
}

class VistaProvider extends React.Component<VistaProviderProps> {
    render() {
        return (
            <VistaContext.Provider
                value={{
                    secret: this.props.secret,
                    vistaClient: VistaClient,
                }}>
                {this.props.children}
            </VistaContext.Provider >
        );
    }
}

export { VistaContext, VistaProvider, VistaClient };