/**
 * @typedef ASCIIDraw
 * @property {string} author
 * @property {string} draw
 */

/**
 * @type {Array.<ASCIIDraw>}
 * List of draws.
 */
const draws = [
  {
    author: 'Hayley Jane Wakenshaw',
    draw: `     .-''-.
    / ,    \\
 .-'\`(o)    ;
'-==.       |
     \`._...-;-.
      )--"""   \`-.
     /   .        \`-.
    /   /      \`.    \`-.
    |   \\    ;   \\      \`-._________
    |    \\    \`.\`.;          -------\`.
     \\    \`-.   \\\\\\\\          \`---...|
      \`.     \`-. \`\`\`\\.--'._   \`---...|
        \`-.....7\`-.))\\     \`-._\`-.. /
          \`._\\ /   \`-\`         \`-.,'
            / /
           /=(_
        -./--' \`
      ,^-(_
      ,--' \``
  },
  {
    author: 'Joan Stark',
    draw: `                          .---.
                         /  (o \_
                         | -='.'"\`
                         )   (
                     _.=\`     \\
                 _.=\`.   -.    |
            .===:._ ' '.   ;   |
 ________,.='\`^~""\`\`"====-'   ,'
'-========-""'"-=..,,,_____,.'
                      \`\\ \`\\
                     ,-'==,\\ 
                          ,-\`==;`
  }
]

exports.draws = draws

/**
 * Return a random draw.
 * @returns {ASCIIDraw}
 */
const randomDraw = () => draws[~~(Math.random() * draws.length)]

exports.randomDraw = randomDraw

exports.default = randomDraw()
