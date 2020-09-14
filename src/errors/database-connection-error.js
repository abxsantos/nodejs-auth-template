import CustomError from './custom-error';

class DatabaseConnectionError extends CustomError {
  constructor() {
    super('Error connecting to db');
    this.statucCode = 500;
    this.reason = 'Error connecting to database';
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}

export default DatabaseConnectionError;
