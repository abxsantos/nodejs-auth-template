class SignOutController {
  static async signOutUser(req, res) {
    req.session = null;

    res.send({});
  }
}

export default SignOutController;
