
import { useContext } from 'react';
import { VistaContext } from '../VistaContext';


const useVistaClient = () => {
  useContext(VistaContext).vistaClient;
}

export default useVistaClient;
