import React, { Component } from "react";
import Slider from "react-slick";
const getPosterUrl = (posterPath) => {
    return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`
}

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
};


const MovieCard = ({ poster_path }) => {
    return (
        <>
            <Slider {...settings} className=" px-5 container border rounded">
                <div className=" ">
                    <img src={getPosterUrl(poster_path)} className="" />
                </div>
            </Slider>
        </>
    )

}

export default MovieCard;