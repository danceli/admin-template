import { BrowserRouter } from 'react-router-dom';
import Routes from './modules/index';


const Router: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}


export default Router;