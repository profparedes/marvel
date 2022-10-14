import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Character from 'pages/Character';
import Comic from 'pages/Comic';
import Comics from 'pages/Comics';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id/:name" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id/:title" element={<Comic />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
