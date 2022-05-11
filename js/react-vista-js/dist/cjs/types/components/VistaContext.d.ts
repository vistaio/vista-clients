import React from 'react';
import VistaClient from '@vista.io/vista-api-client';
declare const VistaContext: React.Context<{
    secret: string;
    vistaClient: typeof VistaClient;
}>;
declare type VistaProviderProps = {
    secret: string;
    children: React.ReactNode;
};
declare class VistaProvider extends React.Component<VistaProviderProps> {
    render(): JSX.Element;
}
export { VistaContext, VistaProvider };
