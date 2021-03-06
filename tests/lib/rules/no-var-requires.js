/**
 * @fileoverview var _ = require(&#39;your favorite fp library&#39;);
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-var-requires"),

    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-var-requires", rule, {

    valid: [
        "import express from 'express';",
        "import httpsServer from './https_server/https_server';"
    ],

    invalid: [
        {
            code: "var express = require('express');",
            errors: [{
                message: "use import instead of require",
                type: "VariableDeclaration"
            }]
        }
    ]
});
