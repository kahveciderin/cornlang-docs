Prism.languages.corn = Prism.languages.extend("clike", {
    keyword: /(?:if|else|foreach|while|i0|i3|i4|i5|i6|i7)/,
    //   /(?:if|else|foreach|while)/,
    builtin: /(?:none)/,
    boolean: /\b(?:true|false)\b/,
    operator: /(<=|>=|<|>|&&|\|\||!|=|\+|\-|\*|\/|%|\^|\.\.)+/,
    number: /(?:\b\d+\b)/,
    string: /\".*\"/,
    tag: /(?:fun|=>)/,
    comment: /#.*/
  })
  delete Prism.languages.corn["class-name"]
  