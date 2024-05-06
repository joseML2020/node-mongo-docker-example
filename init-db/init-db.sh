#!/bin/bash

echo "Creating database 'crud' and user 'user2'..."

# Conectarse a la instancia de MongoDB y ejecutar comandos para crear la base de datos y el usuario
mongosh  --port= 27017  <<EOF
use crud
db.createUser({
  user: "user2",
  pwd: "user",
  roles: [{ role: "readWrite", db: "crud" }]
})
use crud
db.createCollection("students")
EOF

echo "Database 'crud' and user 'user2' created successfully."