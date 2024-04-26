#!/usr/bin/env node
import greetUser from '../src/cli.js';
import isPrimeNumber from '../src/isPrimeNumber.js';

const name = greetUser();
isPrimeNumber(name);
