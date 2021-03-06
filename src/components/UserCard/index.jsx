export const UserCard = ({ title, firstName, lastName, picture, onClick }) => {
  const fullName = `${firstName} ${lastName}`;
  return (
    <div className="container mx-auto">
      <div className=" bg-gray-800 p-10 ">
        <div
        onClick={onClick}
        className="md:ml-10 pr-4 flex items-center justify-center 
        shadow-lg shadow-indigo-500/50 border border-fuchsia-50 bg-purple-400 
        rounded-lg card "
      >
          <img
            className="border border-purple-700 rounded-full md:w-32 m-4"
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
