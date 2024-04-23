#!/usr/bin/env node

import theLargestCommonDivisor from '../src/gcd.js';
import greetUser from '../src/cli.js';

const name = greetUser();
theLargestCommonDivisor(name);
