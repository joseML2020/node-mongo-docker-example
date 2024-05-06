// Create user
dbAdmin = db.getSiblingDB("admin");
db.createUser({
    user: "user2",
    pwd: "user",
    roles: [{ role: "readWrite", db: "crud" }]
  });

// Create DB and collection  
db = new Mongo().getDB("crud");
  