import React from 'react'
import Img from 'gatsby-image'
import styles from './Main.module.css'
import Dentures from './Dentures'
import Partials from './Partials'
import CrownAndBridge from './CrownAndBridge'
import Cast from './Cast'
import Other from './Other'
import Digital from './Digital'
import About from './About'
import Contact from './Contact'
import ML from './ML'
import RX from './RX'

export default class Main extends React.Component {
  render() {
    const close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>
        
        <article id="Dentures" className={`${this.props.article === 'Dentures' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          {/*<Dentures />*/}
          {close}
        </article>
        
        <article id="Partials" className={`${this.props.article === 'Partials' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <Partials />
          {close}
        </article>
        
        <article id="CrownAndBridge" className={`${this.props.article === 'CrownAndBridge' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          {/*<CrownAndBridge />*/}
          {close}
        </article>
        
        <article id="Cast" className={`${this.props.article === 'Cast' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <Cast />
          {close}
        </article>
        
        <article id="Other" className={`${this.props.article === 'Other' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <Other />
          {close}
        </article>
        
        <article id="Digital" className={`${this.props.article === 'Digital' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <Digital />
          {close}
        </article>
        
        <article id="About" className={`${this.props.article === 'About' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <About />
          {close}
        </article>
        
        <article id="Contact" className={`${this.props.article === 'Contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <Contact />
          {close}
        </article>
        
        <article id="ML" className={`${this.props.article === 'ML' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <ML />
          {close}
        </article>
        
        <article id="RX" className={`${this.props.article === 'RX' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <RX />
          {close}
        </article>
        
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}
