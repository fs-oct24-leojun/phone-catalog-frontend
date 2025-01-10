import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';
  import { App } from './App';
  import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
  import React from 'react';
  
  // TODO: Add more pages to the routing.
  // Remove 'index' from NotFoundPage and replace it with '*'

  export const Root: React.FC = () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
  