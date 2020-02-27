import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class User extends React.Component{
   render() {
    return (
     <h5 class="card-title">
       {this.props.user.screen_name}
      </h5>
    );
}
}
class Entities extends React.Component{
   render() {
    return (
        <div>
      <UrlEntity urls={this.props.entity.urls} photo={this.props.photo}/>
      </div>
    );
}
}
class UrlEntity extends React.Component{
       render() {
        let urlsEntitity = this.props.urls.map(url=>{
            if(this.props.photo){
                return <img src={url.url}></img>
            }else{
            return <a href={url.url}>{url.url}</a>}
        })
    return (
      <div>
    {urlsEntitity}
      </div>
    );
}
}

class Tweet extends React.Component{
      render() {
    let tweets = this.props.tweets.map(tweet=>{
        let display;
        if (tweet.entities.media)
            { display = (<Entities entity={tweet.entities} photo={true}/>)}
        else{
           (<Entities entity={tweet.entities} photo={false}/>)
        }
        return (<div class="card w-75">
        <div class="card-body">
            <User user={tweet.user}/>
            {display}
        <p class="card-text">{tweet.text}</p>
             </div>
            </div>)
    });
    return (
      <div>
       <ul> {tweets}</ul>
      </div>
    );
}
}

class App extends React.Component {
  render() {
    return (
      <div>
      <Tweet tweets={tweets.tweets}/>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");