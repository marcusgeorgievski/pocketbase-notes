migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pzib7ib6349a2mo")

  collection.listRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pzib7ib6349a2mo")

  collection.listRule = ""

  return dao.saveCollection(collection)
})
