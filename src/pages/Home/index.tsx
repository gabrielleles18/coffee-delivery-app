import {HomeContainer, ProductContainer, ProductContent} from "./styles.ts";
import backgroundHighlight from "../../assets/background-highlight.svg";
import homedHighlight from "../../assets/home-highlight.svg";
import {defaultTheme} from "../../styles/themes/default.ts";
import {Coffee, Package, ShoppingCart, Timer} from "phosphor-react";
import {Product} from "../../components/Product";

export function Home() {

    const products = [{
        id: 1,
        name: 'Mocaccino',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 5.90,
        tags: ['coado', 'forte'],
        image: 'https://source.unsplash.com/random/300x300?coffee'
    }, {
        id: 2,
        name: 'Café do dia',
        description: 'Café fresquinho coado na hora',
        price: 0.60,
        tags: ['coado', 'forte'],
        image: 'https://source.unsplash.com/random/300x300?coffee'
    }, {
        id: 3,
        name: 'Café do dia',
        description: 'Café fresquinho coado na hora',
        price: 5.01,
        tags: ['Tradicional'],
        image: 'https://source.unsplash.com/random/300x300?coffee'
    }, {
        id: 4,
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 4.10,
        tags: ['especial'],
        image: 'https://source.unsplash.com/random/300x300?coffee'
    }];

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
                    {products?.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </ProductContainer>
        </HomeContainer>
    );
}
