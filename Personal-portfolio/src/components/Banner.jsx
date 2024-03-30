import React from "react";
import '../global.css'

function Bunner() {
    return(
    <div className="Banner">
        
        <h1>Hi, I'm Zakariye Bashiir, </h1>
        <h2>A web Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo unde fugiat ipsum molestiae deleniti eveniet nisi voluptatum beatae. Architecto a corporis cupiditate delectus sed aut est ipsa quasi laborum!</p>
        <div className="profile-section">
            <img className="profile-pic" src="zaka.jpeg" alt="" />
            {/* <div className="badge badge-webflow"> Webflow Developer</div> */}
            {/* <div className="badge badge-design">Web Designer</div> */}
        </div>
    </div>
    )
}
export default Bunner