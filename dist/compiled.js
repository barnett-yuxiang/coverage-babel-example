"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.subtract = subtract;
function cov_4tfuuosba() {
  var path = "/Users/sophia/repo_projects/interview/coverage-babel-example/src/index.ts";
  var hash = "b86474e0875dc0db3709f9a9ff3dba7ba1a64ab8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/sophia/repo_projects/interview/coverage-babel-example/src/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 15
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "add",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 19
          }
        },
        loc: {
          start: {
            line: 1,
            column: 50
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "subtract",
        decl: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 24
          }
        },
        loc: {
          start: {
            line: 5,
            column: 55
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b86474e0875dc0db3709f9a9ff3dba7ba1a64ab8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_4tfuuosba = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_4tfuuosba();
function add(a, b) {
  cov_4tfuuosba().f[0]++;
  cov_4tfuuosba().s[0]++;
  return a + b;
}
function subtract(a, b) {
  cov_4tfuuosba().f[1]++;
  cov_4tfuuosba().s[1]++;
  return a - b;
}