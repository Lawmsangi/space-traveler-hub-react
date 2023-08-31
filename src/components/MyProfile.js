import React from 'react';
import '../css/MyProfile.css';
import { useSelector } from 'react-redux';

function MyProfile() {
  const { rockets } = useSelector((store) => store.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const { missions } = useSelector((store) => store.missions);
  const joinMissions = missions.filter((mission) => mission.member === true);

  return (
    <div className="profile">
      <div className="profile-saved">
        <h1>My Missions</h1>
        {joinMissions.length > 0
          ? joinMissions.map((mission) => (
            <li key={mission.id}>
              <h3>{mission.name}</h3>
            </li>
          ))
          : <li>No reserved mission</li>}
      </div>
      <div className="profile-saved">
        <h1>My Rockets</h1>
        {reservedRockets.length > 0
          ? reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <h3>{rocket.name}</h3>
            </li>
          ))
          : <li>No reserved rockets</li>}
      </div>
    </div>
  );
}

export default MyProfile;
