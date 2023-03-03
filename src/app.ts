import * as util from 'util';
import { data } from './data';
import { countData } from './countData';
import { filterData } from './filterData';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

const filterPattern = args.filter;
const countFlag = args.count;

if (filterPattern) {
  const filterResult = filterData(data, filterPattern);
  console.log(util.inspect(filterResult, false, null, true));
} else if (countFlag) {
  const countResult = countData(data);
  console.log(util.inspect(countResult, false, null, true));
} else {
  console.log('Not Valid Command');
}
