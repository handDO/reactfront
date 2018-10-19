import React, { Component } from 'react';

export default class Project extends Component {
  render() {
    const {val} = this.props;
    return (
      <div className="projectsbox__project">
          <div>
              <div className="projectsbox__project-title">
                  <a href={ `/projects/${val.id}` }>
                      { val.title }
                  </a>
              </div>
              <div className="projectsbox__project-user">
                  <div className="projectsbox__project-username">
                      <a href={ `/profile/${val.user_id}` }>
                          { val.user_name }
                      </a>
                  </div>
                  <div className="projectsbox__project-rating">
                      { val.user_rating }
                  </div>
              </div>
          </div>
          <div>
              <div className="projectsbox__project-price">
                  { val.price }
              </div>
              <div className="projectsbox__project-date">до
                  { val.before_date.toLocaleString('ru', {
                      month: 'long',
                      day: 'numeric'
                    }) }
              </div>
          </div>
      </div>
      );
  }
}