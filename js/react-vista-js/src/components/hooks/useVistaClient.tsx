
import { useContext } from 'react';
import { VistaClient, VistaContext } from '../VistaContext';


export const useVistaClient = (): VistaClient => {
  return useContext(VistaContext).defaultClient;
};
