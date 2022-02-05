//import { Component } from "react";
import React from 'react';
import '../App.css';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer"; 
import HeroSection from '../components/Hero/Hero';
import AppCard from "../components/CardComponent/AppCard";
import ImgCarousel from "../components/ImgCarousel/ImgCarousel";
import TxtCarousel from "../components/TxtCarousel/TxtCarousel";
import ServiceSection from "../components/ServiceCol/ServiceSec";
import { Slide } from 'react-reveal';
import Clients from '../components/ClientList/ClientList';


export default function Home () {
        return (
            <div className="bodyWrapper">
                <NavBar />
                <Slide bottom>
                    <HeroSection />

                    <ServiceSection />

                    <ImgCarousel />
                    
                    <AppCard />

                    <TxtCarousel />

                    <Clients />

                    <Footer />
                </ Slide>
            </div>
        );
}