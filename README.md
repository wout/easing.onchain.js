# easing.onchain.js
A micro JS library (96 bytes) for easing numeric values using various equasions.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials.

![GitHub](https://img.shields.io/github/license/onchainjs/easing.onchain.js)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/onchainjs/easing.onchain.js)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/onchainjs/easing.onchain.js/easing.onchain.js%20CI)

## Usage
Calculate the position of a point between a start and end point:

```js
Ea.se(5, [0, 25])
// => 0.2
```

If the range starts at `0`, use the shorthand version:

```js
Ea.se(5, 25)
// => 0.2
```

In the examples above, the result is `0.2` because, by default, a linear
equasion is used. Pass a custom equasion as the third argument:


```js
Ea.se(5, 25, p => -Math.cos(p * Math.PI) / 2 + 0.5)
// => 0.09549150281252627
```

For convenience, use one of the equasions in the **Equasions** section below:

```js
// Register equasion
Ea.eq['>>'] = p => 1 - Math.sqrt(1 - Math.pow(p, 2))
// Use equasion
Ea.se(5, 25, Ea.eq['>>'])
// => 0.020204102886728803
```

By first registering the equasion in the `Ea.eq` object, you can reuse it many
times later in your code without having to write it out every time.

## Equasions
Below you'll find some useful equasions to get started. If you need more, have
a look at [easings.net](https://easings.net/).

### Sine

#### Ease-in
```js
Ea.eq['<'] = p => -Math.cos(p * Math.PI / 2) + 1
```
![Ease-in Sine](/examples/ease-in-sine.svg)

#### Ease-in-out
```js
Ea.eq['<>'] = p => -Math.cos(p * Math.PI) / 2 + 0.5
```
![Ease-in-out Sine](/examples/ease-in-out-sine.svg)

### Ease-out
```js
Ea.eq['>'] = p => Math.sin(p * Math.PI / 2)
```
![Ease-out Sine](/examples/ease-out-sine.svg)

### Quart

#### Ease-in
```js
Ea.eq['-<'] = p => 1 - Math.pow(1 - p, 4)
```
![Ease-in Quart](/examples/ease-in-quart.svg)

#### Ease-in-out
```js
Ea.eq['-<>-'] = p => p < 0.5 ? 8 * Math.pow(p, 4) : 1 - Math.pow(-2 * p + 2, 4) / 2
```
![Ease-in-out Quart](/examples/ease-in-out-quart.svg)

#### Ease-out
```js
Ea.eq['>-'] = p => Math.pow(p, 4)
```
![Ease-out Quart](/examples/ease-out-quart.svg)

### Quint

#### Ease-in
```js
Ea.eq['--<'] = p => 1 - Math.pow(1 - p, 5)
```
![Ease-in Quint](/examples/ease-in-quint.svg)

#### Ease-in-out
```js
Ea.eq['--<>--'] = p => p < 0.5 ? 8 * Math.pow(p, 5) : 1 - Math.pow(-2 * p + 2, 5) / 2
```
![Ease-in-out Quint](/examples/ease-in-out-quint.svg)

#### Ease-out
```js
Ea.eq['>--'] = p => Math.pow(p, 5)
```
![Ease-out Quint](/examples/ease-out-quint.svg)

### Circ

#### Ease-in
```js
Ea.eq['<<'] = p => 1 - Math.sqrt(1 - Math.pow(p, 2))
```
![Ease-in Circ](/examples/ease-in-circ.svg)

#### Ease-in-out
```js
Ea.eq['<<>>'] = p => p < 0.5
  ? (1 - Math.sqrt(1 - Math.pow(2 * p, 2))) / 2
  : (Math.sqrt(1 - Math.pow(-2 * p + 2, 2)) + 1) / 2
```
![Ease-in-out Circ](/examples/ease-in-out-circ.svg)

#### Ease-out
```js
Ea.eq['>>'] = p => Math.sqrt(1 - Math.pow(p - 1, 2))
```
![Ease-out Circ](/examples/ease-out-circ.svg)

### Elastic

#### Ease-in
```js
Ea.eq['~<'] = p => p == 0 ? 0 : p == 1 ? 1 :
  -Math.pow(2, 10 * p - 10) * Math.sin((p * 10 - 10.75) * ((2 * Math.PI) / 3))
```
![Ease-in Circ](/examples/ease-in-elastic.svg)

#### Ease-in-out
```js
Ea.eq['~<>~'] = p => {
  const c = (2 * Math.PI) / 4.5
  return p == 0 ? 0 : p == 1 ? 1 : p < 0.5 ?
    -(Math.pow(2, 20 * p - 10) * Math.sin((20 * p - 11.125) * c)) / 2 :
    (Math.pow(2, -20 * p + 10) * Math.sin((20 * p - 11.125) * c)) / 2 + 1
}
```
![Ease-in-out Circ](/examples/ease-in-out-elastic.svg)

#### Ease-out
```js
Ea.eq['>~'] = p => x == 0 ? 0 : x == 1 ? 1 :
  Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1
```
![Ease-out Circ](/examples/ease-out-elastic.svg)

## License
easing.onchain.js is licensed under the terms of the MIT License.
