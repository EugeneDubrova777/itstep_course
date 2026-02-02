import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Catalog from '../pages/Catalog';
import Menu from './Menu';
import Portfolio from '../pages/Portfolio';
import Sites from '../pages/Sites';

function App() {
  let urls = [
    {
      path: '/',
      element: <Main />,
      title: 'Main'
    },
    {
      path: '/about',
      element: <About />,
      title: 'About'
    },
    {
      path: '/catalog',
      element: <Catalog />,
      title: 'Catalog'
    }
  ];

  let routes = urls.map(url => {
    return (<Route path={url.path} element={url.element} />)
  })
  return (
    <>
    <BrowserRouter>
      <Menu links={urls} />
      <Routes>
        {routes}
        <Route path="/portfolio" element={<Portfolio />}>
          <Route path="sites" element={<Sites />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;