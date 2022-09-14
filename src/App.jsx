import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/about/About';
import Events from './pages/events/Events';
import SingleEvent from './pages/singleEvent/SingleEvent';
import ScrollToTop from './components/ui/ScrollToTop';
import News from './pages/news/News';
import SingleNew from './pages/singleNew/SingleNew';
import Causes from './pages/causes/Causes';
import CausesCard from './components/CausesCard/CausesCard';
import SingleCause from './pages/singleCause/SingleCause';
import Contacts from './pages/contacts/Contacts';

function App() {

  let [searchQuery, setsearchQuery] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop/>

        <Header/>

        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/events'} element={<Events/>}/>
          <Route path={'/events/:id'} element={<SingleEvent/>}/>
          <Route path={'/news'} element={<News searchQuery={searchQuery} setsearchQuery={setsearchQuery} />}/>
          <Route path={'/news/:id'} element={<SingleNew/>}/>
          <Route path={'/causes'} element={<Causes searchQuery={searchQuery} setsearchQuery={setsearchQuery} />}/>
          <Route path={'/causes/:id'} element={<SingleCause/>}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;