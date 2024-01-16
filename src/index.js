import React from "react";
import * as ReactDomClient from 'react-dom/client';
import App from './AppReact'

import './css/global.css'

const app = ReactDomClient.createRoot(document.getElementById('root'))

app.render(<App/>)