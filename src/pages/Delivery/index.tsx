import {DeliveryContainer} from "./styles.ts";
import illustration from '../../assets/illustration.svg';
import {CurrencyCircleDollar, MapPin, Timer} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default.ts";

export function Delivery() {
    return (
        <DeliveryContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <div className='info-delivery'>
                <div className='info-box'>
                    <div className="item">
                        <div className='icon-wrapper' style={{background: defaultTheme.purple}}>
                            <MapPin size={16} weight="fill" color={defaultTheme.white} />
                        </div>
                        <p>Entrega em <b>Rua João Daniel Martinelli, 102</b><br/>
                            Farrapos - Porto Alegre, RS</p>
                    </div>

                    <div className="item">
                        <div className='icon-wrapper' style={{background: defaultTheme.yellow}}>
                            <Timer size={16} weight="fill" color={defaultTheme.white} />
                        </div>
                        <p>Previsão de entrega<br/><b>20 min - 30 min</b></p>
                    </div>

                    <div className="item">
                        <div className='icon-wrapper' style={{background: defaultTheme['yellow-dark']}}>
                            <CurrencyCircleDollar size={16} weight="fill" color={defaultTheme.white} />
                        </div>
                        <p>Pagamento na entrega
                            <br/><b> Cartão de Crédito</b></p>
                    </div>
                </div>
                <img src={illustration} alt=""/>
            </div>
        </DeliveryContainer>
    );
}

