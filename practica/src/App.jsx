import { MainLayout } from './layout/layouts';
import './sass/app.scss';
import { AppRouter } from './Router';
export const App = ()=>{
  return (
      <>
      <MainLayout contenido={<AppRouter/>}/>
      </>
  );
};