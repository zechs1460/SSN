import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Cast extends React.Component {
    render() {
        return (
            <div>
                <h3 className="major">Cast Metal Frames</h3>

                {/*<Img className={styles.leftImg} resolutions={this.props.imageCast1.resolutions} />*/}
                {/*<Img className={styles.rightImg} resolutions={this.props.imageCast2.resolutions} />*/}

                <div className={styles.clear}>
                    <p>
                        The metal framework does not contact the gums. Thus, as the gums resorb,
                        this type of partial does not sink with them and rarely requires relines.
                        Because the teeth are altered by the dentist beforehand, there are fewer
                        limitations in the placement of clasps, and they are less likely to be seen
                        than the wrought wire clasps of the treatment partial. Modern frameworks
                        are cast from an extremely strong alloy called chrome cobalt which can be
                        cast very thin and are much less likely to break than the all plastic variety.
                        They are also much less noticeable to the tongue.
                    </p>
                </div>
                <ul>
                    <li>Vitallium &#xAE; 2000 Metal</li>
                    <li>Dentures come in Economy, Premium, or Custom deals</li>
                    <li>Product of Glidewell</li>
                    <li>In Vita A1 - D4 Shade</li>
                </ul>
                <p>
                    The largest single advantage that cast metal framework partial dentures
                    have over the newer flexible framework partials is that sore spots are almost
                    never an issue since neither the framework, nor the plastic extensions contact
                    the soft oral tissues with any force! Patients who exhibit the symptoms
                    of TMJ, or who are known bruxers are much better off with cast metal partials
                    than with flexible framework partials.
                </p>

                {/*<Img className={styles.leftImg} resolutions={this.props.imageCast3.resolutions} />*/}
                {/*<Img className={styles.rightImg} resolutions={this.props.imageCast4.resolutions} />*/}
            </div>
        )
    }
}
