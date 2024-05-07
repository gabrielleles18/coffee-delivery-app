import {Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {Checkout} from "./pages/Checkout";
import {Delivery} from "./pages/Delivery";
import {FormCartContext} from "./contexts/FormCartContext.tsx";

export function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<DefaultLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route
                    path="/checkout"
                    element={
                        <FormCartContext>
                            <Checkout/>
                        </FormCartContext>
                    }
                />
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Route>
        </Routes>
    );
}
