import React, { Component } from 'react';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    // Expect 'props' to contain 'user', 'userCrews', and 'handleCrewClick' function which sets current crew in main view
    let userData = {
      facebookId: '1',
      facebook: {
        DISPLAY_NAME: "ionajewel",
        EMAIL: "ipjwilli@gmail.com",
        IMAGE_URL: "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
      }
    };
    let crewData = [{
      "name": 'Strings Attached',
      "decription": 'I started Strings Attached as a genre-blurring collaboration with folk artists. Our vision was to fuse jazz and classical flavors with the contemporary singer/songwriter genre; to dress it up with a little different jewelry. From the classical tradition we borrowed the architectural precision of composition and arranging. From jazz we brought the performance ethic. The ability to abandon the score and make choices spontaneously, in response to each other and the present musical moment. And then there\'s that irresistable sense of"swing" - the thing that gets people dancing.',
      "image": 'http://www.celebratewithstringsattached.com/western-swing.html'
    },
    {
      "name": "Zieme, Nitzsche and Murazik",
      "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      "image": "http://dummyimage.com/201x122.jpg/ff4444/ffffff"
    }];
    this.state = {
      user: userData,
      userCrews: crewData
    }

    this.handleCrewClick = (val, e) => {
      e.preventDefault();
      console.log(val);
    }
  }

  render() {
    return (
      <div>
        <div className="sidebar-crew-list">
          {this.state.userCrews.map((crew, key) => {
            return (
              <div onClick={e => this.handleCrewClick(crew, e)} value={crew.name} key={key} className="sidebar-crew-name">{crew.name}</div>
            )
          })}
        </div>
        {this.state.userCrews.length === 0 ?
          <div className="no-crews-message">
            <h2><em>
              You don't have any crews! Use the searchbar to find one.
            </em></h2>
          </div> : ''}
      </div>
    )
  }
}