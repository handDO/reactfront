import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    const {id, title, user_id, user_name, user_rating, price, before_date} = this.props.val;
    return (
      <div className="projectsbox__project">
          <div>
              <div className="projectsbox__project-title">
                  <a href={ `/projects/${id}` }>
                      { title }
                  </a>
              </div>
              <div className="projectsbox__project-user">
                  <div className="projectsbox__project-username">
                      <a href={ `/profile/${user_id}` }>
                          { user_name }
                      </a>
                  </div>
                  <div className="projectsbox__project-rating">
                      { user_rating }
                  </div>
              </div>
          </div>
          <div>
              <div className="projectsbox__project-price">
                  { price }
              </div>
              <div className="projectsbox__project-date"><i></i>
                  { `до ${before_date.toLocaleString('ru', {
                      month: 'long',
                      day: 'numeric'
                    })}` }
              </div>
          </div>
      </div>
      );
  }
}