class UsersController {
  create(request, response) {
    const { name } = request.body;

    response.status(201).json({
      name
    });
  }
}

export default UsersController;