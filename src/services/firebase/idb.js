import Dexie from "dexie";


const db = new Dexie("samsung-notes-web");
db.version(1).stores({
    category: "id,category",
    notes: "id,notes"
});

db.open()
    .catch(e => console.log(e))


export default db;
