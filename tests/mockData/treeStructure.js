module.exports = [
  {
    id: 1,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [
          {
            id: 3,
            parentId: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    parentId: 'any',
  },
]
