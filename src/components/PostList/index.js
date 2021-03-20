import React, { Component } from 'react';
import './styles.css'
import Post from '../Post'
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p5 from '../../assets/p5.png';
import p6 from '../../assets/p6.png';
import p7 from '../../assets/p7.png';
import p8 from '../../assets/p8.png';
import p9 from '../../assets/p9.png';
import p10 from '../../assets/p10.png';

export default class PostList extends Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Elon Musk",
              avatar: p1,
            },
            date: "19 Mar 2021",
            content: "Guys, I had idea to create an electric rocket, what do you think?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Tony Stark",
                  avatar: p7
                },
                content: "Nice idea, come to Stark Industries to we build"
              },
              {
                id: 2,
                author: {
                  name: "Jeff Bezos",
                  avatar: p9
                },
                content: "Hey Elon, that's amazing! What do you think make partnership with Amazon?"
              }
            ]
          },
          {
            id: 2,
            author: {
              name: "Wanda Maximoff",
              avatar: p6
            },
            date: "18 Mar 2021",
            content: "Hello people, what did you think our last episode of WandaVision?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Homem Aranha",
                  avatar: p8
                },
                content: "I liked very much until the last minute. I'm anxious for next episode!!!"
              },
              {
                id: 2,
                author: {
                  name: "Ivo Júnior",
                  avatar: p5
                },
                content: "I thought it was amazing, and I can't wait for the next season!!!"           
              },
              {
                id: 3,
                author: {
                  name: "Odin",
                  avatar: p10
                },
                content: "The people of Asgard liked it very much."           
              },
            ]
          },
          {
            id: 3,
            author: {
              name: "Ronaldo Phenomenon",
              avatar: p3
            },
            date: "17 Mar 2021",
            content: "Good evening everyone! I found a Full Stack Developer. Does have anyone a indication for me?",
            comments: [
              {
                id: 2,
                author: {
                  name: "Natasha Romanoff",
                  avatar: p2
                },
                content: "Hello Ronaldo, whats up? I know a professional interesting. That's his Linkedin: ",
                url: "https://www.linkedin.com/in/jos%C3%A9-ivo-maciel-j%C3%BAnior-658136145/"
              },
            ]
          },
        ]
    };


  render() {
    return(
        <div className="container">
            {this.state.posts.map(post => (
                <Post 
                  key={post.id} 
                  author={post.author}
                  date={post.date}
                  content={post.content}
                  coments={post.comments}
                />
              )

            )}
        </div>
    ) 
  }
}

