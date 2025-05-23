import React from 'react';
import AppointmentScheduler from './AppointmentScheduler';
import ServiceHistory from './ServiceHistory';
import Profile from './Profile';
interface MemberAreaProps {
  username: string;
}
const MemberArea: React.FC<MemberAreaProps> = ({ username }) => {
  return (
    <div className="member-area">
      <h2>Bem-vindo, {username}!</h2>
      <AppointmentScheduler />
      <ServiceHistory />
      <Profile />
    </div>
  );
};
export default MemberArea;