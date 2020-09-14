class CurrentUserController {
  static getCurrentUser(req, res) {
    return res.send({ currentUser: req.currentUser || null });
  }
}

export default CurrentUserController;
