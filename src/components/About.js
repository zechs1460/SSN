import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h3 className="major">About Us</h3>

                <div className={styles.clear}>
                    {/*<Img className={styles.leftImg} resolutions={this.props.imageAbout1.resolutions} />*/}
                    <p>
                        Claudio Dental Laboratory (formally known as Collins Dental Laboratory)
                        is owned and managed by Pedro Claudio Jr. CDT. Established in 1948 by Thomas
                        Edwards Collins Sr. CDT, the legacy of the founder continues with insistence
                        on quality, affordability, prompt and friendly service.
                    </p>
                </div>

                <div className={styles.clear}>
                    {/*<Img className={styles.rightImg} resolutions={this.props.imageAbout2.resolutions} />*/}
                    <p>
                        Pedro&#39;s son Joseph Claudio joins us here at CDL as the Director of the
                        Crown and Bridge department. He received his Bachelors in Computer Information
                        Systems in 2013, and has been studying Crown and Bridge Dental Technology
                        ever since. Having undergone multiple training workshops and seminars, he
                        is ready to take full advantage of the inLab software to create the most
                        computer accurate and efficient restorations available.
                    </p>
                </div>

                <div className={styles.clear}>
                    {/*<Img className={styles.leftImg} resolutions={this.props.imageAbout3.resolutions} />*/}
                    <p>
                        <strong>
                            We firmly believe that communication between the dentist, patient,
                            and the specialist involved is key in having happy patients.
                        </strong>
                    </p>
                </div>

                <div className={styles.clear}>
                    {/*<Img className={styles.rightImg} resolutions={this.props.imageAbout4.resolutions} />*/}
                    <p>
                        We are a state of the art laboratory, certified by South Carolina State
                        Board of Dentistry, Southeastern Conference of Dental Laboratories and the
                        Toombs Montgomery Chambers of Commerce. Pedro Claudio CDT is also a proud
                        member of the Watermelon Creek Baptist Church.
                    </p>
                </div>
            </div>
        )
    }
}
