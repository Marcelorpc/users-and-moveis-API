const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR,
    avatar VARCHAR NULL,
    created_at DATETIME DEFAULT (DATETIME('now', 'localtime')),
    updated_at DATETIME DEFAULT (DATETIME('now', 'localtime'))
  )
`
export default createUsers;