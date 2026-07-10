import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';

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

        return user;
    }

}