import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    // 13.
    const location=useLocation()

    return (
        <div className="homepage">
        {/* 12. */}
            <h1>Hello {location.state.id} and welcome to the home</h1>

        </div>
    )
}

export default Home