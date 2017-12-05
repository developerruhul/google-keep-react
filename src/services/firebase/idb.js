import Dexie from "dexie";


const db = new Dexie("samsung-notes-web");
db.version(1).stores({
    category: "name,notesId",
    notes: "id,title,note,modified,filter"
});

db.open()
    .catch(e => console.log(e))
    .then(e => console.log("opened Successfully"))


export default db;