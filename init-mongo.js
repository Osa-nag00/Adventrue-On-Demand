// this causes an error, will figure out later, for now use root user in admin db

/* db.createUser({
    user: 'root',
    pwd: 'root',
    roles: [ { role: "userAdminAnyDatabase" , db: "admin"} ]
}); */


db = new Mongo().getDB("testDB");

db.createCollection('users', { capped: false });
db.createCollection('stories', { capped: false });

db.users.insert(
    { 
        "username": "Mario",
        "password" : "saveprincess"
    },
);

db.stories.insert(
    {
        "name" : "One question", 
        "username": "Mario",
        "convo" : 
            {
                "Hey!":"user" , "Hello, Mario":"openai" , "How do I save the princess!": "user",  "Jumping on Goombas." : "openai", "Great, thanks!" : "user"
            },
        "convoold" : 
            [
                "Hey!", "Hello, Mario", "How do I save the princess!", "Jumping on Goombas.", "Great, thanks!"
            ],
        "who": 
            [
                "U","A","U","A","U"
            ]
    },
);


console.log("Init file successfuly ran")