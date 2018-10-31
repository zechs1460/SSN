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
            image1={this.props.data.image1}
            image2={this.props.data.image2}
            image3={this.props.data.image3}
            image4={this.props.data.image4}
            imagePR={this.props.data.imagePR}
            imagePY={this.props.data.imagePY}
            imagePO={this.props.data.imagePO}
            imageMom={this.props.data.imageMom}
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
    image1: imageSharp(id: { regex: "/1.png/" }) {
      resolutions(width: 240, height: 158) {
        ...GatsbyImageSharpResolutions
      }
    }
    image2: imageSharp(id: { regex: "/2.jpg/" }) {
      resolutions(width: 220, height: 146) {
        ...GatsbyImageSharpResolutions
      }
    }
    image3: imageSharp(id: { regex: "/3.jpg/" }) {
      resolutions(width: 1304, height: 300) {
        ...GatsbyImageSharpResolutions
      }
    }
    image4: imageSharp(id: { regex: "/4.jpg/" }) {
      resolutions(width: 250, height: 113) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePR: imageSharp(id: { regex: "/PRs.jpg/" }) {
      resolutions(width: 300, height: 187) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePY: imageSharp(id: { regex: "/Pagely Young.jpg/" }) {
      resolutions(width: 193, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    imagePO: imageSharp(id: { regex: "/Pagely Old.JPG/" }) {
      resolutions(width: 175, height: 210) {
        ...GatsbyImageSharpResolutions
      }
    }
    imageMom: imageSharp(id: { regex: "/Mom.JPG/" }) {
      resolutions(width: 198, height: 200) {
        ...GatsbyImageSharpResolutions
      }
    }
    # End
  }
`
