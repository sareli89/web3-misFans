import React from "react"

export  const UserProfile = ({user: {picture, firstName}}) => {
    const profilePhotoAlt = `Photo of ${firstName}`
    return (
        <React.Fragment>
            <div className="  bg-black ">
                <div className="flex items-center">
                    <img width="90" className="rounded-full" src={picture} alt={profilePhotoAlt}/>
                    <h2 className="text-white text-xl font-semibold mx-8 ">Hola, soy {firstName}</h2>
                </div>
                

                <div className="flex justify-center my-8 card">
                    <div className="block p-6 rounded-lg shadow-lg border hover:border-doted border-fuchsia-50 bg-purple-400  max-w-sm">
                        <h5 className="font-mono text-gray-900 text-xl leading-tight font-medium mb-2">Autor</h5>
                        <p className="font-mono text-gray-700 text-base mb-4">
                        Comment
                        </p>
                    </div>
                </div>

                <div className="flex justify-center my-8 card">
                    <div className="block p-6 rounded-lg shadow-lg border hover:border-doted border-fuchsia-50   bg-purple-400  max-w-sm">
                        <h5 className="font-mono text-gray-900 text-xl leading-tight font-medium mb-2">Autor</h5>
                        <p className="font-mono text-gray-700 text-base mb-4">
                        Comment
                        </p>
                    </div>
                </div>
                <div className="flex justify-center my-8 card">
                    <div className="block p-6 rounded-lg shadow-lg border hover:border-doted border-fuchsia-50 bg-purple-400  max-w-sm">
                        <h5 className="font-mono text-gray-900 text-xl leading-tight font-medium mb-2">Autor</h5>
                        <p className="font-mono  text-gray-700 text-base mb-4">
                        Comment
                        </p>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

