import {HomeContainer, ProductContainer, ProductContent} from "./styles.ts";
import backgroundHighlight from "../../assets/background-highlight.svg";
import homedHighlight from "../../assets/home-highlight.svg";
import {defaultTheme} from "../../styles/themes/default.ts";
import {Coffee, Package, ShoppingCart, Timer} from "phosphor-react";
import {Product} from "../../components/Product";

export function Home() {
    return (
        <HomeContainer>
            <div className='head'>
                <img src={backgroundHighlight} alt="" className='background-img'/>
                <div className='content'>
                    <div className='texts'>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                        <ProductContent>
                            <div className="item">
                                <div className='wrapper' style={{background: defaultTheme['yellow-dark']}}>
                                    <ShoppingCart
                                        size={16}
                                        weight="fill"
                                        color={defaultTheme['white']}
                                    />
                                </div>

                                Compra simples e segura
                            </div>

                            <div className="item">
                                <div className='wrapper' style={{background: defaultTheme['base-text']}}>
                                    <Package
                                        size={16}
                                        weight="fill"
                                        color={defaultTheme['white']}
                                    />
                                </div>

                                Embalagem mantém o café intacto
                            </div>

                            <div className="item">
                                <div className='wrapper' style={{background: defaultTheme['yellow']}}>
                                    <Timer
                                        size={16}
                                        weight="fill"
                                        color={defaultTheme['white']}
                                    />
                                </div>

                                Entrega rápida e rastreada
                            </div>

                            <div className="item">
                                <div className='wrapper' style={{background: defaultTheme['purple']}}>
                                    <Coffee
                                        size={16}
                                        weight="fill"
                                        color={defaultTheme['white']}
                                    />
                                </div>

                                O café chega fresquinho até você
                            </div>
                        </ProductContent>
                    </div>
                    <img src={homedHighlight} alt=""/>
                </div>
            </div>

            <ProductContainer>
                <h2>Nossos cafés</h2>
                <div className="items">
                    <Product/>
                    <Product/>
                </div>
            </ProductContainer>
        </HomeContainer>
    );
}
