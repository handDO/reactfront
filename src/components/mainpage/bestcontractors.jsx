import React, { Component } from 'react';

const contractors = [
  {
    id: 1,
    name: "Андрей",
    rating: 154,
    maincategory: "Ремонт техники",
    picture: "http://api.adorable.io/avatars/150/%5BRANDOM_STRING%5D.png",
  },
  {
    id: 1,
    name: "Василий",
    rating: 129,
    maincategory: "Фото и видео",
    picture: "http://api.adorable.io/avatars/150/%5BRANDOM_STRING1%5D.png",
  },
  {
    id: 1,
    name: "Николай",
    rating: 119,
    maincategory: "IT, Компьютеры",
    picture: "http://api.adorable.io/avatars/150/%5BRANDOM_STRING2%5D.png",
  }
];

export default class BestContractors extends Component {
  render() {
    return (
      <section className="bestcontractorsbox">
      <h1>
          Лучшие исполнители
      </h1>
             <div className="contractors">{this.getContractors()}</div> 
            </section>
      );
  }

  getContractors() {
    return contractors.map((val, i) => {
      return (<div key={i} className="contractor">
            <div className="contractor_rating">{val.rating}</div>

            <a href={`/profile/${val.id}`} className="contractor_img"><img  src={val.picture} alt={val.name}/></a>
            <div className="contractor_name">{val.name}</div>
            
            <div className="contractor_maincategory">{val.maincategory}</div>
        </div>);
    });
  }
}