import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class ML extends React.Component {
    render() {
        return (
            <div>

                <h3 className="major">Mailing Labels</h3>

                <p>Please click the image to print out an RX form. Fill out the RX form and send it with the case.</p>

                <div onClick={() => window.print()}>
                    {/*<Img resolutions={this.props.imageML.resolutions} />*/}
                </div>


            </div>
        )
    }
}
