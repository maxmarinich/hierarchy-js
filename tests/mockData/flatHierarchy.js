module.exports = [
  {
    id: 1,
  },
  {
    id: 2,
    children: {},
  },
  {
    id: 3,
    children: [{ id: 123 }],
  },
  {
    id: 4,
    children: {},
  },
  {
    id: 5,
    parentId: 1,
  },
  {
    id: 6,
    parentId: 111,
    children: null,
  },
  {
    id: 7,
    parentId: 3,
  },
  {
    id: 8,
    parentId: 4,
  },
  {
    id: 9,
    parentId: 8,
  },
  {
    id: 10,
    parentId: 9,
    children: [{ id: 5 }],
  },
  {
    id: 11,
    parentId: 10,
    children: [{ id: 124 }],
  },
  {
    id: 12,
    parentId: 10,
  },
]
