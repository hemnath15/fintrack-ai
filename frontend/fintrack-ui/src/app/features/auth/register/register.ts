import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [  
  ReactiveFormsModule,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);

  private authService = inject(AuthService);

  private router = inject(Router);
hidePassword = true;
hideConfirmPassword = true;
  isLoading = false;

   registerForm = this.fb.group({

    first_name: ['', Validators.required],

    last_name: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    password: ['', [Validators.required, Validators.minLength(8)]],

    confirmPassword: ['', Validators.required]

  });

  passwordsMatch(): boolean {

  return this.registerForm.value.password ===
         this.registerForm.value.confirmPassword;

}
register() {

  if (this.registerForm.invalid) {

    this.registerForm.markAllAsTouched();

    return;

  }

  if (!this.passwordsMatch()) {

    alert('Passwords do not match');

    return;

  }

  this.isLoading = true;

  const {

    confirmPassword,

    ...payload

  } = this.registerForm.getRawValue();

  this.authService.register(payload as any).subscribe({

    next: (response) => {

      this.isLoading = false;

      alert(response.message);

      this.router.navigate(['/login']);

    },

    error: (error) => {

      this.isLoading = false;

      alert(error.error.message);

    }

  });

}
}
