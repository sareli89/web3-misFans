import React, { useEffect } from "react";
import { getComments } from "../../utils/fetching";

export const UserProfile = ({ user: { id, picture, firstName } }) => {
  const profilePhotoAlt = `Photo of ${firstName}`;

  const [comments, setComments] = React.useState([]);
  useEffect(() => {
    async function getUserComments() {
      const userComments = await getComments(id);
      const commentData = userComments.data;
      setComments(commentData);
    }
    getUserComments();
  }, []);
  return (
  <div className="container mx-auto">
    <div className="bg-gray-800 rounded p-10 ">
      <div className="flex items-center ">
        <img
        width="w-32"
        className="rounded-full md:w-28 border-solid md:border-double border-4 border-purple-300"
        src={picture}
        alt={profilePhotoAlt}
      />
      <h2 className="text-white text-3xl font-bold mx-8 ">
        Hola, soy {firstName}
      </h2>
      </div>
      {comments &&
        comments.map(({ message, owner }, commentIndex) => (
          <div
            key={`comment-${commentIndex}`}
          >
            <div className="block p-4 border  border-fuchsia-50  bg-purple-400  rounded-lg m-2  ">
              <div className="flex items-center "> 
                <img
                    width="40"
                    className="rounded-full md:w-14 m-2"
                    src={picture}
                    alt={profilePhotoAlt}
                  />
                  <h5 className="font-mono text-gray-900 text-2xl leading-tight font-medium mx-7 mb-2">
                    {owner.firstName}
                  </h5>
              </div>
                <p className="font-mono text-lg text-gray-700 m-4">
                  {message}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
