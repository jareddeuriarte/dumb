import React from 'react';

import '../article/article.css'

function Article() {


    // RANDOMLY PLACE COMPONENT ON PAGE
    document.addEventListener("DOMContentLoaded", function () {

        // grab the width and height of the browser window
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;

        // generating a random number for the left and top positions 
        var randPosX = Math.floor((Math.random() * bodyWidth));
        var randPosXstring = randPosX.toString()
        var randPosY = Math.floor((Math.random() * bodyHeight));
        var randPosYstring = randPosY.toString()

        // grab elm, concat position # with 'px', setting style
        const leftPos = document.getElementById('article-pos')
        leftPos.style.left = randPosXstring + 'px';

        const topPos = document.getElementById('article-pos')
        topPos.style.top = randPosYstring + 'px';

    });

    return (
        <div className='content' id="article-pos">
                {/* <div id='article-flex-wrapper'> */}

            <a href="https://en.wikipedia.org/wiki/Ariana_Grande" target="_blank" rel="noreferrer">

                <div id='article-flex-wrapper'>

                    {/* If images prove difficult, I could also web scrab favicons to use instead  */}
                    <img src="https://via.placeholder.com/100.png/09f/fff%20C/O%20https://placeholder.com/" alt="place holder"></img>
                    <div id='article-details-wrapper'>
                    <h2>Headline of article</h2>
                    <p>This is a description of the article</p>
                    <p>www.domain.com</p>


                    </div>
                </div>
            </a>
            {/* </div> */}

        </div>
    )
}

export default Article;

