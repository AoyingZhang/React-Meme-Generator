//this file gets 2 input of strings, displays a random image from memesData
import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    const[memeImage, setMemeImage]=React.useState("")

    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        setMemeImage(url)
    }
    
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image!!!
                </button>
            </div>
        </main>
    )
}
