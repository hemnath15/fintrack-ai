import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';
import { generateAccessToken } from '../utils/jwt';
export class AuthService {

    private userRepository = new UserRepository();

    async login(email: string, password: string) {

        const user = await this.userRepository.findByEmail(email);

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

}