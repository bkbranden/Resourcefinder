import React from 'react';
import Code from './Code';
import '../../static/frontend/css/Matrix.css';
import _ from 'lodash';
import FadeText from './AnimateText';

const Message = () => (
  <div className="MessageWrapper">
    <div id="MESSAGE" className="Message">
    </div>
  </div>
);

const CODE_LINES_COUNT = 100;

const Matrix = () => (
  <div className="Matrix">
    {_.times(CODE_LINES_COUNT).map((_, i) => <Code key={i} />)}
    <Message />
  </div>
);

setTimeout(() => {
  FadeText.applyAnimation('MESSAGE');
}, 500);

export default Matrix;
