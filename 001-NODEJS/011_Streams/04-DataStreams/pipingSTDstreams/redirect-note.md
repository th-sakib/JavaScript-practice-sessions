# Rediection with Data Streams
We can redirect one program's `stdout` to another program `stdin`.
using `<` or `<<` or `>` or `>>`
```zsh
node script.js > output.txt # script.js's stdout to output.txt stdin & rewrite the content
node script.js >> output.txt # do same. just append in the end.
node script.js > output.txt 2>> output.txt # append stderr in the last

# we can do the reverse to connect other files stdout with our nodejs stdin
node script.js < output.txt
```
By default it only redirct the `stdout`. But if we want to redirect `stderr`.
we can use `2>` 2 is the file descriptor.
`node script.js 2> output.txt`
