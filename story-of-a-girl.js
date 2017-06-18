module.exports = function(babel) {
  var t = babel.types;
  return {
    visitor: {
      ThisExpression: function(path) {
        path.replaceWithSourceString(
          "\"The story of a girl Who cried a river and drowned the whole world And while she looks so sad in photographs I absolutely love her When she smiles\""
        );
      }
    }
  }
}
