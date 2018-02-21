import Dexie from "dexie";

const db = new Dexie("samsung-notes-web");
db.version(1).stores({
    notes: "id,notes,category"
});

db.open()
    .catch(e => console.log(e))


export default db;
