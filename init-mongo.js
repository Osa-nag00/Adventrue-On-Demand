// this causes an error, will figure out later, for now use root user in admin db
/*db.createUser({
    user: 'root',
    pwd: 'root',
    roles: [ { role: "userAdminAnyDatabase", db: "testDB" } ]
});
*/


db = new Mongo().getDB("testDB");

db.createCollection('users', { capped: false });
db.createCollection('characters', { capped: false });

db.test.insert([
    { "name": "Mario",
      "description" : "loveable italian with a goal to save the princess"
 },
]);
console.log("Init file successfuly ran")