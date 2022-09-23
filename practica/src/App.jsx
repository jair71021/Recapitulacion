import {AppRouter }from './AppRouter' 
import { MainLayouts } from './layouts/MainLayouts'
import './sass/app.scss'

export const App = () =>{
  return (
    <>
      <MainLayouts contenido={<AppRouter />} />
    </>
  )
}