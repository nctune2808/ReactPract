import React, { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../apis/tmdb';
import configApi from '../../apis/config';

import './hero-slide.scss';
import { useHistory } from 'react-router';

const HeroSlide = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async() => {
            const params = {page: 1}
            try{
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(0, 4));
                console.log(response);
            } catch {
                console.log('error');
            }
        }

        getMovies();
    }, [])
    return(
        <div className="hero-slide">
            HeroSlide
        </div>
    );
}

export default HeroSlide;