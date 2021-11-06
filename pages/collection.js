import Head from 'next/head'
import { Col, Container, Button, Row, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import Layout from './components/Layout'
import Styles from '../styles/Collection.module.css'

export default function Collection() {

    const settings = {
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 500,
        dots: true,
    }

    return (
        <Layout>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <section className={Styles.CollectionSection}>
                <Container fluid>
                   
                    <div className={Styles.CollectionContainer}>
                        <Slider {...settings}>
                        
                            <div className={Styles.Slide}>
                                <div className={Styles.Image} > 
                                            <img  src="./img/JasminePlaysuit2.jpg"></img>
                                </div>
                                <div className={Styles.ContentCollection} >
                                            <h3 className={Styles.CollectionName}>Oasis Collection</h3>
                                            <p className={Styles.Text}>Oasis was our first collections, where we use high stretchy and soft rib knit fabric that make the items  adabptable for  most body types. We decide to create this trendy and elegant item of this collections that will be suitable for any summer vacations, party, cocktail, beach or just casual wear. </p>
                                            <a className="btn">View Collection</a>
                                </div>
                             </div>

                             <div className={Styles.Slide}>
                                <div className={Styles.Image} > 
                                            <img width="30%" src="./img/JasminePlaysuit2.jpg"></img>
                                </div>
                                <div className={Styles.ContentCollection} >
                                            <h3 className={Styles.CollectionName}>Oasis Collection</h3>
                                            <p className={Styles.Text}>Oasis was our first collections, where we use high stretchy and soft rib knit fabric that make the items  adabptable for  most body types. We decide to create this trendy and elegant item of this collections that will be suitable for any summer vacations, party, cocktail, beach or just casual wear. </p>
                                            <a className="btn">View Collection</a>
                                </div>
                             </div>

                        </Slider>
                    </div>
               
                </Container>
            </section>
        </Layout>
    )
}