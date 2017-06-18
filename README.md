# Story of a Girl

A Babel plugin that replaces `this` with some lyrics.

Sorry. My hands were tied: https://twitter.com/luke_dot_js/status/876250000187170816

## Usage

I dunno, I barely know what Babel is. I just followed [a blog about it](https://www.sitepoint.com/understanding-asts-building-babel-plugin/).

And at any rate, this is going to be a terrible idea to use in real code. Don't. The license says you can't sue me, right? Talk to your lawyer.

Anyway, run `node run.js example.js` and fiddle w/ `example.js` to see what happens. I assume this does awful things.

```
[colin:story-of-a-girl] [master] $ cat example.js
console.log(this);

function foo() {
  console.log(this);
}
[colin:story-of-a-girl] [master] $ node run.js example.js
console.log("The story of a girl Who cried a river and drowned the whole world And while she looks so sad in photographs I absolutely love her When she smiles");

function foo() {
  console.log("The story of a girl Who cried a river and drowned the whole world And while she looks so sad in photographs I absolutely love her When she smiles");
}
```

## Contributing

Sure, pull requests welcome, why not?
