import React from 'react';
import { VistaContext } from './VistaContext';
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
        vistaClient: typeof import("@vista.io/vista-api-client").default;
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
export { VistaCheck };
