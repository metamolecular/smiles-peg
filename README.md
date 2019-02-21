# SMILES PEG

A tiny package that parses SMILES strings to an abstract syntax tree. Taken from the parser from [smilesDrawer](https://github.com/reymond-group/smilesDrawer).

Example usage:

```js
import parse from 'smiles-peg';

const tree = parse('c1ccccc1');
```

Opening this package with VS Code/MacOS will result in 100% CPU usage. Sublime Text is a good alternative.