export interface UName {
  firstName: string;
  lastName: string;
}

export interface User extends UName {
  id: string;
  email: string;
  role: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials extends SignInCredentials, UName {}
