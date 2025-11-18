# Data Streams

- When a process start it has 3 types of data streams.
  - stdin -> mostly read the data.
  - stdout -> mostly write the data.
  - stderr -> mostly write the data.
- All are duplex streams.
- We get all this streams in node JS `process` object.

```js
// ReadAble Stream
process.stdin;

// Writable Stream
process.stdout;
process.stderr;
```

- console.log() behind the scenes use stdout stream.
  stderr is similar to stdout and is only used for showing the errors and warnings.

## File Descriptor(fd):

    stdin (standard input)  -> 0
    stdout (standard output)  -> 1
    stderr (standard error)  -> 2
