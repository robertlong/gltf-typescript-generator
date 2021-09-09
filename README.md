# GLTF Typescript Interface Generator

Command line utility for generating a typescript interface from the current GLTF 2.0
JSON Schema.

## Usage

```
npm install -g gltf-typescript-generator
gltf-typescript-generator ./GLTF.ts
```

### Using a custom path to the GLTF schema
```
gltf-typescript-generator ./GLTF.d.ts https://raw.githubusercontent.com/KhronosGroup/glTF/master/specification/2.0/schema/glTF.schema.json
```
