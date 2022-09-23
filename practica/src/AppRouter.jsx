import {BrowserRouter,Routes, Route} from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { CreatePage } from "./pages/CreatePage"
export const AppRouter = () =>{
    return(

        <>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={< Homepage/>} />
                    <Route  path="/create" element={<CreatePage />} />
                </Routes>
            </BrowserRouter>
        </> 
        )         
    
    
    
}