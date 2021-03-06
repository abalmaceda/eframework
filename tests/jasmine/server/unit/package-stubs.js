// DEPENDS ON GLOBAL OBJECT: 'ComponentMocker'

var packageMetadata = {
  "es5-shim": {
    "Date": {
      "type": "function"
    },
    "parseInt": {
      "type": "function"
    }
  },
  "meteor-base": {},
  "mobile-experience": {},
  "npm-mongo": {
    "NpmModuleMongodbVersion": {
      "type": "constant",
      "value": "1.4.39"
    }
  },
  "random": {
    "Random": {
      "type": "object",
      "members": {
        "createWithSeeds": {
          "type": "function"
        },
        "fraction": {
          "type": "function"
        },
        "hexString": {
          "type": "function"
        },
        "id": {
          "type": "function"
        },
        "secret": {
          "type": "function"
        },
        "choice": {
          "type": "function"
        }
      }
    }
  },
  "base64": {
    "Base64": {
      "type": "object",
      "members": {
        "encode": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        },
        "decode": {
          "type": "function"
        }
      }
    }
  },
  "ejson": {
    "EJSON": {
      "type": "object",
      "members": {
        "addType": {
          "type": "function"
        },
        "toJSONValue": {
          "type": "function"
        },
        "fromJSONValue": {
          "type": "function"
        },
        "stringify": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "isBinary": {
          "type": "function"
        },
        "equals": {
          "type": "function"
        },
        "clone": {
          "type": "function"
        },
        "newBinary": {
          "type": "function"
        }
      }
    },
    "EJSONTest": {
      "type": "object"
    }
  },
  "id-map": {
    "IdMap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ordered-dict": {
    "OrderedDict": {
      "type": "function",
      "members": {
        "BREAK": {
          "type": "object"
        },
        "prototype": {
          "type": "object",
          "members": {
            "empty": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "putBefore": {
              "type": "function"
            },
            "append": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "first": {
              "type": "function"
            },
            "firstValue": {
              "type": "function"
            },
            "last": {
              "type": "function"
            },
            "lastValue": {
              "type": "function"
            },
            "prev": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "moveBefore": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "tracker": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "mongo-id": {
    "MongoID": {
      "type": "object",
      "members": {
        "ObjectID": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                },
                "equals": {
                  "type": "function"
                },
                "clone": {
                  "type": "function"
                },
                "typeName": {
                  "type": "function"
                },
                "getTimestamp": {
                  "type": "function"
                },
                "toHexString": {
                  "type": "function",
                  "refID": 13
                },
                "toJSONValue": {
                  "ref": 13
                },
                "valueOf": {
                  "ref": 13
                }
              }
            }
          }
        },
        "idStringify": {
          "type": "function"
        },
        "idParse": {
          "type": "function"
        }
      }
    }
  },
  "diff-sequence": {
    "DiffSequence": {
      "type": "object",
      "members": {
        "diffQueryChanges": {
          "type": "function"
        },
        "diffQueryUnorderedChanges": {
          "type": "function"
        },
        "diffQueryOrderedChanges": {
          "type": "function"
        },
        "diffObjects": {
          "type": "function"
        },
        "makeChangedFields": {
          "type": "function"
        },
        "applyChanges": {
          "type": "function"
        }
      }
    }
  },
  "geojson-utils": {
    "GeoJSON": {
      "type": "object",
      "members": {
        "lineStringsIntersect": {
          "type": "function"
        },
        "pointInBoundingBox": {
          "type": "function"
        },
        "pointInPolygon": {
          "type": "function"
        },
        "numberToRadius": {
          "type": "function"
        },
        "numberToDegree": {
          "type": "function"
        },
        "drawCircle": {
          "type": "function"
        },
        "rectangleCentroid": {
          "type": "function"
        },
        "pointDistance": {
          "type": "function"
        },
        "geometryWithinRadius": {
          "type": "function"
        },
        "area": {
          "type": "function"
        },
        "centroid": {
          "type": "function"
        },
        "simplify": {
          "type": "function"
        },
        "destinationPoint": {
          "type": "function"
        }
      }
    }
  },
  "minimongo": {
    "LocalCollection": {
      "type": "function",
      "members": {
        "Cursor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rewind": {
                  "type": "function"
                },
                "forEach": {
                  "type": "function"
                },
                "getTransform": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "fetch": {
                  "type": "function"
                },
                "count": {
                  "type": "function"
                },
                "observe": {
                  "type": "function"
                },
                "observeChanges": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObserveHandle": {
          "type": "function"
        },
        "wrapTransform": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "saveOriginals": {
              "type": "function"
            },
            "retrieveOriginals": {
              "type": "function"
            },
            "pauseObservers": {
              "type": "function"
            },
            "resumeObservers": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            }
          }
        }
      }
    },
    "Minimongo": {
      "type": "object",
      "members": {
        "Matcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "documentMatches": {
                  "type": "function"
                },
                "hasGeoQuery": {
                  "type": "function"
                },
                "hasWhere": {
                  "type": "function"
                },
                "isSimple": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "canBecomeTrueByModifier": {
                  "type": "function"
                },
                "matchingDocument": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Sorter": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getComparator": {
                  "type": "function"
                },
                "affectedByModifier": {
                  "type": "function"
                },
                "combineIntoProjection": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "MinimongoTest": {
      "type": "object",
      "members": {
        "makeLookupFunction": {
          "type": "function"
        }
      }
    }
  },
  "check": {
    "check": {
      "type": "function"
    },
    "Match": {
      "type": "object",
      "members": {
        "Optional": {
          "type": "function"
        },
        "OneOf": {
          "type": "function"
        },
        "Any": {
          "type": "array"
        },
        "Where": {
          "type": "function"
        },
        "ObjectIncluding": {
          "type": "function"
        },
        "ObjectWithValues": {
          "type": "function"
        },
        "Integer": {
          "type": "array"
        },
        "Error": {
          "type": "function",
          "refID": 13,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 13
                }
              }
            }
          }
        },
        "test": {
          "type": "function"
        },
        "OptionalOrNull": {
          "type": "function"
        }
      }
    }
  },
  "retry": {
    "Retry": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "clear": {
              "type": "function"
            },
            "retryLater": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp-common": {
    "DDPCommon": {
      "type": "object",
      "members": {
        "Heartbeat": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "stop": {
                  "type": "function"
                },
                "start": {
                  "type": "function"
                },
                "messageReceived": {
                  "type": "function"
                }
              }
            }
          }
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "parseDDP": {
          "type": "function"
        },
        "stringifyDDP": {
          "type": "function"
        },
        "MethodInvocation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "unblock": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        },
        "RandomStream": {
          "type": "function",
          "members": {
            "get": {
              "type": "function"
            }
          }
        },
        "makeRpcSeed": {
          "type": "function"
        }
      }
    }
  },
  "ddp-client": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "LivedataTest": {
      "type": "object",
      "members": {
        "ClientStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "send": {
                  "type": "function"
                },
                "on": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toSockjsUrl": {
          "type": "function"
        },
        "SUPPORTED_DDP_VERSIONS": {
          "type": "array"
        },
        "Connection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "registerStore": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "methods": {
                  "type": "function"
                },
                "call": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "status": {
                  "type": "function"
                },
                "reconnect": {
                  "type": "function"
                },
                "disconnect": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "userId": {
                  "type": "function"
                },
                "setUserId": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "babel-compiler": {
    "Babel": {
      "type": "object",
      "members": {
        "getDefaultOptions": {
          "type": "function"
        },
        "validateExtraFeatures": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "transformMeteor": {
          "type": "function"
        },
        "setCacheDir": {
          "type": "function"
        }
      }
    },
    "BabelCompiler": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "processFilesForTarget": {
              "type": "function"
            },
            "setDiskCacheDirectory": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ecmascript": {
    "ECMAScript": {
      "type": "object",
      "members": {
        "compileForShell": {
          "type": "function"
        }
      }
    }
  },
  "rate-limit": {
    "RateLimiter": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "check": {
              "type": "function"
            },
            "addRule": {
              "type": "function"
            },
            "increment": {
              "type": "function"
            },
            "removeRule": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ddp-rate-limiter": {
    "DDPRateLimiter": {
      "type": "object",
      "members": {
        "getErrorMessage": {
          "type": "function"
        },
        "setErrorMessage": {
          "type": "function"
        },
        "addRule": {
          "type": "function"
        },
        "printRules": {
          "type": "function"
        },
        "removeRule": {
          "type": "function"
        }
      }
    }
  },
  "logging": {
    "Log": {
      "type": "function",
      "members": {
        "outputFormat": {
          "type": "constant",
          "value": "json"
        },
        "debug": {
          "type": "function"
        },
        "info": {
          "type": "function"
        },
        "warn": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "format": {
          "type": "function"
        },
        "objFromText": {
          "type": "function"
        }
      }
    }
  },
  "routepolicy": {
    "RoutePolicy": {
      "type": "object",
      "members": {
        "urlPrefixTypes": {
          "type": "object",
          "members": {
            "/sockjs/": {
              "type": "constant",
              "value": "network"
            },
            "/_oauth/": {
              "type": "constant",
              "value": "network"
            }
          }
        },
        "urlPrefixMatches": {
          "type": "function"
        },
        "checkType": {
          "type": "function"
        },
        "checkUrlPrefix": {
          "type": "function"
        },
        "checkForConflictWithStatic": {
          "type": "function"
        },
        "declare": {
          "type": "function"
        },
        "isValidUrl": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "urlPrefixesFor": {
          "type": "function"
        }
      }
    },
    "RoutePolicyTest": {
      "type": "object",
      "members": {
        "Constructor": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "urlPrefixMatches": {
                  "type": "function"
                },
                "checkType": {
                  "type": "function"
                },
                "checkUrlPrefix": {
                  "type": "function"
                },
                "checkForConflictWithStatic": {
                  "type": "function"
                },
                "declare": {
                  "type": "function"
                },
                "isValidUrl": {
                  "type": "function"
                },
                "classify": {
                  "type": "function"
                },
                "urlPrefixesFor": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "deps": {
    "Tracker": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    },
    "Deps": {
      "type": "object",
      "members": {
        "currentComputation": {
          "type": "null",
          "value": null
        },
        "Computation": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onInvalidate": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "invalidate": {
                  "type": "function"
                },
                "stop": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Dependency": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "depend": {
                  "type": "function"
                },
                "changed": {
                  "type": "function"
                },
                "hasDependents": {
                  "type": "function"
                }
              }
            }
          }
        },
        "flush": {
          "type": "function"
        },
        "autorun": {
          "type": "function"
        },
        "nonreactive": {
          "type": "function"
        },
        "onInvalidate": {
          "type": "function"
        },
        "afterFlush": {
          "type": "function"
        },
        "depend": {
          "type": "function"
        }
      }
    }
  },
  "htmljs": {
    "HTML": {
      "type": "object",
      "members": {
        "Visitor": {
          "type": "function",
          "members": {
            "def": {
              "type": "function",
              "refID": 2
            },
            "extend": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "visit": {
                  "type": "function",
                  "refID": 7
                },
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function",
                  "refID": 25
                }
              }
            }
          }
        },
        "TransformingVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function",
                  "refID": 29
                },
                "visitPrimitive": {
                  "ref": 29
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "ref": 29
                },
                "visitCharRef": {
                  "ref": 29
                },
                "visitRaw": {
                  "ref": 29
                },
                "visitObject": {
                  "ref": 29
                },
                "visitFunction": {
                  "ref": 29
                },
                "visitTag": {
                  "type": "function"
                },
                "visitChildren": {
                  "type": "function"
                },
                "visitAttributes": {
                  "type": "function"
                },
                "visitAttribute": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                }
              }
            }
          }
        },
        "ToTextVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toHTML": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "ToHTMLVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 4
            },
            "def": {
              "ref": 2
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "toText": {
                  "type": "function"
                },
                "visit": {
                  "ref": 7
                },
                "visitFunction": {
                  "ref": 25
                }
              }
            }
          }
        },
        "Tag": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 82
            },
            "prototype": {
              "type": "object",
              "members": {
                "tagName": {
                  "type": "constant",
                  "value": ""
                },
                "attrs": {
                  "type": "null",
                  "value": null
                },
                "children": {
                  "type": "array",
                  "refID": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Attrs": {
          "type": "function"
        },
        "getTag": {
          "type": "function"
        },
        "ensureTag": {
          "type": "function"
        },
        "isTagEnsured": {
          "type": "function"
        },
        "getSymbolName": {
          "type": "function"
        },
        "knownElementNames": {
          "type": "array"
        },
        "knownSVGElementNames": {
          "type": "array"
        },
        "voidElementNames": {
          "type": "array"
        },
        "isKnownElement": {
          "type": "function"
        },
        "isKnownSVGElement": {
          "type": "function"
        },
        "isVoidElement": {
          "type": "function"
        },
        "A": {
          "type": "function",
          "refID": 104,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 104
                },
                "tagName": {
                  "type": "constant",
                  "value": "a"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ABBR": {
          "type": "function",
          "refID": 106,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 106
                },
                "tagName": {
                  "type": "constant",
                  "value": "abbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ACRONYM": {
          "type": "function",
          "refID": 108,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 108
                },
                "tagName": {
                  "type": "constant",
                  "value": "acronym"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ADDRESS": {
          "type": "function",
          "refID": 110,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 110
                },
                "tagName": {
                  "type": "constant",
                  "value": "address"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "APPLET": {
          "type": "function",
          "refID": 112,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 112
                },
                "tagName": {
                  "type": "constant",
                  "value": "applet"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AREA": {
          "type": "function",
          "refID": 114,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 114
                },
                "tagName": {
                  "type": "constant",
                  "value": "area"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ARTICLE": {
          "type": "function",
          "refID": 116,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 116
                },
                "tagName": {
                  "type": "constant",
                  "value": "article"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ASIDE": {
          "type": "function",
          "refID": 118,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 118
                },
                "tagName": {
                  "type": "constant",
                  "value": "aside"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "AUDIO": {
          "type": "function",
          "refID": 120,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 120
                },
                "tagName": {
                  "type": "constant",
                  "value": "audio"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "B": {
          "type": "function",
          "refID": 122,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 122
                },
                "tagName": {
                  "type": "constant",
                  "value": "b"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASE": {
          "type": "function",
          "refID": 124,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 124
                },
                "tagName": {
                  "type": "constant",
                  "value": "base"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BASEFONT": {
          "type": "function",
          "refID": 126,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 126
                },
                "tagName": {
                  "type": "constant",
                  "value": "basefont"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDI": {
          "type": "function",
          "refID": 128,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 128
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdi"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BDO": {
          "type": "function",
          "refID": 130,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 130
                },
                "tagName": {
                  "type": "constant",
                  "value": "bdo"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BIG": {
          "type": "function",
          "refID": 132,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 132
                },
                "tagName": {
                  "type": "constant",
                  "value": "big"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BLOCKQUOTE": {
          "type": "function",
          "refID": 134,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 134
                },
                "tagName": {
                  "type": "constant",
                  "value": "blockquote"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BODY": {
          "type": "function",
          "refID": 136,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 136
                },
                "tagName": {
                  "type": "constant",
                  "value": "body"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BR": {
          "type": "function",
          "refID": 138,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 138
                },
                "tagName": {
                  "type": "constant",
                  "value": "br"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "BUTTON": {
          "type": "function",
          "refID": 140,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 140
                },
                "tagName": {
                  "type": "constant",
                  "value": "button"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CANVAS": {
          "type": "function",
          "refID": 142,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 142
                },
                "tagName": {
                  "type": "constant",
                  "value": "canvas"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CAPTION": {
          "type": "function",
          "refID": 144,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 144
                },
                "tagName": {
                  "type": "constant",
                  "value": "caption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CENTER": {
          "type": "function",
          "refID": 146,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 146
                },
                "tagName": {
                  "type": "constant",
                  "value": "center"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CITE": {
          "type": "function",
          "refID": 148,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 148
                },
                "tagName": {
                  "type": "constant",
                  "value": "cite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CODE": {
          "type": "function",
          "refID": 150,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 150
                },
                "tagName": {
                  "type": "constant",
                  "value": "code"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COL": {
          "type": "function",
          "refID": 152,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 152
                },
                "tagName": {
                  "type": "constant",
                  "value": "col"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLGROUP": {
          "type": "function",
          "refID": 154,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 154
                },
                "tagName": {
                  "type": "constant",
                  "value": "colgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COMMAND": {
          "type": "function",
          "refID": 156,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 156
                },
                "tagName": {
                  "type": "constant",
                  "value": "command"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATA": {
          "type": "function",
          "refID": 158,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 158
                },
                "tagName": {
                  "type": "constant",
                  "value": "data"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATAGRID": {
          "type": "function",
          "refID": 160,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 160
                },
                "tagName": {
                  "type": "constant",
                  "value": "datagrid"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DATALIST": {
          "type": "function",
          "refID": 162,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 162
                },
                "tagName": {
                  "type": "constant",
                  "value": "datalist"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DD": {
          "type": "function",
          "refID": 164,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 164
                },
                "tagName": {
                  "type": "constant",
                  "value": "dd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEL": {
          "type": "function",
          "refID": 166,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 166
                },
                "tagName": {
                  "type": "constant",
                  "value": "del"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DETAILS": {
          "type": "function",
          "refID": 168,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 168
                },
                "tagName": {
                  "type": "constant",
                  "value": "details"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DFN": {
          "type": "function",
          "refID": 170,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 170
                },
                "tagName": {
                  "type": "constant",
                  "value": "dfn"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIR": {
          "type": "function",
          "refID": 172,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 172
                },
                "tagName": {
                  "type": "constant",
                  "value": "dir"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DIV": {
          "type": "function",
          "refID": 174,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 174
                },
                "tagName": {
                  "type": "constant",
                  "value": "div"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DL": {
          "type": "function",
          "refID": 176,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 176
                },
                "tagName": {
                  "type": "constant",
                  "value": "dl"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DT": {
          "type": "function",
          "refID": 178,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 178
                },
                "tagName": {
                  "type": "constant",
                  "value": "dt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EM": {
          "type": "function",
          "refID": 180,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 180
                },
                "tagName": {
                  "type": "constant",
                  "value": "em"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EMBED": {
          "type": "function",
          "refID": 182,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 182
                },
                "tagName": {
                  "type": "constant",
                  "value": "embed"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "EVENTSOURCE": {
          "type": "function",
          "refID": 184,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 184
                },
                "tagName": {
                  "type": "constant",
                  "value": "eventsource"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIELDSET": {
          "type": "function",
          "refID": 186,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 186
                },
                "tagName": {
                  "type": "constant",
                  "value": "fieldset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGCAPTION": {
          "type": "function",
          "refID": 188,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 188
                },
                "tagName": {
                  "type": "constant",
                  "value": "figcaption"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FIGURE": {
          "type": "function",
          "refID": 190,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 190
                },
                "tagName": {
                  "type": "constant",
                  "value": "figure"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT": {
          "type": "function",
          "refID": 192,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 192
                },
                "tagName": {
                  "type": "constant",
                  "value": "font"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOOTER": {
          "type": "function",
          "refID": 194,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 194
                },
                "tagName": {
                  "type": "constant",
                  "value": "footer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FORM": {
          "type": "function",
          "refID": 196,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 196
                },
                "tagName": {
                  "type": "constant",
                  "value": "form"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAME": {
          "type": "function",
          "refID": 198,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 198
                },
                "tagName": {
                  "type": "constant",
                  "value": "frame"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FRAMESET": {
          "type": "function",
          "refID": 200,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 200
                },
                "tagName": {
                  "type": "constant",
                  "value": "frameset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H1": {
          "type": "function",
          "refID": 202,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 202
                },
                "tagName": {
                  "type": "constant",
                  "value": "h1"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H2": {
          "type": "function",
          "refID": 204,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 204
                },
                "tagName": {
                  "type": "constant",
                  "value": "h2"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H3": {
          "type": "function",
          "refID": 206,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 206
                },
                "tagName": {
                  "type": "constant",
                  "value": "h3"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H4": {
          "type": "function",
          "refID": 208,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 208
                },
                "tagName": {
                  "type": "constant",
                  "value": "h4"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H5": {
          "type": "function",
          "refID": 210,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 210
                },
                "tagName": {
                  "type": "constant",
                  "value": "h5"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "H6": {
          "type": "function",
          "refID": 212,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 212
                },
                "tagName": {
                  "type": "constant",
                  "value": "h6"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEAD": {
          "type": "function",
          "refID": 214,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 214
                },
                "tagName": {
                  "type": "constant",
                  "value": "head"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HEADER": {
          "type": "function",
          "refID": 216,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 216
                },
                "tagName": {
                  "type": "constant",
                  "value": "header"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HGROUP": {
          "type": "function",
          "refID": 218,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 218
                },
                "tagName": {
                  "type": "constant",
                  "value": "hgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HR": {
          "type": "function",
          "refID": 220,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 220
                },
                "tagName": {
                  "type": "constant",
                  "value": "hr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HTML": {
          "type": "function",
          "refID": 222,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 222
                },
                "tagName": {
                  "type": "constant",
                  "value": "html"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "I": {
          "type": "function",
          "refID": 224,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 224
                },
                "tagName": {
                  "type": "constant",
                  "value": "i"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IFRAME": {
          "type": "function",
          "refID": 226,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 226
                },
                "tagName": {
                  "type": "constant",
                  "value": "iframe"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMG": {
          "type": "function",
          "refID": 228,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 228
                },
                "tagName": {
                  "type": "constant",
                  "value": "img"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INPUT": {
          "type": "function",
          "refID": 230,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 230
                },
                "tagName": {
                  "type": "constant",
                  "value": "input"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "INS": {
          "type": "function",
          "refID": 232,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 232
                },
                "tagName": {
                  "type": "constant",
                  "value": "ins"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ISINDEX": {
          "type": "function",
          "refID": 234,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 234
                },
                "tagName": {
                  "type": "constant",
                  "value": "isindex"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KBD": {
          "type": "function",
          "refID": 236,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 236
                },
                "tagName": {
                  "type": "constant",
                  "value": "kbd"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "KEYGEN": {
          "type": "function",
          "refID": 238,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 238
                },
                "tagName": {
                  "type": "constant",
                  "value": "keygen"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LABEL": {
          "type": "function",
          "refID": 240,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 240
                },
                "tagName": {
                  "type": "constant",
                  "value": "label"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LEGEND": {
          "type": "function",
          "refID": 242,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 242
                },
                "tagName": {
                  "type": "constant",
                  "value": "legend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LI": {
          "type": "function",
          "refID": 244,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 244
                },
                "tagName": {
                  "type": "constant",
                  "value": "li"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINK": {
          "type": "function",
          "refID": 246,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 246
                },
                "tagName": {
                  "type": "constant",
                  "value": "link"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAIN": {
          "type": "function",
          "refID": 248,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 248
                },
                "tagName": {
                  "type": "constant",
                  "value": "main"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MAP": {
          "type": "function",
          "refID": 250,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 250
                },
                "tagName": {
                  "type": "constant",
                  "value": "map"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARK": {
          "type": "function",
          "refID": 252,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 252
                },
                "tagName": {
                  "type": "constant",
                  "value": "mark"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MENU": {
          "type": "function",
          "refID": 254,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 254
                },
                "tagName": {
                  "type": "constant",
                  "value": "menu"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "META": {
          "type": "function",
          "refID": 256,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 256
                },
                "tagName": {
                  "type": "constant",
                  "value": "meta"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METER": {
          "type": "function",
          "refID": 258,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 258
                },
                "tagName": {
                  "type": "constant",
                  "value": "meter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NAV": {
          "type": "function",
          "refID": 260,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 260
                },
                "tagName": {
                  "type": "constant",
                  "value": "nav"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOFRAMES": {
          "type": "function",
          "refID": 262,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 262
                },
                "tagName": {
                  "type": "constant",
                  "value": "noframes"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "NOSCRIPT": {
          "type": "function",
          "refID": 264,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 264
                },
                "tagName": {
                  "type": "constant",
                  "value": "noscript"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OBJECT": {
          "type": "function",
          "refID": 266,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 266
                },
                "tagName": {
                  "type": "constant",
                  "value": "object"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OL": {
          "type": "function",
          "refID": 268,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 268
                },
                "tagName": {
                  "type": "constant",
                  "value": "ol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTGROUP": {
          "type": "function",
          "refID": 270,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 270
                },
                "tagName": {
                  "type": "constant",
                  "value": "optgroup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OPTION": {
          "type": "function",
          "refID": 272,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 272
                },
                "tagName": {
                  "type": "constant",
                  "value": "option"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "OUTPUT": {
          "type": "function",
          "refID": 274,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 274
                },
                "tagName": {
                  "type": "constant",
                  "value": "output"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "P": {
          "type": "function",
          "refID": 276,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 276
                },
                "tagName": {
                  "type": "constant",
                  "value": "p"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PARAM": {
          "type": "function",
          "refID": 278,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 278
                },
                "tagName": {
                  "type": "constant",
                  "value": "param"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PRE": {
          "type": "function",
          "refID": 280,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 280
                },
                "tagName": {
                  "type": "constant",
                  "value": "pre"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PROGRESS": {
          "type": "function",
          "refID": 282,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 282
                },
                "tagName": {
                  "type": "constant",
                  "value": "progress"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "Q": {
          "type": "function",
          "refID": 284,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 284
                },
                "tagName": {
                  "type": "constant",
                  "value": "q"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RP": {
          "type": "function",
          "refID": 286,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 286
                },
                "tagName": {
                  "type": "constant",
                  "value": "rp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RT": {
          "type": "function",
          "refID": 288,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 288
                },
                "tagName": {
                  "type": "constant",
                  "value": "rt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RUBY": {
          "type": "function",
          "refID": 290,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 290
                },
                "tagName": {
                  "type": "constant",
                  "value": "ruby"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "S": {
          "type": "function",
          "refID": 292,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 292
                },
                "tagName": {
                  "type": "constant",
                  "value": "s"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SAMP": {
          "type": "function",
          "refID": 294,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 294
                },
                "tagName": {
                  "type": "constant",
                  "value": "samp"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SCRIPT": {
          "type": "function",
          "refID": 296,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 296
                },
                "tagName": {
                  "type": "constant",
                  "value": "script"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SECTION": {
          "type": "function",
          "refID": 298,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 298
                },
                "tagName": {
                  "type": "constant",
                  "value": "section"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SELECT": {
          "type": "function",
          "refID": 300,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 300
                },
                "tagName": {
                  "type": "constant",
                  "value": "select"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SMALL": {
          "type": "function",
          "refID": 302,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 302
                },
                "tagName": {
                  "type": "constant",
                  "value": "small"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SOURCE": {
          "type": "function",
          "refID": 304,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 304
                },
                "tagName": {
                  "type": "constant",
                  "value": "source"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SPAN": {
          "type": "function",
          "refID": 306,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 306
                },
                "tagName": {
                  "type": "constant",
                  "value": "span"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRIKE": {
          "type": "function",
          "refID": 308,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 308
                },
                "tagName": {
                  "type": "constant",
                  "value": "strike"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STRONG": {
          "type": "function",
          "refID": 310,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 310
                },
                "tagName": {
                  "type": "constant",
                  "value": "strong"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STYLE": {
          "type": "function",
          "refID": 312,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 312
                },
                "tagName": {
                  "type": "constant",
                  "value": "style"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUB": {
          "type": "function",
          "refID": 314,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 314
                },
                "tagName": {
                  "type": "constant",
                  "value": "sub"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUMMARY": {
          "type": "function",
          "refID": 316,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 316
                },
                "tagName": {
                  "type": "constant",
                  "value": "summary"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SUP": {
          "type": "function",
          "refID": 318,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 318
                },
                "tagName": {
                  "type": "constant",
                  "value": "sup"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TABLE": {
          "type": "function",
          "refID": 320,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 320
                },
                "tagName": {
                  "type": "constant",
                  "value": "table"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TBODY": {
          "type": "function",
          "refID": 322,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 322
                },
                "tagName": {
                  "type": "constant",
                  "value": "tbody"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TD": {
          "type": "function",
          "refID": 324,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 324
                },
                "tagName": {
                  "type": "constant",
                  "value": "td"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTAREA": {
          "type": "function",
          "refID": 326,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 326
                },
                "tagName": {
                  "type": "constant",
                  "value": "textarea"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TFOOT": {
          "type": "function",
          "refID": 328,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 328
                },
                "tagName": {
                  "type": "constant",
                  "value": "tfoot"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TH": {
          "type": "function",
          "refID": 330,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 330
                },
                "tagName": {
                  "type": "constant",
                  "value": "th"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "THEAD": {
          "type": "function",
          "refID": 332,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 332
                },
                "tagName": {
                  "type": "constant",
                  "value": "thead"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TIME": {
          "type": "function",
          "refID": 334,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 334
                },
                "tagName": {
                  "type": "constant",
                  "value": "time"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TITLE": {
          "type": "function",
          "refID": 336,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 336
                },
                "tagName": {
                  "type": "constant",
                  "value": "title"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TR": {
          "type": "function",
          "refID": 338,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 338
                },
                "tagName": {
                  "type": "constant",
                  "value": "tr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TRACK": {
          "type": "function",
          "refID": 340,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 340
                },
                "tagName": {
                  "type": "constant",
                  "value": "track"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TT": {
          "type": "function",
          "refID": 342,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 342
                },
                "tagName": {
                  "type": "constant",
                  "value": "tt"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "U": {
          "type": "function",
          "refID": 344,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 344
                },
                "tagName": {
                  "type": "constant",
                  "value": "u"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "UL": {
          "type": "function",
          "refID": 346,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 346
                },
                "tagName": {
                  "type": "constant",
                  "value": "ul"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VAR": {
          "type": "function",
          "refID": 348,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 348
                },
                "tagName": {
                  "type": "constant",
                  "value": "var"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIDEO": {
          "type": "function",
          "refID": 350,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 350
                },
                "tagName": {
                  "type": "constant",
                  "value": "video"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "WBR": {
          "type": "function",
          "refID": 352,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 352
                },
                "tagName": {
                  "type": "constant",
                  "value": "wbr"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPH": {
          "type": "function",
          "refID": 354,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 354
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHDEF": {
          "type": "function",
          "refID": 356,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 356
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphDef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ALTGLYPHITEM": {
          "type": "function",
          "refID": 358,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 358
                },
                "tagName": {
                  "type": "constant",
                  "value": "altGlyphItem"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATE": {
          "type": "function",
          "refID": 360,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 360
                },
                "tagName": {
                  "type": "constant",
                  "value": "animate"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATECOLOR": {
          "type": "function",
          "refID": 362,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 362
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateColor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATEMOTION": {
          "type": "function",
          "refID": 364,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 364
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateMotion"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ANIMATETRANSFORM": {
          "type": "function",
          "refID": 366,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 366
                },
                "tagName": {
                  "type": "constant",
                  "value": "animateTransform"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CIRCLE": {
          "type": "function",
          "refID": 368,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 368
                },
                "tagName": {
                  "type": "constant",
                  "value": "circle"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CLIPPATH": {
          "type": "function",
          "refID": 370,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 370
                },
                "tagName": {
                  "type": "constant",
                  "value": "clipPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "COLOR_PROFILE": {
          "type": "function",
          "refID": 372,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 372
                },
                "tagName": {
                  "type": "constant",
                  "value": "color-profile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CURSOR": {
          "type": "function",
          "refID": 374,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 374
                },
                "tagName": {
                  "type": "constant",
                  "value": "cursor"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DEFS": {
          "type": "function",
          "refID": 376,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 376
                },
                "tagName": {
                  "type": "constant",
                  "value": "defs"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "DESC": {
          "type": "function",
          "refID": 378,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 378
                },
                "tagName": {
                  "type": "constant",
                  "value": "desc"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "ELLIPSE": {
          "type": "function",
          "refID": 380,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 380
                },
                "tagName": {
                  "type": "constant",
                  "value": "ellipse"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEBLEND": {
          "type": "function",
          "refID": 382,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 382
                },
                "tagName": {
                  "type": "constant",
                  "value": "feBlend"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOLORMATRIX": {
          "type": "function",
          "refID": 384,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 384
                },
                "tagName": {
                  "type": "constant",
                  "value": "feColorMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPONENTTRANSFER": {
          "type": "function",
          "refID": 386,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 386
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComponentTransfer"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECOMPOSITE": {
          "type": "function",
          "refID": 388,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 388
                },
                "tagName": {
                  "type": "constant",
                  "value": "feComposite"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FECONVOLVEMATRIX": {
          "type": "function",
          "refID": 390,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 390
                },
                "tagName": {
                  "type": "constant",
                  "value": "feConvolveMatrix"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDIFFUSELIGHTING": {
          "type": "function",
          "refID": 392,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 392
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDiffuseLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISPLACEMENTMAP": {
          "type": "function",
          "refID": 394,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 394
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDisplacementMap"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEDISTANTLIGHT": {
          "type": "function",
          "refID": 396,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 396
                },
                "tagName": {
                  "type": "constant",
                  "value": "feDistantLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFLOOD": {
          "type": "function",
          "refID": 398,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 398
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFlood"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCA": {
          "type": "function",
          "refID": 400,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 400
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncA"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCB": {
          "type": "function",
          "refID": 402,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 402
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncB"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCG": {
          "type": "function",
          "refID": 404,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 404
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncG"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEFUNCR": {
          "type": "function",
          "refID": 406,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 406
                },
                "tagName": {
                  "type": "constant",
                  "value": "feFuncR"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEGAUSSIANBLUR": {
          "type": "function",
          "refID": 408,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 408
                },
                "tagName": {
                  "type": "constant",
                  "value": "feGaussianBlur"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEIMAGE": {
          "type": "function",
          "refID": 410,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 410
                },
                "tagName": {
                  "type": "constant",
                  "value": "feImage"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGE": {
          "type": "function",
          "refID": 412,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 412
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMerge"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMERGENODE": {
          "type": "function",
          "refID": 414,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 414
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMergeNode"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEMORPHOLOGY": {
          "type": "function",
          "refID": 416,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 416
                },
                "tagName": {
                  "type": "constant",
                  "value": "feMorphology"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEOFFSET": {
          "type": "function",
          "refID": 418,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 418
                },
                "tagName": {
                  "type": "constant",
                  "value": "feOffset"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FEPOINTLIGHT": {
          "type": "function",
          "refID": 420,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 420
                },
                "tagName": {
                  "type": "constant",
                  "value": "fePointLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPECULARLIGHTING": {
          "type": "function",
          "refID": 422,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 422
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpecularLighting"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FESPOTLIGHT": {
          "type": "function",
          "refID": 424,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 424
                },
                "tagName": {
                  "type": "constant",
                  "value": "feSpotLight"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETILE": {
          "type": "function",
          "refID": 426,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 426
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTile"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FETURBULENCE": {
          "type": "function",
          "refID": 428,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 428
                },
                "tagName": {
                  "type": "constant",
                  "value": "feTurbulence"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FILTER": {
          "type": "function",
          "refID": 430,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 430
                },
                "tagName": {
                  "type": "constant",
                  "value": "filter"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE": {
          "type": "function",
          "refID": 432,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 432
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_FORMAT": {
          "type": "function",
          "refID": 434,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 434
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-format"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_NAME": {
          "type": "function",
          "refID": 436,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 436
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-name"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_SRC": {
          "type": "function",
          "refID": 438,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 438
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-src"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FONT_FACE_URI": {
          "type": "function",
          "refID": 440,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 440
                },
                "tagName": {
                  "type": "constant",
                  "value": "font-face-uri"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "FOREIGNOBJECT": {
          "type": "function",
          "refID": 442,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 442
                },
                "tagName": {
                  "type": "constant",
                  "value": "foreignObject"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "G": {
          "type": "function",
          "refID": 444,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 444
                },
                "tagName": {
                  "type": "constant",
                  "value": "g"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPH": {
          "type": "function",
          "refID": 446,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 446
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "GLYPHREF": {
          "type": "function",
          "refID": 448,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 448
                },
                "tagName": {
                  "type": "constant",
                  "value": "glyphRef"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "HKERN": {
          "type": "function",
          "refID": 450,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 450
                },
                "tagName": {
                  "type": "constant",
                  "value": "hkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "IMAGE": {
          "type": "function",
          "refID": 452,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 452
                },
                "tagName": {
                  "type": "constant",
                  "value": "image"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINE": {
          "type": "function",
          "refID": 454,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 454
                },
                "tagName": {
                  "type": "constant",
                  "value": "line"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "LINEARGRADIENT": {
          "type": "function",
          "refID": 456,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 456
                },
                "tagName": {
                  "type": "constant",
                  "value": "linearGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MARKER": {
          "type": "function",
          "refID": 458,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 458
                },
                "tagName": {
                  "type": "constant",
                  "value": "marker"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MASK": {
          "type": "function",
          "refID": 460,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 460
                },
                "tagName": {
                  "type": "constant",
                  "value": "mask"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "METADATA": {
          "type": "function",
          "refID": 462,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 462
                },
                "tagName": {
                  "type": "constant",
                  "value": "metadata"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "MISSING_GLYPH": {
          "type": "function",
          "refID": 464,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 464
                },
                "tagName": {
                  "type": "constant",
                  "value": "missing-glyph"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATH": {
          "type": "function",
          "refID": 466,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 466
                },
                "tagName": {
                  "type": "constant",
                  "value": "path"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "PATTERN": {
          "type": "function",
          "refID": 468,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 468
                },
                "tagName": {
                  "type": "constant",
                  "value": "pattern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYGON": {
          "type": "function",
          "refID": 470,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 470
                },
                "tagName": {
                  "type": "constant",
                  "value": "polygon"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "POLYLINE": {
          "type": "function",
          "refID": 472,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 472
                },
                "tagName": {
                  "type": "constant",
                  "value": "polyline"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RADIALGRADIENT": {
          "type": "function",
          "refID": 474,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 474
                },
                "tagName": {
                  "type": "constant",
                  "value": "radialGradient"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "RECT": {
          "type": "function",
          "refID": 476,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 476
                },
                "tagName": {
                  "type": "constant",
                  "value": "rect"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SET": {
          "type": "function",
          "refID": 478,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 478
                },
                "tagName": {
                  "type": "constant",
                  "value": "set"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "STOP": {
          "type": "function",
          "refID": 480,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 480
                },
                "tagName": {
                  "type": "constant",
                  "value": "stop"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SVG": {
          "type": "function",
          "refID": 482,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 482
                },
                "tagName": {
                  "type": "constant",
                  "value": "svg"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SWITCH": {
          "type": "function",
          "refID": 484,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 484
                },
                "tagName": {
                  "type": "constant",
                  "value": "switch"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "SYMBOL": {
          "type": "function",
          "refID": 486,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 486
                },
                "tagName": {
                  "type": "constant",
                  "value": "symbol"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXT": {
          "type": "function",
          "refID": 488,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 488
                },
                "tagName": {
                  "type": "constant",
                  "value": "text"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TEXTPATH": {
          "type": "function",
          "refID": 490,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 490
                },
                "tagName": {
                  "type": "constant",
                  "value": "textPath"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TREF": {
          "type": "function",
          "refID": 492,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 492
                },
                "tagName": {
                  "type": "constant",
                  "value": "tref"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "TSPAN": {
          "type": "function",
          "refID": 494,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 494
                },
                "tagName": {
                  "type": "constant",
                  "value": "tspan"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "USE": {
          "type": "function",
          "refID": 496,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 496
                },
                "tagName": {
                  "type": "constant",
                  "value": "use"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VIEW": {
          "type": "function",
          "refID": 498,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 498
                },
                "tagName": {
                  "type": "constant",
                  "value": "view"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "VKERN": {
          "type": "function",
          "refID": 500,
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 500
                },
                "tagName": {
                  "type": "constant",
                  "value": "vkern"
                },
                "children": {
                  "ref": 84
                },
                "htmljsType": {
                  "ref": 82
                }
              }
            }
          }
        },
        "CharRef": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 503
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 503
                }
              }
            }
          }
        },
        "Comment": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 506
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 506
                }
              }
            }
          }
        },
        "Raw": {
          "type": "function",
          "members": {
            "htmljsType": {
              "type": "array",
              "refID": 509
            },
            "prototype": {
              "type": "object",
              "members": {
                "htmljsType": {
                  "ref": 509
                }
              }
            }
          }
        },
        "isArray": {
          "type": "function"
        },
        "isConstructedObject": {
          "type": "function"
        },
        "isNully": {
          "type": "function"
        },
        "isValidAttributeName": {
          "type": "function"
        },
        "flattenAttributes": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "TEXTMODE": {
          "type": "object",
          "members": {
            "STRING": {
              "type": "constant",
              "value": 1
            },
            "RCDATA": {
              "type": "constant",
              "value": 2
            },
            "ATTRIBUTE": {
              "type": "constant",
              "value": 3
            }
          }
        },
        "toText": {
          "type": "function"
        }
      }
    }
  },
  "html-tools": {
    "HTMLTools": {
      "type": "object",
      "members": {
        "Parse": {
          "type": "object",
          "members": {
            "getCharacterReference": {
              "type": "function"
            },
            "getComment": {
              "type": "function"
            },
            "getDoctype": {
              "type": "function"
            },
            "getHTMLToken": {
              "type": "function"
            },
            "getTagToken": {
              "type": "function"
            },
            "getContent": {
              "type": "function"
            },
            "getRCData": {
              "type": "function"
            }
          }
        },
        "asciiLowerCase": {
          "type": "function"
        },
        "properCaseTagName": {
          "type": "function"
        },
        "properCaseAttributeName": {
          "type": "function"
        },
        "Scanner": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "rest": {
                  "type": "function"
                },
                "isEOF": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "peek": {
                  "type": "function"
                }
              }
            }
          }
        },
        "TEMPLATE_TAG_POSITION": {
          "type": "object",
          "members": {
            "ELEMENT": {
              "type": "constant",
              "value": 1
            },
            "IN_START_TAG": {
              "type": "constant",
              "value": 2
            },
            "IN_ATTRIBUTE": {
              "type": "constant",
              "value": 3
            },
            "IN_RCDATA": {
              "type": "constant",
              "value": 4
            },
            "IN_RAWTEXT": {
              "type": "constant",
              "value": 5
            }
          }
        },
        "TemplateTag": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "HTMLTools.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parseFragment": {
          "type": "function"
        },
        "codePointToString": {
          "type": "function"
        }
      }
    }
  },
  "blaze-tools": {
    "BlazeTools": {
      "type": "object",
      "members": {
        "parseNumber": {
          "type": "function"
        },
        "parseIdentifierName": {
          "type": "function"
        },
        "parseExtendedIdentifierName": {
          "type": "function"
        },
        "parseStringLiteral": {
          "type": "function"
        },
        "EmitCode": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJSLiteral": {
          "type": "function"
        },
        "toObjectLiteralKey": {
          "type": "function"
        },
        "ToJSVisitor": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function"
            },
            "def": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "visitNull": {
                  "type": "function"
                },
                "visitPrimitive": {
                  "type": "function"
                },
                "visitArray": {
                  "type": "function"
                },
                "visitTag": {
                  "type": "function"
                },
                "visitComment": {
                  "type": "function"
                },
                "visitCharRef": {
                  "type": "function"
                },
                "visitRaw": {
                  "type": "function"
                },
                "visitObject": {
                  "type": "function"
                },
                "generateCall": {
                  "type": "function"
                },
                "generateAttrsDictionary": {
                  "type": "function"
                },
                "visit": {
                  "type": "function"
                },
                "visitFunction": {
                  "type": "function"
                }
              }
            }
          }
        },
        "toJS": {
          "type": "function"
        }
      }
    }
  },
  "spacebars-compiler": {
    "SpacebarsCompiler": {
      "type": "object",
      "members": {
        "TemplateTag": {
          "type": "function",
          "members": {
            "parse": {
              "type": "function"
            },
            "peek": {
              "type": "function"
            },
            "parseCompleteTag": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructorName": {
                  "type": "constant",
                  "value": "SpacebarsCompiler.TemplateTag"
                },
                "toJS": {
                  "type": "function"
                }
              }
            }
          }
        },
        "optimize": {
          "type": "function"
        },
        "CodeGen": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "codeGenTemplateTag": {
                  "type": "function"
                },
                "codeGenPath": {
                  "type": "function"
                },
                "codeGenArgValue": {
                  "type": "function"
                },
                "codeGenMustache": {
                  "type": "function"
                },
                "codeGenMustacheArgs": {
                  "type": "function"
                },
                "codeGenBlock": {
                  "type": "function"
                },
                "codeGenInclusionData": {
                  "type": "function"
                },
                "codeGenInclusionDataFunc": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isReservedName": {
          "type": "function"
        },
        "parse": {
          "type": "function"
        },
        "compile": {
          "type": "function"
        },
        "codeGen": {
          "type": "function"
        }
      }
    }
  },
  "jquery": {},
  "observe-sequence": {
    "ObserveSequence": {
      "type": "object",
      "members": {
        "observe": {
          "type": "function"
        },
        "fetch": {
          "type": "function"
        }
      }
    }
  },
  "reactive-var": {
    "ReactiveVar": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "toString": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "blaze": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "spacebars": {
    "Spacebars": {
      "type": "object",
      "members": {
        "include": {
          "type": "function"
        },
        "mustacheImpl": {
          "type": "function"
        },
        "mustache": {
          "type": "function"
        },
        "attrMustache": {
          "type": "function"
        },
        "dataMustache": {
          "type": "function"
        },
        "makeRaw": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "kw": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "dot": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "TemplateWith": {
          "type": "function"
        }
      }
    }
  },
  "ui": {
    "Blaze": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "UI": {
      "type": "object",
      "members": {
        "View": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "onViewCreated": {
                  "type": "function"
                },
                "onViewReady": {
                  "type": "function"
                },
                "onViewDestroyed": {
                  "type": "function"
                },
                "removeViewDestroyedListener": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "firstNode": {
                  "type": "function"
                },
                "lastNode": {
                  "type": "function"
                },
                "lookup": {
                  "type": "function"
                },
                "lookupTemplate": {
                  "type": "function"
                }
              }
            }
          }
        },
        "currentView": {
          "type": "null",
          "value": null
        },
        "render": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "renderWithData": {
          "type": "function"
        },
        "remove": {
          "type": "function"
        },
        "toHTML": {
          "type": "function"
        },
        "toHTMLWithData": {
          "type": "function"
        },
        "getData": {
          "type": "function",
          "refID": 35
        },
        "getElementData": {
          "type": "function"
        },
        "getView": {
          "type": "function"
        },
        "With": {
          "type": "function"
        },
        "Let": {
          "type": "function"
        },
        "If": {
          "type": "function"
        },
        "Unless": {
          "type": "function"
        },
        "Each": {
          "type": "function"
        },
        "InOuterTemplateScope": {
          "type": "function"
        },
        "registerHelper": {
          "type": "function",
          "refID": 53
        },
        "Template": {
          "type": "function",
          "members": {
            "instance": {
              "type": "function"
            },
            "currentData": {
              "ref": 35
            },
            "parentData": {
              "type": "function"
            },
            "registerHelper": {
              "ref": 53
            },
            "prototype": {
              "type": "object",
              "members": {
                "onCreated": {
                  "type": "function"
                },
                "onRendered": {
                  "type": "function"
                },
                "onDestroyed": {
                  "type": "function"
                },
                "constructView": {
                  "type": "function"
                },
                "helpers": {
                  "type": "function"
                },
                "events": {
                  "type": "function"
                }
              }
            }
          }
        },
        "isTemplate": {
          "type": "function"
        },
        "TemplateInstance": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "$": {
                  "type": "function"
                },
                "findAll": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "autorun": {
                  "type": "function"
                },
                "subscribe": {
                  "type": "function"
                },
                "subscriptionsReady": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReactiveVar": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "get": {
                  "type": "function"
                },
                "set": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Handlebars": {
      "type": "object",
      "members": {
        "registerHelper": {
          "type": "function"
        },
        "SafeString": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "boilerplate-generator": {
    "Boilerplate": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "toHTML": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "webapp-hashing": {
    "WebAppHashing": {
      "type": "object",
      "members": {
        "calculateClientHash": {
          "type": "function"
        }
      }
    }
  },
  "webapp": {
    "WebApp": {
      "type": "object",
      "members": {
        "defaultArch": {
          "type": "constant",
          "value": "web.browser"
        },
        "clientPrograms": {
          "type": "object",
          "members": {
            "web.browser": {
              "type": "object",
              "members": {
                "manifest": {
                  "type": "array"
                },
                "version": {
                  "type": "constant",
                  "value": "66b1107900176d7e274f3c03752344d355c10edf"
                },
                "PUBLIC_SETTINGS": {
                  "type": "object",
                  "members": {
                    "velocity:html-reporter": {
                      "type": "object",
                      "members": {
                        "position": {
                          "type": "constant",
                          "value": "top right"
                        },
                        "tab-index": {
                          "type": "constant",
                          "value": 1
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "categorizeRequest": {
          "type": "function"
        },
        "addHtmlAttributeHook": {
          "type": "function"
        },
        "connectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "type": "function",
              "refID": 11
            },
            "handle": {
              "type": "function",
              "refID": 13
            },
            "listen": {
              "type": "function",
              "refID": 15
            },
            "setMaxListeners": {
              "type": "function",
              "refID": 17
            },
            "emit": {
              "type": "function",
              "refID": 19
            },
            "addListener": {
              "type": "function",
              "refID": 21
            },
            "on": {
              "ref": 21
            },
            "once": {
              "type": "function",
              "refID": 23
            },
            "removeListener": {
              "type": "function",
              "refID": 25
            },
            "removeAllListeners": {
              "type": "function",
              "refID": 27
            },
            "listeners": {
              "type": "function",
              "refID": 29
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "rawConnectHandlers": {
          "type": "function",
          "members": {
            "use": {
              "ref": 11
            },
            "handle": {
              "ref": 13
            },
            "listen": {
              "ref": 15
            },
            "setMaxListeners": {
              "ref": 17
            },
            "emit": {
              "ref": 19
            },
            "addListener": {
              "ref": 21
            },
            "on": {
              "ref": 21
            },
            "once": {
              "ref": 23
            },
            "removeListener": {
              "ref": 25
            },
            "removeAllListeners": {
              "ref": 27
            },
            "listeners": {
              "ref": 29
            },
            "route": {
              "type": "constant",
              "value": "/"
            },
            "stack": {
              "type": "array"
            }
          }
        },
        "httpServer": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "connections": {
              "type": "constant",
              "value": 1
            },
            "timeout": {
              "type": "constant",
              "value": 5000
            },
            "setTimeout": {
              "type": "function"
            },
            "listen": {
              "type": "function"
            },
            "address": {
              "type": "function"
            },
            "getConnections": {
              "type": "function"
            },
            "close": {
              "type": "function"
            },
            "listenFD": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "unref": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 17
            },
            "emit": {
              "ref": 19
            },
            "addListener": {
              "ref": 21
            },
            "on": {
              "ref": 21
            },
            "once": {
              "ref": 23
            },
            "removeListener": {
              "ref": 25
            },
            "removeAllListeners": {
              "ref": 27
            },
            "listeners": {
              "ref": 29
            }
          }
        },
        "suppressConnectErrors": {
          "type": "function"
        },
        "onListening": {
          "type": "function"
        },
        "clientHash": {
          "type": "function"
        },
        "calculateClientHashRefreshable": {
          "type": "function"
        },
        "calculateClientHashNonRefreshable": {
          "type": "function"
        },
        "calculateClientHashCordova": {
          "type": "function"
        }
      }
    },
    "main": {
      "type": "function"
    }
  },
  "audit-argument-checks": {},
  "callback-hook": {
    "Hook": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "register": {
              "type": "function"
            },
            "each": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "babel-runtime": {
    "babelHelpers": {
      "type": "object",
      "members": {
        "sanitizeForInObject": {
          "type": "function"
        },
        "taggedTemplateLiteralLoose": {
          "type": "function"
        },
        "classCallCheck": {
          "type": "function"
        },
        "inherits": {
          "type": "function"
        },
        "createClass": {
          "type": "function"
        },
        "objectWithoutProperties": {
          "type": "function"
        },
        "objectDestructuringEmpty": {
          "type": "function"
        },
        "bind": {
          "type": "function"
        },
        "slice": {
          "type": "function"
        }
      }
    }
  },
  "promise": {
    "Promise": {
      "type": "function",
      "members": {
        "resolve": {
          "type": "function"
        },
        "all": {
          "type": "function"
        },
        "reject": {
          "type": "function"
        },
        "race": {
          "type": "function"
        },
        "denodeify": {
          "type": "function"
        },
        "nodeify": {
          "type": "function"
        },
        "awaitAll": {
          "type": "function"
        },
        "await": {
          "type": "function"
        },
        "async": {
          "type": "function"
        },
        "asyncApply": {
          "type": "function"
        },
        "Fiber": {
          "type": "function",
          "members": {
            "yield": {
              "type": "function"
            },
            "poolSize": {
              "type": "constant",
              "value": 120
            },
            "fibersCreated": {
              "type": "constant",
              "value": 13
            },
            "prototype": {
              "type": "object",
              "members": {
                "started": {
                  "type": "undefined"
                },
                "reset": {
                  "type": "function"
                },
                "run": {
                  "type": "function"
                },
                "throwInto": {
                  "type": "function"
                }
              }
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "then": {
              "type": "function"
            },
            "done": {
              "type": "function"
            },
            "finally": {
              "type": "function"
            },
            "catch": {
              "type": "function"
            },
            "nodeify": {
              "type": "function"
            },
            "await": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ecmascript-collections": {
    "Map": {
      "type": "function"
    },
    "Set": {
      "type": "function"
    }
  },
  "ddp-server": {
    "DDPServer": {
      "type": "object"
    }
  },
  "ddp": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    }
  },
  "binary-heap": {
    "MaxHeap": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "maxElementId": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    },
    "MinMaxHeap": {
      "type": "function",
      "refID": 0,
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "ref": 0
            },
            "set": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            },
            "minElementId": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "has": {
              "type": "function"
            },
            "empty": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "maxElementId": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "mongo": {
    "MongoTest": {
      "type": "object",
      "members": {
        "DocFetcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "fetch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    },
    "Mongo": {
      "type": "object",
      "members": {
        "Collection": {
          "type": "function",
          "refID": 1,
          "members": {
            "Cursor": {
              "type": "function",
              "refID": 2,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "refID": 20,
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 32
                    },
                    "toJSONValue": {
                      "ref": 32
                    },
                    "valueOf": {
                      "ref": 32
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function"
                },
                "rawDatabase": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "attachSchema": {
                  "type": "function"
                },
                "simpleSchema": {
                  "type": "function"
                },
                "permit": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ObjectID": {
          "ref": 20
        },
        "Cursor": {
          "ref": 2
        }
      }
    }
  },
  "blaze-html-templates": {},
  "session": {},
  "standard-minifiers": {},
  "reload": {},
  "less": {},
  "npm-node-aes-gcm": {
    "NpmModuleNodeAesGcm": {
      "type": "object",
      "members": {
        "encrypt": {
          "type": "function"
        },
        "decrypt": {
          "type": "function"
        }
      }
    }
  },
  "oauth-encryption": {
    "OAuthEncryption": {
      "type": "object",
      "members": {
        "loadKey": {
          "type": "function"
        },
        "seal": {
          "type": "function"
        },
        "open": {
          "type": "function"
        },
        "isSealed": {
          "type": "function"
        },
        "keyIsLoaded": {
          "type": "function"
        }
      }
    }
  },
  "accounts-base": {
    "Accounts": {
      "type": "object",
      "members": {
        "connection": {
          "type": "undefined"
        },
        "users": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "hookOptions": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "upsert": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                },
                "all": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "object"
                    },
                    "update": {
                      "type": "object"
                    },
                    "remove": {
                      "type": "object"
                    },
                    "find": {
                      "type": "object"
                    },
                    "findOne": {
                      "type": "object"
                    },
                    "all": {
                      "type": "object"
                    }
                  }
                }
              }
            },
            "direct": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                }
              }
            },
            "upsert": {
              "type": "function"
            },
            "constructor": {
              "type": "function",
              "refID": 66,
              "members": {
                "Cursor": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "rewind": {
                          "type": "function"
                        },
                        "forEach": {
                          "type": "function"
                        },
                        "getTransform": {
                          "type": "function"
                        },
                        "map": {
                          "type": "function"
                        },
                        "fetch": {
                          "type": "function"
                        },
                        "count": {
                          "type": "function"
                        },
                        "observe": {
                          "type": "function"
                        },
                        "observeChanges": {
                          "type": "function"
                        }
                      }
                    }
                  }
                },
                "ObjectID": {
                  "type": "function",
                  "members": {
                    "prototype": {
                      "type": "object",
                      "members": {
                        "toString": {
                          "type": "function"
                        },
                        "equals": {
                          "type": "function"
                        },
                        "clone": {
                          "type": "function"
                        },
                        "typeName": {
                          "type": "function"
                        },
                        "getTimestamp": {
                          "type": "function"
                        },
                        "toHexString": {
                          "type": "function",
                          "refID": 97
                        },
                        "toJSONValue": {
                          "ref": 97
                        },
                        "valueOf": {
                          "ref": 97
                        }
                      }
                    }
                  }
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 66
                    },
                    "find": {
                      "type": "function",
                      "refID": 100
                    },
                    "findOne": {
                      "type": "function",
                      "refID": 102
                    },
                    "insert": {
                      "type": "function",
                      "refID": 104
                    },
                    "update": {
                      "type": "function",
                      "refID": 106
                    },
                    "remove": {
                      "type": "function",
                      "refID": 108
                    },
                    "upsert": {
                      "type": "function",
                      "refID": 110
                    },
                    "rawCollection": {
                      "type": "function",
                      "refID": 112
                    },
                    "rawDatabase": {
                      "type": "function",
                      "refID": 114
                    },
                    "allow": {
                      "type": "function",
                      "refID": 116
                    },
                    "deny": {
                      "type": "function",
                      "refID": 118
                    },
                    "attachSchema": {
                      "type": "function",
                      "refID": 120
                    },
                    "simpleSchema": {
                      "type": "function",
                      "refID": 122
                    },
                    "permit": {
                      "type": "function",
                      "refID": 124
                    }
                  }
                }
              }
            },
            "find": {
              "ref": 100
            },
            "findOne": {
              "ref": 102
            },
            "insert": {
              "ref": 104
            },
            "update": {
              "ref": 106
            },
            "remove": {
              "ref": 108
            },
            "rawCollection": {
              "ref": 112
            },
            "rawDatabase": {
              "ref": 114
            },
            "allow": {
              "ref": 116
            },
            "deny": {
              "ref": 118
            },
            "attachSchema": {
              "ref": 120
            },
            "simpleSchema": {
              "ref": 122
            },
            "permit": {
              "ref": 124
            }
          }
        },
        "expireTokenInterval": {
          "type": "object",
          "members": {
            "unref": {
              "type": "function"
            },
            "ref": {
              "type": "function"
            },
            "close": {
              "type": "function"
            }
          }
        },
        "oauth": {
          "type": "object",
          "members": {
            "registerService": {
              "type": "function"
            },
            "unregisterService": {
              "type": "function"
            },
            "serviceNames": {
              "type": "function"
            }
          }
        },
        "emailTemplates": {
          "type": "object",
          "members": {
            "from": {
              "type": "constant",
              "value": "Meteor Accounts <no-reply@meteor.com>"
            },
            "siteName": {
              "type": "constant",
              "value": "localhost:3000"
            },
            "resetPassword": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "verifyEmail": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            },
            "enrollAccount": {
              "type": "object",
              "members": {
                "subject": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                }
              }
            }
          }
        },
        "findUserByUsername": {
          "type": "function"
        },
        "findUserByEmail": {
          "type": "function"
        },
        "setUsername": {
          "type": "function"
        },
        "setPassword": {
          "type": "function"
        },
        "sendResetPasswordEmail": {
          "type": "function"
        },
        "sendEnrollmentEmail": {
          "type": "function"
        },
        "sendVerificationEmail": {
          "type": "function"
        },
        "addEmail": {
          "type": "function"
        },
        "removeEmail": {
          "type": "function"
        },
        "createUser": {
          "type": "function"
        },
        "userId": {
          "type": "function"
        },
        "validateLoginAttempt": {
          "type": "function"
        },
        "validateNewUser": {
          "type": "function"
        },
        "onCreateUser": {
          "type": "function"
        },
        "registerLoginHandler": {
          "type": "function"
        },
        "destroyToken": {
          "type": "function"
        },
        "addAutopublishFields": {
          "type": "function"
        },
        "config": {
          "type": "function"
        },
        "insertUserDoc": {
          "type": "function"
        },
        "updateOrCreateUserFromExternalService": {
          "type": "function"
        },
        "urls": {
          "type": "object",
          "members": {
            "resetPassword": {
              "type": "function"
            },
            "verifyEmail": {
              "type": "function"
            },
            "enrollAccount": {
              "type": "function"
            }
          }
        },
        "user": {
          "type": "function"
        },
        "onLogin": {
          "type": "function"
        },
        "onLoginFailure": {
          "type": "function"
        },
        "LoginCancelledError": {
          "type": "function",
          "refID": 209,
          "members": {
            "captureStackTrace": {
              "type": "function"
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function"
            },
            "numericError": {
              "type": "constant",
              "value": 145546287
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 209
                },
                "name": {
                  "type": "constant",
                  "value": "Accounts.LoginCancelledError"
                }
              }
            }
          }
        },
        "removeDefaultRateLimit": {
          "type": "function"
        },
        "addDefaultRateLimit": {
          "type": "function"
        },
        "loginServiceConfiguration": {
          "type": "object",
          "members": {
            "find": {
              "ref": 100
            },
            "findOne": {
              "ref": 102
            },
            "insert": {
              "ref": 104
            },
            "update": {
              "ref": 106
            },
            "remove": {
              "ref": 108
            },
            "upsert": {
              "ref": 110
            },
            "rawCollection": {
              "ref": 112
            },
            "rawDatabase": {
              "ref": 114
            },
            "allow": {
              "ref": 116
            },
            "deny": {
              "ref": 118
            },
            "attachSchema": {
              "ref": 120
            },
            "simpleSchema": {
              "ref": 122
            },
            "permit": {
              "ref": 124
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    },
    "AccountsServer": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "userId": {
              "type": "function"
            },
            "validateLoginAttempt": {
              "type": "function"
            },
            "validateNewUser": {
              "type": "function"
            },
            "onCreateUser": {
              "type": "function"
            },
            "registerLoginHandler": {
              "type": "function"
            },
            "destroyToken": {
              "type": "function"
            },
            "addAutopublishFields": {
              "type": "function"
            },
            "config": {
              "type": "function"
            },
            "insertUserDoc": {
              "type": "function"
            },
            "updateOrCreateUserFromExternalService": {
              "type": "function"
            },
            "urls": {
              "type": "object",
              "members": {
                "resetPassword": {
                  "type": "function"
                },
                "verifyEmail": {
                  "type": "function"
                },
                "enrollAccount": {
                  "type": "function"
                }
              }
            },
            "user": {
              "type": "function"
            },
            "onLogin": {
              "type": "function"
            },
            "onLoginFailure": {
              "type": "function"
            },
            "LoginCancelledError": {
              "type": "function",
              "refID": 35,
              "members": {
                "captureStackTrace": {
                  "type": "function"
                },
                "stackTraceLimit": {
                  "type": "constant",
                  "value": 10
                },
                "prepareStackTrace": {
                  "type": "function"
                },
                "numericError": {
                  "type": "constant",
                  "value": 145546287
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "constructor": {
                      "ref": 35
                    },
                    "name": {
                      "type": "constant",
                      "value": "Accounts.LoginCancelledError"
                    }
                  }
                }
              }
            },
            "removeDefaultRateLimit": {
              "type": "function"
            },
            "addDefaultRateLimit": {
              "type": "function"
            },
            "loginServiceConfiguration": {
              "type": "object",
              "members": {
                "find": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function"
                },
                "rawDatabase": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "attachSchema": {
                  "type": "function"
                },
                "simpleSchema": {
                  "type": "function"
                },
                "permit": {
                  "type": "function"
                }
              }
            },
            "ConfigError": {
              "type": "function"
            }
          }
        }
      }
    },
    "AccountsTest": {
      "type": "undefined"
    }
  },
  "service-configuration": {
    "ServiceConfiguration": {
      "type": "object",
      "members": {
        "configurations": {
          "type": "object",
          "members": {
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "rawCollection": {
              "type": "function"
            },
            "rawDatabase": {
              "type": "function"
            },
            "allow": {
              "type": "function"
            },
            "deny": {
              "type": "function"
            },
            "attachSchema": {
              "type": "function"
            },
            "simpleSchema": {
              "type": "function"
            },
            "permit": {
              "type": "function"
            }
          }
        },
        "ConfigError": {
          "type": "function"
        }
      }
    }
  },
  "localstorage": {},
  "url": {
    "URL": {
      "type": "object"
    }
  },
  "oauth": {
    "OAuth": {
      "type": "object",
      "members": {
        "registerService": {
          "type": "function"
        },
        "retrieveCredential": {
          "type": "function"
        },
        "sealSecret": {
          "type": "function"
        },
        "openSecret": {
          "type": "function"
        },
        "openSecrets": {
          "type": "function"
        }
      }
    },
    "OAuthTest": {
      "type": "object",
      "members": {
        "unregisterService": {
          "type": "function"
        },
        "middleware": {
          "type": "function"
        }
      }
    },
    "Oauth": {
      "type": "object",
      "members": {
        "registerService": {
          "type": "function"
        },
        "retrieveCredential": {
          "type": "function"
        },
        "sealSecret": {
          "type": "function"
        },
        "openSecret": {
          "type": "function"
        },
        "openSecrets": {
          "type": "function"
        }
      }
    }
  },
  "accounts-oauth": {},
  "oauth2": {},
  "http": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "methodsMaxDataLength": {
          "type": "constant",
          "value": 5242880
        },
        "defaultAuth": {
          "type": "function"
        },
        "methods": {
          "type": "function"
        },
        "publishFormats": {
          "type": "function"
        },
        "publish": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    },
    "HTTPInternals": {
      "type": "object",
      "members": {
        "NpmModules": {
          "type": "object",
          "members": {
            "request": {
              "type": "object",
              "members": {
                "version": {
                  "type": "constant",
                  "value": "2.53.0"
                },
                "module": {
                  "type": "function",
                  "members": {
                    "get": {
                      "type": "function"
                    },
                    "head": {
                      "type": "function"
                    },
                    "post": {
                      "type": "function"
                    },
                    "put": {
                      "type": "function"
                    },
                    "patch": {
                      "type": "function"
                    },
                    "del": {
                      "type": "function"
                    },
                    "jar": {
                      "type": "function"
                    },
                    "cookie": {
                      "type": "function"
                    },
                    "defaults": {
                      "type": "function"
                    },
                    "forever": {
                      "type": "function"
                    },
                    "Request": {
                      "type": "function",
                      "members": {
                        "super_": {
                          "type": "function",
                          "refID": 25,
                          "members": {
                            "super_": {
                              "type": "function",
                              "members": {
                                "listenerCount": {
                                  "type": "function"
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "setMaxListeners": {
                                      "type": "function",
                                      "refID": 30
                                    },
                                    "emit": {
                                      "type": "function",
                                      "refID": 32
                                    },
                                    "addListener": {
                                      "type": "function",
                                      "refID": 34
                                    },
                                    "on": {
                                      "ref": 34
                                    },
                                    "once": {
                                      "type": "function",
                                      "refID": 36
                                    },
                                    "removeListener": {
                                      "type": "function",
                                      "refID": 38
                                    },
                                    "removeAllListeners": {
                                      "type": "function",
                                      "refID": 40
                                    },
                                    "listeners": {
                                      "type": "function",
                                      "refID": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Readable": {
                              "type": "function",
                              "refID": 44,
                              "members": {
                                "ReadableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 25
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 48
                                    },
                                    "unshift": {
                                      "type": "function",
                                      "refID": 50
                                    },
                                    "setEncoding": {
                                      "type": "function",
                                      "refID": 52
                                    },
                                    "read": {
                                      "type": "function",
                                      "refID": 54
                                    },
                                    "pipe": {
                                      "type": "function",
                                      "refID": 56
                                    },
                                    "unpipe": {
                                      "type": "function",
                                      "refID": 58
                                    },
                                    "on": {
                                      "type": "function",
                                      "refID": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "type": "function",
                                      "refID": 62
                                    },
                                    "pause": {
                                      "type": "function",
                                      "refID": 64
                                    },
                                    "wrap": {
                                      "type": "function",
                                      "refID": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Writable": {
                              "type": "function",
                              "members": {
                                "WritableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 25
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "pipe": {
                                      "type": "function"
                                    },
                                    "write": {
                                      "type": "function",
                                      "refID": 74
                                    },
                                    "end": {
                                      "type": "function",
                                      "refID": 76
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "addListener": {
                                      "ref": 34
                                    },
                                    "on": {
                                      "ref": 34
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Duplex": {
                              "type": "function",
                              "refID": 78,
                              "members": {
                                "super_": {
                                  "ref": 44
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "push": {
                                      "ref": 48
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Transform": {
                              "type": "function",
                              "refID": 80,
                              "members": {
                                "super_": {
                                  "ref": 78
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 82
                                    },
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "PassThrough": {
                              "type": "function",
                              "members": {
                                "super_": {
                                  "ref": 80
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "ref": 82
                                    },
                                    "write": {
                                      "ref": 74
                                    },
                                    "end": {
                                      "ref": 76
                                    },
                                    "unshift": {
                                      "ref": 50
                                    },
                                    "setEncoding": {
                                      "ref": 52
                                    },
                                    "read": {
                                      "ref": 54
                                    },
                                    "pipe": {
                                      "ref": 56
                                    },
                                    "unpipe": {
                                      "ref": 58
                                    },
                                    "on": {
                                      "ref": 60
                                    },
                                    "addListener": {
                                      "ref": 60
                                    },
                                    "resume": {
                                      "ref": 62
                                    },
                                    "pause": {
                                      "ref": 64
                                    },
                                    "wrap": {
                                      "ref": 66
                                    },
                                    "setMaxListeners": {
                                      "ref": 30
                                    },
                                    "emit": {
                                      "ref": 32
                                    },
                                    "once": {
                                      "ref": 36
                                    },
                                    "removeListener": {
                                      "ref": 38
                                    },
                                    "removeAllListeners": {
                                      "ref": 40
                                    },
                                    "listeners": {
                                      "ref": 42
                                    }
                                  }
                                }
                              }
                            },
                            "Stream": {
                              "ref": 25
                            },
                            "prototype": {
                              "type": "object",
                              "members": {
                                "pipe": {
                                  "type": "function"
                                },
                                "setMaxListeners": {
                                  "ref": 30
                                },
                                "emit": {
                                  "ref": 32
                                },
                                "addListener": {
                                  "ref": 34
                                },
                                "on": {
                                  "ref": 34
                                },
                                "once": {
                                  "ref": 36
                                },
                                "removeListener": {
                                  "ref": 38
                                },
                                "removeAllListeners": {
                                  "ref": 40
                                },
                                "listeners": {
                                  "ref": 42
                                }
                              }
                            }
                          }
                        },
                        "debug": {
                          "type": "undefined"
                        },
                        "defaultProxyHeaderWhiteList": {
                          "type": "array"
                        },
                        "defaultProxyHeaderExclusiveList": {
                          "type": "array"
                        },
                        "prototype": {
                          "type": "object",
                          "members": {
                            "setupTunnel": {
                              "type": "function"
                            },
                            "init": {
                              "type": "function"
                            },
                            "getNewAgent": {
                              "type": "function"
                            },
                            "start": {
                              "type": "function"
                            },
                            "onRequestError": {
                              "type": "function"
                            },
                            "onRequestResponse": {
                              "type": "function"
                            },
                            "abort": {
                              "type": "function"
                            },
                            "pipeDest": {
                              "type": "function"
                            },
                            "qs": {
                              "type": "function"
                            },
                            "form": {
                              "type": "function"
                            },
                            "multipart": {
                              "type": "function"
                            },
                            "json": {
                              "type": "function"
                            },
                            "getHeader": {
                              "type": "function"
                            },
                            "auth": {
                              "type": "function"
                            },
                            "aws": {
                              "type": "function"
                            },
                            "httpSignature": {
                              "type": "function"
                            },
                            "hawk": {
                              "type": "function"
                            },
                            "oauth": {
                              "type": "function"
                            },
                            "jar": {
                              "type": "function"
                            },
                            "pipe": {
                              "type": "function"
                            },
                            "write": {
                              "type": "function"
                            },
                            "end": {
                              "type": "function"
                            },
                            "pause": {
                              "type": "function"
                            },
                            "resume": {
                              "type": "function"
                            },
                            "destroy": {
                              "type": "function"
                            },
                            "toJSON": {
                              "type": "function"
                            },
                            "setMaxListeners": {
                              "ref": 30
                            },
                            "emit": {
                              "ref": 32
                            },
                            "addListener": {
                              "ref": 34
                            },
                            "on": {
                              "ref": 34
                            },
                            "once": {
                              "ref": 36
                            },
                            "removeListener": {
                              "ref": 38
                            },
                            "removeAllListeners": {
                              "ref": 40
                            },
                            "listeners": {
                              "ref": 42
                            }
                          }
                        }
                      }
                    },
                    "initParams": {
                      "type": "function"
                    },
                    "debug": {
                      "type": "undefined"
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
  "facebook": {
    "Facebook": {
      "type": "object",
      "members": {
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-facebook": {},
  "spiderable": {
    "Spiderable": {
      "type": "object",
      "members": {
        "userAgentRegExps": {
          "type": "array"
        },
        "requestTimeoutMs": {
          "type": "constant",
          "value": 15000
        }
      }
    }
  },
  "nemo64:bootstrap": {},
  "google": {
    "Google": {
      "type": "object",
      "members": {
        "whitelistedFields": {
          "type": "array"
        },
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-google": {},
  "npm-bcrypt": {
    "NpmModuleBcrypt": {
      "type": "object",
      "members": {
        "genSaltSync": {
          "type": "function"
        },
        "genSalt": {
          "type": "function"
        },
        "hashSync": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "compareSync": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "getRounds": {
          "type": "function"
        }
      }
    }
  },
  "sha": {
    "SHA256": {
      "type": "function"
    }
  },
  "srp": {
    "SRP": {
      "type": "object",
      "members": {
        "generateVerifier": {
          "type": "function"
        },
        "matchVerifier": {
          "type": "object",
          "members": {
            "identity": {
              "type": "function",
              "refID": 4
            },
            "salt": {
              "ref": 4
            },
            "verifier": {
              "ref": 4
            }
          }
        }
      }
    }
  },
  "email": {
    "Email": {
      "type": "object",
      "members": {
        "send": {
          "type": "function"
        }
      }
    },
    "EmailInternals": {
      "type": "object",
      "members": {
        "NpmModules": {
          "type": "object",
          "members": {
            "mailcomposer": {
              "type": "object",
              "members": {
                "version": {
                  "type": "constant",
                  "value": "0.1.15"
                },
                "module": {
                  "type": "object",
                  "members": {
                    "MailComposer": {
                      "type": "function",
                      "members": {
                        "super_": {
                          "type": "function",
                          "refID": 5,
                          "members": {
                            "super_": {
                              "type": "function",
                              "members": {
                                "listenerCount": {
                                  "type": "function"
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "setMaxListeners": {
                                      "type": "function",
                                      "refID": 10
                                    },
                                    "emit": {
                                      "type": "function",
                                      "refID": 12
                                    },
                                    "addListener": {
                                      "type": "function",
                                      "refID": 14
                                    },
                                    "on": {
                                      "ref": 14
                                    },
                                    "once": {
                                      "type": "function",
                                      "refID": 16
                                    },
                                    "removeListener": {
                                      "type": "function",
                                      "refID": 18
                                    },
                                    "removeAllListeners": {
                                      "type": "function",
                                      "refID": 20
                                    },
                                    "listeners": {
                                      "type": "function",
                                      "refID": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Readable": {
                              "type": "function",
                              "refID": 24,
                              "members": {
                                "ReadableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 5
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 28
                                    },
                                    "unshift": {
                                      "type": "function",
                                      "refID": 30
                                    },
                                    "setEncoding": {
                                      "type": "function",
                                      "refID": 32
                                    },
                                    "read": {
                                      "type": "function",
                                      "refID": 34
                                    },
                                    "pipe": {
                                      "type": "function",
                                      "refID": 36
                                    },
                                    "unpipe": {
                                      "type": "function",
                                      "refID": 38
                                    },
                                    "on": {
                                      "type": "function",
                                      "refID": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "type": "function",
                                      "refID": 42
                                    },
                                    "pause": {
                                      "type": "function",
                                      "refID": 44
                                    },
                                    "wrap": {
                                      "type": "function",
                                      "refID": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Writable": {
                              "type": "function",
                              "members": {
                                "WritableState": {
                                  "type": "function"
                                },
                                "super_": {
                                  "ref": 5
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "pipe": {
                                      "type": "function"
                                    },
                                    "write": {
                                      "type": "function",
                                      "refID": 54
                                    },
                                    "end": {
                                      "type": "function",
                                      "refID": 56
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "addListener": {
                                      "ref": 14
                                    },
                                    "on": {
                                      "ref": 14
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Duplex": {
                              "type": "function",
                              "refID": 58,
                              "members": {
                                "super_": {
                                  "ref": 24
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "write": {
                                      "ref": 54
                                    },
                                    "end": {
                                      "ref": 56
                                    },
                                    "push": {
                                      "ref": 28
                                    },
                                    "unshift": {
                                      "ref": 30
                                    },
                                    "setEncoding": {
                                      "ref": 32
                                    },
                                    "read": {
                                      "ref": 34
                                    },
                                    "pipe": {
                                      "ref": 36
                                    },
                                    "unpipe": {
                                      "ref": 38
                                    },
                                    "on": {
                                      "ref": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "ref": 42
                                    },
                                    "pause": {
                                      "ref": 44
                                    },
                                    "wrap": {
                                      "ref": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Transform": {
                              "type": "function",
                              "refID": 60,
                              "members": {
                                "super_": {
                                  "ref": 58
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "type": "function",
                                      "refID": 62
                                    },
                                    "write": {
                                      "ref": 54
                                    },
                                    "end": {
                                      "ref": 56
                                    },
                                    "unshift": {
                                      "ref": 30
                                    },
                                    "setEncoding": {
                                      "ref": 32
                                    },
                                    "read": {
                                      "ref": 34
                                    },
                                    "pipe": {
                                      "ref": 36
                                    },
                                    "unpipe": {
                                      "ref": 38
                                    },
                                    "on": {
                                      "ref": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "ref": 42
                                    },
                                    "pause": {
                                      "ref": 44
                                    },
                                    "wrap": {
                                      "ref": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "PassThrough": {
                              "type": "function",
                              "members": {
                                "super_": {
                                  "ref": 60
                                },
                                "prototype": {
                                  "type": "object",
                                  "members": {
                                    "push": {
                                      "ref": 62
                                    },
                                    "write": {
                                      "ref": 54
                                    },
                                    "end": {
                                      "ref": 56
                                    },
                                    "unshift": {
                                      "ref": 30
                                    },
                                    "setEncoding": {
                                      "ref": 32
                                    },
                                    "read": {
                                      "ref": 34
                                    },
                                    "pipe": {
                                      "ref": 36
                                    },
                                    "unpipe": {
                                      "ref": 38
                                    },
                                    "on": {
                                      "ref": 40
                                    },
                                    "addListener": {
                                      "ref": 40
                                    },
                                    "resume": {
                                      "ref": 42
                                    },
                                    "pause": {
                                      "ref": 44
                                    },
                                    "wrap": {
                                      "ref": 46
                                    },
                                    "setMaxListeners": {
                                      "ref": 10
                                    },
                                    "emit": {
                                      "ref": 12
                                    },
                                    "once": {
                                      "ref": 16
                                    },
                                    "removeListener": {
                                      "ref": 18
                                    },
                                    "removeAllListeners": {
                                      "ref": 20
                                    },
                                    "listeners": {
                                      "ref": 22
                                    }
                                  }
                                }
                              }
                            },
                            "Stream": {
                              "ref": 5
                            },
                            "prototype": {
                              "type": "object",
                              "members": {
                                "pipe": {
                                  "type": "function",
                                  "refID": 67
                                },
                                "setMaxListeners": {
                                  "ref": 10
                                },
                                "emit": {
                                  "ref": 12
                                },
                                "addListener": {
                                  "ref": 14
                                },
                                "on": {
                                  "ref": 14
                                },
                                "once": {
                                  "ref": 16
                                },
                                "removeListener": {
                                  "ref": 18
                                },
                                "removeAllListeners": {
                                  "ref": 20
                                },
                                "listeners": {
                                  "ref": 22
                                }
                              }
                            }
                          }
                        },
                        "prototype": {
                          "type": "object",
                          "members": {
                            "addHeader": {
                              "type": "function"
                            },
                            "setMessageOption": {
                              "type": "function"
                            },
                            "useDKIM": {
                              "type": "function"
                            },
                            "addAttachment": {
                              "type": "function"
                            },
                            "getEnvelope": {
                              "type": "function"
                            },
                            "streamMessage": {
                              "type": "function"
                            },
                            "compileHeaders": {
                              "type": "function"
                            },
                            "pipe": {
                              "ref": 67
                            },
                            "setMaxListeners": {
                              "ref": 10
                            },
                            "emit": {
                              "ref": 12
                            },
                            "addListener": {
                              "ref": 14
                            },
                            "on": {
                              "ref": 14
                            },
                            "once": {
                              "ref": 16
                            },
                            "removeListener": {
                              "ref": 18
                            },
                            "removeAllListeners": {
                              "ref": 20
                            },
                            "listeners": {
                              "ref": 22
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
    "EmailTest": {
      "type": "object",
      "members": {
        "overrideOutputStream": {
          "type": "function"
        },
        "restoreOutputStream": {
          "type": "function"
        },
        "hookSend": {
          "type": "function"
        }
      }
    }
  },
  "accounts-password": {},
  "browser-policy-common": {
    "BrowserPolicy": {
      "type": "object",
      "members": {
        "content": {
          "type": "object",
          "members": {
            "allowContentTypeSniffing": {
              "type": "function"
            },
            "setPolicy": {
              "type": "function"
            },
            "allowInlineScripts": {
              "type": "function"
            },
            "disallowInlineScripts": {
              "type": "function"
            },
            "allowEval": {
              "type": "function"
            },
            "disallowEval": {
              "type": "function"
            },
            "allowInlineStyles": {
              "type": "function"
            },
            "disallowInlineStyles": {
              "type": "function"
            },
            "allowSameOriginForAll": {
              "type": "function"
            },
            "allowDataUrlForAll": {
              "type": "function"
            },
            "allowOriginForAll": {
              "type": "function"
            },
            "disallowAll": {
              "type": "function"
            },
            "allowScriptOrigin": {
              "type": "function"
            },
            "disallowScript": {
              "type": "function"
            },
            "allowScriptDataUrl": {
              "type": "function"
            },
            "allowScriptSameOrigin": {
              "type": "function"
            },
            "allowObjectOrigin": {
              "type": "function"
            },
            "disallowObject": {
              "type": "function"
            },
            "allowObjectDataUrl": {
              "type": "function"
            },
            "allowObjectSameOrigin": {
              "type": "function"
            },
            "allowImageOrigin": {
              "type": "function"
            },
            "disallowImage": {
              "type": "function"
            },
            "allowImageDataUrl": {
              "type": "function"
            },
            "allowImageSameOrigin": {
              "type": "function"
            },
            "allowMediaOrigin": {
              "type": "function"
            },
            "disallowMedia": {
              "type": "function"
            },
            "allowMediaDataUrl": {
              "type": "function"
            },
            "allowMediaSameOrigin": {
              "type": "function"
            },
            "allowFontOrigin": {
              "type": "function"
            },
            "disallowFont": {
              "type": "function"
            },
            "allowFontDataUrl": {
              "type": "function"
            },
            "allowFontSameOrigin": {
              "type": "function"
            },
            "allowConnectOrigin": {
              "type": "function"
            },
            "disallowConnect": {
              "type": "function"
            },
            "allowConnectDataUrl": {
              "type": "function"
            },
            "allowConnectSameOrigin": {
              "type": "function"
            },
            "allowStyleOrigin": {
              "type": "function"
            },
            "disallowStyle": {
              "type": "function"
            },
            "allowStyleDataUrl": {
              "type": "function"
            },
            "allowStyleSameOrigin": {
              "type": "function"
            },
            "allowFrameOrigin": {
              "type": "function"
            },
            "disallowFrame": {
              "type": "function"
            },
            "allowFrameDataUrl": {
              "type": "function"
            },
            "allowFrameSameOrigin": {
              "type": "function"
            }
          }
        },
        "framing": {
          "type": "object",
          "members": {
            "disallow": {
              "type": "function"
            },
            "restrictToOrigin": {
              "type": "function"
            },
            "allowAll": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "browser-policy-content": {},
  "browser-policy-framing": {},
  "browser-policy": {},
  "amplify": {},
  "mquandalle:bower": {},
  "underscorestring:underscore.string": {
    "s": {
      "type": "function",
      "members": {
        "VERSION": {
          "type": "constant",
          "value": "3.2.1"
        },
        "isBlank": {
          "type": "function"
        },
        "stripTags": {
          "type": "function"
        },
        "capitalize": {
          "type": "function"
        },
        "decapitalize": {
          "type": "function"
        },
        "chop": {
          "type": "function"
        },
        "trim": {
          "type": "function",
          "refID": 11
        },
        "clean": {
          "type": "function"
        },
        "cleanDiacritics": {
          "type": "function"
        },
        "count": {
          "type": "function"
        },
        "chars": {
          "type": "function"
        },
        "swapCase": {
          "type": "function"
        },
        "escapeHTML": {
          "type": "function"
        },
        "unescapeHTML": {
          "type": "function"
        },
        "splice": {
          "type": "function"
        },
        "insert": {
          "type": "function"
        },
        "replaceAll": {
          "type": "function"
        },
        "include": {
          "type": "function",
          "refID": 33
        },
        "join": {
          "type": "function"
        },
        "lines": {
          "type": "function"
        },
        "dedent": {
          "type": "function"
        },
        "reverse": {
          "type": "function"
        },
        "startsWith": {
          "type": "function"
        },
        "endsWith": {
          "type": "function"
        },
        "pred": {
          "type": "function"
        },
        "succ": {
          "type": "function"
        },
        "titleize": {
          "type": "function"
        },
        "camelize": {
          "type": "function",
          "refID": 53
        },
        "underscored": {
          "type": "function"
        },
        "dasherize": {
          "type": "function"
        },
        "classify": {
          "type": "function"
        },
        "humanize": {
          "type": "function"
        },
        "ltrim": {
          "type": "function",
          "refID": 63
        },
        "rtrim": {
          "type": "function",
          "refID": 65
        },
        "truncate": {
          "type": "function"
        },
        "prune": {
          "type": "function"
        },
        "words": {
          "type": "function"
        },
        "pad": {
          "type": "function"
        },
        "lpad": {
          "type": "function",
          "refID": 75
        },
        "rpad": {
          "type": "function",
          "refID": 77
        },
        "lrpad": {
          "type": "function",
          "refID": 79
        },
        "sprintf": {
          "type": "function",
          "members": {
            "format": {
              "type": "function"
            },
            "cache": {
              "type": "object"
            },
            "parse": {
              "type": "function"
            }
          }
        },
        "vsprintf": {
          "type": "function"
        },
        "toNumber": {
          "type": "function"
        },
        "numberFormat": {
          "type": "function"
        },
        "strRight": {
          "type": "function"
        },
        "strRightBack": {
          "type": "function"
        },
        "strLeft": {
          "type": "function"
        },
        "strLeftBack": {
          "type": "function"
        },
        "toSentence": {
          "type": "function"
        },
        "toSentenceSerial": {
          "type": "function"
        },
        "slugify": {
          "type": "function"
        },
        "surround": {
          "type": "function"
        },
        "quote": {
          "type": "function",
          "refID": 110
        },
        "unquote": {
          "type": "function"
        },
        "repeat": {
          "type": "function"
        },
        "naturalCmp": {
          "type": "function"
        },
        "levenshtein": {
          "type": "function"
        },
        "toBoolean": {
          "type": "function",
          "refID": 120
        },
        "exports": {
          "type": "function"
        },
        "escapeRegExp": {
          "type": "function"
        },
        "wrap": {
          "type": "function"
        },
        "strip": {
          "ref": 11
        },
        "lstrip": {
          "ref": 63
        },
        "rstrip": {
          "ref": 65
        },
        "center": {
          "ref": 79
        },
        "rjust": {
          "ref": 75
        },
        "ljust": {
          "ref": 77
        },
        "contains": {
          "ref": 33
        },
        "q": {
          "ref": 110
        },
        "toBool": {
          "ref": 120
        },
        "camelcase": {
          "ref": 53
        },
        "prototype": {
          "type": "object",
          "members": {
            "value": {
              "type": "function"
            },
            "isBlank": {
              "type": "function"
            },
            "stripTags": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "decapitalize": {
              "type": "function"
            },
            "chop": {
              "type": "function"
            },
            "trim": {
              "type": "function"
            },
            "clean": {
              "type": "function"
            },
            "cleanDiacritics": {
              "type": "function"
            },
            "count": {
              "type": "function"
            },
            "chars": {
              "type": "function"
            },
            "swapCase": {
              "type": "function"
            },
            "escapeHTML": {
              "type": "function"
            },
            "unescapeHTML": {
              "type": "function"
            },
            "splice": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "replaceAll": {
              "type": "function"
            },
            "include": {
              "type": "function"
            },
            "join": {
              "type": "function"
            },
            "lines": {
              "type": "function"
            },
            "dedent": {
              "type": "function"
            },
            "reverse": {
              "type": "function"
            },
            "startsWith": {
              "type": "function"
            },
            "endsWith": {
              "type": "function"
            },
            "pred": {
              "type": "function"
            },
            "succ": {
              "type": "function"
            },
            "titleize": {
              "type": "function"
            },
            "camelize": {
              "type": "function"
            },
            "underscored": {
              "type": "function"
            },
            "dasherize": {
              "type": "function"
            },
            "classify": {
              "type": "function"
            },
            "humanize": {
              "type": "function"
            },
            "ltrim": {
              "type": "function"
            },
            "rtrim": {
              "type": "function"
            },
            "truncate": {
              "type": "function"
            },
            "prune": {
              "type": "function"
            },
            "words": {
              "type": "function"
            },
            "pad": {
              "type": "function"
            },
            "lpad": {
              "type": "function"
            },
            "rpad": {
              "type": "function"
            },
            "lrpad": {
              "type": "function"
            },
            "sprintf": {
              "type": "function"
            },
            "vsprintf": {
              "type": "function"
            },
            "toNumber": {
              "type": "function"
            },
            "numberFormat": {
              "type": "function"
            },
            "strRight": {
              "type": "function"
            },
            "strRightBack": {
              "type": "function"
            },
            "strLeft": {
              "type": "function"
            },
            "strLeftBack": {
              "type": "function"
            },
            "toSentence": {
              "type": "function"
            },
            "toSentenceSerial": {
              "type": "function"
            },
            "slugify": {
              "type": "function"
            },
            "surround": {
              "type": "function"
            },
            "quote": {
              "type": "function"
            },
            "unquote": {
              "type": "function"
            },
            "repeat": {
              "type": "function"
            },
            "naturalCmp": {
              "type": "function"
            },
            "levenshtein": {
              "type": "function"
            },
            "toBoolean": {
              "type": "function"
            },
            "exports": {
              "type": "function"
            },
            "escapeRegExp": {
              "type": "function"
            },
            "wrap": {
              "type": "function"
            },
            "strip": {
              "type": "function"
            },
            "lstrip": {
              "type": "function"
            },
            "rstrip": {
              "type": "function"
            },
            "center": {
              "type": "function"
            },
            "rjust": {
              "type": "function"
            },
            "ljust": {
              "type": "function"
            },
            "contains": {
              "type": "function"
            },
            "q": {
              "type": "function"
            },
            "toBool": {
              "type": "function"
            },
            "camelcase": {
              "type": "function"
            },
            "future": {
              "type": "function"
            },
            "async": {
              "type": "function"
            },
            "asyncApply": {
              "type": "function"
            },
            "tap": {
              "type": "function"
            },
            "toUpperCase": {
              "type": "function"
            },
            "toLowerCase": {
              "type": "function"
            },
            "split": {
              "type": "function"
            },
            "replace": {
              "type": "function"
            },
            "slice": {
              "type": "function"
            },
            "substring": {
              "type": "function"
            },
            "substr": {
              "type": "function"
            },
            "concat": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "aldeed:simple-schema": {
    "SimpleSchema": {
      "type": "function",
      "members": {
        "extendOptions": {
          "type": "function"
        },
        "RegEx": {
          "type": "object",
          "members": {
            "Email": {
              "type": "regexp"
            },
            "Domain": {
              "type": "regexp"
            },
            "WeakDomain": {
              "type": "regexp"
            },
            "IP": {
              "type": "regexp"
            },
            "IPv4": {
              "type": "regexp"
            },
            "IPv6": {
              "type": "regexp"
            },
            "Url": {
              "type": "regexp"
            },
            "Id": {
              "type": "regexp"
            },
            "ZipCode": {
              "type": "regexp"
            }
          }
        },
        "addValidator": {
          "type": "function"
        },
        "messages": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "condition": {
              "type": "function"
            },
            "namedContext": {
              "type": "function"
            },
            "validator": {
              "type": "function",
              "refID": 22
            },
            "addValidator": {
              "ref": 22
            },
            "pick": {
              "type": "function"
            },
            "clean": {
              "type": "function"
            },
            "schema": {
              "type": "function"
            },
            "getDefinition": {
              "type": "function"
            },
            "keyIsInBlackBox": {
              "type": "function"
            },
            "labels": {
              "type": "function"
            },
            "label": {
              "type": "function"
            },
            "messages": {
              "type": "function"
            },
            "messageForError": {
              "type": "function"
            },
            "allowsKey": {
              "type": "function"
            },
            "newContext": {
              "type": "function"
            },
            "objectKeys": {
              "type": "function"
            }
          }
        }
      }
    },
    "MongoObject": {
      "type": "function",
      "members": {
        "expandKey": {
          "type": "function"
        }
      }
    }
  },
  "aldeed:autoform": {},
  "aldeed:collection2": {},
  "templating": {},
  "iron:core": {
    "Iron": {
      "type": "object",
      "members": {
        "utils": {
          "type": "object",
          "members": {
            "assert": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "defaultValue": {
              "type": "function"
            },
            "inherits": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "namespace": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "capitalize": {
              "type": "function"
            },
            "classCase": {
              "type": "function"
            },
            "camelCase": {
              "type": "function"
            },
            "notifyDeprecated": {
              "type": "function"
            },
            "withDeprecatedNotice": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            },
            "get": {
              "type": "function"
            }
          }
        },
        "DynamicTemplate": {
          "type": "function",
          "members": {
            "getParentDataContext": {
              "type": "function",
              "refID": 31
            },
            "getDataContext": {
              "type": "function",
              "refID": 33
            },
            "getInclusionArguments": {
              "type": "function",
              "refID": 35
            },
            "args": {
              "type": "function",
              "refID": 37
            },
            "extend": {
              "type": "function",
              "refID": 39
            },
            "findFirstLookupHost": {
              "type": "function",
              "refID": 41
            },
            "findLookupHostWithProperty": {
              "type": "function",
              "refID": 43
            },
            "findLookupHostWithHelper": {
              "type": "function",
              "refID": 45
            },
            "prototype": {
              "type": "object",
              "members": {
                "template": {
                  "type": "function",
                  "refID": 48
                },
                "defaultTemplate": {
                  "type": "function",
                  "refID": 50
                },
                "clear": {
                  "type": "function"
                },
                "data": {
                  "type": "function",
                  "refID": 54
                },
                "create": {
                  "type": "function",
                  "refID": 56
                },
                "renderView": {
                  "type": "function",
                  "refID": 58
                },
                "destroy": {
                  "type": "function",
                  "refID": 60
                },
                "onViewCreated": {
                  "type": "function",
                  "refID": 62
                },
                "onViewReady": {
                  "type": "function",
                  "refID": 64
                },
                "onViewDestroyed": {
                  "type": "function",
                  "refID": 66
                },
                "events": {
                  "type": "function",
                  "refID": 68
                },
                "insert": {
                  "type": "function",
                  "refID": 70
                }
              }
            }
          }
        },
        "Layout": {
          "type": "function",
          "refID": 72,
          "members": {
            "DEFAULT_REGION": {
              "type": "constant",
              "value": "main"
            },
            "getParentDataContext": {
              "ref": 31
            },
            "getDataContext": {
              "ref": 33
            },
            "getInclusionArguments": {
              "ref": 35
            },
            "args": {
              "ref": 37
            },
            "extend": {
              "ref": 39
            },
            "findFirstLookupHost": {
              "ref": 41
            },
            "findLookupHostWithProperty": {
              "ref": 43
            },
            "findLookupHostWithHelper": {
              "ref": 45
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 72
                },
                "region": {
                  "type": "function"
                },
                "destroyRegions": {
                  "type": "function"
                },
                "render": {
                  "type": "function"
                },
                "has": {
                  "type": "function"
                },
                "regionKeys": {
                  "type": "function"
                },
                "clear": {
                  "type": "function"
                },
                "clearAll": {
                  "type": "function"
                },
                "beginRendering": {
                  "type": "function"
                },
                "onRegionCreated": {
                  "type": "function"
                },
                "onRegionRendered": {
                  "type": "function"
                },
                "onRegionDestroyed": {
                  "type": "function"
                },
                "template": {
                  "ref": 48
                },
                "defaultTemplate": {
                  "ref": 50
                },
                "data": {
                  "ref": 54
                },
                "create": {
                  "ref": 56
                },
                "renderView": {
                  "ref": 58
                },
                "destroy": {
                  "ref": 60
                },
                "onViewCreated": {
                  "ref": 62
                },
                "onViewReady": {
                  "ref": 64
                },
                "onViewDestroyed": {
                  "ref": 66
                },
                "events": {
                  "ref": 68
                },
                "insert": {
                  "ref": 70
                }
              }
            }
          }
        },
        "Url": {
          "type": "function",
          "members": {
            "normalize": {
              "type": "function"
            },
            "isSameOrigin": {
              "type": "function"
            },
            "fromQueryString": {
              "type": "function"
            },
            "toQueryString": {
              "type": "function"
            },
            "parse": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "test": {
                  "type": "function"
                },
                "exec": {
                  "type": "function"
                },
                "params": {
                  "type": "function"
                },
                "resolve": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MiddlewareStack": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "findByName": {
                  "type": "function"
                },
                "push": {
                  "type": "function"
                },
                "append": {
                  "type": "function"
                },
                "insertAt": {
                  "type": "function"
                },
                "insertBefore": {
                  "type": "function"
                },
                "insertAfter": {
                  "type": "function"
                },
                "concat": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Controller": {
          "type": "function",
          "members": {
            "extend": {
              "type": "function",
              "refID": 135
            },
            "events": {
              "type": "function",
              "refID": 137
            },
            "helpers": {
              "type": "function",
              "refID": 139
            },
            "prototype": {
              "type": "object",
              "members": {
                "layout": {
                  "type": "function",
                  "refID": 142
                },
                "render": {
                  "type": "function",
                  "refID": 144
                },
                "beginRendering": {
                  "type": "function",
                  "refID": 146
                },
                "init": {
                  "type": "function"
                },
                "wait": {
                  "type": "function",
                  "refID": 150
                },
                "ready": {
                  "type": "function",
                  "refID": 152
                }
              }
            }
          }
        },
        "RouteController": {
          "type": "function",
          "members": {
            "extend": {
              "ref": 135
            },
            "events": {
              "ref": 137
            },
            "helpers": {
              "ref": 139
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "type": "function"
                },
                "lookupOption": {
                  "type": "function"
                },
                "configureFromUrl": {
                  "type": "function"
                },
                "runHooks": {
                  "type": "function"
                },
                "getParams": {
                  "type": "function"
                },
                "setParams": {
                  "type": "function"
                },
                "init": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "layout": {
                  "ref": 142
                },
                "render": {
                  "ref": 144
                },
                "beginRendering": {
                  "ref": 146
                },
                "wait": {
                  "ref": 150
                },
                "ready": {
                  "ref": 152
                }
              }
            }
          }
        },
        "Route": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getName": {
                  "type": "function"
                },
                "findControllerConstructor": {
                  "type": "function"
                },
                "createController": {
                  "type": "function"
                },
                "setControllerParams": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                },
                "path": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "params": {
                  "type": "function"
                },
                "get": {
                  "type": "function"
                },
                "post": {
                  "type": "function"
                },
                "put": {
                  "type": "function"
                },
                "delete": {
                  "type": "function"
                },
                "patch": {
                  "type": "function"
                }
              }
            }
          }
        },
        "Router": {
          "type": "function",
          "members": {
            "HOOK_TYPES": {
              "type": "array"
            },
            "hooks": {
              "type": "object",
              "members": {
                "loading": {
                  "type": "function"
                },
                "dataNotFound": {
                  "type": "function"
                }
              }
            },
            "plugins": {
              "type": "object",
              "members": {
                "loading": {
                  "type": "function"
                },
                "dataNotFound": {
                  "type": "function"
                }
              }
            },
            "bodyParser": {
              "type": "function",
              "members": {
                "json": {
                  "type": "function"
                },
                "raw": {
                  "type": "function"
                },
                "text": {
                  "type": "function"
                },
                "urlencoded": {
                  "type": "function"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "init": {
                  "type": "function"
                },
                "configure": {
                  "type": "function"
                },
                "map": {
                  "type": "function"
                },
                "route": {
                  "type": "function"
                },
                "findFirstRoute": {
                  "type": "function"
                },
                "path": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "createController": {
                  "type": "function"
                },
                "setTemplateNameConverter": {
                  "type": "function"
                },
                "setControllerNameConverter": {
                  "type": "function"
                },
                "toTemplateName": {
                  "type": "function"
                },
                "toControllerName": {
                  "type": "function"
                },
                "addHook": {
                  "type": "function"
                },
                "lookupHook": {
                  "type": "function"
                },
                "getHooks": {
                  "type": "function"
                },
                "onRun": {
                  "type": "function"
                },
                "onRerun": {
                  "type": "function"
                },
                "onBeforeAction": {
                  "type": "function"
                },
                "onAfterAction": {
                  "type": "function"
                },
                "onStop": {
                  "type": "function"
                },
                "waitOn": {
                  "type": "function"
                },
                "subscriptions": {
                  "type": "function"
                },
                "load": {
                  "type": "function"
                },
                "before": {
                  "type": "function"
                },
                "after": {
                  "type": "function"
                },
                "unload": {
                  "type": "function"
                },
                "plugin": {
                  "type": "function"
                },
                "configureBodyParsers": {
                  "type": "function"
                },
                "start": {
                  "type": "function"
                },
                "dispatch": {
                  "type": "function"
                }
              }
            }
          }
        }
      }
    }
  },
  "iron:dynamic-template": {},
  "iron:layout": {},
  "iron:url": {},
  "iron:middleware-stack": {
    "Handler": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "test": {
              "type": "function"
            },
            "params": {
              "type": "function"
            },
            "resolve": {
              "type": "function"
            },
            "clone": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:location": {},
  "reactive-dict": {
    "ReactiveDict": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "set": {
              "type": "function"
            },
            "setDefault": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "equals": {
              "type": "function"
            },
            "all": {
              "type": "function"
            },
            "clear": {
              "type": "function"
            },
            "delete": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "iron:controller": {},
  "iron:router": {
    "Router": {
      "type": "function",
      "members": {
        "routes": {
          "type": "array"
        },
        "options": {
          "type": "object",
          "members": {
            "notFoundTemplate": {
              "type": "constant",
              "value": "notFound"
            },
            "loadingTemplate": {
              "type": "constant",
              "value": "loading"
            }
          }
        },
        "init": {
          "type": "function"
        },
        "configure": {
          "type": "function"
        },
        "map": {
          "type": "function"
        },
        "route": {
          "type": "function"
        },
        "findFirstRoute": {
          "type": "function"
        },
        "path": {
          "type": "function"
        },
        "url": {
          "type": "function"
        },
        "createController": {
          "type": "function"
        },
        "setTemplateNameConverter": {
          "type": "function"
        },
        "setControllerNameConverter": {
          "type": "function"
        },
        "toTemplateName": {
          "type": "function"
        },
        "toControllerName": {
          "type": "function"
        },
        "addHook": {
          "type": "function"
        },
        "lookupHook": {
          "type": "function"
        },
        "getHooks": {
          "type": "function"
        },
        "onRun": {
          "type": "function"
        },
        "onRerun": {
          "type": "function"
        },
        "onBeforeAction": {
          "type": "function"
        },
        "onAfterAction": {
          "type": "function"
        },
        "onStop": {
          "type": "function"
        },
        "waitOn": {
          "type": "function"
        },
        "subscriptions": {
          "type": "function"
        },
        "load": {
          "type": "function"
        },
        "before": {
          "type": "function"
        },
        "after": {
          "type": "function"
        },
        "unload": {
          "type": "function"
        },
        "plugin": {
          "type": "function"
        },
        "configureBodyParsers": {
          "type": "function"
        },
        "start": {
          "type": "function"
        },
        "dispatch": {
          "type": "function"
        }
      }
    },
    "RouteController": {
      "type": "function",
      "members": {
        "extend": {
          "type": "function"
        },
        "events": {
          "type": "function"
        },
        "helpers": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "constructor": {
              "type": "function"
            },
            "lookupOption": {
              "type": "function"
            },
            "configureFromUrl": {
              "type": "function"
            },
            "runHooks": {
              "type": "function"
            },
            "getParams": {
              "type": "function"
            },
            "setParams": {
              "type": "function"
            },
            "init": {
              "type": "function"
            },
            "dispatch": {
              "type": "function"
            },
            "layout": {
              "type": "function"
            },
            "render": {
              "type": "function"
            },
            "beginRendering": {
              "type": "function"
            },
            "wait": {
              "type": "function"
            },
            "ready": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "ongoworks:speakingurl": {
    "getSlug": {
      "type": "function",
      "members": {
        "createSlug": {
          "type": "function"
        }
      }
    }
  },
  "ongoworks:bunyan-logger": {
    "logger": {
      "type": "object",
      "members": {
        "bunyan": {
          "type": "function",
          "members": {
            "super_": {
              "type": "function",
              "refID": 2,
              "members": {
                "listenerCount": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "setMaxListeners": {
                      "type": "function",
                      "refID": 6
                    },
                    "emit": {
                      "type": "function",
                      "refID": 8
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 10
                    },
                    "on": {
                      "ref": 10
                    },
                    "once": {
                      "type": "function",
                      "refID": 12
                    },
                    "removeListener": {
                      "type": "function",
                      "refID": 14
                    },
                    "removeAllListeners": {
                      "type": "function",
                      "refID": 16
                    },
                    "listeners": {
                      "type": "function",
                      "refID": 18
                    }
                  }
                }
              }
            },
            "stdSerializers": {
              "type": "object",
              "members": {
                "req": {
                  "type": "function"
                },
                "res": {
                  "type": "function"
                },
                "err": {
                  "type": "function"
                }
              }
            },
            "TRACE": {
              "type": "constant",
              "value": 10
            },
            "DEBUG": {
              "type": "constant",
              "value": 20
            },
            "INFO": {
              "type": "constant",
              "value": 30
            },
            "WARN": {
              "type": "constant",
              "value": 40
            },
            "ERROR": {
              "type": "constant",
              "value": 50
            },
            "FATAL": {
              "type": "constant",
              "value": 60
            },
            "resolveLevel": {
              "type": "function"
            },
            "levelFromName": {
              "type": "object",
              "members": {
                "trace": {
                  "type": "constant",
                  "value": 10
                },
                "debug": {
                  "type": "constant",
                  "value": 20
                },
                "info": {
                  "type": "constant",
                  "value": 30
                },
                "warn": {
                  "type": "constant",
                  "value": 40
                },
                "error": {
                  "type": "constant",
                  "value": 50
                },
                "fatal": {
                  "type": "constant",
                  "value": 60
                }
              }
            },
            "nameFromLevel": {
              "type": "object",
              "members": {
                "10": {
                  "type": "constant",
                  "value": "trace"
                },
                "20": {
                  "type": "constant",
                  "value": "debug"
                },
                "30": {
                  "type": "constant",
                  "value": "info"
                },
                "40": {
                  "type": "constant",
                  "value": "warn"
                },
                "50": {
                  "type": "constant",
                  "value": "error"
                },
                "60": {
                  "type": "constant",
                  "value": "fatal"
                }
              }
            },
            "VERSION": {
              "type": "constant",
              "value": "1.4.0"
            },
            "LOG_VERSION": {
              "type": "constant",
              "value": 0
            },
            "createLogger": {
              "type": "function"
            },
            "RingBuffer": {
              "type": "function",
              "members": {
                "super_": {
                  "ref": 2
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "write": {
                      "type": "function"
                    },
                    "end": {
                      "type": "function"
                    },
                    "destroy": {
                      "type": "function"
                    },
                    "destroySoon": {
                      "type": "function"
                    },
                    "setMaxListeners": {
                      "ref": 6
                    },
                    "emit": {
                      "ref": 8
                    },
                    "addListener": {
                      "ref": 10
                    },
                    "on": {
                      "ref": 10
                    },
                    "once": {
                      "ref": 12
                    },
                    "removeListener": {
                      "ref": 14
                    },
                    "removeAllListeners": {
                      "ref": 16
                    },
                    "listeners": {
                      "ref": 18
                    }
                  }
                }
              }
            },
            "RotatingFileStream": {
              "type": "function",
              "members": {
                "super_": {
                  "ref": 2
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "rotate": {
                      "type": "function"
                    },
                    "write": {
                      "type": "function"
                    },
                    "end": {
                      "type": "function"
                    },
                    "destroy": {
                      "type": "function"
                    },
                    "destroySoon": {
                      "type": "function"
                    },
                    "setMaxListeners": {
                      "ref": 6
                    },
                    "emit": {
                      "ref": 8
                    },
                    "addListener": {
                      "ref": 10
                    },
                    "on": {
                      "ref": 10
                    },
                    "once": {
                      "ref": 12
                    },
                    "removeListener": {
                      "ref": 14
                    },
                    "removeAllListeners": {
                      "ref": 16
                    },
                    "listeners": {
                      "ref": 18
                    }
                  }
                }
              }
            },
            "safeCycles": {
              "type": "function"
            },
            "prototype": {
              "type": "object",
              "members": {
                "addStream": {
                  "type": "function"
                },
                "addSerializers": {
                  "type": "function"
                },
                "child": {
                  "type": "function"
                },
                "reopenFileStreams": {
                  "type": "function"
                },
                "level": {
                  "type": "function"
                },
                "levels": {
                  "type": "function"
                },
                "trace": {
                  "type": "function"
                },
                "debug": {
                  "type": "function"
                },
                "info": {
                  "type": "function"
                },
                "warn": {
                  "type": "function"
                },
                "error": {
                  "type": "function"
                },
                "fatal": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 6
                },
                "emit": {
                  "ref": 8
                },
                "addListener": {
                  "ref": 10
                },
                "on": {
                  "ref": 10
                },
                "once": {
                  "ref": 12
                },
                "removeListener": {
                  "ref": 14
                },
                "removeAllListeners": {
                  "ref": 16
                },
                "listeners": {
                  "ref": 18
                }
              }
            }
          }
        },
        "bunyanPrettyStream": {
          "type": "function",
          "members": {
            "super_": {
              "type": "function",
              "refID": 83,
              "members": {
                "super_": {
                  "ref": 2
                },
                "Readable": {
                  "type": "function",
                  "refID": 84,
                  "members": {
                    "ReadableState": {
                      "type": "function"
                    },
                    "super_": {
                      "ref": 83
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "push": {
                          "type": "function",
                          "refID": 88
                        },
                        "unshift": {
                          "type": "function",
                          "refID": 90
                        },
                        "setEncoding": {
                          "type": "function",
                          "refID": 92
                        },
                        "read": {
                          "type": "function",
                          "refID": 94
                        },
                        "pipe": {
                          "type": "function",
                          "refID": 96
                        },
                        "unpipe": {
                          "type": "function",
                          "refID": 98
                        },
                        "on": {
                          "type": "function",
                          "refID": 100
                        },
                        "addListener": {
                          "ref": 100
                        },
                        "resume": {
                          "type": "function",
                          "refID": 102
                        },
                        "pause": {
                          "type": "function",
                          "refID": 104
                        },
                        "wrap": {
                          "type": "function",
                          "refID": 106
                        },
                        "setMaxListeners": {
                          "ref": 6
                        },
                        "emit": {
                          "ref": 8
                        },
                        "once": {
                          "ref": 12
                        },
                        "removeListener": {
                          "ref": 14
                        },
                        "removeAllListeners": {
                          "ref": 16
                        },
                        "listeners": {
                          "ref": 18
                        }
                      }
                    }
                  }
                },
                "Writable": {
                  "type": "function",
                  "refID": 108,
                  "members": {
                    "WritableState": {
                      "type": "function"
                    },
                    "super_": {
                      "ref": 83
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "pipe": {
                          "type": "function",
                          "refID": 112
                        },
                        "write": {
                          "type": "function",
                          "refID": 114
                        },
                        "end": {
                          "type": "function",
                          "refID": 116
                        },
                        "setMaxListeners": {
                          "ref": 6
                        },
                        "emit": {
                          "ref": 8
                        },
                        "addListener": {
                          "ref": 10
                        },
                        "on": {
                          "ref": 10
                        },
                        "once": {
                          "ref": 12
                        },
                        "removeListener": {
                          "ref": 14
                        },
                        "removeAllListeners": {
                          "ref": 16
                        },
                        "listeners": {
                          "ref": 18
                        }
                      }
                    }
                  }
                },
                "Duplex": {
                  "type": "function",
                  "refID": 118,
                  "members": {
                    "super_": {
                      "ref": 84
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "write": {
                          "ref": 114
                        },
                        "end": {
                          "ref": 116
                        },
                        "push": {
                          "ref": 88
                        },
                        "unshift": {
                          "ref": 90
                        },
                        "setEncoding": {
                          "ref": 92
                        },
                        "read": {
                          "ref": 94
                        },
                        "pipe": {
                          "ref": 96
                        },
                        "unpipe": {
                          "ref": 98
                        },
                        "on": {
                          "ref": 100
                        },
                        "addListener": {
                          "ref": 100
                        },
                        "resume": {
                          "ref": 102
                        },
                        "pause": {
                          "ref": 104
                        },
                        "wrap": {
                          "ref": 106
                        },
                        "setMaxListeners": {
                          "ref": 6
                        },
                        "emit": {
                          "ref": 8
                        },
                        "once": {
                          "ref": 12
                        },
                        "removeListener": {
                          "ref": 14
                        },
                        "removeAllListeners": {
                          "ref": 16
                        },
                        "listeners": {
                          "ref": 18
                        }
                      }
                    }
                  }
                },
                "Transform": {
                  "type": "function",
                  "refID": 120,
                  "members": {
                    "super_": {
                      "ref": 118
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "push": {
                          "type": "function",
                          "refID": 122
                        },
                        "write": {
                          "ref": 114
                        },
                        "end": {
                          "ref": 116
                        },
                        "unshift": {
                          "ref": 90
                        },
                        "setEncoding": {
                          "ref": 92
                        },
                        "read": {
                          "ref": 94
                        },
                        "pipe": {
                          "ref": 96
                        },
                        "unpipe": {
                          "ref": 98
                        },
                        "on": {
                          "ref": 100
                        },
                        "addListener": {
                          "ref": 100
                        },
                        "resume": {
                          "ref": 102
                        },
                        "pause": {
                          "ref": 104
                        },
                        "wrap": {
                          "ref": 106
                        },
                        "setMaxListeners": {
                          "ref": 6
                        },
                        "emit": {
                          "ref": 8
                        },
                        "once": {
                          "ref": 12
                        },
                        "removeListener": {
                          "ref": 14
                        },
                        "removeAllListeners": {
                          "ref": 16
                        },
                        "listeners": {
                          "ref": 18
                        }
                      }
                    }
                  }
                },
                "PassThrough": {
                  "type": "function",
                  "members": {
                    "super_": {
                      "ref": 120
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "push": {
                          "ref": 122
                        },
                        "write": {
                          "ref": 114
                        },
                        "end": {
                          "ref": 116
                        },
                        "unshift": {
                          "ref": 90
                        },
                        "setEncoding": {
                          "ref": 92
                        },
                        "read": {
                          "ref": 94
                        },
                        "pipe": {
                          "ref": 96
                        },
                        "unpipe": {
                          "ref": 98
                        },
                        "on": {
                          "ref": 100
                        },
                        "addListener": {
                          "ref": 100
                        },
                        "resume": {
                          "ref": 102
                        },
                        "pause": {
                          "ref": 104
                        },
                        "wrap": {
                          "ref": 106
                        },
                        "setMaxListeners": {
                          "ref": 6
                        },
                        "emit": {
                          "ref": 8
                        },
                        "once": {
                          "ref": 12
                        },
                        "removeListener": {
                          "ref": 14
                        },
                        "removeAllListeners": {
                          "ref": 16
                        },
                        "listeners": {
                          "ref": 18
                        }
                      }
                    }
                  }
                },
                "Stream": {
                  "ref": 83
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "pipe": {
                      "type": "function",
                      "refID": 127
                    },
                    "setMaxListeners": {
                      "ref": 6
                    },
                    "emit": {
                      "ref": 8
                    },
                    "addListener": {
                      "ref": 10
                    },
                    "on": {
                      "ref": 10
                    },
                    "once": {
                      "ref": 12
                    },
                    "removeListener": {
                      "ref": 14
                    },
                    "removeAllListeners": {
                      "ref": 16
                    },
                    "listeners": {
                      "ref": 18
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "write": {
                  "type": "function"
                },
                "end": {
                  "type": "function"
                },
                "pipe": {
                  "ref": 127
                },
                "setMaxListeners": {
                  "ref": 6
                },
                "emit": {
                  "ref": 8
                },
                "addListener": {
                  "ref": 10
                },
                "on": {
                  "ref": 10
                },
                "once": {
                  "ref": 12
                },
                "removeListener": {
                  "ref": 14
                },
                "removeAllListeners": {
                  "ref": 16
                },
                "listeners": {
                  "ref": 18
                }
              }
            }
          }
        },
        "format": {
          "type": "function",
          "members": {
            "super_": {
              "ref": 108
            },
            "prototype": {
              "type": "object",
              "members": {
                "pipe": {
                  "ref": 112
                },
                "write": {
                  "ref": 114
                },
                "end": {
                  "ref": 116
                },
                "setMaxListeners": {
                  "ref": 6
                },
                "emit": {
                  "ref": 8
                },
                "addListener": {
                  "ref": 10
                },
                "on": {
                  "ref": 10
                },
                "once": {
                  "ref": 12
                },
                "removeListener": {
                  "ref": 14
                },
                "removeAllListeners": {
                  "ref": 16
                },
                "listeners": {
                  "ref": 18
                }
              }
            }
          }
        }
      }
    }
  },
  "alanning:roles": {
    "Roles": {
      "type": "object",
      "members": {
        "GLOBAL_GROUP": {
          "type": "constant",
          "value": "__global_roles__"
        },
        "createRole": {
          "type": "function"
        },
        "deleteRole": {
          "type": "function"
        },
        "addUsersToRoles": {
          "type": "function"
        },
        "setUserRoles": {
          "type": "function"
        },
        "removeUsersFromRoles": {
          "type": "function"
        },
        "userIsInRole": {
          "type": "function"
        },
        "getRolesForUser": {
          "type": "function"
        },
        "getAllRoles": {
          "type": "function"
        },
        "getUsersInRole": {
          "type": "function"
        },
        "getGroupsForUser": {
          "type": "function"
        }
      }
    }
  },
  "ongoworks:security": {
    "Security": {
      "type": "object",
      "members": {
        "errorMessages": {
          "type": "object",
          "members": {
            "multipleCan": {
              "type": "constant",
              "value": "You may not combine more than one insert, update, or remove on a Security.can chain"
            },
            "notAllowed": {
              "type": "constant",
              "value": "Action not allowed"
            },
            "requiresDeny": {
              "type": "constant",
              "value": "Security.defineMethod requires a \"deny\" function"
            },
            "collectionsArg": {
              "type": "constant",
              "value": "The collections argument must be a Mongo.Collection instance or an array of them"
            },
            "noCollectionOrType": {
              "type": "constant",
              "value": "At a minimum, you must call permit and collections methods for a security rule."
            },
            "updateArgs": {
              "type": "constant",
              "value": "The update method for Security.can requires two arguments, id and modifier"
            }
          }
        },
        "Rule": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "collections": {
                  "type": "function"
                },
                "apply": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "never": {
                  "type": "function"
                },
                "ifLoggedIn": {
                  "type": "function"
                },
                "ifHasUserId": {
                  "type": "function"
                },
                "ifHasRole": {
                  "type": "function"
                },
                "onlyProps": {
                  "type": "function"
                },
                "exceptProps": {
                  "type": "function"
                },
                "ifShopIdMatches": {
                  "type": "function"
                },
                "ifShopIdMatchesThisId": {
                  "type": "function"
                }
              }
            }
          }
        },
        "permit": {
          "type": "function"
        },
        "Check": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "for": {
                  "type": "function"
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "check": {
                  "type": "function"
                },
                "throw": {
                  "type": "function"
                }
              }
            }
          }
        },
        "can": {
          "type": "function"
        },
        "defineMethod": {
          "type": "function"
        }
      }
    }
  },
  "dburles:factory": {
    "Factory": {
      "type": "function",
      "members": {
        "define": {
          "type": "function"
        },
        "get": {
          "type": "function"
        },
        "build": {
          "type": "function"
        },
        "create": {
          "type": "function"
        },
        "extend": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "after": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "matb33:collection-hooks": {
    "CollectionHooks": {
      "type": "object",
      "members": {
        "defaults": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "directEnv": {
          "type": "object",
          "members": {
            "slot": {
              "type": "constant",
              "value": 5
            },
            "get": {
              "type": "function"
            },
            "getOrNullIfOutsideFiber": {
              "type": "function"
            },
            "withValue": {
              "type": "function"
            }
          }
        },
        "directOp": {
          "type": "function"
        },
        "hookedOp": {
          "type": "function"
        },
        "getUserId": {
          "type": "function"
        },
        "extendCollectionInstance": {
          "type": "function"
        },
        "defineAdvice": {
          "type": "function"
        },
        "getAdvice": {
          "type": "function"
        },
        "initOptions": {
          "type": "function"
        },
        "extendOptions": {
          "type": "function"
        },
        "getDocs": {
          "type": "function"
        },
        "getFields": {
          "type": "function"
        },
        "reassignPrototype": {
          "type": "function"
        },
        "wrapCollection": {
          "type": "function"
        },
        "modify": {
          "type": "function"
        },
        "isWithinPublish": {
          "type": "function"
        }
      }
    }
  },
  "jparker:crypto-core": {
    "CryptoJS": {
      "type": "object",
      "members": {
        "lib": {
          "type": "object",
          "members": {
            "Base": {
              "type": "object",
              "refID": 2,
              "members": {
                "extend": {
                  "type": "function",
                  "refID": 3
                },
                "create": {
                  "type": "function",
                  "refID": 5
                },
                "init": {
                  "type": "function"
                },
                "mixIn": {
                  "type": "function",
                  "refID": 9
                },
                "clone": {
                  "type": "function",
                  "refID": 11
                }
              }
            },
            "WordArray": {
              "type": "object",
              "members": {
                "init": {
                  "type": "function"
                },
                "toString": {
                  "type": "function"
                },
                "concat": {
                  "type": "function"
                },
                "clamp": {
                  "type": "function"
                },
                "clone": {
                  "type": "function"
                },
                "random": {
                  "type": "function"
                },
                "$super": {
                  "ref": 2
                },
                "extend": {
                  "ref": 3
                },
                "create": {
                  "ref": 5
                },
                "mixIn": {
                  "ref": 9
                }
              }
            },
            "BufferedBlockAlgorithm": {
              "type": "object",
              "refID": 25,
              "members": {
                "reset": {
                  "type": "function"
                },
                "clone": {
                  "type": "function",
                  "refID": 28
                },
                "init": {
                  "type": "function"
                },
                "$super": {
                  "ref": 2
                },
                "extend": {
                  "ref": 3
                },
                "create": {
                  "ref": 5
                },
                "mixIn": {
                  "ref": 9
                }
              }
            },
            "Hasher": {
              "type": "object",
              "refID": 31,
              "members": {
                "cfg": {
                  "type": "object",
                  "refID": 32,
                  "members": {
                    "init": {
                      "type": "function"
                    },
                    "$super": {
                      "ref": 2
                    },
                    "extend": {
                      "ref": 3
                    },
                    "create": {
                      "ref": 5
                    },
                    "mixIn": {
                      "ref": 9
                    },
                    "clone": {
                      "ref": 11
                    }
                  }
                },
                "init": {
                  "type": "function"
                },
                "reset": {
                  "type": "function",
                  "refID": 35
                },
                "update": {
                  "type": "function",
                  "refID": 37
                },
                "finalize": {
                  "type": "function",
                  "refID": 39
                },
                "blockSize": {
                  "type": "constant",
                  "value": 16
                },
                "$super": {
                  "ref": 25
                },
                "clone": {
                  "ref": 28
                },
                "extend": {
                  "ref": 3
                },
                "create": {
                  "ref": 5
                },
                "mixIn": {
                  "ref": 9
                }
              }
            }
          }
        },
        "enc": {
          "type": "object",
          "members": {
            "Hex": {
              "type": "object",
              "members": {
                "stringify": {
                  "type": "function"
                },
                "parse": {
                  "type": "function"
                }
              }
            },
            "Latin1": {
              "type": "object",
              "members": {
                "stringify": {
                  "type": "function"
                },
                "parse": {
                  "type": "function"
                }
              }
            },
            "Utf8": {
              "type": "object",
              "members": {
                "stringify": {
                  "type": "function"
                },
                "parse": {
                  "type": "function"
                }
              }
            }
          }
        },
        "algo": {
          "type": "object",
          "members": {
            "MD5": {
              "type": "object",
              "members": {
                "clone": {
                  "type": "function"
                },
                "init": {
                  "type": "function"
                },
                "$super": {
                  "ref": 31
                },
                "cfg": {
                  "ref": 32
                },
                "reset": {
                  "ref": 35
                },
                "update": {
                  "ref": 37
                },
                "finalize": {
                  "ref": 39
                },
                "blockSize": {
                  "type": "constant",
                  "value": 16
                },
                "extend": {
                  "ref": 3
                },
                "create": {
                  "ref": 5
                },
                "mixIn": {
                  "ref": 9
                }
              }
            }
          }
        },
        "MD5": {
          "type": "function"
        },
        "HmacMD5": {
          "type": "function"
        }
      }
    }
  },
  "jparker:crypto-md5": {},
  "jparker:gravatar": {
    "Gravatar": {
      "type": "object",
      "members": {
        "cleanString": {
          "type": "function"
        },
        "isHash": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        },
        "imageUrl": {
          "type": "function"
        }
      }
    }
  },
  "meteorhacks:inject-initial": {
    "Inject": {
      "type": "object",
      "members": {
        "obj": {
          "type": "function"
        },
        "objList": {
          "type": "object"
        },
        "meta": {
          "type": "function"
        },
        "metaList": {
          "type": "object"
        },
        "rawHead": {
          "type": "function"
        },
        "rawHeads": {
          "type": "object",
          "members": {
            "avatar-styles": {
              "type": "constant",
              "value": "<style>.reactionAvatar { \n      height: 50px; \n      width: 50px; \n      position: relative; \n    } \n.reactionAvatar .reactionAvatar-image, \n.reactionAvatar .reactionAvatar-initials { \n      height: 100%; \n      width: 100%; \n      position: absolute; \n      top: 0px; \n      left: 0px; \n    } \n.reactionAvatar .reactionAvatar-image { \n      z-index: 10; \n      background-color: #fff; \n    } \n.reactionAvatar .reactionAvatar-initials { \n      display: block; \n      background-size: 100% 100%; \n      background-color: #aaa; \n      color: #fff; \n      font-size: 25px; \n      line-height: 50px; \n      font-family: \"Helvetica Neue\", Helvetica, \"Hiragino Sans GB\", Arial, sans-serif; \n      text-align: center; \n      z-index: 1; \n    } \n.reactionAvatar-rounded .reactionAvatar-image, \n.reactionAvatar-rounded .reactionAvatar-initials { \n      border-radius: 5px; \n    } \n.reactionAvatar-circle .reactionAvatar-image, \n.reactionAvatar-circle .reactionAvatar-initials { \n      border-radius: 50%; \n    } \n.reactionAvatar-hide-image .reactionAvatar-image { \n      display: none; \n    } \n.reactionAvatar-hide-initials .reactionAvatar-initials { \n      display: none; \n    } \n  .reactionAvatar-large {width: 80px; min-width: 80px; height: 80px;}\n.reactionAvatar-large .reactionAvatar-initials {font-size: 40px; line-height: 80px;}\n.reactionAvatar-small {width: 30px; min-width: 30px; height: 30px;}\n.reactionAvatar-small .reactionAvatar-initials {font-size: 15px; line-height: 30px;}\n.reactionAvatar-extra-small {width: 20px; min-width: 20px; height: 20px;}\n.reactionAvatar-extra-small .reactionAvatar-initials {font-size: 10px; line-height: 20px;}\n</style>"
            }
          }
        },
        "rawBody": {
          "type": "function"
        },
        "rawBodies": {
          "type": "object"
        },
        "rawModHtml": {
          "type": "function"
        },
        "rawModHtmlFuncs": {
          "type": "object",
          "members": {
            "injectHeads": {
              "type": "function"
            },
            "injectMeta": {
              "type": "function"
            },
            "injectBodies": {
              "type": "function"
            },
            "injectObjects": {
              "type": "function"
            }
          }
        },
        "appUrl": {
          "type": "function"
        }
      }
    }
  },
  "utilities:avatar": {
    "Avatar": {
      "type": "object",
      "members": {
        "options": {
          "type": "object",
          "members": {
            "fallbackType": {
              "type": "constant",
              "value": "image"
            },
            "defaultImageUrl": {
              "type": "constant",
              "value": "https://raw.githubusercontent.com/reactioncommerce/reaction/development/public/resources/avatar.gif"
            },
            "customImageProperty": {
              "type": "constant",
              "value": ""
            },
            "gravatarDefault": {
              "type": "constant",
              "value": ""
            },
            "emailHashProperty": {
              "type": "constant",
              "value": ""
            },
            "cssClassPrefix": {
              "type": "constant",
              "value": "reactionAvatar"
            },
            "imageSizes": {
              "type": "object",
              "members": {
                "large": {
                  "type": "constant",
                  "value": 80
                },
                "small": {
                  "type": "constant",
                  "value": 30
                },
                "extra-small": {
                  "type": "constant",
                  "value": 20
                }
              }
            },
            "backgroundColor": {
              "type": "constant",
              "value": "#aaa"
            },
            "textColor": {
              "type": "constant",
              "value": "#fff"
            }
          }
        },
        "setOptions": {
          "type": "function"
        },
        "getCssClassPrefix": {
          "type": "function"
        },
        "getBackgroundColor": {
          "type": "function"
        },
        "getTextColor": {
          "type": "function"
        },
        "getInitials": {
          "type": "function"
        },
        "getUrl": {
          "type": "function"
        },
        "hash": {
          "type": "function"
        }
      }
    }
  },
  "cfs:standard-packages": {},
  "cfs:base-package": {
    "FS": {
      "type": "object",
      "members": {
        "Store": {
          "type": "object",
          "members": {
            "GridFS": {
              "type": "function"
            },
            "FileSystem": {
              "type": "function"
            },
            "S3": {
              "type": "function"
            }
          }
        },
        "AccessPoint": {
          "type": "object"
        },
        "Utility": {
          "type": "object",
          "members": {
            "cloneFileRecord": {
              "type": "function"
            },
            "defaultCallback": {
              "type": "function"
            },
            "handleError": {
              "type": "function"
            },
            "noop": {
              "type": "function"
            },
            "validateAction": {
              "type": "function"
            },
            "getFileName": {
              "type": "function"
            },
            "getFileExtension": {
              "type": "function"
            },
            "setFileExtension": {
              "type": "function"
            },
            "encodeParams": {
              "type": "function"
            },
            "encodeString": {
              "type": "function"
            },
            "btoa": {
              "type": "function"
            },
            "atob": {
              "type": "function"
            },
            "extend": {
              "type": "function"
            },
            "each": {
              "type": "function"
            },
            "isEmpty": {
              "type": "function"
            },
            "indexOf": {
              "type": "function"
            },
            "isArray": {
              "type": "function"
            },
            "map": {
              "type": "function"
            },
            "once": {
              "type": "function"
            },
            "include": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "binaryToBuffer": {
              "type": "function"
            },
            "bufferToBinary": {
              "type": "function"
            },
            "safeCallback": {
              "type": "function"
            },
            "safeStream": {
              "type": "function"
            },
            "eachFileFromPath": {
              "type": "function"
            }
          }
        },
        "config": {
          "type": "object"
        },
        "StorageAdapter": {
          "type": "function",
          "members": {
            "super_": {
              "type": "function",
              "members": {
                "listenerCount": {
                  "type": "function"
                },
                "prototype": {
                  "type": "object",
                  "members": {
                    "setMaxListeners": {
                      "type": "function",
                      "refID": 67
                    },
                    "emit": {
                      "type": "function",
                      "refID": 69
                    },
                    "addListener": {
                      "type": "function",
                      "refID": 71
                    },
                    "on": {
                      "ref": 71
                    },
                    "once": {
                      "type": "function",
                      "refID": 73
                    },
                    "removeListener": {
                      "type": "function",
                      "refID": 75
                    },
                    "removeAllListeners": {
                      "type": "function",
                      "refID": 77
                    },
                    "listeners": {
                      "type": "function",
                      "refID": 79
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            }
          }
        },
        "Transform": {
          "type": "function",
          "members": {
            "scope": {
              "type": "object",
              "members": {
                "gm": {
                  "type": "function"
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "createWriteStream": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                }
              }
            }
          }
        },
        "File": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "domain": {
                  "type": "null",
                  "value": null
                },
                "attachData": {
                  "type": "function"
                },
                "uploadProgress": {
                  "type": "function"
                },
                "controlledByDeps": {
                  "type": "function"
                },
                "getCollection": {
                  "type": "function",
                  "refID": 99
                },
                "isMounted": {
                  "ref": 99
                },
                "getFileRecord": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "getExtension": {
                  "type": "function"
                },
                "isImage": {
                  "type": "function"
                },
                "isVideo": {
                  "type": "function"
                },
                "isAudio": {
                  "type": "function"
                },
                "formattedSize": {
                  "type": "function"
                },
                "isUploaded": {
                  "type": "function"
                },
                "hasStored": {
                  "type": "function",
                  "refID": 119
                },
                "hasCopy": {
                  "ref": 119
                },
                "getCopyInfo": {
                  "type": "function"
                },
                "name": {
                  "type": "function"
                },
                "extension": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                },
                "updatedAt": {
                  "type": "function"
                },
                "logCopyFailure": {
                  "type": "function"
                },
                "failedPermanently": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "createWriteStream": {
                  "type": "function"
                },
                "copy": {
                  "type": "function"
                },
                "copyData": {
                  "type": "function"
                },
                "moveData": {
                  "type": "function"
                },
                "url": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            }
          }
        },
        "TempStore": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "Tracker": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "type": "function",
                  "refID": 215,
                  "members": {
                    "Cursor": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "rewind": {
                              "type": "function"
                            },
                            "forEach": {
                              "type": "function"
                            },
                            "getTransform": {
                              "type": "function"
                            },
                            "map": {
                              "type": "function"
                            },
                            "fetch": {
                              "type": "function"
                            },
                            "count": {
                              "type": "function"
                            },
                            "observe": {
                              "type": "function"
                            },
                            "observeChanges": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    },
                    "ObjectID": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "toString": {
                              "type": "function"
                            },
                            "equals": {
                              "type": "function"
                            },
                            "clone": {
                              "type": "function"
                            },
                            "typeName": {
                              "type": "function"
                            },
                            "getTimestamp": {
                              "type": "function"
                            },
                            "toHexString": {
                              "type": "function",
                              "refID": 246
                            },
                            "toJSONValue": {
                              "ref": 246
                            },
                            "valueOf": {
                              "ref": 246
                            }
                          }
                        }
                      }
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "constructor": {
                          "ref": 215
                        },
                        "find": {
                          "type": "function",
                          "refID": 249
                        },
                        "findOne": {
                          "type": "function",
                          "refID": 251
                        },
                        "insert": {
                          "type": "function",
                          "refID": 253
                        },
                        "update": {
                          "type": "function",
                          "refID": 255
                        },
                        "remove": {
                          "type": "function",
                          "refID": 257
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "rawCollection": {
                          "type": "function",
                          "refID": 261
                        },
                        "rawDatabase": {
                          "type": "function",
                          "refID": 263
                        },
                        "allow": {
                          "type": "function",
                          "refID": 265
                        },
                        "deny": {
                          "type": "function",
                          "refID": 267
                        },
                        "attachSchema": {
                          "type": "function",
                          "refID": 269
                        },
                        "simpleSchema": {
                          "type": "function",
                          "refID": 271
                        },
                        "permit": {
                          "type": "function",
                          "refID": 273
                        }
                      }
                    }
                  }
                },
                "find": {
                  "ref": 249
                },
                "findOne": {
                  "ref": 251
                },
                "insert": {
                  "ref": 253
                },
                "update": {
                  "ref": 255
                },
                "remove": {
                  "ref": 257
                },
                "rawCollection": {
                  "ref": 261
                },
                "rawDatabase": {
                  "ref": 263
                },
                "allow": {
                  "ref": 265
                },
                "deny": {
                  "ref": 267
                },
                "attachSchema": {
                  "ref": 269
                },
                "simpleSchema": {
                  "ref": 271
                },
                "permit": {
                  "ref": 273
                }
              }
            },
            "Storage": {
              "type": "null",
              "value": null
            },
            "exists": {
              "type": "function"
            },
            "listParts": {
              "type": "function"
            },
            "removeFile": {
              "type": "function"
            },
            "removeAll": {
              "type": "function"
            },
            "createWriteStream": {
              "type": "function"
            },
            "createReadStream": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 67
            },
            "emit": {
              "ref": 69
            },
            "addListener": {
              "ref": 71
            },
            "on": {
              "ref": 71
            },
            "once": {
              "ref": 73
            },
            "removeListener": {
              "ref": 75
            },
            "removeAllListeners": {
              "ref": 77
            },
            "listeners": {
              "ref": 79
            }
          }
        },
        "HTTP": {
          "type": "object",
          "members": {
            "uploadUrl": {
              "type": "constant",
              "value": "/assets/files"
            },
            "setBaseUrl": {
              "type": "function"
            },
            "Handlers": {
              "type": "object",
              "members": {
                "Del": {
                  "type": "function"
                },
                "GetList": {
                  "type": "function"
                },
                "Get": {
                  "type": "function"
                },
                "PutInsert": {
                  "type": "function"
                },
                "PutUpdate": {
                  "type": "function"
                }
              }
            },
            "setHeadersForGet": {
              "type": "function"
            },
            "publish": {
              "type": "function"
            },
            "unpublish": {
              "type": "function"
            },
            "mount": {
              "type": "function"
            },
            "unmount": {
              "type": "function"
            },
            "now": {
              "type": "function"
            }
          }
        },
        "Collection": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "domain": {
                  "type": "null",
                  "value": null
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "allowsFile": {
                  "type": "function"
                },
                "filters": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 67
                },
                "emit": {
                  "ref": 69
                },
                "addListener": {
                  "ref": 71
                },
                "on": {
                  "ref": 71
                },
                "once": {
                  "ref": 73
                },
                "removeListener": {
                  "ref": 75
                },
                "removeAllListeners": {
                  "ref": 77
                },
                "listeners": {
                  "ref": 79
                }
              }
            }
          }
        },
        "FileWorker": {
          "type": "object",
          "members": {
            "observe": {
              "type": "function"
            }
          }
        }
      }
    },
    "_Utility": {
      "type": "object",
      "members": {
        "defaultZero": {
          "type": "function"
        }
      }
    }
  },
  "livedata": {
    "DDP": {
      "type": "object",
      "members": {
        "ConnectionError": {
          "type": "function",
          "refID": 1,
          "members": {
            "captureStackTrace": {
              "type": "function",
              "refID": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "type": "function",
              "refID": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 1
                }
              }
            }
          }
        },
        "ForcedReconnectError": {
          "type": "function",
          "refID": 7,
          "members": {
            "captureStackTrace": {
              "ref": 2
            },
            "stackTraceLimit": {
              "type": "constant",
              "value": 10
            },
            "prepareStackTrace": {
              "ref": 4
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 7
                }
              }
            }
          }
        },
        "randomStream": {
          "type": "function"
        },
        "connect": {
          "type": "function"
        }
      }
    },
    "DDPServer": {
      "type": "object"
    },
    "LivedataTest": {
      "type": "undefined"
    }
  },
  "mongo-livedata": {},
  "raix:eventemitter": {
    "EventEmitter": {
      "type": "function",
      "members": {
        "listenerCount": {
          "type": "function"
        },
        "prototype": {
          "type": "object",
          "members": {
            "setMaxListeners": {
              "type": "function"
            },
            "emit": {
              "type": "function"
            },
            "addListener": {
              "type": "function",
              "refID": 8
            },
            "on": {
              "ref": 8
            },
            "once": {
              "type": "function"
            },
            "removeListener": {
              "type": "function"
            },
            "removeAllListeners": {
              "type": "function"
            },
            "listeners": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:storage-adapter": {},
  "cfs:gridfs": {},
  "launch-screen": {
    "LaunchScreen": {
      "type": "undefined"
    }
  },
  "hot-code-push": {},
  "cfs:data-man": {
    "DataMan": {
      "type": "function",
      "members": {
        "Buffer": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "DataURI": {
          "type": "function"
        },
        "FilePath": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "URL": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "ReadStream": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "getBuffer": {
                  "type": "function"
                },
                "getDataUri": {
                  "type": "function"
                },
                "createReadStream": {
                  "type": "function"
                },
                "size": {
                  "type": "function"
                },
                "type": {
                  "type": "function"
                }
              }
            }
          }
        },
        "prototype": {
          "type": "object",
          "members": {
            "getBuffer": {
              "type": "function"
            },
            "saveToFile": {
              "type": "function"
            },
            "getDataUri": {
              "type": "function"
            },
            "createReadStream": {
              "type": "function"
            },
            "size": {
              "type": "function"
            },
            "type": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:file": {},
  "cfs:tempstore": {},
  "cfs:http-methods": {
    "HTTP": {
      "type": "object",
      "members": {
        "get": {
          "type": "function"
        },
        "post": {
          "type": "function"
        },
        "put": {
          "type": "function"
        },
        "del": {
          "type": "function"
        },
        "call": {
          "type": "function"
        },
        "methodsMaxDataLength": {
          "type": "constant",
          "value": 5242880
        },
        "defaultAuth": {
          "type": "function"
        },
        "methods": {
          "type": "function"
        },
        "publishFormats": {
          "type": "function"
        },
        "publish": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    },
    "_methodHTTP": {
      "type": "object",
      "members": {
        "methodHandlers": {
          "type": "object",
          "members": {
            "/cfs/servertime/": {
              "type": "object",
              "members": {
                "auth": {
                  "type": "function",
                  "refID": 3
                },
                "POST": {
                  "type": "undefined"
                },
                "PUT": {
                  "type": "undefined"
                },
                "GET": {
                  "type": "function",
                  "refID": 5
                },
                "DELETE": {
                  "type": "undefined"
                },
                "HEAD": {
                  "ref": 5
                },
                "OPTIONS": {
                  "type": "function",
                  "refID": 7
                }
              }
            },
            "/assets/files/:value/:value/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "type": "function",
                  "refID": 10
                },
                "POST": {
                  "type": "function",
                  "refID": 12
                },
                "PUT": {
                  "type": "function",
                  "refID": 14
                },
                "GET": {
                  "type": "function",
                  "refID": 16
                },
                "DELETE": {
                  "type": "function",
                  "refID": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            },
            "/assets/files/:value/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "ref": 10
                },
                "POST": {
                  "ref": 12
                },
                "PUT": {
                  "ref": 14
                },
                "GET": {
                  "ref": 16
                },
                "DELETE": {
                  "ref": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            },
            "/assets/files/:value/": {
              "type": "object",
              "members": {
                "auth": {
                  "ref": 10
                },
                "POST": {
                  "ref": 12
                },
                "PUT": {
                  "ref": 14
                },
                "GET": {
                  "ref": 16
                },
                "DELETE": {
                  "ref": 18
                },
                "HEAD": {
                  "ref": 16
                },
                "OPTIONS": {
                  "ref": 7
                }
              }
            }
          }
        },
        "methodTree": {
          "type": "object",
          "members": {
            "cfs": {
              "type": "object",
              "members": {
                "servertime": {
                  "type": "object",
                  "members": {
                    ":ref": {
                      "type": "object",
                      "members": {
                        "name": {
                          "type": "constant",
                          "value": "/cfs/servertime/"
                        },
                        "params": {
                          "type": "array"
                        }
                      }
                    }
                  }
                }
              }
            },
            "assets": {
              "type": "object",
              "members": {
                "files": {
                  "type": "object",
                  "members": {
                    ":value": {
                      "type": "object",
                      "members": {
                        ":value": {
                          "type": "object",
                          "members": {
                            ":value": {
                              "type": "object",
                              "members": {
                                ":ref": {
                                  "type": "object",
                                  "members": {
                                    "name": {
                                      "type": "constant",
                                      "value": "/assets/files/:value/:value/:value/"
                                    },
                                    "params": {
                                      "type": "array"
                                    }
                                  }
                                }
                              }
                            },
                            ":ref": {
                              "type": "object",
                              "members": {
                                "name": {
                                  "type": "constant",
                                  "value": "/assets/files/:value/:value/"
                                },
                                "params": {
                                  "type": "array"
                                }
                              }
                            }
                          }
                        },
                        ":ref": {
                          "type": "object",
                          "members": {
                            "name": {
                              "type": "constant",
                              "value": "/assets/files/:value/"
                            },
                            "params": {
                              "type": "array"
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
        "nameFollowsConventions": {
          "type": "function"
        },
        "getNameList": {
          "type": "function"
        },
        "createObject": {
          "type": "function"
        },
        "addToMethodTree": {
          "type": "function"
        },
        "getMethod": {
          "type": "function"
        },
        "getUserId": {
          "ref": 3
        },
        "defaultOptionsHandler": {
          "ref": 7
        }
      }
    }
  },
  "cfs:http-publish": {
    "_publishHTTP": {
      "type": "object",
      "members": {
        "currentlyPublished": {
          "type": "array"
        },
        "getPublishScope": {
          "type": "function"
        },
        "formatHandlers": {
          "type": "object",
          "members": {
            "json": {
              "type": "function"
            },
            "fileRecordFormat": {
              "type": "function"
            }
          }
        },
        "formatResult": {
          "type": "function"
        },
        "error": {
          "type": "function"
        },
        "getMethodHandler": {
          "type": "function"
        },
        "unpublishList": {
          "type": "function"
        },
        "unpublish": {
          "type": "function"
        }
      }
    }
  },
  "cfs:access-point": {},
  "cfs:reactive-property": {
    "ReactiveProperty": {
      "type": "function"
    }
  },
  "cfs:reactive-list": {
    "ReactiveList": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "length": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "insert": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "getLastItem": {
              "type": "function"
            },
            "getFirstItem": {
              "type": "function"
            },
            "forEach": {
              "type": "function"
            },
            "forEachReverse": {
              "type": "function"
            },
            "fetch": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:power-queue": {
    "PowerQueue": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "processingList": {
              "type": "function"
            },
            "isHalted": {
              "type": "function"
            },
            "length": {
              "type": "function"
            },
            "progress": {
              "type": "function"
            },
            "usage": {
              "type": "function"
            },
            "reset": {
              "type": "function"
            },
            "add": {
              "type": "function"
            },
            "updateThrottleUp": {
              "type": "function"
            },
            "updateThrottleDown": {
              "type": "function"
            },
            "next": {
              "type": "function"
            },
            "runTaskDone": {
              "type": "function"
            },
            "runTask": {
              "type": "function"
            },
            "queueTaskHandler": {
              "type": "function"
            },
            "taskHandler": {
              "type": "function"
            },
            "errorHandler": {
              "type": "function"
            },
            "pause": {
              "type": "function"
            },
            "resume": {
              "type": "function"
            },
            "run": {
              "type": "function"
            },
            "stop": {
              "type": "function"
            },
            "cancel": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "cfs:upload-http": {},
  "cfs:collection": {},
  "cfs:collection-filters": {},
  "cfs:worker": {},
  "autoupdate": {
    "Autoupdate": {
      "type": "object",
      "members": {
        "autoupdateVersion": {
          "type": "constant",
          "value": "718df1098e78734f32082737ba4c77b8b86bd303"
        },
        "autoupdateVersionRefreshable": {
          "type": "constant",
          "value": "eba24c861ae959808348e3a85636036108d776cf"
        },
        "autoupdateVersionCordova": {
          "type": "constant",
          "value": "none"
        },
        "appId": {
          "type": "constant",
          "value": "16fc7k11cajtkx5sgjml"
        }
      }
    }
  },
  "eframework:eframework-core": {
    "EFrameworkCore": {
      "type": "object",
      "members": {
        "Schemas": {
          "type": "object",
          "members": {
            "Email": {
              "type": "object",
              "members": {
                "condition": {
                  "type": "function",
                  "refID": 3
                },
                "namedContext": {
                  "type": "function",
                  "refID": 5
                },
                "validator": {
                  "type": "function",
                  "refID": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "type": "function",
                  "refID": 9
                },
                "clean": {
                  "type": "function",
                  "refID": 11
                },
                "schema": {
                  "type": "function",
                  "refID": 13
                },
                "getDefinition": {
                  "type": "function",
                  "refID": 15
                },
                "keyIsInBlackBox": {
                  "type": "function",
                  "refID": 17
                },
                "labels": {
                  "type": "function",
                  "refID": 19
                },
                "label": {
                  "type": "function",
                  "refID": 21
                },
                "messages": {
                  "type": "function",
                  "refID": 23
                },
                "messageForError": {
                  "type": "function",
                  "refID": 25
                },
                "allowsKey": {
                  "type": "function",
                  "refID": 27
                },
                "newContext": {
                  "type": "function",
                  "refID": 29
                },
                "objectKeys": {
                  "type": "function",
                  "refID": 31
                }
              }
            },
            "Address": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Layout": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Permissions": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Workflow": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "PackageConfig": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "CorePackageConfig": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "CustomEmailSettings": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Metafield": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Currency": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Locale": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Shop": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "PaymentMethod": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Invoice": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Payment": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ShippingMethod": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ShipmentQuote": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ShipmentItem": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ShippingParcel": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Shipment": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ShippingProvider": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Shipping": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "VariantMedia": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ProductPosition": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ProductVariant": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Product": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Tag": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "CartItem": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Cart": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Document": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "History": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Notes": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "OrderItem": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "OrderTransaction": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Order": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Translation": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "Accounts": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "ShippingPackageConfig": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "PaypalPackageConfig": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            },
            "PaypalPayment": {
              "type": "object",
              "members": {
                "condition": {
                  "ref": 3
                },
                "namedContext": {
                  "ref": 5
                },
                "validator": {
                  "ref": 7
                },
                "addValidator": {
                  "ref": 7
                },
                "pick": {
                  "ref": 9
                },
                "clean": {
                  "ref": 11
                },
                "schema": {
                  "ref": 13
                },
                "getDefinition": {
                  "ref": 15
                },
                "keyIsInBlackBox": {
                  "ref": 17
                },
                "labels": {
                  "ref": 19
                },
                "label": {
                  "ref": 21
                },
                "messages": {
                  "ref": 23
                },
                "messageForError": {
                  "ref": 25
                },
                "allowsKey": {
                  "ref": 27
                },
                "newContext": {
                  "ref": 29
                },
                "objectKeys": {
                  "ref": 31
                }
              }
            }
          }
        },
        "Collections": {
          "type": "object",
          "members": {
            "Cart": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "type": "function",
                  "refID": 138,
                  "members": {
                    "Cursor": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "rewind": {
                              "type": "function"
                            },
                            "forEach": {
                              "type": "function"
                            },
                            "getTransform": {
                              "type": "function"
                            },
                            "map": {
                              "type": "function"
                            },
                            "fetch": {
                              "type": "function"
                            },
                            "count": {
                              "type": "function"
                            },
                            "observe": {
                              "type": "function"
                            },
                            "observeChanges": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    },
                    "ObjectID": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "toString": {
                              "type": "function"
                            },
                            "equals": {
                              "type": "function"
                            },
                            "clone": {
                              "type": "function"
                            },
                            "typeName": {
                              "type": "function"
                            },
                            "getTimestamp": {
                              "type": "function"
                            },
                            "toHexString": {
                              "type": "function",
                              "refID": 169
                            },
                            "toJSONValue": {
                              "ref": 169
                            },
                            "valueOf": {
                              "ref": 169
                            }
                          }
                        }
                      }
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "constructor": {
                          "ref": 138
                        },
                        "find": {
                          "type": "function",
                          "refID": 172
                        },
                        "findOne": {
                          "type": "function",
                          "refID": 174
                        },
                        "insert": {
                          "type": "function",
                          "refID": 176
                        },
                        "update": {
                          "type": "function",
                          "refID": 178
                        },
                        "remove": {
                          "type": "function",
                          "refID": 180
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "rawCollection": {
                          "type": "function",
                          "refID": 184
                        },
                        "rawDatabase": {
                          "type": "function",
                          "refID": 186
                        },
                        "allow": {
                          "type": "function",
                          "refID": 188
                        },
                        "deny": {
                          "type": "function",
                          "refID": 190
                        },
                        "attachSchema": {
                          "type": "function",
                          "refID": 192
                        },
                        "simpleSchema": {
                          "type": "function",
                          "refID": 194
                        },
                        "permit": {
                          "type": "function",
                          "refID": 196
                        }
                      }
                    }
                  }
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Orders": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Packages": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Products": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Shipping": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Shops": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Tags": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Translations": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Layouts": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            },
            "Media": {
              "type": "object",
              "members": {
                "storesLookup": {
                  "type": "object",
                  "members": {
                    "image": {
                      "type": "object",
                      "refID": 720,
                      "members": {
                        "chunkSize": {
                          "type": "constant",
                          "value": 1048576
                        },
                        "mongoUrl": {
                          "type": "constant",
                          "value": "mongodb://127.0.0.1:3001/meteor"
                        },
                        "mongoOptions": {
                          "type": "object",
                          "members": {
                            "db": {
                              "type": "object"
                            },
                            "server": {
                              "type": "object"
                            }
                          }
                        },
                        "name": {
                          "type": "constant",
                          "value": "image"
                        },
                        "typeName": {
                          "type": "constant",
                          "value": "storage.gridfs"
                        },
                        "adapter": {
                          "type": "object",
                          "members": {
                            "fileKey": {
                              "type": "function"
                            },
                            "createReadStreamForFileKey": {
                              "type": "function"
                            },
                            "createReadStream": {
                              "type": "function"
                            },
                            "createWriteStreamForFileKey": {
                              "type": "function"
                            },
                            "createWriteStream": {
                              "type": "function"
                            },
                            "remove": {
                              "type": "function"
                            }
                          }
                        },
                        "remove": {
                          "type": "function"
                        },
                        "setMaxListeners": {
                          "type": "function",
                          "refID": 739
                        },
                        "emit": {
                          "type": "function",
                          "refID": 741
                        },
                        "addListener": {
                          "type": "function",
                          "refID": 743
                        },
                        "on": {
                          "ref": 743
                        },
                        "once": {
                          "type": "function",
                          "refID": 745
                        },
                        "removeListener": {
                          "type": "function",
                          "refID": 747
                        },
                        "removeAllListeners": {
                          "type": "function",
                          "refID": 749
                        },
                        "listeners": {
                          "type": "function",
                          "refID": 751
                        }
                      }
                    },
                    "large": {
                      "type": "object",
                      "members": {
                        "chunkSize": {
                          "type": "constant",
                          "value": 1048576
                        },
                        "transformWrite": {
                          "type": "function"
                        },
                        "mongoUrl": {
                          "type": "constant",
                          "value": "mongodb://127.0.0.1:3001/meteor"
                        },
                        "mongoOptions": {
                          "type": "object",
                          "members": {
                            "db": {
                              "type": "object"
                            },
                            "server": {
                              "type": "object"
                            }
                          }
                        },
                        "name": {
                          "type": "constant",
                          "value": "large"
                        },
                        "typeName": {
                          "type": "constant",
                          "value": "storage.gridfs"
                        },
                        "adapter": {
                          "type": "object",
                          "members": {
                            "fileKey": {
                              "type": "function"
                            },
                            "createReadStreamForFileKey": {
                              "type": "function"
                            },
                            "createReadStream": {
                              "type": "function"
                            },
                            "createWriteStreamForFileKey": {
                              "type": "function"
                            },
                            "createWriteStream": {
                              "type": "function"
                            },
                            "remove": {
                              "type": "function"
                            }
                          }
                        },
                        "remove": {
                          "type": "function"
                        },
                        "setMaxListeners": {
                          "ref": 739
                        },
                        "emit": {
                          "ref": 741
                        },
                        "addListener": {
                          "ref": 743
                        },
                        "on": {
                          "ref": 743
                        },
                        "once": {
                          "ref": 745
                        },
                        "removeListener": {
                          "ref": 747
                        },
                        "removeAllListeners": {
                          "ref": 749
                        },
                        "listeners": {
                          "ref": 751
                        }
                      }
                    },
                    "medium": {
                      "type": "object",
                      "members": {
                        "chunkSize": {
                          "type": "constant",
                          "value": 1048576
                        },
                        "transformWrite": {
                          "type": "function"
                        },
                        "mongoUrl": {
                          "type": "constant",
                          "value": "mongodb://127.0.0.1:3001/meteor"
                        },
                        "mongoOptions": {
                          "type": "object",
                          "members": {
                            "db": {
                              "type": "object"
                            },
                            "server": {
                              "type": "object"
                            }
                          }
                        },
                        "name": {
                          "type": "constant",
                          "value": "medium"
                        },
                        "typeName": {
                          "type": "constant",
                          "value": "storage.gridfs"
                        },
                        "adapter": {
                          "type": "object",
                          "members": {
                            "fileKey": {
                              "type": "function"
                            },
                            "createReadStreamForFileKey": {
                              "type": "function"
                            },
                            "createReadStream": {
                              "type": "function"
                            },
                            "createWriteStreamForFileKey": {
                              "type": "function"
                            },
                            "createWriteStream": {
                              "type": "function"
                            },
                            "remove": {
                              "type": "function"
                            }
                          }
                        },
                        "remove": {
                          "type": "function"
                        },
                        "setMaxListeners": {
                          "ref": 739
                        },
                        "emit": {
                          "ref": 741
                        },
                        "addListener": {
                          "ref": 743
                        },
                        "on": {
                          "ref": 743
                        },
                        "once": {
                          "ref": 745
                        },
                        "removeListener": {
                          "ref": 747
                        },
                        "removeAllListeners": {
                          "ref": 749
                        },
                        "listeners": {
                          "ref": 751
                        }
                      }
                    },
                    "small": {
                      "type": "object",
                      "members": {
                        "chunkSize": {
                          "type": "constant",
                          "value": 1048576
                        },
                        "transformWrite": {
                          "type": "function"
                        },
                        "mongoUrl": {
                          "type": "constant",
                          "value": "mongodb://127.0.0.1:3001/meteor"
                        },
                        "mongoOptions": {
                          "type": "object",
                          "members": {
                            "db": {
                              "type": "object"
                            },
                            "server": {
                              "type": "object"
                            }
                          }
                        },
                        "name": {
                          "type": "constant",
                          "value": "small"
                        },
                        "typeName": {
                          "type": "constant",
                          "value": "storage.gridfs"
                        },
                        "adapter": {
                          "type": "object",
                          "members": {
                            "fileKey": {
                              "type": "function"
                            },
                            "createReadStreamForFileKey": {
                              "type": "function"
                            },
                            "createReadStream": {
                              "type": "function"
                            },
                            "createWriteStreamForFileKey": {
                              "type": "function"
                            },
                            "createWriteStream": {
                              "type": "function"
                            },
                            "remove": {
                              "type": "function"
                            }
                          }
                        },
                        "remove": {
                          "type": "function"
                        },
                        "setMaxListeners": {
                          "ref": 739
                        },
                        "emit": {
                          "ref": 741
                        },
                        "addListener": {
                          "ref": 743
                        },
                        "on": {
                          "ref": 743
                        },
                        "once": {
                          "ref": 745
                        },
                        "removeListener": {
                          "ref": 747
                        },
                        "removeAllListeners": {
                          "ref": 749
                        },
                        "listeners": {
                          "ref": 751
                        }
                      }
                    },
                    "thumbnail": {
                      "type": "object",
                      "members": {
                        "chunkSize": {
                          "type": "constant",
                          "value": 1048576
                        },
                        "transformWrite": {
                          "type": "function"
                        },
                        "mongoUrl": {
                          "type": "constant",
                          "value": "mongodb://127.0.0.1:3001/meteor"
                        },
                        "mongoOptions": {
                          "type": "object",
                          "members": {
                            "db": {
                              "type": "object"
                            },
                            "server": {
                              "type": "object"
                            }
                          }
                        },
                        "name": {
                          "type": "constant",
                          "value": "thumbnail"
                        },
                        "typeName": {
                          "type": "constant",
                          "value": "storage.gridfs"
                        },
                        "adapter": {
                          "type": "object",
                          "members": {
                            "fileKey": {
                              "type": "function"
                            },
                            "createReadStreamForFileKey": {
                              "type": "function"
                            },
                            "createReadStream": {
                              "type": "function"
                            },
                            "createWriteStreamForFileKey": {
                              "type": "function"
                            },
                            "createWriteStream": {
                              "type": "function"
                            },
                            "remove": {
                              "type": "function"
                            }
                          }
                        },
                        "remove": {
                          "type": "function"
                        },
                        "setMaxListeners": {
                          "ref": 739
                        },
                        "emit": {
                          "ref": 741
                        },
                        "addListener": {
                          "ref": 743
                        },
                        "on": {
                          "ref": 743
                        },
                        "once": {
                          "ref": 745
                        },
                        "removeListener": {
                          "ref": 747
                        },
                        "removeAllListeners": {
                          "ref": 749
                        },
                        "listeners": {
                          "ref": 751
                        }
                      }
                    }
                  }
                },
                "primaryStore": {
                  "ref": 720
                },
                "options": {
                  "type": "object",
                  "members": {
                    "filter": {
                      "type": "object",
                      "members": {
                        "allow": {
                          "type": "object",
                          "members": {
                            "contentTypes": {
                              "type": "array"
                            },
                            "extensions": {
                              "type": "array"
                            }
                          }
                        },
                        "deny": {
                          "type": "object",
                          "members": {
                            "extensions": {
                              "type": "array"
                            },
                            "contentTypes": {
                              "type": "array"
                            }
                          }
                        },
                        "maxSize": {
                          "type": "null",
                          "value": null
                        }
                      }
                    },
                    "stores": {
                      "type": "array"
                    },
                    "chunkSize": {
                      "type": "null",
                      "value": null
                    }
                  }
                },
                "name": {
                  "type": "constant",
                  "value": "Media"
                },
                "files": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "function"
                        },
                        "update": {
                          "type": "function"
                        },
                        "remove": {
                          "type": "function"
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "find": {
                          "type": "function"
                        },
                        "findOne": {
                          "type": "function"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "function"
                        },
                        "update": {
                          "type": "function"
                        },
                        "remove": {
                          "type": "function"
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "find": {
                          "type": "function"
                        },
                        "findOne": {
                          "type": "function"
                        }
                      }
                    },
                    "hookOptions": {
                      "type": "object",
                      "members": {
                        "before": {
                          "type": "object",
                          "members": {
                            "insert": {
                              "type": "object"
                            },
                            "update": {
                              "type": "object"
                            },
                            "remove": {
                              "type": "object"
                            },
                            "upsert": {
                              "type": "object"
                            },
                            "find": {
                              "type": "object"
                            },
                            "findOne": {
                              "type": "object"
                            },
                            "all": {
                              "type": "object"
                            }
                          }
                        },
                        "after": {
                          "type": "object",
                          "members": {
                            "insert": {
                              "type": "object"
                            },
                            "update": {
                              "type": "object"
                            },
                            "remove": {
                              "type": "object"
                            },
                            "find": {
                              "type": "object"
                            },
                            "findOne": {
                              "type": "object"
                            },
                            "all": {
                              "type": "object"
                            }
                          }
                        },
                        "all": {
                          "type": "object",
                          "members": {
                            "insert": {
                              "type": "object"
                            },
                            "update": {
                              "type": "object"
                            },
                            "remove": {
                              "type": "object"
                            },
                            "find": {
                              "type": "object"
                            },
                            "findOne": {
                              "type": "object"
                            },
                            "all": {
                              "type": "object"
                            }
                          }
                        }
                      }
                    },
                    "direct": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "function"
                        },
                        "update": {
                          "type": "function"
                        },
                        "remove": {
                          "type": "function"
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "find": {
                          "type": "function"
                        },
                        "findOne": {
                          "type": "function"
                        }
                      }
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "constructor": {
                      "ref": 138
                    },
                    "find": {
                      "ref": 172
                    },
                    "findOne": {
                      "ref": 174
                    },
                    "insert": {
                      "ref": 176
                    },
                    "update": {
                      "ref": 178
                    },
                    "remove": {
                      "ref": 180
                    },
                    "rawCollection": {
                      "ref": 184
                    },
                    "rawDatabase": {
                      "ref": 186
                    },
                    "allow": {
                      "ref": 188
                    },
                    "deny": {
                      "ref": 190
                    },
                    "attachSchema": {
                      "ref": 192
                    },
                    "simpleSchema": {
                      "ref": 194
                    },
                    "permit": {
                      "ref": 196
                    }
                  }
                },
                "insert": {
                  "type": "function"
                },
                "update": {
                  "type": "function"
                },
                "remove": {
                  "type": "function"
                },
                "findOne": {
                  "type": "function"
                },
                "find": {
                  "type": "function"
                },
                "allow": {
                  "type": "function"
                },
                "deny": {
                  "type": "function"
                },
                "allowsFile": {
                  "type": "function"
                },
                "filters": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "ref": 739
                },
                "emit": {
                  "ref": 741
                },
                "addListener": {
                  "ref": 743
                },
                "on": {
                  "ref": 743
                },
                "once": {
                  "ref": 745
                },
                "removeListener": {
                  "ref": 747
                },
                "removeAllListeners": {
                  "ref": 749
                },
                "listeners": {
                  "ref": 751
                }
              }
            },
            "Accounts": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 138
                },
                "find": {
                  "ref": 172
                },
                "findOne": {
                  "ref": 174
                },
                "insert": {
                  "ref": 176
                },
                "update": {
                  "ref": 178
                },
                "remove": {
                  "ref": 180
                },
                "rawCollection": {
                  "ref": 184
                },
                "rawDatabase": {
                  "ref": 186
                },
                "allow": {
                  "ref": 188
                },
                "deny": {
                  "ref": 190
                },
                "attachSchema": {
                  "ref": 192
                },
                "simpleSchema": {
                  "ref": 194
                },
                "permit": {
                  "ref": 196
                }
              }
            }
          }
        },
        "Helpers": {
          "type": "object",
          "members": {
            "cartTransform": {
              "type": "object",
              "members": {
                "cartCount": {
                  "type": "function"
                },
                "cartShipping": {
                  "type": "function"
                },
                "cartSubTotal": {
                  "type": "function"
                },
                "cartTaxes": {
                  "type": "function"
                },
                "cartDiscounts": {
                  "type": "function"
                },
                "cartTotal": {
                  "type": "function"
                }
              }
            }
          }
        },
        "MetaData": {
          "type": "object"
        },
        "Locale": {
          "type": "object"
        },
        "Log": {
          "type": "object",
          "members": {
            "domain": {
              "type": "null",
              "value": null
            },
            "streams": {
              "type": "array"
            },
            "serializers": {
              "type": "null",
              "value": null
            },
            "fields": {
              "type": "object",
              "members": {
                "name": {
                  "type": "constant",
                  "value": "core"
                },
                "hostname": {
                  "type": "constant",
                  "value": "Alvaros-MBP.iptv.microsoft.com"
                },
                "pid": {
                  "type": "constant",
                  "value": 95631
                }
              }
            },
            "addStream": {
              "type": "function"
            },
            "addSerializers": {
              "type": "function"
            },
            "child": {
              "type": "function"
            },
            "reopenFileStreams": {
              "type": "function"
            },
            "level": {
              "type": "function"
            },
            "levels": {
              "type": "function"
            },
            "trace": {
              "type": "function"
            },
            "debug": {
              "type": "function"
            },
            "info": {
              "type": "function"
            },
            "warn": {
              "type": "function"
            },
            "error": {
              "type": "function"
            },
            "fatal": {
              "type": "function"
            },
            "setMaxListeners": {
              "ref": 739
            },
            "emit": {
              "ref": 741
            },
            "addListener": {
              "ref": 743
            },
            "on": {
              "ref": 743
            },
            "once": {
              "ref": 745
            },
            "removeListener": {
              "ref": 747
            },
            "removeAllListeners": {
              "ref": 749
            },
            "listeners": {
              "ref": 751
            }
          }
        },
        "init": {
          "type": "function"
        },
        "getCurrentShopCursor": {
          "type": "function"
        },
        "getCurrentShop": {
          "type": "function"
        },
        "getShopId": {
          "type": "function"
        },
        "getDomain": {
          "type": "function"
        },
        "hasPermission": {
          "type": "function"
        },
        "hasOwnerAccess": {
          "type": "function"
        },
        "hasAdminAccess": {
          "type": "function"
        },
        "hasDashboardAccess": {
          "type": "function"
        },
        "getSellerShopId": {
          "type": "function"
        },
        "configureMailUrl": {
          "type": "function"
        },
        "registerPackage": {
          "type": "function"
        },
        "shopIdAutoValue": {
          "type": "function"
        },
        "schemaIdAutoValue": {
          "type": "function"
        },
        "setProduct": {
          "type": "function"
        },
        "MethodHooks": {
          "type": "object",
          "members": {
            "before": {
              "type": "function"
            },
            "after": {
              "type": "function"
            },
            "beforeMethods": {
              "type": "function"
            },
            "afterMethods": {
              "type": "function"
            }
          }
        }
      }
    },
    "ReactionRegistry": {
      "type": "object",
      "members": {
        "Packages": {
          "type": "object",
          "members": {
            "core": {
              "type": "object",
              "members": {
                "label": {
                  "type": "constant",
                  "value": "Core"
                },
                "name": {
                  "type": "constant",
                  "value": "core"
                },
                "icon": {
                  "type": "constant",
                  "value": "fa fa-th"
                },
                "settings": {
                  "type": "object",
                  "members": {
                    "public": {
                      "type": "object"
                    },
                    "mail": {
                      "type": "object",
                      "members": {
                        "user": {
                          "type": "constant",
                          "value": ""
                        },
                        "password": {
                          "type": "constant",
                          "value": ""
                        },
                        "host": {
                          "type": "constant",
                          "value": "localhost"
                        },
                        "port": {
                          "type": "constant",
                          "value": "25"
                        }
                      }
                    },
                    "openexchangerates": {
                      "type": "object",
                      "members": {
                        "appId": {
                          "type": "constant",
                          "value": ""
                        }
                      }
                    }
                  }
                },
                "registry": {
                  "type": "array"
                },
                "layout": {
                  "type": "array"
                }
              }
            },
            "eframework-accounts": {
              "type": "object",
              "members": {
                "label": {
                  "type": "constant",
                  "value": "Accounts"
                },
                "name": {
                  "type": "constant",
                  "value": "eframework-accounts"
                },
                "icon": {
                  "type": "constant",
                  "value": "fa fa-sign-in"
                },
                "registry": {
                  "type": "array"
                },
                "permissions": {
                  "type": "array"
                }
              }
            },
            "eframework-shipping": {
              "type": "object",
              "members": {
                "label": {
                  "type": "constant",
                  "value": "Shipping"
                },
                "name": {
                  "type": "constant",
                  "value": "eframework-shipping"
                },
                "icon": {
                  "type": "constant",
                  "value": "fa fa-plane"
                },
                "settings": {
                  "type": "object",
                  "members": {
                    "name": {
                      "type": "constant",
                      "value": "Flat Rate Service"
                    }
                  }
                },
                "registry": {
                  "type": "array"
                }
              }
            },
            "eframework-payments-paypal": {
              "type": "object",
              "members": {
                "label": {
                  "type": "constant",
                  "value": "PayPal"
                },
                "name": {
                  "type": "constant",
                  "value": "eframework-payments-paypal"
                },
                "icon": {
                  "type": "constant",
                  "value": "fa fa-paypal"
                },
                "registry": {
                  "type": "array"
                },
                "permissions": {
                  "type": "array"
                }
              }
            }
          }
        },
        "createDefaultAdminUser": {
          "type": "function"
        },
        "loadFixtures": {
          "type": "function"
        }
      }
    },
    "faker": {
      "type": "object",
      "members": {
        "locales": {
          "type": "object",
          "members": {
            "de": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "legal_form": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "nobility_title_prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "de_AT": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German (Austria)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "legal_form": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "nobility_title_prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "de_CH": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "German (Switzerland)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country_code": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "English"
                },
                "separator": {
                  "type": "constant",
                  "value": " & "
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "county": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "country_code": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "postcode_by_state": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "credit_card": {
                  "type": "object",
                  "members": {
                    "visa": {
                      "type": "array"
                    },
                    "mastercard": {
                      "type": "array"
                    },
                    "discover": {
                      "type": "array"
                    },
                    "american_express": {
                      "type": "array"
                    },
                    "diners_club": {
                      "type": "array"
                    },
                    "jcb": {
                      "type": "array"
                    },
                    "switch": {
                      "type": "array"
                    },
                    "solo": {
                      "type": "array"
                    },
                    "maestro": {
                      "type": "array"
                    },
                    "laser": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    },
                    "avatar_uri": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "business": {
                  "type": "object",
                  "members": {
                    "credit_card_numbers": {
                      "type": "array"
                    },
                    "credit_card_expiry_dates": {
                      "type": "array"
                    },
                    "credit_card_types": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "creature": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "hacker": {
                  "type": "object",
                  "members": {
                    "abbreviation": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "verb": {
                      "type": "array"
                    },
                    "ingverb": {
                      "type": "array"
                    }
                  }
                },
                "app": {
                  "type": "object",
                  "members": {
                    "name": {
                      "type": "array"
                    },
                    "version": {
                      "type": "array"
                    },
                    "author": {
                      "type": "array"
                    }
                  }
                },
                "finance": {
                  "type": "object",
                  "members": {
                    "account_type": {
                      "type": "array"
                    },
                    "transaction_type": {
                      "type": "array"
                    },
                    "currency": {
                      "type": "object",
                      "members": {
                        "UAE Dirham": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AED"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Afghani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AFN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "؋"
                            }
                          }
                        },
                        "Lek": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ALL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Lek"
                            }
                          }
                        },
                        "Armenian Dram": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Netherlands Antillian Guilder": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ANG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ƒ"
                            }
                          }
                        },
                        "Kwanza": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AOA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Argentine Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ARS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Australian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AUD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Aruban Guilder": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AWG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ƒ"
                            }
                          }
                        },
                        "Azerbaijanian Manat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "AZN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ман"
                            }
                          }
                        },
                        "Convertible Marks": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BAM"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "KM"
                            }
                          }
                        },
                        "Barbados Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Taka": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BDT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bulgarian Lev": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BGN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Bahraini Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BHD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Burundi Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BIF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bermudian Dollar (customarily known as Bermuda Dollar)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Brunei Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Boliviano Mvdol": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BOB BOV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$b"
                            }
                          }
                        },
                        "Brazilian Real": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BRL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "R$"
                            }
                          }
                        },
                        "Bahamian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BSD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Pula": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BWP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "P"
                            }
                          }
                        },
                        "Belarussian Ruble": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BYR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "p."
                            }
                          }
                        },
                        "Belize Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "BZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "BZ$"
                            }
                          }
                        },
                        "Canadian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Congolese Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CDF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Swiss Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CHF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "CHF"
                            }
                          }
                        },
                        "Chilean Peso Unidades de fomento": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CLP CLF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Yuan Renminbi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CNY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "¥"
                            }
                          }
                        },
                        "Colombian Peso Unidad de Valor Real": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "COP COU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Costa Rican Colon": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CRC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₡"
                            }
                          }
                        },
                        "Cuban Peso Peso Convertible": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CUP CUC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₱"
                            }
                          }
                        },
                        "Cape Verde Escudo": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CVE"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Czech Koruna": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "CZK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Kč"
                            }
                          }
                        },
                        "Djibouti Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DJF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Danish Krone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DKK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Dominican Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "RD$"
                            }
                          }
                        },
                        "Algerian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "DZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Kroon": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EEK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Egyptian Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EGP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Nakfa": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ERN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Ethiopian Birr": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ETB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Euro": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "EUR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "€"
                            }
                          }
                        },
                        "Fiji Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "FJD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Falkland Islands Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "FKP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Pound Sterling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GBP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Lari": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GEL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Cedi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GHS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Gibraltar Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GIP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Dalasi": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Guinea Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GNF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Quetzal": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GTQ"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Q"
                            }
                          }
                        },
                        "Guyana Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "GYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Hong Kong Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HKD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Lempira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HNL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "L"
                            }
                          }
                        },
                        "Croatian Kuna": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HRK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kn"
                            }
                          }
                        },
                        "Gourde US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HTG USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Forint": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "HUF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Ft"
                            }
                          }
                        },
                        "Rupiah": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IDR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Rp"
                            }
                          }
                        },
                        "New Israeli Sheqel": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ILS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₪"
                            }
                          }
                        },
                        "Indian Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "INR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Indian Rupee Ngultrum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "INR BTN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Iraqi Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IQD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Iranian Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "IRR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Iceland Krona": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ISK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Jamaican Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JMD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "J$"
                            }
                          }
                        },
                        "Jordanian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JOD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Yen": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "JPY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "¥"
                            }
                          }
                        },
                        "Kenyan Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KES"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Som": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KGS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Riel": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KHR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "៛"
                            }
                          }
                        },
                        "Comoro Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KMF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "North Korean Won": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KPW"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₩"
                            }
                          }
                        },
                        "Won": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KRW"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₩"
                            }
                          }
                        },
                        "Kuwaiti Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KWD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Cayman Islands Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Tenge": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "KZT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Kip": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LAK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₭"
                            }
                          }
                        },
                        "Lebanese Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LBP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Sri Lanka Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LKR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Liberian Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LRD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Lithuanian Litas": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LTL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Lt"
                            }
                          }
                        },
                        "Latvian Lats": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LVL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Ls"
                            }
                          }
                        },
                        "Libyan Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "LYD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Moroccan Dirham": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Moldovan Leu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MDL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Malagasy Ariary": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MGA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Denar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MKD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "ден"
                            }
                          }
                        },
                        "Kyat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MMK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tugrik": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MNT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₮"
                            }
                          }
                        },
                        "Pataca": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Ouguiya": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MRO"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Mauritius Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MUR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Rufiyaa": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MVR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Kwacha": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MWK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Mexican Peso Mexican Unidad de Inversion (UDI)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MXN MXV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Malaysian Ringgit": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MYR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "RM"
                            }
                          }
                        },
                        "Metical": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "MZN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "MT"
                            }
                          }
                        },
                        "Naira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NGN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₦"
                            }
                          }
                        },
                        "Cordoba Oro": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NIO"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "C$"
                            }
                          }
                        },
                        "Norwegian Krone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NOK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Nepalese Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NPR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "New Zealand Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "NZD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Rial Omani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "OMR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Balboa US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PAB USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "B/."
                            }
                          }
                        },
                        "Nuevo Sol": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PEN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "S/."
                            }
                          }
                        },
                        "Kina": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PGK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Philippine Peso": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PHP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Php"
                            }
                          }
                        },
                        "Pakistan Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PKR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Zloty": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PLN"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "zł"
                            }
                          }
                        },
                        "Guarani": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "PYG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Gs"
                            }
                          }
                        },
                        "Qatari Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "QAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "New Leu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RON"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "lei"
                            }
                          }
                        },
                        "Serbian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RSD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Дин."
                            }
                          }
                        },
                        "Russian Ruble": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RUB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "руб"
                            }
                          }
                        },
                        "Rwanda Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "RWF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Saudi Riyal": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Solomon Islands Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Seychelles Rupee": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SCR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₨"
                            }
                          }
                        },
                        "Sudanese Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SDG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Swedish Krona": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SEK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "kr"
                            }
                          }
                        },
                        "Singapore Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SGD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Saint Helena Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SHP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Leone": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SLL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Somali Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SOS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "S"
                            }
                          }
                        },
                        "Surinam Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SRD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Dobra": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "STD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "El Salvador Colon US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SVC USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Syrian Pound": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SYP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "£"
                            }
                          }
                        },
                        "Lilangeni": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "SZL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Baht": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "THB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "฿"
                            }
                          }
                        },
                        "Somoni": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TJS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Manat": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TMT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tunisian Dinar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Pa'anga": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TOP"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Turkish Lira": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TRY"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "TL"
                            }
                          }
                        },
                        "Trinidad and Tobago Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TTD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "TT$"
                            }
                          }
                        },
                        "New Taiwan Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TWD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "NT$"
                            }
                          }
                        },
                        "Tanzanian Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "TZS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Hryvnia": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UAH"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₴"
                            }
                          }
                        },
                        "Uganda Shilling": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UGX"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "US Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "USD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "Peso Uruguayo Uruguay Peso en Unidades Indexadas": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UYU UYI"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$U"
                            }
                          }
                        },
                        "Uzbekistan Sum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "UZS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "лв"
                            }
                          }
                        },
                        "Bolivar Fuerte": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VEF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "Bs"
                            }
                          }
                        },
                        "Dong": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VND"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "₫"
                            }
                          }
                        },
                        "Vatu": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "VUV"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Tala": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "WST"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFA Franc BEAC": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Silver": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAG"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Gold": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XAU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Bond Markets Units European Composite Unit (EURCO)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBA"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Monetary Unit (E.M.U.-6)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBB"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Unit of Account 9(E.U.A.-9)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBC"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "European Unit of Account 17(E.U.A.-17)": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XBD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "East Caribbean Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XCD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "$"
                            }
                          }
                        },
                        "SDR": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XDR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "UIC-Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XFU"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFA Franc BCEAO": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XOF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Palladium": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "CFP Franc": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPF"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Platinum": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XPT"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Codes specifically reserved for testing purposes": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "XTS"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Yemeni Rial": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "YER"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "﷼"
                            }
                          }
                        },
                        "Rand": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": "R"
                            }
                          }
                        },
                        "Rand Loti": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR LSL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Rand Namibia Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZAR NAD"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Zambian Kwacha": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZMK"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        },
                        "Zimbabwe Dollar": {
                          "type": "object",
                          "members": {
                            "code": {
                              "type": "constant",
                              "value": "ZWL"
                            },
                            "symbol": {
                              "type": "constant",
                              "value": ""
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "date": {
                  "type": "object",
                  "members": {
                    "month": {
                      "type": "object",
                      "members": {
                        "wide": {
                          "type": "array"
                        },
                        "wide_context": {
                          "type": "array"
                        },
                        "abbr": {
                          "type": "array"
                        },
                        "abbr_context": {
                          "type": "array"
                        }
                      }
                    },
                    "weekday": {
                      "type": "object",
                      "members": {
                        "wide": {
                          "type": "array"
                        },
                        "wide_context": {
                          "type": "array"
                        },
                        "abbr": {
                          "type": "array"
                        },
                        "abbr_context": {
                          "type": "array"
                        }
                      }
                    }
                  }
                }
              }
            },
            "en_AU": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Australia (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "state_abbr": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_BORK": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Bork (English)"
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_CA": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Canada (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_GB": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Great Britain (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "county": {
                      "type": "array"
                    },
                    "uk_country": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_IE": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Ireland (English)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "county": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_IND": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "India (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_US": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "United States (English)"
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "default_country": {
                      "type": "array"
                    },
                    "postcode_by_state": {
                      "type": "object",
                      "members": {
                        "AL": {
                          "type": "constant",
                          "value": "350##"
                        },
                        "AK": {
                          "type": "constant",
                          "value": "995##"
                        },
                        "AS": {
                          "type": "constant",
                          "value": "967##"
                        },
                        "AZ": {
                          "type": "constant",
                          "value": "850##"
                        },
                        "AR": {
                          "type": "constant",
                          "value": "717##"
                        },
                        "CA": {
                          "type": "constant",
                          "value": "900##"
                        },
                        "CO": {
                          "type": "constant",
                          "value": "800##"
                        },
                        "CT": {
                          "type": "constant",
                          "value": "061##"
                        },
                        "DC": {
                          "type": "constant",
                          "value": "204##"
                        },
                        "DE": {
                          "type": "constant",
                          "value": "198##"
                        },
                        "FL": {
                          "type": "constant",
                          "value": "322##"
                        },
                        "GA": {
                          "type": "constant",
                          "value": "301##"
                        },
                        "HI": {
                          "type": "constant",
                          "value": "967##"
                        },
                        "ID": {
                          "type": "constant",
                          "value": "832##"
                        },
                        "IL": {
                          "type": "constant",
                          "value": "600##"
                        },
                        "IN": {
                          "type": "constant",
                          "value": "463##"
                        },
                        "IA": {
                          "type": "constant",
                          "value": "510##"
                        },
                        "KS": {
                          "type": "constant",
                          "value": "666##"
                        },
                        "KY": {
                          "type": "constant",
                          "value": "404##"
                        },
                        "LA": {
                          "type": "constant",
                          "value": "701##"
                        },
                        "ME": {
                          "type": "constant",
                          "value": "042##"
                        },
                        "MD": {
                          "type": "constant",
                          "value": "210##"
                        },
                        "MA": {
                          "type": "constant",
                          "value": "026##"
                        },
                        "MI": {
                          "type": "constant",
                          "value": "480##"
                        },
                        "MN": {
                          "type": "constant",
                          "value": "555##"
                        },
                        "MS": {
                          "type": "constant",
                          "value": "387##"
                        },
                        "MO": {
                          "type": "constant",
                          "value": "650##"
                        },
                        "MT": {
                          "type": "constant",
                          "value": "590##"
                        },
                        "NE": {
                          "type": "constant",
                          "value": "688##"
                        },
                        "NV": {
                          "type": "constant",
                          "value": "898##"
                        },
                        "NH": {
                          "type": "constant",
                          "value": "036##"
                        },
                        "NJ": {
                          "type": "constant",
                          "value": "076##"
                        },
                        "NM": {
                          "type": "constant",
                          "value": "880##"
                        },
                        "NY": {
                          "type": "constant",
                          "value": "122##"
                        },
                        "NC": {
                          "type": "constant",
                          "value": "288##"
                        },
                        "ND": {
                          "type": "constant",
                          "value": "586##"
                        },
                        "OH": {
                          "type": "constant",
                          "value": "444##"
                        },
                        "OK": {
                          "type": "constant",
                          "value": "730##"
                        },
                        "OR": {
                          "type": "constant",
                          "value": "979##"
                        },
                        "PA": {
                          "type": "constant",
                          "value": "186##"
                        },
                        "RI": {
                          "type": "constant",
                          "value": "029##"
                        },
                        "SC": {
                          "type": "constant",
                          "value": "299##"
                        },
                        "SD": {
                          "type": "constant",
                          "value": "577##"
                        },
                        "TN": {
                          "type": "constant",
                          "value": "383##"
                        },
                        "TX": {
                          "type": "constant",
                          "value": "798##"
                        },
                        "UT": {
                          "type": "constant",
                          "value": "847##"
                        },
                        "VT": {
                          "type": "constant",
                          "value": "050##"
                        },
                        "VA": {
                          "type": "constant",
                          "value": "222##"
                        },
                        "WA": {
                          "type": "constant",
                          "value": "990##"
                        },
                        "WV": {
                          "type": "constant",
                          "value": "247##"
                        },
                        "WI": {
                          "type": "constant",
                          "value": "549##"
                        },
                        "WY": {
                          "type": "constant",
                          "value": "831##"
                        }
                      }
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "area_code": {
                      "type": "array"
                    },
                    "exchange_code": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "en_au_ocker": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Australia Ocker (English)"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "ocker_first_name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "street_root": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "region": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "es": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Spanish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "province": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "es_MX": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Spanish Mexico"
                },
                "separator": {
                  "type": "constant",
                  "value": " & "
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "creature": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fa": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Farsi"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fr": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "French"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "fr_CA": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Canada (French)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ge": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Georgian"
                },
                "separator": {
                  "type": "constant",
                  "value": " და "
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "it": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Italian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ja": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Japanese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "last_name": {
                      "type": "array"
                    },
                    "first_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ko": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Korean"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "last_name": {
                      "type": "array"
                    },
                    "first_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nb_NO": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Norwegian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_root": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "common_street_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "feminine_name": {
                      "type": "array"
                    },
                    "masculine_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nep": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Nepalese"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "nl": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Dutch"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "tussenvoegsel": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "pl": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Polish"
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjetive": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_adjective": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "pt_BR": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Portuguese (Brazil)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "ru": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Russian"
                },
                "separator": {
                  "type": "constant",
                  "value": " и "
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "male_first_name": {
                      "type": "array"
                    },
                    "male_middle_name": {
                      "type": "array"
                    },
                    "male_last_name": {
                      "type": "array"
                    },
                    "female_first_name": {
                      "type": "array"
                    },
                    "female_middle_name": {
                      "type": "array"
                    },
                    "female_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "date": {
                  "type": "object",
                  "members": {
                    "month": {
                      "type": "object",
                      "members": {
                        "wide": {
                          "type": "array"
                        },
                        "wide_context": {
                          "type": "array"
                        },
                        "abbr": {
                          "type": "array"
                        },
                        "abbr_context": {
                          "type": "array"
                        }
                      }
                    },
                    "weekday": {
                      "type": "object",
                      "members": {
                        "wide": {
                          "type": "array"
                        },
                        "wide_context": {
                          "type": "array"
                        },
                        "abbr": {
                          "type": "array"
                        },
                        "abbr_context": {
                          "type": "array"
                        }
                      }
                    }
                  }
                }
              }
            },
            "sk": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Slovakian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "time_zone": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "adjective": {
                      "type": "array"
                    },
                    "descriptor": {
                      "type": "array"
                    },
                    "noun": {
                      "type": "array"
                    },
                    "bs_verb": {
                      "type": "array"
                    },
                    "bs_noun": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    },
                    "supplemental": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "man_first_name": {
                      "type": "array"
                    },
                    "woman_first_name": {
                      "type": "array"
                    },
                    "man_last_name": {
                      "type": "array"
                    },
                    "woman_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "sv": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Swedish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "common_street_suffix": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name_women": {
                      "type": "array"
                    },
                    "first_name_men": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "common_cell_prefix": {
                      "type": "array"
                    },
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "commerce": {
                  "type": "object",
                  "members": {
                    "color": {
                      "type": "array"
                    },
                    "department": {
                      "type": "array"
                    },
                    "product_name": {
                      "type": "object",
                      "members": {
                        "adjective": {
                          "type": "array"
                        },
                        "material": {
                          "type": "array"
                        },
                        "product": {
                          "type": "array"
                        }
                      }
                    }
                  }
                },
                "team": {
                  "type": "object",
                  "members": {
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "tr": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Turkish"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city": {
                      "type": "array"
                    },
                    "street_root": {
                      "type": "array"
                    },
                    "country": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "area_code": {
                      "type": "array"
                    },
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "uk": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Ukrainian"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "country": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_prefix": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "secondary_address": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "street_title": {
                      "type": "array"
                    },
                    "city_name": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "free_email": {
                      "type": "array"
                    },
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "male_first_name": {
                      "type": "array"
                    },
                    "male_middle_name": {
                      "type": "array"
                    },
                    "male_last_name": {
                      "type": "array"
                    },
                    "female_first_name": {
                      "type": "array"
                    },
                    "female_middle_name": {
                      "type": "array"
                    },
                    "female_last_name": {
                      "type": "array"
                    },
                    "prefix": {
                      "type": "array"
                    },
                    "suffix": {
                      "type": "array"
                    },
                    "title": {
                      "type": "object",
                      "members": {
                        "descriptor": {
                          "type": "array"
                        },
                        "level": {
                          "type": "array"
                        },
                        "job": {
                          "type": "array"
                        }
                      }
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "vi": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Vietnamese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_root": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "county": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "internet": {
                  "type": "object",
                  "members": {
                    "domain_suffix": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "cell_phone": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "company": {
                  "type": "object",
                  "members": {
                    "prefix": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "lorem": {
                  "type": "object",
                  "members": {
                    "words": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "zh_CN": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Chinese"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            },
            "zh_TW": {
              "type": "object",
              "members": {
                "title": {
                  "type": "constant",
                  "value": "Chinese (Taiwan)"
                },
                "address": {
                  "type": "object",
                  "members": {
                    "city_prefix": {
                      "type": "array"
                    },
                    "city_suffix": {
                      "type": "array"
                    },
                    "building_number": {
                      "type": "array"
                    },
                    "street_suffix": {
                      "type": "array"
                    },
                    "postcode": {
                      "type": "array"
                    },
                    "state": {
                      "type": "array"
                    },
                    "state_abbr": {
                      "type": "array"
                    },
                    "city": {
                      "type": "array"
                    },
                    "street_name": {
                      "type": "array"
                    },
                    "street_address": {
                      "type": "array"
                    },
                    "default_country": {
                      "type": "array"
                    }
                  }
                },
                "name": {
                  "type": "object",
                  "members": {
                    "first_name": {
                      "type": "array"
                    },
                    "last_name": {
                      "type": "array"
                    },
                    "name": {
                      "type": "array"
                    }
                  }
                },
                "phone_number": {
                  "type": "object",
                  "members": {
                    "formats": {
                      "type": "array"
                    }
                  }
                }
              }
            }
          }
        },
        "locale": {
          "type": "constant",
          "value": "en"
        },
        "localeFallback": {
          "type": "constant",
          "value": "en"
        },
        "definitions": {
          "type": "object",
          "members": {
            "name": {
              "type": "object"
            },
            "address": {
              "type": "object"
            },
            "company": {
              "type": "object"
            },
            "lorem": {
              "type": "object"
            },
            "hacker": {
              "type": "object"
            },
            "phone_number": {
              "type": "object"
            },
            "finance": {
              "type": "object"
            },
            "internet": {
              "type": "object"
            },
            "commerce": {
              "type": "object"
            },
            "date": {
              "type": "object"
            },
            "title": {
              "type": "constant",
              "value": ""
            },
            "separator": {
              "type": "constant",
              "value": ""
            }
          }
        },
        "fake": {
          "type": "function"
        },
        "random": {
          "type": "object",
          "members": {
            "number": {
              "type": "function"
            },
            "arrayElement": {
              "type": "function"
            },
            "objectElement": {
              "type": "function"
            },
            "uuid": {
              "type": "function"
            },
            "boolean": {
              "type": "function"
            }
          }
        },
        "helpers": {
          "type": "object",
          "members": {
            "randomize": {
              "type": "function"
            },
            "slugify": {
              "type": "function"
            },
            "replaceSymbolWithNumber": {
              "type": "function"
            },
            "replaceSymbols": {
              "type": "function"
            },
            "shuffle": {
              "type": "function"
            },
            "mustache": {
              "type": "function"
            },
            "createCard": {
              "type": "function"
            },
            "contextualCard": {
              "type": "function"
            },
            "userCard": {
              "type": "function"
            },
            "createTransaction": {
              "type": "function"
            }
          }
        },
        "name": {
          "type": "object",
          "members": {
            "firstName": {
              "type": "function"
            },
            "lastName": {
              "type": "function"
            },
            "findName": {
              "type": "function"
            },
            "jobTitle": {
              "type": "function"
            },
            "prefix": {
              "type": "function"
            },
            "suffix": {
              "type": "function"
            },
            "title": {
              "type": "function"
            },
            "jobDescriptor": {
              "type": "function"
            },
            "jobArea": {
              "type": "function"
            },
            "jobType": {
              "type": "function"
            }
          }
        },
        "address": {
          "type": "object",
          "members": {
            "zipCode": {
              "type": "function"
            },
            "city": {
              "type": "function"
            },
            "cityPrefix": {
              "type": "function"
            },
            "citySuffix": {
              "type": "function"
            },
            "streetName": {
              "type": "function"
            },
            "streetAddress": {
              "type": "function"
            },
            "streetSuffix": {
              "type": "function"
            },
            "streetPrefix": {
              "type": "function"
            },
            "secondaryAddress": {
              "type": "function"
            },
            "county": {
              "type": "function"
            },
            "country": {
              "type": "function"
            },
            "countryCode": {
              "type": "function"
            },
            "state": {
              "type": "function"
            },
            "stateAbbr": {
              "type": "function"
            },
            "latitude": {
              "type": "function"
            },
            "longitude": {
              "type": "function"
            }
          }
        },
        "company": {
          "type": "object",
          "members": {
            "suffixes": {
              "type": "function"
            },
            "companyName": {
              "type": "function"
            },
            "companySuffix": {
              "type": "function"
            },
            "catchPhrase": {
              "type": "function"
            },
            "bs": {
              "type": "function"
            },
            "catchPhraseAdjective": {
              "type": "function"
            },
            "catchPhraseDescriptor": {
              "type": "function"
            },
            "catchPhraseNoun": {
              "type": "function"
            },
            "bsAdjective": {
              "type": "function"
            },
            "bsBuzz": {
              "type": "function"
            },
            "bsNoun": {
              "type": "function"
            }
          }
        },
        "finance": {
          "type": "object",
          "members": {
            "account": {
              "type": "function"
            },
            "accountName": {
              "type": "function"
            },
            "mask": {
              "type": "function"
            },
            "amount": {
              "type": "function"
            },
            "transactionType": {
              "type": "function"
            },
            "currencyCode": {
              "type": "function"
            },
            "currencyName": {
              "type": "function"
            },
            "currencySymbol": {
              "type": "function"
            }
          }
        },
        "image": {
          "type": "object",
          "members": {
            "image": {
              "type": "function"
            },
            "avatar": {
              "type": "function"
            },
            "imageUrl": {
              "type": "function"
            },
            "abstract": {
              "type": "function"
            },
            "animals": {
              "type": "function"
            },
            "business": {
              "type": "function"
            },
            "cats": {
              "type": "function"
            },
            "city": {
              "type": "function"
            },
            "food": {
              "type": "function"
            },
            "nightlife": {
              "type": "function"
            },
            "fashion": {
              "type": "function"
            },
            "people": {
              "type": "function"
            },
            "nature": {
              "type": "function"
            },
            "sports": {
              "type": "function"
            },
            "technics": {
              "type": "function"
            },
            "transport": {
              "type": "function"
            }
          }
        },
        "lorem": {
          "type": "object",
          "members": {
            "words": {
              "type": "function"
            },
            "sentence": {
              "type": "function"
            },
            "sentences": {
              "type": "function"
            },
            "paragraph": {
              "type": "function"
            },
            "paragraphs": {
              "type": "function"
            }
          }
        },
        "hacker": {
          "type": "object",
          "members": {
            "abbreviation": {
              "type": "function"
            },
            "adjective": {
              "type": "function"
            },
            "noun": {
              "type": "function"
            },
            "verb": {
              "type": "function"
            },
            "ingverb": {
              "type": "function"
            },
            "phrase": {
              "type": "function"
            }
          }
        },
        "internet": {
          "type": "object",
          "members": {
            "avatar": {
              "type": "function"
            },
            "email": {
              "type": "function"
            },
            "userName": {
              "type": "function"
            },
            "protocol": {
              "type": "function"
            },
            "url": {
              "type": "function"
            },
            "domainName": {
              "type": "function"
            },
            "domainSuffix": {
              "type": "function"
            },
            "domainWord": {
              "type": "function"
            },
            "ip": {
              "type": "function"
            },
            "userAgent": {
              "type": "function"
            },
            "color": {
              "type": "function"
            },
            "mac": {
              "type": "function"
            },
            "password": {
              "type": "function"
            }
          }
        },
        "phone": {
          "type": "object",
          "members": {
            "phoneNumber": {
              "type": "function"
            },
            "phoneNumberFormat": {
              "type": "function"
            },
            "phoneFormats": {
              "type": "function"
            }
          }
        },
        "date": {
          "type": "object",
          "members": {
            "past": {
              "type": "function"
            },
            "future": {
              "type": "function"
            },
            "between": {
              "type": "function"
            },
            "recent": {
              "type": "function"
            },
            "month": {
              "type": "function"
            },
            "weekday": {
              "type": "function"
            }
          }
        },
        "commerce": {
          "type": "object",
          "members": {
            "color": {
              "type": "function"
            },
            "department": {
              "type": "function"
            },
            "productName": {
              "type": "function"
            },
            "price": {
              "type": "function"
            },
            "productAdjective": {
              "type": "function"
            },
            "productMaterial": {
              "type": "function"
            },
            "product": {
              "type": "function"
            }
          }
        },
        "reaction": {
          "type": "object",
          "members": {
            "address": {
              "type": "function"
            },
            "metaField": {
              "type": "function"
            },
            "productVariant": {
              "type": "function"
            },
            "cartItem": {
              "type": "function"
            }
          }
        },
        "seed": {
          "type": "function"
        }
      }
    },
    "currentProduct": {
      "type": "undefined"
    }
  },
  "oauth1": {
    "OAuth1Binding": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "prepareRequestToken": {
              "type": "function"
            },
            "prepareAccessToken": {
              "type": "function"
            },
            "call": {
              "type": "function"
            },
            "get": {
              "type": "function"
            },
            "post": {
              "type": "function"
            }
          }
        }
      }
    },
    "OAuth1Test": {
      "type": "undefined"
    }
  },
  "twitter": {
    "Twitter": {
      "type": "object",
      "members": {
        "whitelistedFields": {
          "type": "array"
        },
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-twitter": {},
  "github": {
    "Github": {
      "type": "object",
      "members": {
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-github": {},
  "weibo": {
    "Weibo": {
      "type": "object",
      "members": {
        "retrieveCredential": {
          "type": "function"
        }
      }
    }
  },
  "accounts-weibo": {},
  "aldeed:template-extension": {},
  "eframework:eframework-accounts": {},
  "eframework:eframework-core-theme": {
    "ThemeData": {
      "type": "function"
    }
  },
  "fortawesome:fontawesome": {},
  "eframework:eframework-bootstrap-theme": {},
  "eframework:eframework-shipping": {},
  "eframework:eframework-payments-paypal": {},
  "velocity:html-reporter": {},
  "coffeescript": {},
  "practicalmeteor:loglevel": {
    "loglevel": {
      "type": "object",
      "members": {
        "createLogger": {
          "type": "function"
        },
        "createPackageLogger": {
          "type": "function"
        },
        "createAppLogger": {
          "type": "function"
        }
      }
    }
  },
  "velocity:chokidar": {
    "chokidar": {
      "type": "object",
      "members": {
        "FSWatcher": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "add": {
                  "type": "function"
                },
                "unwatch": {
                  "type": "function"
                },
                "close": {
                  "type": "function"
                },
                "setMaxListeners": {
                  "type": "function"
                },
                "emit": {
                  "type": "function"
                },
                "addListener": {
                  "type": "function",
                  "refID": 13
                },
                "on": {
                  "ref": 13
                },
                "once": {
                  "type": "function"
                },
                "removeListener": {
                  "type": "function"
                },
                "removeAllListeners": {
                  "type": "function"
                },
                "listeners": {
                  "type": "function"
                }
              }
            }
          }
        },
        "watch": {
          "type": "function"
        }
      }
    }
  },
  "velocity:meteor-internals": {
    "VelocityMeteorInternals": {
      "type": "object",
      "members": {
        "parseStack": {
          "type": "object",
          "members": {
            "markBottom": {
              "type": "function"
            }
          }
        },
        "buildmessage": {
          "type": "object",
          "members": {
            "markBoundary": {
              "type": "function"
            }
          }
        },
        "files": {
          "type": "object",
          "members": {
            "cwd": {
              "type": "function"
            },
            "findAppDir": {
              "type": "function"
            },
            "findPackageDir": {
              "type": "function"
            },
            "statOrNull": {
              "type": "function"
            },
            "runJavaScript": {
              "type": "function"
            },
            "FancySyntaxError": {
              "type": "function"
            },
            "writeFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "writeFile"
                }
              }
            },
            "appendFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "appendFile"
                }
              }
            },
            "readFile": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readFile"
                }
              }
            },
            "stat": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "stat"
                }
              }
            },
            "lstat": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "lstat"
                }
              }
            },
            "exists": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "exists"
                }
              }
            },
            "rename": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "rename"
                }
              }
            },
            "realpath": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "realpath"
                }
              }
            },
            "readdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readdir"
                }
              }
            },
            "rmdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "rmdir"
                }
              }
            },
            "mkdir": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "mkdir"
                }
              }
            },
            "unlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "unlink"
                }
              }
            },
            "chmod": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "chmod"
                }
              }
            },
            "open": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "open"
                }
              }
            },
            "read": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "read"
                }
              }
            },
            "write": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "write"
                }
              }
            },
            "close": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "close"
                }
              }
            },
            "symlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "symlink"
                }
              }
            },
            "readlink": {
              "type": "function",
              "members": {
                "displayName": {
                  "type": "constant",
                  "value": "readlink"
                }
              }
            },
            "createReadStream": {
              "type": "function"
            },
            "createWriteStream": {
              "type": "function"
            },
            "watchFile": {
              "type": "function"
            },
            "unwatchFile": {
              "type": "function"
            },
            "pathJoin": {
              "type": "function"
            },
            "pathNormalize": {
              "type": "function"
            },
            "pathRelative": {
              "type": "function"
            },
            "pathResolve": {
              "type": "function"
            },
            "pathDirname": {
              "type": "function"
            },
            "pathBasename": {
              "type": "function"
            },
            "pathExtname": {
              "type": "function"
            },
            "pathSep": {
              "type": "constant",
              "value": "/"
            },
            "pathDelimiter": {
              "type": "constant",
              "value": ":"
            },
            "pathOsDelimiter": {
              "type": "constant",
              "value": ":"
            },
            "convertToStandardPath": {
              "type": "function"
            },
            "convertToOSPath": {
              "type": "function"
            },
            "convertToWindowsPath": {
              "type": "function"
            },
            "convertToPosixPath": {
              "type": "function"
            },
            "convertToStandardLineEndings": {
              "type": "function"
            },
            "convertToOSLineEndings": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "velocity:source-map-support": {
    "SourceMapSupport": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:long-running-child-process": {
    "LongRunningChildProcess": {
      "type": "function",
      "members": {
        "prototype": {
          "type": "object",
          "members": {
            "taskName": {
              "type": "null",
              "value": null
            },
            "child": {
              "type": "null",
              "value": null
            },
            "pid": {
              "type": "null",
              "value": null
            },
            "getTaskName": {
              "type": "function"
            },
            "getChild": {
              "type": "function"
            },
            "getPid": {
              "type": "function"
            },
            "isDead": {
              "type": "function"
            },
            "isRunning": {
              "type": "function"
            },
            "readPid": {
              "type": "function"
            },
            "spawn": {
              "type": "function"
            },
            "kill": {
              "type": "function"
            }
          }
        }
      }
    }
  },
  "sanjo:meteor-version": {
    "MeteorVersion": {
      "type": "object",
      "members": {
        "getSemanticVersion": {
          "type": "function"
        }
      }
    }
  },
  "package-version-parser": {
    "PackageVersion": {
      "type": "function",
      "members": {
        "parse": {
          "type": "function"
        },
        "versionMagnitude": {
          "type": "function"
        },
        "lessThan": {
          "type": "function"
        },
        "majorVersion": {
          "type": "function"
        },
        "compare": {
          "type": "function"
        },
        "getValidServerVersion": {
          "type": "function"
        },
        "VersionConstraint": {
          "type": "function"
        },
        "parseVersionConstraint": {
          "type": "function"
        },
        "PackageConstraint": {
          "type": "function",
          "members": {
            "prototype": {
              "type": "object",
              "members": {
                "toString": {
                  "type": "function"
                }
              }
            }
          }
        },
        "parsePackageConstraint": {
          "type": "function"
        },
        "validatePackageName": {
          "type": "function"
        },
        "invalidFirstFormatConstraint": {
          "type": "function"
        },
        "removeBuildID": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:meteor-files-helpers": {
    "MeteorFilesHelpers": {
      "type": "object",
      "members": {
        "getAppPath": {
          "type": "function"
        },
        "getMeteorToolPath": {
          "type": "function"
        },
        "getMeteorInstallationPath": {
          "type": "function"
        },
        "getNodeModulePath": {
          "type": "function"
        },
        "getPackageVersions": {
          "type": "function"
        },
        "getPackageVersion": {
          "type": "function"
        },
        "isPackageInstalled": {
          "type": "function"
        }
      }
    }
  },
  "velocity:core": {
    "Velocity": {
      "type": "object",
      "members": {
        "Collections": {
          "type": "object",
          "members": {
            "TestFiles": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "type": "function",
                  "refID": 67,
                  "members": {
                    "Cursor": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "rewind": {
                              "type": "function"
                            },
                            "forEach": {
                              "type": "function"
                            },
                            "getTransform": {
                              "type": "function"
                            },
                            "map": {
                              "type": "function"
                            },
                            "fetch": {
                              "type": "function"
                            },
                            "count": {
                              "type": "function"
                            },
                            "observe": {
                              "type": "function"
                            },
                            "observeChanges": {
                              "type": "function"
                            }
                          }
                        }
                      }
                    },
                    "ObjectID": {
                      "type": "function",
                      "members": {
                        "prototype": {
                          "type": "object",
                          "members": {
                            "toString": {
                              "type": "function"
                            },
                            "equals": {
                              "type": "function"
                            },
                            "clone": {
                              "type": "function"
                            },
                            "typeName": {
                              "type": "function"
                            },
                            "getTimestamp": {
                              "type": "function"
                            },
                            "toHexString": {
                              "type": "function",
                              "refID": 98
                            },
                            "toJSONValue": {
                              "ref": 98
                            },
                            "valueOf": {
                              "ref": 98
                            }
                          }
                        }
                      }
                    },
                    "prototype": {
                      "type": "object",
                      "members": {
                        "constructor": {
                          "ref": 67
                        },
                        "find": {
                          "type": "function",
                          "refID": 101
                        },
                        "findOne": {
                          "type": "function",
                          "refID": 103
                        },
                        "insert": {
                          "type": "function",
                          "refID": 105
                        },
                        "update": {
                          "type": "function",
                          "refID": 107
                        },
                        "remove": {
                          "type": "function",
                          "refID": 109
                        },
                        "upsert": {
                          "type": "function"
                        },
                        "rawCollection": {
                          "type": "function",
                          "refID": 113
                        },
                        "rawDatabase": {
                          "type": "function",
                          "refID": 115
                        },
                        "allow": {
                          "type": "function",
                          "refID": 117
                        },
                        "deny": {
                          "type": "function",
                          "refID": 119
                        },
                        "attachSchema": {
                          "type": "function",
                          "refID": 121
                        },
                        "simpleSchema": {
                          "type": "function",
                          "refID": 123
                        },
                        "permit": {
                          "type": "function",
                          "refID": 125
                        }
                      }
                    }
                  }
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            },
            "FixtureFiles": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 67
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            },
            "TestReports": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 67
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            },
            "AggregateReports": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 67
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            },
            "Logs": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 67
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            },
            "Mirrors": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 67
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            },
            "Options": {
              "type": "object",
              "members": {
                "before": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "after": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "hookOptions": {
                  "type": "object",
                  "members": {
                    "before": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "upsert": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "after": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    },
                    "all": {
                      "type": "object",
                      "members": {
                        "insert": {
                          "type": "object"
                        },
                        "update": {
                          "type": "object"
                        },
                        "remove": {
                          "type": "object"
                        },
                        "find": {
                          "type": "object"
                        },
                        "findOne": {
                          "type": "object"
                        },
                        "all": {
                          "type": "object"
                        }
                      }
                    }
                  }
                },
                "direct": {
                  "type": "object",
                  "members": {
                    "insert": {
                      "type": "function"
                    },
                    "update": {
                      "type": "function"
                    },
                    "remove": {
                      "type": "function"
                    },
                    "upsert": {
                      "type": "function"
                    },
                    "find": {
                      "type": "function"
                    },
                    "findOne": {
                      "type": "function"
                    }
                  }
                },
                "upsert": {
                  "type": "function"
                },
                "constructor": {
                  "ref": 67
                },
                "find": {
                  "ref": 101
                },
                "findOne": {
                  "ref": 103
                },
                "insert": {
                  "ref": 105
                },
                "update": {
                  "ref": 107
                },
                "remove": {
                  "ref": 109
                },
                "rawCollection": {
                  "ref": 113
                },
                "rawDatabase": {
                  "ref": 115
                },
                "allow": {
                  "ref": 117
                },
                "deny": {
                  "ref": 119
                },
                "attachSchema": {
                  "ref": 121
                },
                "simpleSchema": {
                  "ref": 123
                },
                "permit": {
                  "ref": 125
                }
              }
            }
          }
        },
        "Methods": {
          "type": "object",
          "members": {
            "velocity/logs/reset": {
              "type": "function"
            },
            "velocity/logs/submit": {
              "type": "function"
            },
            "velocity/mirrors/init": {
              "type": "function"
            },
            "velocity/mirrors/register": {
              "type": "function"
            },
            "velocity/mirrors/request": {
              "type": "function"
            },
            "velocity/parentHandshake": {
              "type": "function"
            },
            "velocity/getOption": {
              "type": "function"
            },
            "velocity/setOption": {
              "type": "function"
            },
            "velocity/setOptions": {
              "type": "function"
            },
            "velocity/reports/completed": {
              "type": "function"
            },
            "velocity/reports/reset": {
              "type": "function"
            },
            "velocity/reports/submit": {
              "type": "function"
            },
            "velocity/copySampleTests": {
              "type": "function"
            },
            "velocity/featureTestDone": {
              "type": "function"
            },
            "velocity/featureTestFailed": {
              "type": "function"
            },
            "velocity/isEnabled": {
              "type": "function"
            },
            "velocity/isMirror": {
              "type": "function"
            },
            "velocity/register/framework": {
              "type": "function"
            },
            "velocity/reset": {
              "type": "function"
            },
            "velocity/returnTODOTestAndMarkItAsDOING": {
              "type": "function"
            }
          }
        },
        "mirrorMeteorReleaseName": {
          "type": "constant",
          "value": "velocity:METEOR"
        },
        "mirrorMeteorVersion": {
          "type": "constant",
          "value": "1.2.0.2_1"
        },
        "mirrorMeteorRelease": {
          "type": "constant",
          "value": "velocity:METEOR@1.2.0.2_1"
        },
        "mirrorMeteorToolReleaseName": {
          "type": "constant",
          "value": "velocity:meteor-tool"
        },
        "mirrorMeteorToolVersion": {
          "type": "constant",
          "value": "1.1.9_1"
        },
        "mirrorMeteorToolRelease": {
          "type": "constant",
          "value": "velocity:meteor-tool@1.1.9_1"
        },
        "reusableMirrors": {
          "type": "array"
        },
        "startup": {
          "type": "function"
        },
        "getAppPath": {
          "type": "function"
        },
        "getTestsPath": {
          "type": "function"
        },
        "getPackagesPath": {
          "type": "function"
        },
        "getPackagePath": {
          "type": "function"
        },
        "postProcessors": {
          "type": "array"
        },
        "addPostProcessor": {
          "type": "function"
        },
        "getReportGithubIssueMessage": {
          "type": "function"
        },
        "registerTestingFramework": {
          "type": "function"
        },
        "unregisterTestingFramework": {
          "type": "function"
        },
        "onTest": {
          "type": "function"
        },
        "setOption": {
          "type": "function"
        },
        "setOptions": {
          "type": "function"
        },
        "getOption": {
          "type": "function"
        }
      }
    },
    "VelocityTestFiles": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    },
    "VelocityFixtureFiles": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    },
    "VelocityTestReports": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    },
    "VelocityAggregateReports": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    },
    "VelocityLogs": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    },
    "VelocityMirrors": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    },
    "VelocityOptions": {
      "type": "object",
      "members": {
        "before": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "after": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "hookOptions": {
          "type": "object",
          "members": {
            "before": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "upsert": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "after": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            },
            "all": {
              "type": "object",
              "members": {
                "insert": {
                  "type": "object"
                },
                "update": {
                  "type": "object"
                },
                "remove": {
                  "type": "object"
                },
                "find": {
                  "type": "object"
                },
                "findOne": {
                  "type": "object"
                },
                "all": {
                  "type": "object"
                }
              }
            }
          }
        },
        "direct": {
          "type": "object",
          "members": {
            "insert": {
              "type": "function"
            },
            "update": {
              "type": "function"
            },
            "remove": {
              "type": "function"
            },
            "upsert": {
              "type": "function"
            },
            "find": {
              "type": "function"
            },
            "findOne": {
              "type": "function"
            }
          }
        },
        "upsert": {
          "type": "function"
        },
        "constructor": {
          "type": "function",
          "refID": 65,
          "members": {
            "Cursor": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "rewind": {
                      "type": "function"
                    },
                    "forEach": {
                      "type": "function"
                    },
                    "getTransform": {
                      "type": "function"
                    },
                    "map": {
                      "type": "function"
                    },
                    "fetch": {
                      "type": "function"
                    },
                    "count": {
                      "type": "function"
                    },
                    "observe": {
                      "type": "function"
                    },
                    "observeChanges": {
                      "type": "function"
                    }
                  }
                }
              }
            },
            "ObjectID": {
              "type": "function",
              "members": {
                "prototype": {
                  "type": "object",
                  "members": {
                    "toString": {
                      "type": "function"
                    },
                    "equals": {
                      "type": "function"
                    },
                    "clone": {
                      "type": "function"
                    },
                    "typeName": {
                      "type": "function"
                    },
                    "getTimestamp": {
                      "type": "function"
                    },
                    "toHexString": {
                      "type": "function",
                      "refID": 96
                    },
                    "toJSONValue": {
                      "ref": 96
                    },
                    "valueOf": {
                      "ref": 96
                    }
                  }
                }
              }
            },
            "prototype": {
              "type": "object",
              "members": {
                "constructor": {
                  "ref": 65
                },
                "find": {
                  "type": "function",
                  "refID": 99
                },
                "findOne": {
                  "type": "function",
                  "refID": 101
                },
                "insert": {
                  "type": "function",
                  "refID": 103
                },
                "update": {
                  "type": "function",
                  "refID": 105
                },
                "remove": {
                  "type": "function",
                  "refID": 107
                },
                "upsert": {
                  "type": "function"
                },
                "rawCollection": {
                  "type": "function",
                  "refID": 111
                },
                "rawDatabase": {
                  "type": "function",
                  "refID": 113
                },
                "allow": {
                  "type": "function",
                  "refID": 115
                },
                "deny": {
                  "type": "function",
                  "refID": 117
                },
                "attachSchema": {
                  "type": "function",
                  "refID": 119
                },
                "simpleSchema": {
                  "type": "function",
                  "refID": 121
                },
                "permit": {
                  "type": "function",
                  "refID": 123
                }
              }
            }
          }
        },
        "find": {
          "ref": 99
        },
        "findOne": {
          "ref": 101
        },
        "insert": {
          "ref": 103
        },
        "update": {
          "ref": 105
        },
        "remove": {
          "ref": 107
        },
        "rawCollection": {
          "ref": 111
        },
        "rawDatabase": {
          "ref": 113
        },
        "allow": {
          "ref": 115
        },
        "deny": {
          "ref": 117
        },
        "attachSchema": {
          "ref": 119
        },
        "simpleSchema": {
          "ref": 121
        },
        "permit": {
          "ref": 123
        }
      }
    }
  },
  "velocity:shim": {},
  "velocity:meteor-stubs": {
    "MeteorStubs": {
      "type": "object",
      "members": {
        "install": {
          "type": "function"
        },
        "uninstall": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:karma": {
    "Karma": {
      "type": "object",
      "members": {
        "start": {
          "type": "function"
        },
        "setConfig": {
          "type": "function"
        }
      }
    },
    "KarmaInternals": {
      "type": "object",
      "members": {
        "karmaChilds": {
          "type": "object",
          "members": {
            "jasmine-client-unit": {
              "type": "object",
              "members": {
                "taskName": {
                  "type": "constant",
                  "value": "jasmine-client-unit"
                },
                "appPath": {
                  "type": "constant",
                  "value": "/Users/abalmace/workspace/personal/memoria/eframework"
                },
                "pid": {
                  "type": "constant",
                  "value": 95185
                },
                "getTaskName": {
                  "type": "function"
                },
                "getChild": {
                  "type": "function"
                },
                "getPid": {
                  "type": "function"
                },
                "isDead": {
                  "type": "function"
                },
                "isRunning": {
                  "type": "function"
                },
                "readPid": {
                  "type": "function"
                },
                "spawn": {
                  "type": "function"
                },
                "kill": {
                  "type": "function"
                }
              }
            }
          }
        },
        "getKarmaChild": {
          "type": "function"
        },
        "setKarmaChild": {
          "type": "function"
        },
        "startKarmaServer": {
          "type": "function"
        },
        "writeKarmaConfig": {
          "type": "function"
        },
        "generateKarmaConfig": {
          "type": "function"
        },
        "readKarmaConfig": {
          "type": "function"
        },
        "getConfigPath": {
          "type": "function"
        },
        "getKarmaPath": {
          "type": "function"
        }
      }
    }
  },
  "sanjo:jasmine": {
    "Jasmine": {
      "type": "object",
      "members": {
        "onTest": {
          "type": "function"
        },
        "setKarmaConfig": {
          "type": "function"
        }
      }
    }
  }
}
var globalContext = (typeof global !== 'undefined') ? global : window

for (var packageName in packageMetadata) {
  for (var packageExportName in packageMetadata[packageName]) {
    var packageExport = packageMetadata[packageName][packageExportName]
    globalContext[packageExportName] = ComponentMocker.generateFromMetadata(packageExport)
  }
}
