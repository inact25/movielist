import React from 'react';
import {Card, Grid} from "antd";

const MovieCard = ({movieImage, movieTitle, movieId, moviePath, movieTag, cardHeight}) => {
    const {useBreakpoint} = Grid
    const {md, lg} = useBreakpoint()
    return (
        <>
            <Card
                className='movie-card'
                hoverable
                bordered={false}
                style={{
                    borderRadius: "2rem",
                    width: "100%",
                    minHeight: cardHeight,
                    backgroundSize: "cover",
                    background: `url(https://awsimages.detik.net.id/community/media/visual/2022/02/14/doctor-strange-in-the-multiverse-of-madness_169.png?w=1200) center center no-repeat`
                }}>
                <div className="title-movie-card"
                     style={{
                         textAlign: "start",
                         color: "white",
                         bottom: 0,
                         position: "absolute",
                         fontSize: 16,
                         borderTopRightRadius: "10rem",
                         paddingTop: "1.5rem"
                     }}>
                    <h1 style={{color: "white", fontSize: 28, lineHeight: lg ? "1rem" : "2rem"}}>Doctor Strange</h1>
                    <p>Action, Adventure,Scient, Fiction</p>
                </div>
            </Card>
        </>
    );
};

export default MovieCard;
