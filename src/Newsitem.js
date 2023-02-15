import React, { Component } from 'react'

export class Newsitem extends Component {
  render(props) {
    return (
      <div className='my-3'>
        <div className="card" >
        <span className='position-absolute top-0  translate-middle badge rounded-pill bg-danger' style={{left:'90%',zIndex:'1'}}>{this.props.source}</span>
        {/* position-absolute top-0 start-100 translate-middle badge rounded pill bg-danger is used to put red color notification on top right corner of the card telling us to source of the news */}
          <img className="card-img-top" src={this.props.imageUrl?this.props.imageUrl:"https://play-lh.googleusercontent.com/uAu69C99ameBLdlE1Iv2ypibSqwQ3lqQGqm0NzcR1XpQ5gjBfNfW2sotbhfg2hPSjGZ3"} alt="No Img " />
          <div className="card-body">
            <h5 className="card-title">{this.props.title} </h5>
            {/* position-absolute top-0 start-100 translate-middle badge rounded pill bg-danger is used to put red color notification on top right corner of the card telling us to source of the news */}
            <p className="card-text">{this.props.description}</p>
            <p className='card-text'><small className='text-muted'>By {this.props.author} on {new Date(this.props.date).toGMTString()}</small></p> {/* 'newDate().toGMTstring' is used to present the date and time in human readable format  */}
            <a href={this.props.newsUrl} className="btn  btn-sml btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem