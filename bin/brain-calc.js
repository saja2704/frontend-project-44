#!/usr/bin/env node
import greetUser from '../src/cli.js';
import sumNumbers from '../src/sumNumbers.js';

const name = greetUser();
sumNumbers(name);
