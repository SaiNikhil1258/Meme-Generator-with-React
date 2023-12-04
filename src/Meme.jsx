import React from "react"


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemes,setAllMemes] = React.useState([])


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json()
        .then(data => setAllMemes(data.data.memes)))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }


    
    return(
        <main>
            <div className="form">
                <input className="form--input" placeholder="top text" type="text" name="topText"  onChange={handleChange} value={meme.topText}/>
                <input className="form--input" placeholder="bottom text" type="text" name="bottomText" onChange={handleChange} value={meme.bottomText}/>
                <button onClick= {getMemeImage} className="form--button">Get a new Meme image 🖼</button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}





