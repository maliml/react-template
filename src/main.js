import React from 'react';
import { render } from 'react-dom';

import RootRoutes from './route/index';
import 'antd-mobile/dist/antd-mobile.css';
import './common';
render(<RootRoutes />, window.root);
