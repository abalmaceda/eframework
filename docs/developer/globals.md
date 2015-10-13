# Variables
## Globals
_core/common/packageGlobals.js:_

```javascript
// exported, global/window scope
EFrameworkCore = {};
EFrameworkCore.Schemas = {}; // Schemas defined in common/schemas
EFrameworkCore.Collections = {}; //Collections defined in common/collections
EFrameworkCore.Helpers = {}; //Misc.helpers defined in common/helpers
EFrameworkCore.MetaData = {}; // SEO, Metadata object
EFrameworkCore.Locale = {}; //i18n translation object
EFrameworkCore.Log = {}; // Logger instantiation (server)
```

_core/common/collections/products.js:_

```javascript
EFrameworkCore.Collections.Product = new Mongo.Collection("Product");
# etc...
```

The `reaction-core` package exports `EFrameworkCore`, on both client and server:

```javascript
api.export(["EFrameworkCore"]);
```
