import React, {useEffect, useState} from 'react';
import './listitem.scss';
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@mui/icons-material";

import {Link} from "react-router-dom";
import {movieService} from "../../services/movie.service";

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const controller = new AbortController();
        const getMovie = async () => {
            try {
                const res = await movieService.getAll(item)
                setMovie(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getMovie()
        return () => {
            controller.abort();
            setMovie({});

        }
    }, [item])
    const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <Link to={'/watch'} state={movie}>
            <div className="listItem"
                 style={{left: isHovered && index * 225 - 50 + index * 2.5}}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>
                <img src={movie.img} alt=""/>
                {isHovered &&
                (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop/>
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className="icon"/>
                                <Add className="icon"/>
                                <ThumbUpAltOutlined className="icon"/>
                                <ThumbDownAltOutlined className="icon"/>
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">{movie.desc}</div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    );
};

export default ListItem;