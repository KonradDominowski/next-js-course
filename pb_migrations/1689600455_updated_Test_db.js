migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg")

  // remove
  collection.schema.removeField("neq0whsa")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "neq0whsa",
    "name": "field1",
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
