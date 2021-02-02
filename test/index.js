import {nlog, ajax} from '../index';

const obj=ajax('../index.js');
nlog(JSON.stringify(obj), 'red');
