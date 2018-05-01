import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class RX extends React.Component {
    render() {
        return (
            <div>

                <h3 className="major">RX Forms</h3>

                <p>Please click the image to print out an RX form. Fill out the RX form and send it with the case.</p>

                <div onClick={() => window.print()}>
                    {/*<Img resolutions={this.props.imageRX.resolutions} />*/}
                </div>


            </div>
        )
    }
}
