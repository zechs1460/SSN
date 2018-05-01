import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'

export default class Main extends React.Component {
  render() {
    const close = <div className="close" onClick={() => {
      this.props.onCloseArticle()
    }}></div>
    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        {/* -------------------------------------------------------------------------- */}
        <article id="Dentures" className={`${this.props.article === 'Dentures' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div>  
        <h3 className="major">Dentures</h3>
          <p>
            <strong>We offer different package for dentures: </strong>
          </p>
          <div className={styles.flexContainer}>


          </div>

          {close}
          </div>
        </article>
        {/* -------------------------------------------------------------------------- */}
        <article id="Partials" className={`${this.props.article === 'Partials' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <div>  
        <h3 className="major">FRS&nbsp;Partials</h3>
          <Img className={styles.leftImg} resolutions={this.props.imagePartial1.resolutions} />
          <Img className={styles.rightImg} resolutions={this.props.imagePartial2.resolutions} />
          <div className={styles.clear}>
            <p>
              The most important procedure is the preliminary or diagnostic cast. The cast must be surveyed and then designed for a removable partial denture. This preliminary survey and design will form a basis for restorative treatment of abutment teeth and will indicate to the technician certain procedures that may need to be completed before a final impression is made.
            </p>
          </div>

          <Img className={styles.rightImg} resolutions={this.props.imagePartial3.resolutions} />
          <strong className={styles.paddingTop}>We have three packages: </strong>
          <ul className={styles.paddingBottom}>
            <li>Premium</li>
            <li>Custom</li>
            <li>Economy (transitional partials)</li>
          </ul>

          <Img className={styles.rightImg} resolutions={this.props.imagePartial4.resolutions} />
          <strong className={styles.paddingTop}>We have different choices for Partial Dentures: </strong>
          <ul className={styles.paddingBottom}>
            <li>Acrylic with wrought wire clasps</li>
            <li>Flexible FRS </li>
            <li>Cast Metal Vitallium 2000</li>
            <li>Combo Crown &amp; Bridge </li>
          </ul>
          <Img className={styles.leftImg} resolutions={this.props.imagePartial5.resolutions} />
          <Img className={styles.rightImg} resolutions={this.props.imagePartial6.resolutions} />
          {close}
          </div>
        </article>
        {/* -------------------------------------------------------------------------- */}
       </div>
    )
  }
}

Main.propTypes = {
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}
