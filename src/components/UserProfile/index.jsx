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
      <div className="flex items-center justify-center mb-8 md:w-2/4">
        <img
        className="rounded-full w-12 md:w-28 border-solid md:border-double border-4 border-purple-300 mb-6"
        src={picture}
        alt={profilePhotoAlt}
      />
      <h2 className="text-white text-3xl font-bold mx-8 motion-safe:animate-bounce">
        Hola, soy {firstName}
      </h2>
      </div>
      <div className="flex-col items-center justify-center">
        {comments &&
        comments.map(({ message, owner }, commentIndex) => (
          <div
            key={`comment-${commentIndex}`}
          >
            <div className="flex items-center justify-center  p-4 m-12  
              border rounded-lg border-fuchsia-300 bg-purple-400 
              shadow-lg shadow-indigo-500/50 ">
              <div className="flex-col items-center "> 
                <img
                    width="40"
                    className="rounded-full border border-fuchsia-300 md:w-28 m-2"
                    src={picture}
                    alt={profilePhotoAlt}
                  />
                  
              </div>
                <p className="font-mono text-lg text-gray-700 m-4">
                  {message}
                </p>
            </div>
          </div>
        ))}
      </div>
      
      </div>
    </div>
  );
};
