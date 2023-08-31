import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../css/Missions.css';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const { missions } = useSelector((store) => store.missions);

  return (
    <div className="container">
      <Table striped bordered className="table">
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th className="status">Status</th>
            <th className="status"> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="name">{mission.name}</td>
              <td className="description">{mission.description}</td>
              <td>
                {mission.member ? (
                  <span className="member">Active Member</span>
                )
                  : <span className="not-member">Not A Member</span>}
              </td>
              <td className="">
                {mission.member && (
                <button
                  className="leave-btn"
                  type="button"
                  onClick={() => dispatch(leaveMission(mission.id))}
                >
                  Leave Mission
                </button>
                )}
                {!mission.member && (
                <button
                  className="join-btn"
                  type="button"
                  onClick={() => dispatch(joinMission(mission.id))}
                >
                  Join Mission
                </button>
                )}
              </td>

            </tr>
          ))}
        </tbody>

      </Table>
    </div>
  );
}

export default Missions;
