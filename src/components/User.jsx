const User = ({ userName, course, gmail, profile}) => {
  return (
    <div className="max-w-sm mx-auto bg-purple-200 rounded-2xl shadow-md overflow-hidden p-6 text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-purple-500"
        src={profile}
        alt="User"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-800">{userName}</h2>
      <p className="text-sm text-gray-500">{course} </p>
      <p className="text-sm text-purple-600 mt-2">{gmail}</p>
         
    </div>
  );
}

export default User