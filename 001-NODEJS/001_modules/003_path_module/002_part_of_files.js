import path, { resolve } from "path";

// ============= path.basename() ==================
// This returns the last part of the direcotory
const basename = path.basename(import.meta.filename); // 002_part_of_files.js

// for understanding this method
const basenameExample = path.basename("/home/incognith/dotfiles/bash/abcd.txt"); // abcd.txt
const basenameExampleDir = path.basename("/home/incognith/dotfiles/bash"); // bash
const basenameExampleDir2 = path.basename("/home/incognith/dotfiles/bash/"); // bash

// ============== path.extname() =============
// returns extention of a file
const extname = path.extname("/home/incognith/dotfiles/bash/asdf.js"); // .js
const extname2 = path.extname("/home/incognith/dotfiles/bash/asdf.jsss"); // .jsss
const extname3 = path.extname("/home/incognith/dotfiles/bash/asdf.json"); // .jsss

// ============== path.join() =============
//* Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

const joining1 = path.join("/home/incognith/dotfiles/bash/", "asfd"); //* /home/incognith/dotfiles/bash/asfd
const joining2 = path.join(
  "/home/incognith/dotfiles/bash/",
  "asfd",
  "nnnnnn.lasd",
); //* /home/incognith/dotfiles/bash/asfd/nnnnnn.lasd

// ============== path.resolve() =============
// this returns an absolute path for the file regardless of the OS

const resolved1 = path.resolve("file.txt");
const resolved2 = path.resolve("file", "text.txt");

// ============== path.parse() =============
// Returns an object whose properties represent significant elements of the path.
const parsed = path.parse("/home/incognith/dotfiles/bash/");
/*
  {
    root: '/',
    dir: '/home/incognith/main/JavaScript-practice-sessions/001-NODEJS/001_modules',
    base: '003_path_module',
    ext: '',
    name: '003_path_module'
  }
  */
