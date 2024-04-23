#!/usr/bin/env node

import greetUser from '../src/cli.js';
import arithmeticProgression from '../src/progression.js';

const name = greetUser();
arithmeticProgression(name);
