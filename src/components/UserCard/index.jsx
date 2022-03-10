export const UserCard = ({ title, firstName, lastName, picture, onClick }) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <div>
      <div className="container mx-auto bg-gray-800 rounded p-10 ">
        <div
        onClick={onClick}
        className="flex items-center  shadow-lg shadow-indigo-500/50 border hover:border-doted border-fuchsia-50   bg-purple-400  rounded-lg p-4 mx-4 my-2 card "
      >
          <img
            width="90"
            className="border  border-purple-700 rounded-full mr-4"
            src={picture}
            alt={`Profile photo for ${fullName}`}
          />
          <h2 className="text-2xl font-mono text-gray-900 font-bold ">
            {title} {fullName}
          </h2>
        </div>
      </div>
      
    </div>
  );
};
