import React from "react"

export  const UserProfile = ({user: {picture, firstName}}) => {
    const profilePhotoAlt = `Photo of ${firstName}`
    return (
        <React.Fragment>
            <img width="100" className="rounded-full" src={picture} alt={profilePhotoAlt}/>
            <div className=" bg-black text-white">Hola, soy {firstName}</div>
        </React.Fragment>
    )
}