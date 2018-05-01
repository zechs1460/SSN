import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class CrownAndBridge extends React.Component {
    render() {
        return (
            <div>
                <h3 className="major">Crown & Bridge</h3>

                <div className={styles.clear}>
                    <p>
                        <strong>Our In-house milling system allows us to create, mill, finish, and return IPS e.max CAD crowns in 3 days, and Zirconia crowns in 5 days. </strong>
                        Our partnership with DENTSPLY allows us to offer a wide variety of services normally to difficult to obtain.
                    </p>
                </div>

                <div className={styles.flexContainer}>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageCrownAndBridge5.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>Crown & Bridge</strong>
                                <ul>
                                    <li>We accept digital files!</li>
                                    <li>All products finished under microscope</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageCrownAndBridge2.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>E.max Crowns</strong>
                                <ul>
                                    <li>IPS e.max CAD Full-Contour</li>
                                    <li>CAD/CAM design and milling</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageCrownAndBridge4.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>Zirconia Crowns</strong>
                                <ul>
                                    <li>BruxZir, ULTRA, InCoris TZI</li>
                                    <li>In Vita A1 - D4 Shade</li>
                                    <li>Strength 1450 Mpa</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                </div>

                <p>
                    <a href="https://www.dentsplysirona.com/en-us">DENTSPLY Prident</a> is an ISO 9001
                    certified laboratory and a wholly owned subsidiary of DENTSPLY International,
                    Inc. DENTSPLY Prident guarantees that the materials used in the finished
                    medical device produced at DENTSPLY Prident are cleared by the FDA and are
                    legally distributed in the US.
                </p>
                <p>
                    The Turn-around Time is less than 15 days for the following:

                    <ul>
                        <li>PFM</li>
                        <li>Captek &#x2122; </li>
                        <li>All-Ceramic &#xAE;</li>
                        <li>Radica </li>
                        <li>Cercon &#xAE; </li>
                    </ul>
                </p>

                {/*<Img className={styles.leftImg} resolutions={this.props.imageCrownAndBridge1.resolutions} />*/}
                {/*<Img className={styles.rightImg} resolutions={this.props.imageCrownAndBridge3.resolutions} />*/}
            </div>
        )
    }
}
