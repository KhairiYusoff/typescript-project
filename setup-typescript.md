# Setting Up a TypeScript Project

To set up a TypeScript project, follow these steps:

## 1. Install TypeScript

Install TypeScript as a development dependency in your project:

`npm install typescript --save-dev`

## 2. Create a tsconfig.json

Generate a TypeScript configuration file using the following command:

`npx tsc --init`

The tsconfig.json file is used to configure TypeScript's behavior and compilation options.

## 3. Compile in Watch Mode

Start the TypeScript compiler in watch mode to automatically compile TypeScript files into JavaScript when saved:

`npx tsc --watch `

`nodemon --exec ts-node basics.ts` - use this

## 4. Start Writing TypeScript

You're now ready to start writing TypeScript code in your project! Simply create or edit .ts or .tsx files, and the TypeScript compiler will handle the compilation process for you.

## 5. Customize tsconfig.json (Optional)

Feel free to customize the tsconfig.json file to match your project's requirements. You can adjust various settings such as target version, module system, strictness, and more.

## 6. Integration with Tools and Frameworks

If you're using frameworks like React, Next.js, or Vite, they often have TypeScript support built in. Refer to their documentation for any additional steps needed to configure TypeScript for your specific project.

Happy coding with TypeScript!
