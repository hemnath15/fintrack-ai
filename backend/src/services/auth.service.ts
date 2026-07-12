import bcrypt from 'bcrypt';
import { AuthRepository } from '../repositories/auth.repository';
import { generateAccessToken } from '../utils/jwt';
import { RegisterUserDto } from '../models/dto/register-user.dto';
export class AuthService {

    private authRepository = new AuthRepository();

    async login(email: string, password: string) {

        const user = await this.authRepository.findByEmail(email);

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

 const accessToken = generateAccessToken({
  id: user.id,
  email: user.email,
  role: user.role
});

return {
  accessToken,
  user: {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
    isActive: user.is_active
  }
};
    }
 async register(user: RegisterUserDto) {

    // Check if email already exists
    const existingUser = await this.authRepository.findByEmail(user.email);

    if (existingUser) {
      throw new Error('Email already exists');
    }
    // Hash password
    const passwordHash = await bcrypt.hash(user.password, 10);
    // Save user
    const createdUser = await this.authRepository.createUser(
      user,
      passwordHash
    );

    return createdUser;

  }
}