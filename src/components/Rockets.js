import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/Rockets.css';
import { cancelRocket, reserveRocket } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);

  return (
    <div className="rockets">
      {rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <div className="image">
            <img src={rocket.image} alt={rocket.name} />
          </div>
          <div className="details">
            <h2>{rocket.name}</h2>
            <div className="rocket-details">
              {rocket.reserved ? (
                <span className="reserved">Reserved</span>
              )
                : ''}
              <span className="description">{rocket.description}</span>
            </div>

            {rocket.reserved && (
            <button
              type="button"
              className="cancel-btn"
              onClick={() => dispatch(cancelRocket(rocket.id))}
            >
              Cancel Reservation
            </button>
            )}
            {!rocket.reserved && (
            <button
              type="button"
              className="reserve-btn"
              onClick={() => dispatch(reserveRocket(rocket.id))}
            >
              Reserve Rocket
            </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
