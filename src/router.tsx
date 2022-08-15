import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/main";
import {NotFoundPage} from "./pages/not-found";

export const Router = () => {
    return (
        <Routes>
            <Route path={"/"}>
                <Route index element={<MainPage/>}/>
            </Route>
            <Route path={"/*"} element={<NotFoundPage/>}/>
        </Routes>
    );
};
