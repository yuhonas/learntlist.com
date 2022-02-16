// const API = require('aws-amplify')
// const createLearnt = require('../src/graphql/mutations')
import { Amplify, API } from 'aws-amplify';
import { createLearnt } from '../src/graphql/mutations.js';
import awsconfig from '../src/aws-exports.mjs';
import * as fs from 'fs'

Amplify.configure(awsconfig);

let seeds = process.argv[2].trim()

const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');

readFileLines(seeds).forEach((line, index, arr) => {
  if(line) {
    try {
      console.log( `- Importing '${line}'`)
      API.graphql({
        query: createLearnt,
        variables: {
          input: {
            url: line.trim()
          }
        }
      })
    } catch (err) {
      console.log({ err });
    }
  }
})
