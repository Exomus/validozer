<p align="center">
<img src="https://i.imgur.com/skE2evv.png" alt="Validatozer Logo" />
</p>

<p align="center">
    
[![CircleCI](https://circleci.com/gh/Exomus/validozer.svg?style=shield)](https://circleci.com/gh/Exomus/validozer) 
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Exomus_validozer&metric=alert_status)](https://sonarcloud.io/dashboard?id=Exomus_validozer)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Exomus_validozer&metric=coverage)](https://sonarcloud.io/dashboard?id=Exomus_validozer)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Exomus_validozer&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=Exomus_validozer)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Exomus_validozer&metric=code_smells)](https://sonarcloud.io/dashboard?id=Exomus_validozer)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Exomus_validozer&metric=ncloc)](https://sonarcloud.io/dashboard?id=Exomus_validozer) 

</p>

# validozer
TypeScript runtime validator. Hugely inspired typescript implementation of https://github.com/iluwatar/java-design-patterns

Performs a validation on runtime using a [monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)).

It chains the validation steps to gather all potential failures into one single error, if there is at least one.
You can use a variety of predicate combined with this library, create your own, as long at it responds to the following signature `(t:T) => boolean` on a `Validator<T>`.

# Getting started

## Early build
`npm i git+https://github.com/Exomus/validozer.git#<release version>`

## npm package <img src="https://pbs.twimg.com/media/EDoWJbUXYAArclg.png" width="24" height="24" />

This package needs to be checked before publishing the first version.

# Usage

```typescript
const validatedRequest = Validator.of<Request>(request)
    .validate(request => isDefined(request.name), new Error('The name is not defined'))
    .validate(request => isDefined(request.firstname),  new Error('The firstname is not defined'))
    .validate(request => isEmail(request.email),  new Error('The email is not at the right format'))
    .get();
```

In this example, `isDefined` and `isEmail` are coming from a third party called [class validator](https://github.com/typestack/class-validator)


# Motivation

You could ask yourself what is the purpose of this library when you have the library [class validator](https://github.com/typestack/class-validator)
The main problem about this library is that it depends on how you build your object.

```typescript

class Foo {
    @IsNotEmpty()
    bar: string;
}
const foo : Foo = {
    bar: ''
}

const errors = validate(foo); // Result: []
```

```typescript

class Foo {
    @IsNotEmpty()
    bar: string;
}
const foo : Foo = new Foo();
foo.bar = ''

const errors = validate(foo); // Result: [ ValidationError {...} ]
```

The way to perform it with class-validator is to use the lib class-transformer

```typescript

class Foo {
    @IsNotEmpty()
    bar: string;
}
const foo : Foo = {
    bar: ''
}
let users = plainToClass(Foo, foo)
const errors = validate(foo); // Result: [ ValidationError {...} ]
```

That can be really frustrating because missing this step will lead to the validation of the object
because it is the `new Foo()` which triggers the decorators binding.

While the combo class-validator / class-transformer is really good to check objects
coming from a `JSON.parse()` and in the general way, for deserialization of data coming from the network,
it is a real pain in other contexts.

This repository brings a way to use the monad and still continue to use the check functions of class-validator, and everything
that fulfills the contract of a predicate to build your validation to achieve the contract programmation.
