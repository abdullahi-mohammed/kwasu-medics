import React from 'react'
import { getImageUrl } from '../../helpers/imageHelper'

const Header = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <img src={getImageUrl("kwasu-logo.png")} alt="kwasu logo" />
                <h2>Kwasu Health-Watch</h2>
                <img src={getImageUrl("medic-logo.png")} alt="medic logo" />
            </div>
            <div>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </div>
        </div>
    )
}

export default Header