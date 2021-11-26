import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router";

import tmdbApi from '../../apis/tmdb';
import configApi from "../../apis/config";

const VideoList = props => {

    const { category } = useParams();

    const [videos, setVidieos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, props.id);
            setVidieos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item} />
                ))
            }
        </>
    )
}

const Video = props => {

    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, [])
    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    )
}

export default VideoList;