import React from "react";
import Sidebar from "#components/Sidebar";
import Header from "#components/Header";
import Realtors from "#components/Realtors";
import Features from "#components/Features";
import StoryPictures from "#components/StoryPictures";
import StoryContent from "#components/StoryContent";
import Homes from "#components/Homes";
import Gallery from "#components/Gallery";
import Footer from "#components/Footer";
import {
  fetchFeatures,
  fetchRealtors,
  fetchHomes,
  fetchGallery
} from "#actions";

const HomePage = () => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
};

const loadData = store => {
  store.dispatch(fetchFeatures());
  store.dispatch(fetchRealtors());
  store.dispatch(fetchHomes());
  store.dispatch(fetchGallery());
};

export default {
  loadData,
  component: HomePage
};
