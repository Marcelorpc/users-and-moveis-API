import AppError from "../utils/appError.js";
import sqliteConnection from "../database/sqlite/index.js";
import bcrypt from "bcrypt";

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    if (!name || !email || !password) {
      throw new AppError("The properties 'name', 'email' and 'password' are required!");
    }

    const emailAlreadyExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailAlreadyExists) {
      throw new AppError("Email already exists in our database");
    } else if (!emailRegex.test(email)) {
      throw new AppError("Email format is invalid!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await database.run(`
      INSERT INTO users (name, email, password)
      VALUES (?, ?, ?)
      `, [name, email, hashedPassword]);

    response.status(201).json();
  }
}

export default UsersController;