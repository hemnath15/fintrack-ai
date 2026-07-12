import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export class AuthController {

  async login(req: Request, res: Response) {
    try {

      const { email, password } = req.body;

      const user = await authService.login(email, password);

      return res.status(200).json({
        success: true,
        message: 'Login successful',
        data: user
      });

    } catch (error) {

      return res.status(401).json({
        success: false,
        message: error instanceof Error ? error.message : 'Login failed'
      });

    }
  }
async profile(req: Request, res: Response) {
    return res.status(200).json({
        success: true,
        data: (req as any).user
    });
}
 async register(req: Request, res: Response) {

    try {

      const user = await authService.register(req.body);

      return res.status(201).json({
        success: true,
        message: "Registration successful",
        data: user
      });

    } catch (error: any) {

      if (error.message === "Email already exists") {

        return res.status(409).json({
          success: false,
          message: error.message
        });

      }

      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Registration failed"
      });

    }

  }
}