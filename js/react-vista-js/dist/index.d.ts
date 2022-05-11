import * as VistaClient from '@vista.io/vista-api-client';
import VistaClient__default from '@vista.io/vista-api-client';
import React from 'react';

declare const VistaContext: React.Context<{
    secret: string;
    vistaClient: typeof VistaClient__default;
}>;
declare type VistaProviderProps = {
    secret: string;
    children: React.ReactNode;
};
declare class VistaProvider extends React.Component<VistaProviderProps> {
    render(): JSX.Element;
}

interface VistaCheckProps {
    action: string;
    branch: string;
    children: null;
    denyComponent: React.Component;
    handleError: (err: Error) => void;
    hostname: string;
    orgId: string;
    resourceId: string;
    resourceType: string;
    userId: string;
}
interface VistaCheckState {
    hasChecked: boolean;
    granted: boolean;
}
declare class VistaCheck extends React.Component<VistaCheckProps, VistaCheckState> {
    static contextType: React.Context<{
        secret: string;
        vistaClient: typeof VistaClient.default;
    }>;
    context: React.ContextType<typeof VistaContext>;
    state: {
        hasChecked: boolean;
        granted: boolean;
    };
    componentDidMount: () => Promise<void>;
    renderedComponent(): React.Component<{}, {}, any> | null;
    render(): JSX.Element;
}

declare const VistaGrant: React.JSXElementConstructor<any>;

declare const VistaRoles: React.JSXElementConstructor<any>;

export { VistaCheck, VistaContext, VistaGrant, VistaProvider, VistaRoles };
