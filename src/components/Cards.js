import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore What Do You Want!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-9.jpg"
              text='FrontEnd Development'
              label='ABC'
              path='/services'
            />
            <CardItem
              src="images/img-2.jpg"
              text='Business Management'
              label='ABC'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="images/img-3.jpg"
              text='Machine Learning'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src="./images/img-4.jpg"
              text='Digital Marketing'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src="images/img-8.jpg"
              text='SAP Course'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
