import React from "react";
import { NotFound } from "../components/NotFound";
import { Inicio } from "../components/Inicio";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Overview } from "../views/Overview";
import { Vistas } from "../views/Vistas";
import { EventDetails } from "../views/EventDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Buscador } from "../components/Buscador";

export const EventoRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Inicio/><Footer/></>}/>
        <Route path="/events" element={<Layout> <Overview/> </Layout>}/>
        <Route path="/events/search" element={<Layout><Buscador/></Layout>}/>
        <Route path="/events/:eventId" element={<Layout> <EventDetails /></Layout>}/>
        <Route path="/events/tipos/:tipos" element={<Layout><Vistas /></Layout>}/>
        <Route path="*" element={<Layout><NotFound/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({children}) => (
  <>
      <Header></Header>
      {children}
      <Footer />
  </>
);

;

