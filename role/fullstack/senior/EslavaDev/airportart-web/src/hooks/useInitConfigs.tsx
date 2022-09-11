import {useState} from 'react';
import { ApiProvider } from '../providers/apiProvider/apiProvider';


export const useInitConfigs = () => {
  const [isConfigReady, setIsConfigReady] = useState(false);

  const init = () => {
    ApiProvider.getInstance().initProvider();

    setIsConfigReady(true);
  };


  return {isConfigReady, init};
};
