import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Other extends React.Component {
    render() {
        return (
            <div>
                <h3 className="major">Other Products</h3>

                <div className={styles.flexContainer}>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther1.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>Abutments</strong>
                                <ul>
                                    <li>Patient-Specific abutments</li>
                                    <li>For perfect fitting, everytime</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther2.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>Nightguards</strong>
                                <ul>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther3.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>Wax patterns</strong>
                                <ul>
                                    <li>X</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther4.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>Study Models</strong>
                                <ul>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther5.resolutions} />*/}
                        <div className={styles.clear}>
                            <p>
                                <strong>PFMs</strong>
                                <ul>
                                    <li>X</li>
                                    <li>X</li>
                                    <li>X</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                </div>

                <p>And anything else you need, <strong>just ask!</strong></p>
            </div>
        )
    }
}
