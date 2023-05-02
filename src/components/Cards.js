import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import imagecard1 from "./images/img-7.jpg";

function Cards() {
  return (
    <div className="cards">
      <h5>COURSE CATEGORY</h5>
      <br />
      <h1>Explore What Do You Want!</h1>
      <h6>
        Teaching students to work dilligently & hard through higher education
        advice on premier colleges or universities.
      </h6>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div className="image-container">
              <div className="img1">
                <div class="card">
                  <div class="card-body bgimage">
                    <h5 class="card-title">Card title</h5>
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                    <a href="#" class="btn btn-primary">
                      web development
                    </a>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body bgimage">
                    <h5 class="card-title">Card title</h5>
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                    <a href="#" class="btn btn-primary">
                      Web Development
                    </a>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body bgimage">
                    <h5 class="card-title">Card title</h5>
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                    <a href="#" class="btn btn-primary">
                    Web Development
                    </a>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body bgimage">
                    <h5 class="card-title">Card title</h5>
                    {/* <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p> */}
                    <a href="#" class="btn btn-primary">
                    Web Development
                    </a>
                  </div>
                </div>
                {/* <img className="imagecr1" src={imagecard1} />
                <p className="imgText">Text</p> */}
              </div>
              {/* <div className='imgText'>
              higher
            </div> */}

              {/* <img className="imagecr2" src={imagecard1} /> */}
              {/* <div className='imgText'>
             Second
            </div> */}
              {/* <img className="imagecr3" src={imagecard1} />
              <img className="imagecr4" src={imagecard1} /> */}
            </div>

            {/* <CardItem
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
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
