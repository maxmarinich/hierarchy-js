### HierarchyJS

Elegant and lightweight library for working with data structures

#### _Features_

* Creating a tree structure from a flat list
* Creating a flat list from a tree structure
* Flexible parametrization

### _Install_

```apacheconfig
npm install hierarchy-js
```

### _Methods_
* `createTreeHierarchy (elements, options)`
* `createFlatHierarchy (elements, options)`

 - elements, `[]` - the array on which the passage is carried out.
 - options, `{}` - props for parametrization

### _Default options_
```javascript
    {
      id: 'id', // find item by this key
      parentId: 'parentId', // find parent by this key
      children: 'children', // create or find children by this key
      excludeParent: false, // if `true`, not include root parents to result
      saveExtractedChildren: false, // if `true`, not delete children list from descendants
    }
```

### _How to use_
##### _Tree structure with default options_
```javascript
    import { createTreeHierarchy } from 'hierarchy-js'

    const flatList = [
       { id: 1 },
       { id: 2, parentId: 1 },
       { id: 3, parentId: 2 },
       { id: 4, parentId: 'any' },
    ]

    const tree = createTreeHierarchy(flatList)

    // tree
    [
      {
        "id": 1,
        "children": [
          {
            "id": 2,
            "parentId": 1,
            "children": [
              {
                "id": 3,
                "parentId": 2
              }
            ]
          }
        ]
      },
      {
        "id": 4,
        "parentId": "any"
      }
    ]
```

#### _Flat list with options_
```javascript
    import { createFlatHierarchy } from 'hierarchy-js'

    const options = {
      id: 'itemId',
      parentId: 'parentItemId',
      children: 'items',
    }

    const tree = [
      {
        itemId: 1,
        items: [
          {
            itemId: 2,
            parentItemId: 1,
            items: [
              {
                itemId: 3,
                parentItemId: 2,
              },
            ],
          },
        ],
      },
      {
        itemId: 4,
        parentItemId: 'any',
      },
    ]

    const faltList = createFlatHierarchy(tree, options)

    // faltList
    [
      { itemId: 1 },
      { itemId: 2, parentItemId: 1 },
      { itemId: 3, parentItemId: 2 },
      { itemId: 4, parentItemId: 'any' },
    ]
```

#### Tests
```apacheconfig
npm test
```
