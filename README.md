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

# start

```bash
tsc --init

```