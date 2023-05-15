migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0me6qev9dwv96ps")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxqx4e5g",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0me6qev9dwv96ps")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxqx4e5g",
    "name": "conent",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
