migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eucm0ehh",
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
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg")

  // remove
  collection.schema.removeField("eucm0ehh")

  return dao.saveCollection(collection)
})
