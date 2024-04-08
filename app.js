import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from './src/components/Header';
import BodyComponent from './src/components/Body';

const AppLayout=()=>(
  <div className='app '>
     <HeaderComponent/>
     <BodyComponent/>
  </div>
)

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)
