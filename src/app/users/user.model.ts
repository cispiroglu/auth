export class User {
  Id: number;
  Email: string;
  EmailConfirmed: boolean;
  PasswordHash: string;
  Salt: string;
  SecurityStamp: string;
  PhoneNumber: string;
  PhoneNumberConfirmed: boolean;
  TwoFactorEnabled: boolean;
  LockoutEndData: Date;
  LockoutEnabled: boolean;
  AccessFailedCount: number;
  UserName: string;
}

export class NewUser {
  userName: string;
  password: string;
  confirmPassword: string;
}

