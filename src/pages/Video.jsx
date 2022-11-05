

export default function Video(){

    const paragraphOne = "Yeah! Attorney-client privilege. I mean, that's a big one. That's something I provide for you. If I give up Pinkman, well, then you're gonna be asking, 'Ol' Saul gives 'em up pretty easy. What's to keep him from giving me up?' Y'see, so, then where's the trust? "
    const paragraphTwo = "You want your criminal associate taken into police custody? We declare just enough so as to not arouse suspicion, so Walt's one time winnings becomes seed money for an investment. If you're committed enough, you can make any story work. I once told a woman I was Kevin Costner, and it worked because I believed it."


    return(
        <>
        <div className="sections">

        <div id="videoReview">
            <h4>Reviews</h4>
        <p>{paragraphOne}</p>
        <p>{paragraphTwo}</p>
        </div>
        <div id="image">
            <h4>
                Image
            </h4>
            <img src='../images/hometheater.jpg' alt="Cinema Projector" />
        </div>
        </div>
        </>
    )
}
