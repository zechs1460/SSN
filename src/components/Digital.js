import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Digital extends React.Component {
    render() {
        return (
            <div>
                <h3 className="major">Digital</h3>

                <p>
                    With our digital equipment and in-house milling system, we can efficiently
                    and accurately create fully anatomical crowns and bridges as well as
                    veneers, and inlays/onlays.
                </p>

                <div className={styles.flexContainer}>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital1.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>Digital Scanning</strong>
                            <ul>
                                <li>Precise and efficient scans make your ending products accurate</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital2.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>Natural Esthetics</strong>
                            <ul>
                                <li>Beautiful and Natural look</li>
                                <li>Designs based off surrounding dentition</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital3.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>Virtual Try-In</strong>
                            <ul>
                                <li>3D-generated Patient Pictures allows facial features to be taken into account</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital4.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>Virtual Articulation</strong>
                            <ul>
                                <li>Virtual Articulation allows us to easily determine contact surfaces</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital5.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>Inlay/Onlay and Veneers</strong>
                            <ul>
                                <li> Anything you need, we can make!</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital6.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>Crown and Bridge</strong>
                            <ul>
                                <li>Full Contour or copings</li>
                                <li>IPS e.max, inCoris TZI/ZI (BruxZir), Lava, VITABLOCS, and many more!</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital7.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>In-House Milling</strong>
                            <ul>
                                <li>We mill it all right here so you get your case back ASAP!</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageDigital8.resolutions} />*/}
                        <div className={styles.clear}>
                            <strong>CEREC Connect</strong>
                            <ul>
                                <li>Finally go model free and send us digital scans for the best results!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
