# dd-get-age
Get age based on date of birth

### Installation
```shell
$ npm install dd-get-age
```

### Use
```javascript
// CommonJS
const getAge = require('dd-get-age');

// ES6
import getAge from 'dd-get-age';
```

```
Valid formats
'DD.MM.YYYY', 'DD-MM-YYYY', 'DD/MM/YYYY'
'YYYY-MM-DD', 'YYYY-MM-DD', 'YYYY/MM/DD'
```

```javascript

// Valid dates and formats
getAge('06.06.1997'); // returns 23
getAge('06-06-1997'); // returns 23
getAge('06/06/1997'); // returns 23
getAge('1997.06.06'); // returns 23
getAge('1997-06-06'); // returns 23
getAge('1997/06/06'); // returns 23

// Invalid dates and formats or whatever
getAge('32-06-1997'); // returns null
getAge('1997-06-32'); // returns null
getAge(19970606); // returns null
getAge(06061997); // returns null
getAge('abc'); // returns null
getAge([]); // returns null
getAge({}); // returns null
getAge('<Anything else>') // returns null

```