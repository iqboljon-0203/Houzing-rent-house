import React from 'react';
import ReactDOM from 'react-dom/client';
import RootContext from './context';
import './index.css';
import 'antd/dist/reset.css';
import Root from './root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<RootContext>
    	<Root></Root>
    </RootContext>
  </React.StrictMode>
);

