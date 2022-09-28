import { Router } from './Router.jsx'
import { MainLayout } from './layouts/MainLayout.jsx' 
import './sass/main.scss'
export const App = () => {
  return (
    <MainLayout router={ <Router /> } />  
  )
}