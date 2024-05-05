import {Header} from "../../components/Header";
import {Outlet} from "react-router-dom";

import {LayoutContainer} from "./styles.ts";
import {Cart} from "../../components/Cart";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header/>
            <Cart/>
            <Outlet/>
        </LayoutContainer>
    );
}
