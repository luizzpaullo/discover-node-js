/**
 * MÓDULOS NATIVOS DO NODE
 */

// Como exibir arquivo localizado
const path = require('path')
console.log(path.basename(__filename))

/**
 * MÓDULOS CRIADOS OU DE TERCEIROS
 */
const myModule = require('./exports')
console.log(myModule)
