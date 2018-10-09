import React, { Component } from 'react';
class Advantage extends Component {
  render() {
    return ( <div className="advantage"> 
                <div className="advantage_picture"></div> 
                <div className="advantage_text">{this.props.text}</div>
            </div>);
  }
}

export default class Advantages extends Component {
  render() {
    return (<section className="advantages"> 
    <Advantage text="Безналичная оплата бизнес-заданий с предоставлением закрывающих документов."/> 
    <Advantage text="Преимущество №2"/> 
    <Advantage text="Преимущество №3"/> 
    <Advantage text="Преимущество №4"/> 

    </section>);
  }
}