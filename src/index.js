import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dotenv from 'dotenv';
import AppRouter from './routers/AppRouter';
dotenv.config();
ReactDOM.render(<AppRouter />, document.getElementById('root'));
