import { pool } from '../config/database';
import { RegisterUserDto } from '../models/dto/register-user.dto';

export class AuthRepository {

    async findByEmail(email: string) {

        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );

        return result.rows[0];
    }
async createUser(user: RegisterUserDto, passwordHash: string) {

    const result = await pool.query(
      `
      INSERT INTO users
      (
        first_name,
        last_name,
        email,
        password_hash,
        role,
        is_active
      )
      VALUES
      (
        $1,
        $2,
        $3,
        $4,
        'USER',
        true
      )
      RETURNING
      id,
      first_name,
      last_name,
      email,
      role,
      is_active,
      created_at
      `,
      [
        user.first_name,
        user.last_name,
        user.email,
        passwordHash
      ]
    );

    return result.rows[0];

  }
}