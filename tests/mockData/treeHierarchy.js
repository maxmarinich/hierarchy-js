module.exports = [
  {
    id: 1,
    children: [
      {
        id: 5,
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
  },
  {
    id: 3,
    children: [
      {
        id: 1,
      },
      {
        id: 7,
        parentId: 3,
      },
    ],
  },
  {
    id: 4,
    children: [
      {
        id: 8,
        parentId: 4,
        children: [
          {
            id: 9,
            parentId: 8,
            children: [
              {
                id: 10,
                parentId: 9,
                children: [
                  {
                    id: 5,
                  },
                  {
                    id: 11,
                    parentId: 10,
                    children: [
                      {
                        id: 1,
                      },
                    ],
                  },
                  {
                    id: 12,
                    parentId: 10,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    parentId: 111,
  },
]
