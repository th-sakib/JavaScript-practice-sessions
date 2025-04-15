# 40 Days of JavaScript Challenge

Welcome to the 40 Days of JavaScript Challenge! This repository contains daily practice tasks and a comprehensive cheat sheet covering JavaScript fundamentals, modern tools, and useful coding practices.

---

## Table of Contents

- [Introduction](#introduction)
- [What is JavaScript?](#what-is-javascript)
- [History](#history)
- [Pre-JavaScript Technologies](#pre-javascript-technologies)
- [Development Environment](#development-environment)
- [VS Code Extensions & Tools](#vscode-extensions--tools)
- [Cheat Sheet Topics](#cheat-sheet-topics)
  - [Basic Concepts](#basic-concepts)
  - [Data Types](#data-types)
  - [Variables](#variables)
  - [Template Literals](#template-literals)
  - [Comments](#comments)
  - [Operators](#operators)
  - [Conditional Statements](#conditional-statements)
  - [Loops](#loops)
  - [Functions](#functions)
  - [Arrow Functions](#arrow-functions)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Destructuring & Spreading](#destructuring--spreading)
  - [Mutability vs Immutability](#mutability-vs-immutability)
  - [Date, Math, and String Objects](#date-math-and-string-objects)
  - [Type Conversion](#type-conversion)
  - [JSON](#json)
  - [Error Handling](#error-handling)
  - [Web Storage & Cookies](#web-storage--cookies)
  - [Regular Expressions](#regular-expressions)
- [Additional Resources](#additional-resources)

---

## Introduction

This repo is dedicated to improving your JavaScript skills through daily practice. Each day, you'll find exercises and topics designed to reinforce both foundational and advanced JavaScript concepts.

---

## What is JavaScript?

- **Popular Web Programming Language**
- Scripting language that is lightweight and cross-platform
- Uses an object-oriented syntax
- Runs on web browsers

---

## History

JavaScript was developed in September 1995 by Brendan Eich at Netscape. Originally named _Mocha_, it was quickly renamed to _LiveScript_ and then to _JavaScript_.

[Learn more about Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)

---

## Pre-JavaScript Technologies

Before diving into JavaScript, make sure you are familiar with:

- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **Tailwind CSS**
- **GitHub** (for version control)

---

## Development Environment

To set up your environment for this challenge, ensure you have:

- **VS Code** configured with essential extensions
- **Node.js** installed
- **Git** installed for version control

---

## VS Code Extensions & Tools

Some recommended extensions:

- Auto Close Tag
- Auto Rename Tag
- Beautify
- Live Server
- Auto-Save on Window Change
- Auto Import
- Path Autocomplete
- ES7+ React/Redux/React-Native snippets
- Prettier Code Formatter
- Material Icon Theme
- Bracket Pair Colorize
- ESLint
- JavaScript (ES6) code snippets

**Themes:** Night Owl, Dracula, Monokai, etc.

**Dev Fonts:** [Download Link](https://drive.google.com/file/d/1Nq_WhC34hg5xJt949gCtQGmbPGEcMxSt/view?fbclid=IwAR2ZCDy6W5AeEwmb7vR5ezHfDi3OX-RFqSJbntRJ5HoWv-WNAxkzLzEV8Bw)

---

## Cheat Sheet Topics

### Basic Concepts

- **Script Inclusion:**

  - **Inline:** `<script> // code </script>`
  - **Internal:** Using a `<script>` tag inside your HTML file.
  - **External:** `<script src="app.js"></script>`

- **Browser Dev Tools:**
  - Use `console.log()` to print outputs.
  - Run code in terminal or browser console.

---

### Data Types

- **Primitive Types:** String, Number (int, float), Boolean, Undefined, Null
- **Complex Types:** Arrays, Objects

---

### Variables

- Declaration Keywords: `var`, `let`, `const`
- **Rules:**
  - Names can include letters, digits, underscores, and dollar signs.
  - Must start with a letter, `$`, or `_`.
  - Case sensitive and cannot use reserved words.

---

### Template Literals

- Use backticks (`` ` ``) to create template strings.
- **Example:**
  ```js
  const name = "World";
  console.log(`Hello, ${name}!`);
  ```
