import Slider from '../../components/Slider/slider'
import './singlePage.scss';
import {singlePostData, userData} from "../../lib/dummydata";
import Map from '../../components/Map/map';

function SinglePage(){
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Genaral</p>
          <div className="listVerticle">
            <div className="features">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="features">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="features">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Size</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>80 sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
          <div className="features">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="features">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="features">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restuarent</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage