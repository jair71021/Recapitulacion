import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { EditPage } from "./pages/EditPage";
import { HomePage } from "./pages/Homepage";
export const AppRouter = ()=>{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/create" element={<CreatePage />}></Route>
                    <Route path="/edit/:waifu" element={<EditPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>

    );
};