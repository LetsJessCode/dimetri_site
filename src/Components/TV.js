import React, { Component } from 'react'
import ESPN from '../Img/ESPN.png'
import metro from '../Img/metro.png'
import netflix2 from '../Img/netflix2.png'
export class TV extends Component {
    render() {
        return (
            <div>
                <h1>Placements</h1>
                <img src={ESPN} alt=""/>
                <img src={metro} alt=""/>
                <img src={netflix2} alt="" />
            </div>
        )
    }
}

export default TV
