import {HeaderContainer} from './styles';
import logo from '../../assets/logo.svg';
import {Cart} from "../Cart";
import {MapPin} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default.ts";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt=""/>
            <div className='actions'>
                <div className='location'>
                    <MapPin
                        size={20}
                        weight="fill"
                        color={defaultTheme.purple}
                    />
                    Porto Alegre, RS
                </div>
                <Cart/>
            </div>
        </HeaderContainer>
    );
}
