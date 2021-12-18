import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <>
        <div className="cards">
            <h1>Check out these music NFTS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-2.jpg"
                        text="prove them wrong"
                        label='DreamR'
                        path='/artists'
                        />
                         <CardItem 
                        src="images/img-1.jpg"
                        text="baymax"
                        label='Robin'
                        path='/artists'
                        />
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
