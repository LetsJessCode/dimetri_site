import React, { Component } from 'react'
import ESPN from '../Img/ESPN.png'
import metro from '../Img/metro.png'
import netflix from '../Img/netflix.jpg'
export class TV extends Component {
    render() {
        return (
            <div>
                <h1>Placements</h1>
                <img src={ESPN} alt=""/>
                <img src={metro} alt=""/>
                <img src={netflix} alt="" />
            </div>
        )
    }
}

export default TV
