import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

export class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
    document.title = `NewsMonkey-${this.props.category}`
  }
  // sabse pehle contructor run hota hai firr render aur firr last mai componentdidMount()
  
  
  async updateNews(){
      this.props.setProgress(0)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f8eac624622843ef874b0685dcf2e185&page=${this.state.page}&pagesize=${this.props.pageSize}`
      this.setState({loading:true});  /* jase hi url ko call hoke data fetch hoga tab hi loading ka option dikhao */
      const res = await fetch(url);
      const data = await res.json();
      this.setState({
        totalResults:data.totalResults,
        articles: data.articles,
        loading:false  
      /*jase hi data aagya loading ko false kardo */
      })
      this.props.setProgress(100) /*aakhri me pura load hojae */
    
  }
  async componentDidMount() {
    this.updateNews()
  }

  handleNextClick = async ()=>{
    console.log("nextButton clicked")
       await this.setState({ //await daalna zaruri tha 
        page:this.state.page+1
      })

      this.props.setProgress(0)
      
      this.updateNews()
      
      this.props.setProgress(100)
  }
  handlePrevClick = async ()=>{
    
    await this.setState({
      page:this.state.page-1
    })
    
    this.props.setProgress(0)
    
    this.updateNews()

    this.props.setProgress(100)
  }

  render() {
    return (
      <div className='container chandu'>
        <h1 className='my-3 text-center' >NewsMonkey - Top Headlines from {this.props.category}</h1>
       
        {this.state.loading && <Spinner />}  
        {/* iska matlab agar loading true hai tab hi <loading.js /> ko call karo warna nhis */}
        <div className='row'>
          {this.state.articles && this.state.articles.map((element) => {
            return (
              <div className='col-md-4 ' key={element.url}>
                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url } author = {element.author?element.author:"Unknown"} date = {element.publishedAt} source  = {element.source.name} />
                {/* .slice(a,b) limits the the text inside to a characters to b characters  */}
                {/* we used ternary operator so that if a news has no heading or no description then instead of showing errors it will shw a blank card inplace of it */}
              </div>)
          })}
        </div>
        <div className='container d-flex justify-content-between my-3'> 
           {/* d-flex justify-content-between is a bootstrap class used to place buttons at the leftmost and the rightmost part of the page */}
          <button disabled = {this.state.page<=1} type="button" class="btn btn-danger btn-lg" onClick={this.handlePrevClick}>&laquo; Previous</button> ; {/*is used to add previous arrow*/}
          <button disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/12)} type="button" class="btn btn-danger btn-lg" onClick={this.handleNextClick}>Next &raquo;</button>    {/*&raquo; is used to add next arrow  */}    
         </div>
      </div>
    )
  }
}

News.propType={
  category: PropTypes.string.isRequired
}
News.defaultProps={
  category:"business"
}

export default News