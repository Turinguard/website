export default {
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams | undefined",
          "schema": {
            "kind": "enum",
            "type": "QueryBuilderParams | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "QueryBuilderParams",
                "schema": {
                  "first": {
                    "name": "first",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  },
                  "skip": {
                    "name": "skip",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "number | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "number"
                      }
                    }
                  },
                  "limit": {
                    "name": "limit",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number | undefined",
                    "schema": "number | undefined"
                  },
                  "only": {
                    "name": "only",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string[] | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "array",
                          "type": "string[]",
                          "schema": [
                            "string"
                          ]
                        }
                      }
                    }
                  },
                  "without": {
                    "name": "without",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[] | undefined",
                    "schema": "string[] | undefined"
                  },
                  "sort": {
                    "name": "sort",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "SortOptions[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "SortOptions[] | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "array",
                          "type": "SortOptions[]",
                          "schema": [
                            {
                              "kind": "enum",
                              "type": "SortOptions",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "SortParams",
                                  "schema": {
                                    "$locale": {
                                      "name": "$locale",
                                      "global": false,
                                      "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "undefined"
                                        }
                                      ],
                                      "required": false,
                                      "type": "string | undefined",
                                      "schema": {
                                        "kind": "enum",
                                        "type": "string | undefined",
                                        "schema": {
                                          "0": "undefined",
                                          "1": "string"
                                        }
                                      }
                                    },
                                    "$numeric": {
                                      "name": "$numeric",
                                      "global": false,
                                      "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "false"
                                        }
                                      ],
                                      "required": false,
                                      "type": "boolean | undefined",
                                      "schema": "boolean | undefined"
                                    },
                                    "$caseFirst": {
                                      "name": "$caseFirst",
                                      "global": false,
                                      "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "\"depends on locale\""
                                        }
                                      ],
                                      "required": false,
                                      "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                      "schema": {
                                        "kind": "enum",
                                        "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                        "schema": {
                                          "0": "undefined",
                                          "1": "\"upper\"",
                                          "2": "\"lower\"",
                                          "3": "\"false\""
                                        }
                                      }
                                    },
                                    "$sensitivity": {
                                      "name": "$sensitivity",
                                      "global": false,
                                      "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "\"variant\""
                                        }
                                      ],
                                      "required": false,
                                      "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                      "schema": {
                                        "kind": "enum",
                                        "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                        "schema": {
                                          "0": "undefined",
                                          "1": "\"base\"",
                                          "2": "\"accent\"",
                                          "3": "\"case\"",
                                          "4": "\"variant\""
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "kind": "object",
                                  "type": "SortFields",
                                  "schema": {}
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  },
                  "where": {
                    "name": "where",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "QueryBuilderWhere[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "QueryBuilderWhere[] | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "array",
                          "type": "QueryBuilderWhere[]",
                          "schema": [
                            {
                              "kind": "object",
                              "type": "QueryBuilderWhere",
                              "schema": {
                                "$and": {
                                  "name": "$and",
                                  "global": false,
                                  "description": "Match only if all of nested conditions are true",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "QueryBuilderWhere[] | undefined",
                                  "schema": "QueryBuilderWhere[] | undefined"
                                },
                                "$or": {
                                  "name": "$or",
                                  "global": false,
                                  "description": "Match if any of nested conditions is true",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "QueryBuilderWhere[] | undefined",
                                  "schema": "QueryBuilderWhere[] | undefined"
                                },
                                "$not": {
                                  "name": "$not",
                                  "global": false,
                                  "description": "Match is condition is false",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "number",
                                      "3": "false",
                                      "4": "true",
                                      "5": {
                                        "kind": "object",
                                        "type": "RegExp",
                                        "schema": {}
                                      },
                                      "6": "QueryBuilderWhere"
                                    }
                                  }
                                },
                                "$eq": {
                                  "name": "$eq",
                                  "global": false,
                                  "description": "Match if item equals condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | number | boolean | RegExp | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "number",
                                      "3": "false",
                                      "4": "true",
                                      "5": "RegExp"
                                    }
                                  }
                                },
                                "$ne": {
                                  "name": "$ne",
                                  "global": false,
                                  "description": "Match if item not equals condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | undefined",
                                  "schema": "string | number | boolean | RegExp | undefined"
                                },
                                "$gt": {
                                  "name": "$gt",
                                  "global": false,
                                  "description": "Check if item is greater than condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$gte": {
                                  "name": "$gte",
                                  "global": false,
                                  "description": "Check if item is greater than or equal to condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$lt": {
                                  "name": "$lt",
                                  "global": false,
                                  "description": "Check if item is less than condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$lte": {
                                  "name": "$lte",
                                  "global": false,
                                  "description": "Check if item is less than or equal to condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$regex": {
                                  "name": "$regex",
                                  "global": false,
                                  "description": "Provides regular expression capabilities for pattern matching strings.",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | RegExp | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | RegExp | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "RegExp"
                                    }
                                  }
                                },
                                "$type": {
                                  "name": "$type",
                                  "global": false,
                                  "description": "Match if type of item equals condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | undefined",
                                  "schema": "string | undefined"
                                },
                                "$exists": {
                                  "name": "$exists",
                                  "global": false,
                                  "description": "Check key existence",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "boolean | undefined",
                                  "schema": "boolean | undefined"
                                },
                                "$contains": {
                                  "name": "$contains",
                                  "global": false,
                                  "description": "Match if item contains every condition or match every rule in condition array",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "number",
                                      "3": "false",
                                      "4": "true",
                                      "5": {
                                        "kind": "array",
                                        "type": "(string | number | boolean)[]",
                                        "schema": [
                                          {
                                            "kind": "enum",
                                            "type": "string | number | boolean",
                                            "schema": [
                                              "string",
                                              "number",
                                              "false",
                                              "true"
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                "$containsAny": {
                                  "name": "$containsAny",
                                  "global": false,
                                  "description": "Match if item contains at least one rule from condition array",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "(string | number | boolean)[] | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "(string | number | boolean)[] | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "(string | number | boolean)[]"
                                    }
                                  }
                                },
                                "$icontains": {
                                  "name": "$icontains",
                                  "global": false,
                                  "description": "Ignore case contains",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | undefined",
                                  "schema": "string | undefined"
                                },
                                "$in": {
                                  "name": "$in",
                                  "global": false,
                                  "description": "Match if item is in condition array",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | (string | number | boolean)[] | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | (string | number | boolean)[] | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "(string | number | boolean)[]"
                                    }
                                  }
                                },
                                "_id": {
                                  "name": "_id",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_source": {
                                  "name": "_source",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_path": {
                                  "name": "_path",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "title": {
                                  "name": "title",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_draft": {
                                  "name": "_draft",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_partial": {
                                  "name": "_partial",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_locale": {
                                  "name": "_locale",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_type": {
                                  "name": "_type",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_file": {
                                  "name": "_file",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_extension": {
                                  "name": "_extension",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "surround": {
                    "name": "surround",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "object",
                          "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; }",
                          "schema": {
                            "query": {
                              "name": "query",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": true,
                              "type": "string | QueryBuilderWhere",
                              "schema": {
                                "kind": "enum",
                                "type": "string | QueryBuilderWhere",
                                "schema": {
                                  "0": "string",
                                  "1": "QueryBuilderWhere"
                                }
                              }
                            },
                            "before": {
                              "name": "before",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "after": {
                              "name": "after",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "head",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ doc: ParsedContent; refresh: () => Promise<void>; }",
            "schema": {
              "doc": {
                "name": "doc",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent",
                "schema": {
                  "kind": "object",
                  "type": "ParsedContent",
                  "schema": {
                    "excerpt": {
                      "name": "excerpt",
                      "global": false,
                      "description": "Excerpt",
                      "tags": [],
                      "required": false,
                      "type": "MarkdownRoot | undefined",
                      "schema": {
                        "kind": "enum",
                        "type": "MarkdownRoot | undefined",
                        "schema": {
                          "0": "undefined",
                          "1": {
                            "kind": "object",
                            "type": "MarkdownRoot",
                            "schema": {
                              "type": {
                                "name": "type",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "\"root\"",
                                "schema": "\"root\""
                              },
                              "children": {
                                "name": "children",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": true,
                                "type": "MarkdownNode[]",
                                "schema": {
                                  "kind": "array",
                                  "type": "MarkdownNode[]",
                                  "schema": {
                                    "0": {
                                      "kind": "object",
                                      "type": "MarkdownNode",
                                      "schema": {
                                        "type": {
                                          "name": "type",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "schema": "string"
                                        },
                                        "tag": {
                                          "name": "tag",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string | undefined",
                                          "schema": {
                                            "kind": "enum",
                                            "type": "string | undefined",
                                            "schema": {
                                              "0": "undefined",
                                              "1": "string"
                                            }
                                          }
                                        },
                                        "value": {
                                          "name": "value",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "string | undefined",
                                          "schema": "string | undefined"
                                        },
                                        "props": {
                                          "name": "props",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any> | undefined",
                                          "schema": {
                                            "kind": "enum",
                                            "type": "Record<string, any> | undefined",
                                            "schema": {
                                              "0": "undefined",
                                              "1": "Record<string, any>"
                                            }
                                          }
                                        },
                                        "content": {
                                          "name": "content",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "any",
                                          "schema": "any"
                                        },
                                        "children": {
                                          "name": "children",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "MarkdownNode[] | undefined",
                                          "schema": {
                                            "kind": "enum",
                                            "type": "MarkdownNode[] | undefined",
                                            "schema": {
                                              "0": "undefined",
                                              "1": "MarkdownNode[]"
                                            }
                                          }
                                        },
                                        "attributes": {
                                          "name": "attributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any> | undefined",
                                          "schema": "Record<string, any> | undefined"
                                        },
                                        "fmAttributes": {
                                          "name": "fmAttributes",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": false,
                                          "type": "Record<string, any> | undefined",
                                          "schema": "Record<string, any> | undefined"
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "props": {
                                "name": "props",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Record<string, any> | undefined",
                                "schema": "Record<string, any> | undefined"
                              },
                              "toc": {
                                "name": "toc",
                                "global": false,
                                "description": "",
                                "tags": [],
                                "required": false,
                                "type": "Toc | undefined",
                                "schema": {
                                  "kind": "enum",
                                  "type": "Toc | undefined",
                                  "schema": {
                                    "0": "undefined",
                                    "1": {
                                      "kind": "object",
                                      "type": "Toc",
                                      "schema": {
                                        "title": {
                                          "name": "title",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "string",
                                          "schema": "string"
                                        },
                                        "depth": {
                                          "name": "depth",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "number",
                                          "schema": "number"
                                        },
                                        "searchDepth": {
                                          "name": "searchDepth",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "number",
                                          "schema": "number"
                                        },
                                        "links": {
                                          "name": "links",
                                          "global": false,
                                          "description": "",
                                          "tags": [],
                                          "required": true,
                                          "type": "TocLink[]",
                                          "schema": {
                                            "kind": "array",
                                            "type": "TocLink[]",
                                            "schema": {
                                              "0": {
                                                "kind": "object",
                                                "type": "TocLink",
                                                "schema": {
                                                  "id": {
                                                    "name": "id",
                                                    "global": false,
                                                    "description": "",
                                                    "tags": [],
                                                    "required": true,
                                                    "type": "string",
                                                    "schema": "string"
                                                  },
                                                  "text": {
                                                    "name": "text",
                                                    "global": false,
                                                    "description": "",
                                                    "tags": [],
                                                    "required": true,
                                                    "type": "string",
                                                    "schema": "string"
                                                  },
                                                  "depth": {
                                                    "name": "depth",
                                                    "global": false,
                                                    "description": "",
                                                    "tags": [],
                                                    "required": true,
                                                    "type": "number",
                                                    "schema": "number"
                                                  },
                                                  "children": {
                                                    "name": "children",
                                                    "global": false,
                                                    "description": "",
                                                    "tags": [],
                                                    "required": false,
                                                    "type": "TocLink[] | undefined",
                                                    "schema": {
                                                      "kind": "enum",
                                                      "type": "TocLink[] | undefined",
                                                      "schema": {
                                                        "0": "undefined",
                                                        "1": "TocLink[]"
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "body": {
                      "name": "body",
                      "global": false,
                      "description": "Content body",
                      "tags": [],
                      "required": true,
                      "type": "MarkdownRoot | null",
                      "schema": {
                        "kind": "enum",
                        "type": "MarkdownRoot | null",
                        "schema": {
                          "0": "null",
                          "1": "MarkdownRoot"
                        }
                      }
                    },
                    "layout": {
                      "name": "layout",
                      "global": false,
                      "description": "Layout",
                      "tags": [],
                      "required": false,
                      "type": "any",
                      "schema": "any"
                    },
                    "_id": {
                      "name": "_id",
                      "global": false,
                      "description": "Content id",
                      "tags": [],
                      "required": true,
                      "type": "string",
                      "schema": "string"
                    },
                    "_source": {
                      "name": "_source",
                      "global": false,
                      "description": "Content source",
                      "tags": [],
                      "required": false,
                      "type": "string | undefined",
                      "schema": "string | undefined"
                    },
                    "_path": {
                      "name": "_path",
                      "global": false,
                      "description": "Content path, this path is source agnostic and it the content my live in any source",
                      "tags": [],
                      "required": false,
                      "type": "string | undefined",
                      "schema": "string | undefined"
                    },
                    "title": {
                      "name": "title",
                      "global": false,
                      "description": "Content title",
                      "tags": [],
                      "required": false,
                      "type": "string | undefined",
                      "schema": "string | undefined"
                    },
                    "_draft": {
                      "name": "_draft",
                      "global": false,
                      "description": "Content draft status",
                      "tags": [],
                      "required": false,
                      "type": "boolean | undefined",
                      "schema": {
                        "kind": "enum",
                        "type": "boolean | undefined",
                        "schema": {
                          "0": "undefined",
                          "1": "false",
                          "2": "true"
                        }
                      }
                    },
                    "_partial": {
                      "name": "_partial",
                      "global": false,
                      "description": "Content partial status",
                      "tags": [],
                      "required": false,
                      "type": "boolean | undefined",
                      "schema": "boolean | undefined"
                    },
                    "_locale": {
                      "name": "_locale",
                      "global": false,
                      "description": "Content locale",
                      "tags": [],
                      "required": false,
                      "type": "string | undefined",
                      "schema": "string | undefined"
                    },
                    "_type": {
                      "name": "_type",
                      "global": false,
                      "description": "File type of the content, i.e `markdown`",
                      "tags": [],
                      "required": false,
                      "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                      "schema": {
                        "kind": "enum",
                        "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                        "schema": {
                          "0": "undefined",
                          "1": "\"markdown\"",
                          "2": "\"yaml\"",
                          "3": "\"json\"",
                          "4": "\"csv\""
                        }
                      }
                    },
                    "_file": {
                      "name": "_file",
                      "global": false,
                      "description": "Path to the file relative to the content directory",
                      "tags": [],
                      "required": false,
                      "type": "string | undefined",
                      "schema": "string | undefined"
                    },
                    "_extension": {
                      "name": "_extension",
                      "global": false,
                      "description": "Extension of the file",
                      "tags": [],
                      "required": false,
                      "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                      "schema": {
                        "kind": "enum",
                        "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                        "schema": {
                          "0": "undefined",
                          "1": "\"yaml\"",
                          "2": "\"json\"",
                          "3": "\"csv\"",
                          "4": "\"md\"",
                          "5": "\"yml\"",
                          "6": "\"json5\""
                        }
                      }
                    }
                  }
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[] | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[] | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[] | undefined",
                "schema": {
                  "kind": "event",
                  "type": "(context: { doc: ParsedContent; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[] | undefined",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "query",
          "type": "QueryBuilderParams",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "boolean | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "false",
                    "2": "true"
                  }
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "number | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "number"
                  }
                }
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number | undefined",
                "schema": "number | undefined"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[] | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "string[] | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "array",
                      "type": "string[]",
                      "schema": [
                        "string"
                      ]
                    }
                  }
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[] | undefined",
                "schema": "string[] | undefined"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[] | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "SortOptions[] | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "array",
                      "type": "SortOptions[]",
                      "schema": [
                        {
                          "kind": "enum",
                          "type": "SortOptions",
                          "schema": [
                            {
                              "kind": "object",
                              "type": "SortParams",
                              "schema": {
                                "$locale": {
                                  "name": "$locale",
                                  "global": false,
                                  "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "undefined"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string"
                                    }
                                  }
                                },
                                "$numeric": {
                                  "name": "$numeric",
                                  "global": false,
                                  "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "false"
                                    }
                                  ],
                                  "required": false,
                                  "type": "boolean | undefined",
                                  "schema": "boolean | undefined"
                                },
                                "$caseFirst": {
                                  "name": "$caseFirst",
                                  "global": false,
                                  "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"depends on locale\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "\"upper\"",
                                      "2": "\"lower\"",
                                      "3": "\"false\""
                                    }
                                  }
                                },
                                "$sensitivity": {
                                  "name": "$sensitivity",
                                  "global": false,
                                  "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"variant\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "\"base\"",
                                      "2": "\"accent\"",
                                      "3": "\"case\"",
                                      "4": "\"variant\""
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "kind": "object",
                              "type": "SortFields",
                              "schema": {}
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[] | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "QueryBuilderWhere[] | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "array",
                      "type": "QueryBuilderWhere[]",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "QueryBuilderWhere",
                          "schema": {
                            "$and": {
                              "name": "$and",
                              "global": false,
                              "description": "Match only if all of nested conditions are true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[] | undefined",
                              "schema": "QueryBuilderWhere[] | undefined"
                            },
                            "$or": {
                              "name": "$or",
                              "global": false,
                              "description": "Match if any of nested conditions is true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[] | undefined",
                              "schema": "QueryBuilderWhere[] | undefined"
                            },
                            "$not": {
                              "name": "$not",
                              "global": false,
                              "description": "Match is condition is false",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "number",
                                  "3": "false",
                                  "4": "true",
                                  "5": {
                                    "kind": "object",
                                    "type": "RegExp",
                                    "schema": {}
                                  },
                                  "6": "QueryBuilderWhere"
                                }
                              }
                            },
                            "$eq": {
                              "name": "$eq",
                              "global": false,
                              "description": "Match if item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "number",
                                  "3": "false",
                                  "4": "true",
                                  "5": "RegExp"
                                }
                              }
                            },
                            "$ne": {
                              "name": "$ne",
                              "global": false,
                              "description": "Match if item not equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | undefined",
                              "schema": "string | number | boolean | RegExp | undefined"
                            },
                            "$gt": {
                              "name": "$gt",
                              "global": false,
                              "description": "Check if item is greater than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$gte": {
                              "name": "$gte",
                              "global": false,
                              "description": "Check if item is greater than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$lt": {
                              "name": "$lt",
                              "global": false,
                              "description": "Check if item is less than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$lte": {
                              "name": "$lte",
                              "global": false,
                              "description": "Check if item is less than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$regex": {
                              "name": "$regex",
                              "global": false,
                              "description": "Provides regular expression capabilities for pattern matching strings.",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | RegExp | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | RegExp | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "RegExp"
                                }
                              }
                            },
                            "$type": {
                              "name": "$type",
                              "global": false,
                              "description": "Match if type of item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | undefined",
                              "schema": "string | undefined"
                            },
                            "$exists": {
                              "name": "$exists",
                              "global": false,
                              "description": "Check key existence",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "boolean | undefined",
                              "schema": "boolean | undefined"
                            },
                            "$contains": {
                              "name": "$contains",
                              "global": false,
                              "description": "Match if item contains every condition or match every rule in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "number",
                                  "3": "false",
                                  "4": "true",
                                  "5": {
                                    "kind": "array",
                                    "type": "(string | number | boolean)[]",
                                    "schema": [
                                      {
                                        "kind": "enum",
                                        "type": "string | number | boolean",
                                        "schema": [
                                          "string",
                                          "number",
                                          "false",
                                          "true"
                                        ]
                                      }
                                    ]
                                  }
                                }
                              }
                            },
                            "$containsAny": {
                              "name": "$containsAny",
                              "global": false,
                              "description": "Match if item contains at least one rule from condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "(string | number | boolean)[] | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "(string | number | boolean)[] | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "(string | number | boolean)[]"
                                }
                              }
                            },
                            "$icontains": {
                              "name": "$icontains",
                              "global": false,
                              "description": "Ignore case contains",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | undefined",
                              "schema": "string | undefined"
                            },
                            "$in": {
                              "name": "$in",
                              "global": false,
                              "description": "Match if item is in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | (string | number | boolean)[] | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | (string | number | boolean)[] | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "(string | number | boolean)[]"
                                }
                              }
                            },
                            "_id": {
                              "name": "_id",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_source": {
                              "name": "_source",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_path": {
                              "name": "_path",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "title": {
                              "name": "title",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_draft": {
                              "name": "_draft",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_partial": {
                              "name": "_partial",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_locale": {
                              "name": "_locale",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_type": {
                              "name": "_type",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_file": {
                              "name": "_file",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_extension": {
                              "name": "_extension",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "object",
                      "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; }",
                      "schema": {
                        "query": {
                          "name": "query",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string | QueryBuilderWhere",
                          "schema": {
                            "kind": "enum",
                            "type": "string | QueryBuilderWhere",
                            "schema": {
                              "0": "string",
                              "1": "QueryBuilderWhere"
                            }
                          }
                        },
                        "before": {
                          "name": "before",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number | undefined",
                          "schema": "number | undefined"
                        },
                        "after": {
                          "name": "after",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number | undefined",
                          "schema": "number | undefined"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "head",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "tag",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        }
      ]
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "path",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        },
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "QueryBuilderParams | undefined",
          "schema": {
            "kind": "enum",
            "type": "QueryBuilderParams | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "QueryBuilderParams",
                "schema": {
                  "first": {
                    "name": "first",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  },
                  "skip": {
                    "name": "skip",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "number | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "number"
                      }
                    }
                  },
                  "limit": {
                    "name": "limit",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "number | undefined",
                    "schema": "number | undefined"
                  },
                  "only": {
                    "name": "only",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "string[] | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "array",
                          "type": "string[]",
                          "schema": [
                            "string"
                          ]
                        }
                      }
                    }
                  },
                  "without": {
                    "name": "without",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "string[] | undefined",
                    "schema": "string[] | undefined"
                  },
                  "sort": {
                    "name": "sort",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "SortOptions[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "SortOptions[] | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "array",
                          "type": "SortOptions[]",
                          "schema": [
                            {
                              "kind": "enum",
                              "type": "SortOptions",
                              "schema": [
                                {
                                  "kind": "object",
                                  "type": "SortParams",
                                  "schema": {
                                    "$locale": {
                                      "name": "$locale",
                                      "global": false,
                                      "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "undefined"
                                        }
                                      ],
                                      "required": false,
                                      "type": "string | undefined",
                                      "schema": {
                                        "kind": "enum",
                                        "type": "string | undefined",
                                        "schema": {
                                          "0": "undefined",
                                          "1": "string"
                                        }
                                      }
                                    },
                                    "$numeric": {
                                      "name": "$numeric",
                                      "global": false,
                                      "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "false"
                                        }
                                      ],
                                      "required": false,
                                      "type": "boolean | undefined",
                                      "schema": "boolean | undefined"
                                    },
                                    "$caseFirst": {
                                      "name": "$caseFirst",
                                      "global": false,
                                      "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "\"depends on locale\""
                                        }
                                      ],
                                      "required": false,
                                      "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                      "schema": {
                                        "kind": "enum",
                                        "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                        "schema": {
                                          "0": "undefined",
                                          "1": "\"upper\"",
                                          "2": "\"lower\"",
                                          "3": "\"false\""
                                        }
                                      }
                                    },
                                    "$sensitivity": {
                                      "name": "$sensitivity",
                                      "global": false,
                                      "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                                      "tags": [
                                        {
                                          "name": "default",
                                          "text": "\"variant\""
                                        }
                                      ],
                                      "required": false,
                                      "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                      "schema": {
                                        "kind": "enum",
                                        "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                        "schema": {
                                          "0": "undefined",
                                          "1": "\"base\"",
                                          "2": "\"accent\"",
                                          "3": "\"case\"",
                                          "4": "\"variant\""
                                        }
                                      }
                                    }
                                  }
                                },
                                {
                                  "kind": "object",
                                  "type": "SortFields",
                                  "schema": {}
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  },
                  "where": {
                    "name": "where",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "QueryBuilderWhere[] | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "QueryBuilderWhere[] | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "array",
                          "type": "QueryBuilderWhere[]",
                          "schema": [
                            {
                              "kind": "object",
                              "type": "QueryBuilderWhere",
                              "schema": {
                                "$and": {
                                  "name": "$and",
                                  "global": false,
                                  "description": "Match only if all of nested conditions are true",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "QueryBuilderWhere[] | undefined",
                                  "schema": "QueryBuilderWhere[] | undefined"
                                },
                                "$or": {
                                  "name": "$or",
                                  "global": false,
                                  "description": "Match if any of nested conditions is true",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "QueryBuilderWhere[] | undefined",
                                  "schema": "QueryBuilderWhere[] | undefined"
                                },
                                "$not": {
                                  "name": "$not",
                                  "global": false,
                                  "description": "Match is condition is false",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "number",
                                      "3": "false",
                                      "4": "true",
                                      "5": {
                                        "kind": "object",
                                        "type": "RegExp",
                                        "schema": {}
                                      },
                                      "6": "QueryBuilderWhere"
                                    }
                                  }
                                },
                                "$eq": {
                                  "name": "$eq",
                                  "global": false,
                                  "description": "Match if item equals condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | number | boolean | RegExp | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "number",
                                      "3": "false",
                                      "4": "true",
                                      "5": "RegExp"
                                    }
                                  }
                                },
                                "$ne": {
                                  "name": "$ne",
                                  "global": false,
                                  "description": "Match if item not equals condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | undefined",
                                  "schema": "string | number | boolean | RegExp | undefined"
                                },
                                "$gt": {
                                  "name": "$gt",
                                  "global": false,
                                  "description": "Check if item is greater than condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$gte": {
                                  "name": "$gte",
                                  "global": false,
                                  "description": "Check if item is greater than or equal to condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$lt": {
                                  "name": "$lt",
                                  "global": false,
                                  "description": "Check if item is less than condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$lte": {
                                  "name": "$lte",
                                  "global": false,
                                  "description": "Check if item is less than or equal to condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "number | undefined",
                                  "schema": "number | undefined"
                                },
                                "$regex": {
                                  "name": "$regex",
                                  "global": false,
                                  "description": "Provides regular expression capabilities for pattern matching strings.",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | RegExp | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | RegExp | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "RegExp"
                                    }
                                  }
                                },
                                "$type": {
                                  "name": "$type",
                                  "global": false,
                                  "description": "Match if type of item equals condition",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | undefined",
                                  "schema": "string | undefined"
                                },
                                "$exists": {
                                  "name": "$exists",
                                  "global": false,
                                  "description": "Check key existence",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "boolean | undefined",
                                  "schema": "boolean | undefined"
                                },
                                "$contains": {
                                  "name": "$contains",
                                  "global": false,
                                  "description": "Match if item contains every condition or match every rule in condition array",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "number",
                                      "3": "false",
                                      "4": "true",
                                      "5": {
                                        "kind": "array",
                                        "type": "(string | number | boolean)[]",
                                        "schema": [
                                          {
                                            "kind": "enum",
                                            "type": "string | number | boolean",
                                            "schema": [
                                              "string",
                                              "number",
                                              "false",
                                              "true"
                                            ]
                                          }
                                        ]
                                      }
                                    }
                                  }
                                },
                                "$containsAny": {
                                  "name": "$containsAny",
                                  "global": false,
                                  "description": "Match if item contains at least one rule from condition array",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "(string | number | boolean)[] | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "(string | number | boolean)[] | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "(string | number | boolean)[]"
                                    }
                                  }
                                },
                                "$icontains": {
                                  "name": "$icontains",
                                  "global": false,
                                  "description": "Ignore case contains",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | undefined",
                                  "schema": "string | undefined"
                                },
                                "$in": {
                                  "name": "$in",
                                  "global": false,
                                  "description": "Match if item is in condition array",
                                  "tags": [
                                    {
                                      "name": "example",
                                      "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | (string | number | boolean)[] | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | (string | number | boolean)[] | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string",
                                      "2": "(string | number | boolean)[]"
                                    }
                                  }
                                },
                                "_id": {
                                  "name": "_id",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_source": {
                                  "name": "_source",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_path": {
                                  "name": "_path",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "title": {
                                  "name": "title",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_draft": {
                                  "name": "_draft",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_partial": {
                                  "name": "_partial",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_locale": {
                                  "name": "_locale",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_type": {
                                  "name": "_type",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_file": {
                                  "name": "_file",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                },
                                "_extension": {
                                  "name": "_extension",
                                  "global": false,
                                  "description": "",
                                  "tags": [],
                                  "required": false,
                                  "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                  "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "surround": {
                    "name": "surround",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": {
                          "kind": "object",
                          "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; }",
                          "schema": {
                            "query": {
                              "name": "query",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": true,
                              "type": "string | QueryBuilderWhere",
                              "schema": {
                                "kind": "enum",
                                "type": "string | QueryBuilderWhere",
                                "schema": {
                                  "0": "string",
                                  "1": "QueryBuilderWhere"
                                }
                              }
                            },
                            "before": {
                              "name": "before",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "after": {
                              "name": "after",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ list: ParsedContent[]; refresh: () => Promise<void>; }",
            "schema": {
              "list": {
                "name": "list",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "ParsedContent[]",
                "schema": {
                  "kind": "array",
                  "type": "ParsedContent[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "ParsedContent",
                      "schema": {
                        "excerpt": {
                          "name": "excerpt",
                          "global": false,
                          "description": "Excerpt",
                          "tags": [],
                          "required": false,
                          "type": "MarkdownRoot | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "MarkdownRoot | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": {
                                "kind": "object",
                                "type": "MarkdownRoot",
                                "schema": {
                                  "type": {
                                    "name": "type",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "\"root\"",
                                    "schema": "\"root\""
                                  },
                                  "children": {
                                    "name": "children",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "MarkdownNode[]",
                                    "schema": {
                                      "kind": "array",
                                      "type": "MarkdownNode[]",
                                      "schema": {
                                        "0": {
                                          "kind": "object",
                                          "type": "MarkdownNode",
                                          "schema": {
                                            "type": {
                                              "name": "type",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "string",
                                              "schema": "string"
                                            },
                                            "tag": {
                                              "name": "tag",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "string | undefined",
                                              "schema": {
                                                "kind": "enum",
                                                "type": "string | undefined",
                                                "schema": {
                                                  "0": "undefined",
                                                  "1": "string"
                                                }
                                              }
                                            },
                                            "value": {
                                              "name": "value",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "string | undefined",
                                              "schema": "string | undefined"
                                            },
                                            "props": {
                                              "name": "props",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "Record<string, any> | undefined",
                                              "schema": {
                                                "kind": "enum",
                                                "type": "Record<string, any> | undefined",
                                                "schema": {
                                                  "0": "undefined",
                                                  "1": "Record<string, any>"
                                                }
                                              }
                                            },
                                            "content": {
                                              "name": "content",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "any",
                                              "schema": "any"
                                            },
                                            "children": {
                                              "name": "children",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "MarkdownNode[] | undefined",
                                              "schema": {
                                                "kind": "enum",
                                                "type": "MarkdownNode[] | undefined",
                                                "schema": {
                                                  "0": "undefined",
                                                  "1": "MarkdownNode[]"
                                                }
                                              }
                                            },
                                            "attributes": {
                                              "name": "attributes",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "Record<string, any> | undefined",
                                              "schema": "Record<string, any> | undefined"
                                            },
                                            "fmAttributes": {
                                              "name": "fmAttributes",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "Record<string, any> | undefined",
                                              "schema": "Record<string, any> | undefined"
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "props": {
                                    "name": "props",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": "Record<string, any> | undefined"
                                  },
                                  "toc": {
                                    "name": "toc",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Toc | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "Toc | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": {
                                          "kind": "object",
                                          "type": "Toc",
                                          "schema": {
                                            "title": {
                                              "name": "title",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "string",
                                              "schema": "string"
                                            },
                                            "depth": {
                                              "name": "depth",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "number",
                                              "schema": "number"
                                            },
                                            "searchDepth": {
                                              "name": "searchDepth",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "number",
                                              "schema": "number"
                                            },
                                            "links": {
                                              "name": "links",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "TocLink[]",
                                              "schema": {
                                                "kind": "array",
                                                "type": "TocLink[]",
                                                "schema": {
                                                  "0": {
                                                    "kind": "object",
                                                    "type": "TocLink",
                                                    "schema": {
                                                      "id": {
                                                        "name": "id",
                                                        "global": false,
                                                        "description": "",
                                                        "tags": [],
                                                        "required": true,
                                                        "type": "string",
                                                        "schema": "string"
                                                      },
                                                      "text": {
                                                        "name": "text",
                                                        "global": false,
                                                        "description": "",
                                                        "tags": [],
                                                        "required": true,
                                                        "type": "string",
                                                        "schema": "string"
                                                      },
                                                      "depth": {
                                                        "name": "depth",
                                                        "global": false,
                                                        "description": "",
                                                        "tags": [],
                                                        "required": true,
                                                        "type": "number",
                                                        "schema": "number"
                                                      },
                                                      "children": {
                                                        "name": "children",
                                                        "global": false,
                                                        "description": "",
                                                        "tags": [],
                                                        "required": false,
                                                        "type": "TocLink[] | undefined",
                                                        "schema": {
                                                          "kind": "enum",
                                                          "type": "TocLink[] | undefined",
                                                          "schema": {
                                                            "0": "undefined",
                                                            "1": "TocLink[]"
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "body": {
                          "name": "body",
                          "global": false,
                          "description": "Content body",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownRoot | null",
                          "schema": {
                            "kind": "enum",
                            "type": "MarkdownRoot | null",
                            "schema": {
                              "0": "null",
                              "1": "MarkdownRoot"
                            }
                          }
                        },
                        "layout": {
                          "name": "layout",
                          "global": false,
                          "description": "Layout",
                          "tags": [],
                          "required": false,
                          "type": "any",
                          "schema": "any"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "Content id",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "schema": "string"
                        },
                        "_source": {
                          "name": "_source",
                          "global": false,
                          "description": "Content source",
                          "tags": [],
                          "required": false,
                          "type": "string | undefined",
                          "schema": "string | undefined"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "Content path, this path is source agnostic and it the content my live in any source",
                          "tags": [],
                          "required": false,
                          "type": "string | undefined",
                          "schema": "string | undefined"
                        },
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "Content title",
                          "tags": [],
                          "required": false,
                          "type": "string | undefined",
                          "schema": "string | undefined"
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "Content draft status",
                          "tags": [],
                          "required": false,
                          "type": "boolean | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "boolean | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": "false",
                              "2": "true"
                            }
                          }
                        },
                        "_partial": {
                          "name": "_partial",
                          "global": false,
                          "description": "Content partial status",
                          "tags": [],
                          "required": false,
                          "type": "boolean | undefined",
                          "schema": "boolean | undefined"
                        },
                        "_locale": {
                          "name": "_locale",
                          "global": false,
                          "description": "Content locale",
                          "tags": [],
                          "required": false,
                          "type": "string | undefined",
                          "schema": "string | undefined"
                        },
                        "_type": {
                          "name": "_type",
                          "global": false,
                          "description": "File type of the content, i.e `markdown`",
                          "tags": [],
                          "required": false,
                          "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": "\"markdown\"",
                              "2": "\"yaml\"",
                              "3": "\"json\"",
                              "4": "\"csv\""
                            }
                          }
                        },
                        "_file": {
                          "name": "_file",
                          "global": false,
                          "description": "Path to the file relative to the content directory",
                          "tags": [],
                          "required": false,
                          "type": "string | undefined",
                          "schema": "string | undefined"
                        },
                        "_extension": {
                          "name": "_extension",
                          "global": false,
                          "description": "Extension of the file",
                          "tags": [],
                          "required": false,
                          "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": "\"yaml\"",
                              "2": "\"json\"",
                              "3": "\"csv\"",
                              "4": "\"md\"",
                              "5": "\"yml\"",
                              "6": "\"json5\""
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "refresh": {
                "name": "refresh",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "() => Promise<void>",
                "schema": {
                  "kind": "event",
                  "type": "(): Promise<void>"
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[] | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: (context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { ...; }>[] | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[] | undefined",
                "schema": {
                  "kind": "event",
                  "type": "(context: { list: ParsedContent[]; refresh: () => Promise<void>; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[] | undefined",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "path",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "query",
          "type": "QueryBuilderParams",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "QueryBuilderParams",
            "schema": {
              "first": {
                "name": "first",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "boolean | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "boolean | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "false",
                    "2": "true"
                  }
                }
              },
              "skip": {
                "name": "skip",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "number | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "number"
                  }
                }
              },
              "limit": {
                "name": "limit",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "number | undefined",
                "schema": "number | undefined"
              },
              "only": {
                "name": "only",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[] | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "string[] | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "array",
                      "type": "string[]",
                      "schema": [
                        "string"
                      ]
                    }
                  }
                }
              },
              "without": {
                "name": "without",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "string[] | undefined",
                "schema": "string[] | undefined"
              },
              "sort": {
                "name": "sort",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "SortOptions[] | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "SortOptions[] | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "array",
                      "type": "SortOptions[]",
                      "schema": [
                        {
                          "kind": "enum",
                          "type": "SortOptions",
                          "schema": [
                            {
                              "kind": "object",
                              "type": "SortParams",
                              "schema": {
                                "$locale": {
                                  "name": "$locale",
                                  "global": false,
                                  "description": "Locale specifier for sorting\nA string with a BCP 47 language tag",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "undefined"
                                    }
                                  ],
                                  "required": false,
                                  "type": "string | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "string | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "string"
                                    }
                                  }
                                },
                                "$numeric": {
                                  "name": "$numeric",
                                  "global": false,
                                  "description": "Whether numeric collation should be used, such that \"1\" < \"2\" < \"10\".\nPossible values are `true` and `false`;",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "false"
                                    }
                                  ],
                                  "required": false,
                                  "type": "boolean | undefined",
                                  "schema": "boolean | undefined"
                                },
                                "$caseFirst": {
                                  "name": "$caseFirst",
                                  "global": false,
                                  "description": "Whether upper case or lower case should sort first.\nPossible values are `\"upper\"`, `\"lower\"`, or `\"false\"`",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"depends on locale\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"upper\" | \"lower\" | \"false\" | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "\"upper\"",
                                      "2": "\"lower\"",
                                      "3": "\"false\""
                                    }
                                  }
                                },
                                "$sensitivity": {
                                  "name": "$sensitivity",
                                  "global": false,
                                  "description": "Which differences in the strings should lead to non-zero result values. Possible values are:\n - \"base\": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A.\n - \"accent\": Only strings that differ in base letters or accents and other diacritic marks compare as unequal. Examples: a ≠ b, a ≠ á, a = A.\n - \"case\": Only strings that differ in base letters or case compare as unequal. Examples: a ≠ b, a = á, a ≠ A.\n - \"variant\": Strings that differ in base letters, accents and other diacritic marks, or case compare as unequal. Other differences may also be taken into consideration. Examples: a ≠ b, a ≠ á, a ≠ A.",
                                  "tags": [
                                    {
                                      "name": "default",
                                      "text": "\"variant\""
                                    }
                                  ],
                                  "required": false,
                                  "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                  "schema": {
                                    "kind": "enum",
                                    "type": "\"base\" | \"accent\" | \"case\" | \"variant\" | undefined",
                                    "schema": {
                                      "0": "undefined",
                                      "1": "\"base\"",
                                      "2": "\"accent\"",
                                      "3": "\"case\"",
                                      "4": "\"variant\""
                                    }
                                  }
                                }
                              }
                            },
                            {
                              "kind": "object",
                              "type": "SortFields",
                              "schema": {}
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              },
              "where": {
                "name": "where",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "QueryBuilderWhere[] | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "QueryBuilderWhere[] | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "array",
                      "type": "QueryBuilderWhere[]",
                      "schema": [
                        {
                          "kind": "object",
                          "type": "QueryBuilderWhere",
                          "schema": {
                            "$and": {
                              "name": "$and",
                              "global": false,
                              "description": "Match only if all of nested conditions are true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $and: [\n   { score: { $gte: 5 } },\n   { score: { $lte: 10 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[] | undefined",
                              "schema": "QueryBuilderWhere[] | undefined"
                            },
                            "$or": {
                              "name": "$or",
                              "global": false,
                              "description": "Match if any of nested conditions is true",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n $or: [\n   { score: { $gt: 5 } },\n   { score: { $lt: 3 } }\n ]\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "QueryBuilderWhere[] | undefined",
                              "schema": "QueryBuilderWhere[] | undefined"
                            },
                            "$not": {
                              "name": "$not",
                              "global": false,
                              "description": "Match is condition is false",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $not: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "number",
                                  "3": "false",
                                  "4": "true",
                                  "5": {
                                    "kind": "object",
                                    "type": "RegExp",
                                    "schema": {}
                                  },
                                  "6": "QueryBuilderWhere"
                                }
                              }
                            },
                            "$eq": {
                              "name": "$eq",
                              "global": false,
                              "description": "Match if item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $eq: 'Hello World'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | RegExp | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "number",
                                  "3": "false",
                                  "4": "true",
                                  "5": "RegExp"
                                }
                              }
                            },
                            "$ne": {
                              "name": "$ne",
                              "global": false,
                              "description": "Match if item not equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $ne: 100\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | RegExp | undefined",
                              "schema": "string | number | boolean | RegExp | undefined"
                            },
                            "$gt": {
                              "name": "$gt",
                              "global": false,
                              "description": "Check if item is greater than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$gte": {
                              "name": "$gte",
                              "global": false,
                              "description": "Check if item is greater than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $gte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$lt": {
                              "name": "$lt",
                              "global": false,
                              "description": "Check if item is less than condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lt: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$lte": {
                              "name": "$lte",
                              "global": false,
                              "description": "Check if item is less than or equal to condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n score: {\n   $lte: 99.5\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "number | undefined",
                              "schema": "number | undefined"
                            },
                            "$regex": {
                              "name": "$regex",
                              "global": false,
                              "description": "Provides regular expression capabilities for pattern matching strings.",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $regex: /^foo/\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | RegExp | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | RegExp | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "RegExp"
                                }
                              }
                            },
                            "$type": {
                              "name": "$type",
                              "global": false,
                              "description": "Match if type of item equals condition",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n field: {\n   $type: 'boolean'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | undefined",
                              "schema": "string | undefined"
                            },
                            "$exists": {
                              "name": "$exists",
                              "global": false,
                              "description": "Check key existence",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n tag: {\n   $exists: false\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "boolean | undefined",
                              "schema": "boolean | undefined"
                            },
                            "$contains": {
                              "name": "$contains",
                              "global": false,
                              "description": "Match if item contains every condition or match every rule in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $contains: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | number | boolean | (string | number | boolean)[] | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "number",
                                  "3": "false",
                                  "4": "true",
                                  "5": {
                                    "kind": "array",
                                    "type": "(string | number | boolean)[]",
                                    "schema": [
                                      {
                                        "kind": "enum",
                                        "type": "string | number | boolean",
                                        "schema": [
                                          "string",
                                          "number",
                                          "false",
                                          "true"
                                        ]
                                      }
                                    ]
                                  }
                                }
                              }
                            },
                            "$containsAny": {
                              "name": "$containsAny",
                              "global": false,
                              "description": "Match if item contains at least one rule from condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $containsAny: ['Hello', 'World']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "(string | number | boolean)[] | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "(string | number | boolean)[] | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "(string | number | boolean)[]"
                                }
                              }
                            },
                            "$icontains": {
                              "name": "$icontains",
                              "global": false,
                              "description": "Ignore case contains",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n title: {\n   $icontains: 'hello world'\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | undefined",
                              "schema": "string | undefined"
                            },
                            "$in": {
                              "name": "$in",
                              "global": false,
                              "description": "Match if item is in condition array",
                              "tags": [
                                {
                                  "name": "example",
                                  "text": "```ts\nqueryContent().where({\n category: {\n   $in: ['sport', 'nature', 'travel']\n }\n})\n```"
                                }
                              ],
                              "required": false,
                              "type": "string | (string | number | boolean)[] | undefined",
                              "schema": {
                                "kind": "enum",
                                "type": "string | (string | number | boolean)[] | undefined",
                                "schema": {
                                  "0": "undefined",
                                  "1": "string",
                                  "2": "(string | number | boolean)[]"
                                }
                              }
                            },
                            "_id": {
                              "name": "_id",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_source": {
                              "name": "_source",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_path": {
                              "name": "_path",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "title": {
                              "name": "title",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_draft": {
                              "name": "_draft",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_partial": {
                              "name": "_partial",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_locale": {
                              "name": "_locale",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_type": {
                              "name": "_type",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_file": {
                              "name": "_file",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            },
                            "_extension": {
                              "name": "_extension",
                              "global": false,
                              "description": "",
                              "tags": [],
                              "required": false,
                              "type": "string | number | boolean | RegExp | QueryBuilderWhere | undefined",
                              "schema": "string | number | boolean | RegExp | QueryBuilderWhere | undefined"
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              },
              "surround": {
                "name": "surround",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; } | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "object",
                      "type": "{ query: string | QueryBuilderWhere; before?: number | undefined; after?: number | undefined; }",
                      "schema": {
                        "query": {
                          "name": "query",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string | QueryBuilderWhere",
                          "schema": {
                            "kind": "enum",
                            "type": "string | QueryBuilderWhere",
                            "schema": {
                              "0": "string",
                              "1": "QueryBuilderWhere"
                            }
                          }
                        },
                        "before": {
                          "name": "before",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number | undefined",
                          "schema": "number | undefined"
                        },
                        "after": {
                          "name": "after",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "number | undefined",
                          "schema": "number | undefined"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "query",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "any",
          "schema": "any"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{ navigation: NavItem[]; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{ navigation: NavItem[]; }",
            "schema": {
              "navigation": {
                "name": "navigation",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "NavItem[]",
                "schema": {
                  "kind": "array",
                  "type": "NavItem[]",
                  "schema": {
                    "0": {
                      "kind": "object",
                      "type": "NavItem",
                      "schema": {
                        "title": {
                          "name": "title",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "schema": "string"
                        },
                        "_path": {
                          "name": "_path",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "string",
                          "schema": "string"
                        },
                        "_id": {
                          "name": "_id",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "string | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "string | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": "string"
                            }
                          }
                        },
                        "_draft": {
                          "name": "_draft",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "boolean | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "boolean | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": "false",
                              "2": "true"
                            }
                          }
                        },
                        "children": {
                          "name": "children",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "NavItem[] | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "NavItem[] | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": "NavItem[]"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[] | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default: ({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { ...; }>[] | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": true,
                "type": "({ navigation }: { navigation: NavItem[]; }) => VNode<RendererNode, RendererElement, { [key: string]: any; }>[] | undefined",
                "schema": {
                  "kind": "event",
                  "type": "({ navigation }: { navigation: NavItem[]; }): VNode<RendererNode, RendererElement, { [key: string]: any; }>[] | undefined",
                  "schema": {}
                }
              }
            }
          }
        },
        {
          "name": "query",
          "type": "any",
          "description": "",
          "schema": "any"
        },
        {
          "name": "navigation",
          "type": "NavItem[] | null",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "NavItem[] | null",
            "schema": {
              "0": "null",
              "1": {
                "kind": "array",
                "type": "NavItem[]",
                "schema": [
                  {
                    "kind": "object",
                    "type": "NavItem",
                    "schema": {
                      "title": {
                        "name": "title",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "schema": "string"
                      },
                      "_path": {
                        "name": "_path",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": true,
                        "type": "string",
                        "schema": "string"
                      },
                      "_id": {
                        "name": "_id",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": false,
                        "type": "string | undefined",
                        "schema": {
                          "kind": "enum",
                          "type": "string | undefined",
                          "schema": {
                            "0": "undefined",
                            "1": "string"
                          }
                        }
                      },
                      "_draft": {
                        "name": "_draft",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": false,
                        "type": "boolean | undefined",
                        "schema": {
                          "kind": "enum",
                          "type": "boolean | undefined",
                          "schema": {
                            "0": "undefined",
                            "1": "false",
                            "2": "true"
                          }
                        }
                      },
                      "children": {
                        "name": "children",
                        "global": false,
                        "description": "",
                        "tags": [],
                        "required": false,
                        "type": "NavItem[] | undefined",
                        "schema": {
                          "kind": "enum",
                          "type": "NavItem[] | undefined",
                          "schema": {
                            "0": "undefined",
                            "1": "NavItem[]"
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ]
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 0,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Record<string, any>"
            }
          },
          "default": "{}"
        },
        {
          "name": "tag",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"div\""
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          },
          "default": "false"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "tag",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        }
      ]
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "Content to render",
          "tags": [],
          "required": true,
          "type": "Record<string, any>",
          "schema": "Record<string, any>"
        },
        {
          "name": "tag",
          "global": false,
          "description": "Root tag to use for rendering",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"div\""
        },
        {
          "name": "excerpt",
          "global": false,
          "description": "Render only the excerpt",
          "tags": [],
          "required": false,
          "type": "boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "false",
              "2": "true"
            }
          },
          "default": "false"
        },
        {
          "name": "components",
          "global": false,
          "description": "The map of custom components to use for rendering.",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Record<string, any>"
            }
          },
          "default": "{}"
        },
        {
          "name": "data",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Record<string, any> | undefined",
          "schema": {
            "kind": "enum",
            "type": "Record<string, any> | undefined",
            "schema": {
              "0": "undefined",
              "1": "Record<string, any>"
            }
          },
          "default": "{}"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "tag",
          "type": "string",
          "description": "Root tag to use for rendering",
          "schema": "string"
        },
        {
          "name": "excerpt",
          "type": "boolean",
          "description": "Render only the excerpt",
          "schema": {
            "kind": "enum",
            "type": "boolean",
            "schema": {
              "0": "false",
              "1": "true"
            }
          }
        },
        {
          "name": "components",
          "type": "Record<string, any>",
          "description": "The map of custom components to use for rendering.",
          "schema": "Record<string, any>"
        },
        {
          "name": "data",
          "type": "Record<string, any>",
          "description": "",
          "schema": "Record<string, any>"
        },
        {
          "name": "value",
          "type": "Record<string, any>",
          "description": "Content to render",
          "schema": "Record<string, any>"
        }
      ]
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "unwrap",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "false",
              "3": "true"
            }
          },
          "default": "false"
        },
        {
          "name": "use",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Function | undefined",
          "schema": {
            "kind": "enum",
            "type": "Function | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "Function",
                "schema": {}
              }
            }
          },
          "default": "void 0"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "unwrap",
          "type": "string | boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": {
              "0": "string",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "use",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {}
          }
        }
      ]
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "value",
          "global": false,
          "description": "",
          "tags": [],
          "required": true,
          "type": "ParsedContent",
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "MarkdownRoot | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "object",
                      "type": "MarkdownRoot",
                      "schema": {
                        "type": {
                          "name": "type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "\"root\"",
                          "schema": "\"root\""
                        },
                        "children": {
                          "name": "children",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownNode[]",
                          "schema": {
                            "kind": "array",
                            "type": "MarkdownNode[]",
                            "schema": {
                              "0": {
                                "kind": "object",
                                "type": "MarkdownNode",
                                "schema": {
                                  "type": {
                                    "name": "type",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "schema": "string"
                                  },
                                  "tag": {
                                    "name": "tag",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "string | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "string | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": "string"
                                      }
                                    }
                                  },
                                  "value": {
                                    "name": "value",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "string | undefined",
                                    "schema": "string | undefined"
                                  },
                                  "props": {
                                    "name": "props",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "Record<string, any> | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": "Record<string, any>"
                                      }
                                    }
                                  },
                                  "content": {
                                    "name": "content",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "any",
                                    "schema": "any"
                                  },
                                  "children": {
                                    "name": "children",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "MarkdownNode[] | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "MarkdownNode[] | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": "MarkdownNode[]"
                                      }
                                    }
                                  },
                                  "attributes": {
                                    "name": "attributes",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": "Record<string, any> | undefined"
                                  },
                                  "fmAttributes": {
                                    "name": "fmAttributes",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": "Record<string, any> | undefined"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "props": {
                          "name": "props",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "Record<string, any> | undefined",
                          "schema": "Record<string, any> | undefined"
                        },
                        "toc": {
                          "name": "toc",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "Toc | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "Toc | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": {
                                "kind": "object",
                                "type": "Toc",
                                "schema": {
                                  "title": {
                                    "name": "title",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "schema": "string"
                                  },
                                  "depth": {
                                    "name": "depth",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "schema": "number"
                                  },
                                  "searchDepth": {
                                    "name": "searchDepth",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "schema": "number"
                                  },
                                  "links": {
                                    "name": "links",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "TocLink[]",
                                    "schema": {
                                      "kind": "array",
                                      "type": "TocLink[]",
                                      "schema": {
                                        "0": {
                                          "kind": "object",
                                          "type": "TocLink",
                                          "schema": {
                                            "id": {
                                              "name": "id",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "string",
                                              "schema": "string"
                                            },
                                            "text": {
                                              "name": "text",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "string",
                                              "schema": "string"
                                            },
                                            "depth": {
                                              "name": "depth",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "number",
                                              "schema": "number"
                                            },
                                            "children": {
                                              "name": "children",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "TocLink[] | undefined",
                                              "schema": {
                                                "kind": "enum",
                                                "type": "TocLink[] | undefined",
                                                "schema": {
                                                  "0": "undefined",
                                                  "1": "TocLink[]"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot | null",
                "schema": {
                  "kind": "enum",
                  "type": "MarkdownRoot | null",
                  "schema": {
                    "0": "null",
                    "1": "MarkdownRoot"
                  }
                }
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "any",
                "schema": "any"
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "boolean | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "false",
                    "2": "true"
                  }
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean | undefined",
                "schema": "boolean | undefined"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "\"markdown\"",
                    "2": "\"yaml\"",
                    "3": "\"json\"",
                    "4": "\"csv\""
                  }
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "\"yaml\"",
                    "2": "\"json\"",
                    "3": "\"csv\"",
                    "4": "\"md\"",
                    "5": "\"yml\"",
                    "6": "\"json5\""
                  }
                }
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "value",
          "type": "ParsedContent",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "ParsedContent",
            "schema": {
              "excerpt": {
                "name": "excerpt",
                "global": false,
                "description": "Excerpt",
                "tags": [],
                "required": false,
                "type": "MarkdownRoot | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "MarkdownRoot | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "object",
                      "type": "MarkdownRoot",
                      "schema": {
                        "type": {
                          "name": "type",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "\"root\"",
                          "schema": "\"root\""
                        },
                        "children": {
                          "name": "children",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": true,
                          "type": "MarkdownNode[]",
                          "schema": {
                            "kind": "array",
                            "type": "MarkdownNode[]",
                            "schema": {
                              "0": {
                                "kind": "object",
                                "type": "MarkdownNode",
                                "schema": {
                                  "type": {
                                    "name": "type",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "schema": "string"
                                  },
                                  "tag": {
                                    "name": "tag",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "string | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "string | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": "string"
                                      }
                                    }
                                  },
                                  "value": {
                                    "name": "value",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "string | undefined",
                                    "schema": "string | undefined"
                                  },
                                  "props": {
                                    "name": "props",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "Record<string, any> | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": "Record<string, any>"
                                      }
                                    }
                                  },
                                  "content": {
                                    "name": "content",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "any",
                                    "schema": "any"
                                  },
                                  "children": {
                                    "name": "children",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "MarkdownNode[] | undefined",
                                    "schema": {
                                      "kind": "enum",
                                      "type": "MarkdownNode[] | undefined",
                                      "schema": {
                                        "0": "undefined",
                                        "1": "MarkdownNode[]"
                                      }
                                    }
                                  },
                                  "attributes": {
                                    "name": "attributes",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": "Record<string, any> | undefined"
                                  },
                                  "fmAttributes": {
                                    "name": "fmAttributes",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": false,
                                    "type": "Record<string, any> | undefined",
                                    "schema": "Record<string, any> | undefined"
                                  }
                                }
                              }
                            }
                          }
                        },
                        "props": {
                          "name": "props",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "Record<string, any> | undefined",
                          "schema": "Record<string, any> | undefined"
                        },
                        "toc": {
                          "name": "toc",
                          "global": false,
                          "description": "",
                          "tags": [],
                          "required": false,
                          "type": "Toc | undefined",
                          "schema": {
                            "kind": "enum",
                            "type": "Toc | undefined",
                            "schema": {
                              "0": "undefined",
                              "1": {
                                "kind": "object",
                                "type": "Toc",
                                "schema": {
                                  "title": {
                                    "name": "title",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "string",
                                    "schema": "string"
                                  },
                                  "depth": {
                                    "name": "depth",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "schema": "number"
                                  },
                                  "searchDepth": {
                                    "name": "searchDepth",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "number",
                                    "schema": "number"
                                  },
                                  "links": {
                                    "name": "links",
                                    "global": false,
                                    "description": "",
                                    "tags": [],
                                    "required": true,
                                    "type": "TocLink[]",
                                    "schema": {
                                      "kind": "array",
                                      "type": "TocLink[]",
                                      "schema": {
                                        "0": {
                                          "kind": "object",
                                          "type": "TocLink",
                                          "schema": {
                                            "id": {
                                              "name": "id",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "string",
                                              "schema": "string"
                                            },
                                            "text": {
                                              "name": "text",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "string",
                                              "schema": "string"
                                            },
                                            "depth": {
                                              "name": "depth",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": true,
                                              "type": "number",
                                              "schema": "number"
                                            },
                                            "children": {
                                              "name": "children",
                                              "global": false,
                                              "description": "",
                                              "tags": [],
                                              "required": false,
                                              "type": "TocLink[] | undefined",
                                              "schema": {
                                                "kind": "enum",
                                                "type": "TocLink[] | undefined",
                                                "schema": {
                                                  "0": "undefined",
                                                  "1": "TocLink[]"
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "body": {
                "name": "body",
                "global": false,
                "description": "Content body",
                "tags": [],
                "required": true,
                "type": "MarkdownRoot | null",
                "schema": {
                  "kind": "enum",
                  "type": "MarkdownRoot | null",
                  "schema": {
                    "0": "null",
                    "1": "MarkdownRoot"
                  }
                }
              },
              "layout": {
                "name": "layout",
                "global": false,
                "description": "Layout",
                "tags": [],
                "required": false,
                "type": "any",
                "schema": "any"
              },
              "_id": {
                "name": "_id",
                "global": false,
                "description": "Content id",
                "tags": [],
                "required": true,
                "type": "string",
                "schema": "string"
              },
              "_source": {
                "name": "_source",
                "global": false,
                "description": "Content source",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_path": {
                "name": "_path",
                "global": false,
                "description": "Content path, this path is source agnostic and it the content my live in any source",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "title": {
                "name": "title",
                "global": false,
                "description": "Content title",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_draft": {
                "name": "_draft",
                "global": false,
                "description": "Content draft status",
                "tags": [],
                "required": false,
                "type": "boolean | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "boolean | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "false",
                    "2": "true"
                  }
                }
              },
              "_partial": {
                "name": "_partial",
                "global": false,
                "description": "Content partial status",
                "tags": [],
                "required": false,
                "type": "boolean | undefined",
                "schema": "boolean | undefined"
              },
              "_locale": {
                "name": "_locale",
                "global": false,
                "description": "Content locale",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_type": {
                "name": "_type",
                "global": false,
                "description": "File type of the content, i.e `markdown`",
                "tags": [],
                "required": false,
                "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "\"markdown\" | \"yaml\" | \"json\" | \"csv\" | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "\"markdown\"",
                    "2": "\"yaml\"",
                    "3": "\"json\"",
                    "4": "\"csv\""
                  }
                }
              },
              "_file": {
                "name": "_file",
                "global": false,
                "description": "Path to the file relative to the content directory",
                "tags": [],
                "required": false,
                "type": "string | undefined",
                "schema": "string | undefined"
              },
              "_extension": {
                "name": "_extension",
                "global": false,
                "description": "Extension of the file",
                "tags": [],
                "required": false,
                "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "\"yaml\" | \"json\" | \"csv\" | \"md\" | \"yml\" | \"json5\" | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": "\"yaml\"",
                    "2": "\"json\"",
                    "3": "\"csv\"",
                    "4": "\"md\"",
                    "5": "\"yml\"",
                    "6": "\"json5\""
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "unwrap",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | boolean | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | boolean | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "false",
              "3": "true"
            }
          }
        },
        {
          "name": "use",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "Function | undefined",
          "schema": {
            "kind": "enum",
            "type": "Function | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "object",
                "type": "Function",
                "schema": {}
              }
            }
          }
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "unwrap",
          "type": "string | boolean",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | boolean",
            "schema": {
              "0": "string",
              "1": "false",
              "2": "true"
            }
          }
        },
        {
          "name": "use",
          "type": "Function",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Function",
            "schema": {}
          }
        },
        {
          "name": "fallbackSlot",
          "type": "Slot<any> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Slot<any> | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "event",
                "type": "(...args: any[]): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "schema": [
                  "any"
                ]
              }
            }
          }
        },
        {
          "name": "tags",
          "type": "string[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "string[]",
            "schema": {
              "0": "string"
            }
          }
        },
        {
          "name": "between",
          "type": "Slot<any> | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "Slot<any> | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "event",
                "type": "(...args: any[]): VNode<RendererNode, RendererElement, { [key: string]: any; }>[]",
                "schema": [
                  "any"
                ]
              }
            }
          }
        },
        {
          "name": "parent",
          "type": "ComponentInternalInstance | null",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "ComponentInternalInstance | null",
            "schema": {
              "0": "null",
              "1": {
                "kind": "object",
                "type": "ComponentInternalInstance",
                "schema": {
                  "_nuxtOnBeforeMountCbs": {
                    "name": "_nuxtOnBeforeMountCbs",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": true,
                    "type": "(() => void | Promise<void>)[]",
                    "schema": {
                      "kind": "array",
                      "type": "(() => void | Promise<void>)[]",
                      "schema": {
                        "0": {
                          "kind": "event",
                          "type": "(): void | Promise<void>"
                        }
                      }
                    }
                  },
                  "_nuxtIdIndex": {
                    "name": "_nuxtIdIndex",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "Record<string, number> | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "Record<string, number> | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "Record<string, number>"
                      }
                    }
                  },
                  "_nuxtClientOnly": {
                    "name": "_nuxtClientOnly",
                    "global": false,
                    "description": "",
                    "tags": [],
                    "required": false,
                    "type": "boolean | undefined",
                    "schema": {
                      "kind": "enum",
                      "type": "boolean | undefined",
                      "schema": {
                        "0": "undefined",
                        "1": "false",
                        "2": "true"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            }
          },
          "default": "[]"
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "null"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "language",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": {
              "0": "number"
            }
          }
        },
        {
          "name": "meta",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProsePre": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "pascalName": "ProsePre",
    "kebabName": "prose-pre",
    "chunkName": "components/prose-pre",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "code",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"\""
        },
        {
          "name": "language",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "null"
        },
        {
          "name": "filename",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "null"
        },
        {
          "name": "highlights",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "number[] | undefined",
          "schema": {
            "kind": "enum",
            "type": "number[] | undefined",
            "schema": {
              "0": "undefined",
              "1": {
                "kind": "array",
                "type": "number[]",
                "schema": [
                  "number"
                ]
              }
            }
          },
          "default": "[]"
        },
        {
          "name": "meta",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "null"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "class",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "style",
          "type": "string | Record<string, any>",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | Record<string, any>",
            "schema": {
              "0": "string",
              "1": "Record<string, any>"
            }
          }
        },
        {
          "name": "code",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "language",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "filename",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "highlights",
          "type": "number[]",
          "description": "",
          "schema": {
            "kind": "array",
            "type": "number[]",
            "schema": {
              "0": "number"
            }
          }
        },
        {
          "name": "meta",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "href",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"\""
        },
        {
          "name": "target",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\""
            }
          },
          "default": "undefined"
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "href",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "target",
          "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "\"_blank\" | \"_parent\" | \"_self\" | \"_top\" | null | undefined",
            "schema": {
              "0": "undefined",
              "1": "null",
              "2": "\"_blank\"",
              "3": "\"_parent\"",
              "4": "\"_self\"",
              "5": "\"_top\""
            }
          }
        }
      ]
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "id",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; } & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "(((props: {}) => any) & ((props: {}) => any)) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        },
        {
          "name": "id",
          "type": "string | undefined",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          }
        }
      ]
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"\""
        },
        {
          "name": "alt",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"\""
        },
        {
          "name": "width",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "number"
            }
          },
          "default": "undefined"
        },
        {
          "name": "height",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | number | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | number | undefined",
            "schema": {
              "0": "undefined",
              "1": "string",
              "2": "number"
            }
          },
          "default": "undefined"
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "alt",
          "type": "string",
          "description": "",
          "schema": "string"
        },
        {
          "name": "width",
          "type": "string | number",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": {
              "0": "string",
              "1": "number"
            }
          }
        },
        {
          "name": "height",
          "type": "string | number",
          "description": "",
          "schema": {
            "kind": "enum",
            "type": "string | number",
            "schema": {
              "0": "string",
              "1": "number"
            }
          }
        }
      ]
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseScript": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "pascalName": "ProseScript",
    "kebabName": "prose-script",
    "chunkName": "components/prose-script",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [
        {
          "name": "src",
          "global": false,
          "description": "",
          "tags": [],
          "required": false,
          "type": "string | undefined",
          "schema": {
            "kind": "enum",
            "type": "string | undefined",
            "schema": {
              "0": "undefined",
              "1": "string"
            }
          },
          "default": "\"\""
        }
      ],
      "slots": [],
      "events": [],
      "exposed": [
        {
          "name": "src",
          "type": "string",
          "description": "",
          "schema": "string"
        }
      ]
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue",
    "declarationPath": "C:/Users/AlbertoVE-K2304N/code/website/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "priority": 0,
    "_scanned": true,
    "meta": {
      "type": 1,
      "props": [],
      "slots": [
        {
          "name": "default",
          "type": "{}",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "{}",
            "schema": {}
          }
        }
      ],
      "events": [],
      "exposed": [
        {
          "name": "$slots",
          "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
          "description": "",
          "schema": {
            "kind": "object",
            "type": "Readonly<InternalSlots> & { default?: ((props: {}) => any) | undefined; }",
            "schema": {
              "default": {
                "name": "default",
                "global": false,
                "description": "",
                "tags": [],
                "required": false,
                "type": "((props: {}) => any) | undefined",
                "schema": {
                  "kind": "enum",
                  "type": "((props: {}) => any) | undefined",
                  "schema": {
                    "0": "undefined",
                    "1": {
                      "kind": "event",
                      "type": "(props: {}): any",
                      "schema": []
                    }
                  }
                }
              }
            }
          }
        }
      ]
    }
  }
}