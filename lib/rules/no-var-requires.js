/**
 * @fileoverview var _ = require('your favorite fp library');
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {
        "VariableDeclaration": function(node) {
          node.declarations.forEach(function(variableDeclarator) {
            if(variableDeclarator.init.type == 'CallExpression' &&
               variableDeclarator.init.callee.name == 'require') {                   
              context.report(node, 'use import instead of require');
            }
          });
        }
    };

};

module.exports.schema = [];