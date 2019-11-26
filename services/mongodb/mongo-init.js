db.auth('root', 'root')

db = db.getSiblingDB('test')

//use admin

db.createUser({
  user: 'mongodb',
  pwd: 'mongodb',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
