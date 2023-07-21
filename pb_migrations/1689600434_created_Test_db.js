migrate((db) => {
  const collection = new Collection({
    "id": "3pxznhg3n5yaeyg",
    "created": "2023-07-17 13:27:14.891Z",
    "updated": "2023-07-17 13:27:14.891Z",
    "name": "Test_db",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5npscurz",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3pxznhg3n5yaeyg");

  return dao.deleteCollection(collection);
})
