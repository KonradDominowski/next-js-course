migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg")

  collection.name = "notes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg")

  collection.name = "Test_db"

  return dao.saveCollection(collection)
})
