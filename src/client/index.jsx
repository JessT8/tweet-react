import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class User extends React.Component{
   render() {
    return (
      <div>
       {this.props.user}
      </div>
    );
}
}
class Entities extends React.Component{
   render() {
    return (
      <div>
      <UrlEntity urls={this.props.entity.urls}/>
      </div>
    );
}
}
class UrlEntity extends React.Component{
       render() {
                console.log(this.props.url);
        let urlsEntitity = this.props.urls.map(url=>{
            return <a href={url.url}>{url.url}</a>
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
        return (<li>
            <User user={tweet.user.screen_name}/>
            <p>{tweet.text}</p>
           <Entities entity={tweet.entities}/>
            </li>)
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