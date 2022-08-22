import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

import IndecissionApp from './components/IndecissionApp';

ReactDOM.render(<IndecissionApp />, document.getElementById('app'));