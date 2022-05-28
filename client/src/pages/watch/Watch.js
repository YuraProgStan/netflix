import React from 'react';
import './watch.scss';
import {ArrowBackOutlined} from "@mui/icons-material";
import "./watch.scss";
import {Link, useLocation} from "react-router-dom";

const Watch = () => {
    const location = useLocation();
    const {video} = location.state
    return (
        <div className="watch">
            <Link to={'/'}>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            </Link>
            <video
                className="video"
                autoPlay
                onProgress
                controls
                src={video}
                // src="https://enovosty.com/wp-content/uploads/2021/11/mosqitter_promo-full_.c4d1af6a.mp4"
            />
        </div>
    );
};

export default Watch;