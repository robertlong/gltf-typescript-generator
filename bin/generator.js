#! /usr/bin/env node

const path = require('path');
const fs = require('fs');
const RefParser = require('json-schema-ref-parser');
const Generator = require('json-schema-to-typescript');

const outputPath = process.argv[2] || './GLTF.ts';
const schemaPath = process.argv[3] || 'https://rawgit.com/KhronosGroup/glTF/2.0/specification/2.0/schema/glTF.schema.json';


RefParser.dereference(schemaPath)
  .then((schema) => {
    return Generator.compile(schema)
  })
  .then((interface) => {
    fs.writeFile(outputPath, interface, (err) => {
      if (err) throw err;
      console.log(`Success! \nOutput to ${outputPath}`);
    });
  });