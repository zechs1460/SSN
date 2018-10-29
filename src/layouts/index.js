import React, { createContext } from 'react'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading',
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27 && this.state.isArticleVisible === true) {
        this.handleCloseArticle()
      }
    })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleOpenArticle(article) {
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      })
    }, 350)
  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: '',
      })
    }, 350)
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const { location, children } = this.props

    let rootPath = `/`

    let content

    if (location.pathname === rootPath) {
      content = (
        <div id="wrapper">
          <Header
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
          />
          <Main
            isArticleVisible={this.state.isArticleVisible}
            timeout={this.state.timeout}
            articleTimeout={this.state.articleTimeout}
            article={this.state.article}
            onCloseArticle={this.handleCloseArticle}
            onOpenArticle={this.handleOpenArticle}
            /*background*/
            //background={this.props.data.background}
            /*Full Size*/ 
            imageFS1={this.props.data.imageFS1}
            imageFS2={this.props.data.imageFS2}
            imageFS3={this.props.data.imageFS3}
            imageFS4={this.props.data.imageFS4}
            imageFS5={this.props.data.imageFS5}
            imageFS6={this.props.data.imageFS6}
            /*Kid Size*/
            imageKS1={this.props.data.imageKS1}
            imageKS2={this.props.data.imageKS2}
            imageKS3={this.props.data.imageKS3}
            /*Chairs*/
            imageCh1={this.props.data.imageCh1}
            imageCh2={this.props.data.imageCh2}
            /*Stools*/
            imageSt1={this.props.data.imageSt1}
            imageSt2={this.props.data.imageSt2}
            imageSt3={this.props.data.imageSt3}
            imageSt4={this.props.data.imageSt4}
            imageSt5={this.props.data.imageSt5}
            /*Stands*/
            imageSta1={this.props.data.imageSta1}
            imageSta2={this.props.data.imageSta2}
            imageSta3={this.props.data.imageSta3}
            imageSta4={this.props.data.imageSta4}
            /*Others*/
            imageOt1={this.props.data.imageOt1}
            imageOt2={this.props.data.imageOt2}
            imageOt3={this.props.data.imageOt3}
            imageOt4={this.props.data.imageOt4}
            imageOt5={this.props.data.imageOt5}
            imageOt6={this.props.data.imageOt6}
            imageOt7={this.props.data.imageOt7}
            /*About*/
            imageAb1={this.props.data.imageAb1}
            imageAb2={this.props.data.imageAb2}
            imageAb3={this.props.data.imageAb3}
            imageAb4={this.props.data.imageAb4}
          />
          <Footer
            onOpenArticle={this.handleOpenArticle}
            timeout={this.state.timeout}
          />

          {/*<Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
            sizes={this.props.data.background.sizes}
          />*/}
        </div>
      )
    } else {
      content = (
        <div id="wrapper" className="page">
          <div
            style={{
              maxWidth: '1140px',
            }}
          >
            {children()}
          </div>
        </div>
      )
    }

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        {content}
        <div id="bg" />
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    #background: imageSharp(id: { regex: "/bg.jpg/" }) {
    #  sizes(maxWidth: 1920) {
    #    ...GatsbyImageSharpSizes
    #  }
    #}
    # Full Size
    imageFS1: imageSharp(id: { regex: "/FS-1.jpg/" }) {
      resolutions(width: 200, height: 100) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageFS2: imageSharp(id: { regex: "/FS-2.png/" }) {
      resolutions(width: 200, height: 108) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageFS3: imageSharp(id: { regex: "/FS-3.png/" }) {
      resolutions(width: 200, height: 121) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageFS4: imageSharp(id: { regex: "/FS-4.jpg/" }) {
      resolutions(width: 200, height: 170) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageFS5: imageSharp(id: { regex: "/FS-5.jpg/" }) {
      resolutions(width: 200, height: 181) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageFS6: imageSharp(id: { regex: "/FS-6.png/" }) {
      resolutions(width: 200, height: 133) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Kid Size
    imageKS1: imageSharp(id: { regex: "/KS-1.jpg/" }) {
      resolutions(width: 200, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageKS2: imageSharp(id: { regex: "/KS-2.jpg/" }) {
      resolutions(width: 200, height: 141) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageKS3: imageSharp(id: { regex: "/KS-3.jpg/" }) {
      resolutions(width: 220, height: 163) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Chairs
    imageCh1: imageSharp(id: { regex: "/Ch-1.png/" }) {
      resolutions(width: 129, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageCh2: imageSharp(id: { regex: "/Ch-2.png/" }) {
      resolutions(width: 183, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Stools
    imageSt1: imageSharp(id: { regex: "/St-1.png/" }) {
      resolutions(width: 109, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSt2: imageSharp(id: { regex: "/St-2.png/" }) {
      resolutions(width: 138, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSt3: imageSharp(id: { regex: "/St-3.jpg/" }) {
      resolutions(width: 220, height: 142) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSt4: imageSharp(id: { regex: "/St-4.jpg/" }) {
      resolutions(width: 220, height: 156) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSt5: imageSharp(id: { regex: "/St-5.jpg/" }) {
      resolutions(width: 190, height: 220) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Stands
    imageSta1: imageSharp(id: { regex: "/Sta-1.jpg/" }) {
      resolutions(width: 200, height: 142) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSta2: imageSharp(id: { regex: "/Sta-2.png/" }) {
      resolutions(width: 172, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSta3: imageSharp(id: { regex: "/Sta-3.jpg/" }) {
      resolutions(width: 169, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageSta4: imageSharp(id: { regex: "/Sta-4.jpg/" }) {
      resolutions(width: 154, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # Other
    imageOt1: imageSharp(id: { regex: "/Ot-1.png/" }) {
      resolutions(width: 130, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOt2: imageSharp(id: { regex: "/Ot-2.png/" }) {
      resolutions(width: 200, height: 133) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOt3: imageSharp(id: { regex: "/Ot-3.png/" }) {
      resolutions(width: 200, height: 133) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOt4: imageSharp(id: { regex: "/Ot-4.png/" }) {
      resolutions(width: 200, height: 121) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOt5: imageSharp(id: { regex: "/Ot-5.jpg/" }) {
      resolutions(width: 188, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOt6: imageSharp(id: { regex: "/Ot-6.jpg/" }) {
      resolutions(width: 200, height: 194) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageOt7: imageSharp(id: { regex: "/Ot-7.jpg/" }) {
      resolutions(width: 220, height: 153) {
        ...GatsbyImageSharpResolutions
      }
    }
    # About
    imageAb1: imageSharp(id: { regex: "/Ab-1.jpg/" }) {
      resolutions(width: 200, height: 143) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAb2: imageSharp(id: { regex: "/Ab-2.png/" }) {
      resolutions(width: 200, height: 153) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAb3: imageSharp(id: { regex: "/Ab-3.png/" }) {
      resolutions(width: 200, height: 133) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageAb4: imageSharp(id: { regex: "/Ab-4.jpg/" }) {
      resolutions(width: 200, height: 113) {
        ...GatsbyImageSharpResolutions
      }
    }
    # End
  }
`
