### HierarchyJS

###### _Elegant and lightweight library for working with data structures_

#### _Features_

* Creating a tree structure from a flat list
* Creating a flat list from a tree structure
* Flexible parametrization

### _Install_

```apacheconfig
npm install hierarchy-js
```

### _Methods_
* `createTreeHierarchy (array, options)`
* `createFlatHierarchy (array, options)`


### _How to use_

```javascript
    const { createTreeHierarchy } = require('hierarchy-js')
    const flatList = [
       { id: 1 },
       { id: 2, parentId: 1 },
       { id: 3, parentId: 2 },
       { id: 4, parentId: 'any' },
    ]

    const tree = createTreeHierarchy(flatList)

    /* result
        [
            {
                id: 1,
                children: [
                    {
                        id: 2,
                        parentId: 1,
                        children: [
                            {
                                id: 3,
                                parentId: 2
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                parentId: 'any'
            }
        ]
    */

```

#### Tests
```apacheconfig
npm test
```
