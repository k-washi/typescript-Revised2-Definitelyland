# typescript-Revised2-Definitelyland

## Install

```bash
npm install -g typescript

tsc -v
#Version 3.7.5

echo "class Sample {}" > sample.ts
tac sample.ts
tac sample.ts
#var Sample = /** @class */ (function () {
#    function Sample() {
#    }
#    return Sample;
#}());
#cat: tac: No such file or directory
#class Sample {}
```

## install (プロジェクト限定)

```bash
npm install -y
npm install --save-dev typescript
./node_modules/.bin/tsc -v
#Version 3.7.5
```

```bash
npm bin
#PWD/node_modules/.bin
$(npm bin)/tsc -v
#Version 3.7.5
```

# linter

```bash
npm install --save-dev prettier tslint-config-prettier
```

```json:tslint.json
    "extends": [
        "tslint:recommended",
        "tslint-config-prettier"
    ],
```

```json:.prettierrc
{
    "printWidth": 120,
    "trailingComma": "all",
    "singleQuote": true
}
```

```json:package.json
{
  "scripts": {
    "format": "prettier --write src/**/*.ts"
  }
}
```

```bash
npm run format
```

# start

```bash
tsc --init

```