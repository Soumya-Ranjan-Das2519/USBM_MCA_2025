import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64 mx-auto mb-6">
      <h2 className="text-xl font-semibold text-center">{user.name}</h2>
      <p className="text-gray-600 text-center mb-2">{user.email}</p>
      <p className="text-gray-500 text-center">{user.phone}</p>
    </div>
  );
};

export default UserCard;
