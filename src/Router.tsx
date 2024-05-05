import {Routes, Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {DefaultLayout} from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Route>
        </Routes>
    );
}
