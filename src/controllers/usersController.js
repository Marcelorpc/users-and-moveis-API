import AppError from "../utils/appError.js";

class UsersController {
  create(request, response) {
    const { name } = request.body;

    if (!name) {
      throw new AppError("The 'name' is required!");
    }

    response.status(201).json({
      name
    });
  }
}

export default UsersController;