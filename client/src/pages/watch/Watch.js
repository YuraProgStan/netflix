import React from 'react';
import './watch.scss';
import {ArrowBackOutlined} from "@mui/icons-material";
import "./watch.scss";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video
                className="video"
                autoPlay
                onProgress
                controls
                src="https://enovosty.com/wp-content/uploads/2021/11/mosqitter_promo-full_.c4d1af6a.mp4"
            />
        </div>
    );
};

export default Watch;