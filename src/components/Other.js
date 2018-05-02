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
                            <h4>Abutments</h4>
                            <ul>
                                <li>Patient-Specific abutments</li>
                                <li>For perfect fitting, everytime</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther2.resolutions} />*/}
                        <div className={styles.clear}>
                            <h4>Nightguards</h4>
                            <ul>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther3.resolutions} />*/}
                        <div className={styles.clear}>
                            <h4>Wax patterns</h4>
                            <ul>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther4.resolutions} />*/}
                        <div className={styles.clear}>
                            <h4>Study Models</h4>
                            <ul>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.flexItems}>
                        {/*<Img className={styles.leftImg} resolutions={this.props.imageOther5.resolutions} />*/}
                        <div className={styles.clear}>
                            <h4>PFMs</h4>
                            <ul>
                                <li>X</li>
                                <li>X</li>
                                <li>X</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <p>And anything else you need, <strong>just ask!</strong></p>
            </div>
        )
    }
}
