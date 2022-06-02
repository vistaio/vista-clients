import React from 'react';
import VistaClient from '@vista.io/vista-api-client';
declare const VistaContext: React.Context<{
    secret: string;
    defaultClient: VistaClient;
}>;
declare type VistaProviderProps = {
    secret: string;
    branch: string;
    hostname: string;
    children: React.ReactNode;
};
declare class VistaProvider extends React.Component<VistaProviderProps> {
    render(): JSX.Element;
}
export { VistaContext, VistaProvider, VistaClient };
