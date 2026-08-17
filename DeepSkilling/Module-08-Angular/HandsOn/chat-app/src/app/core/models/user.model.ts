export type UserStatus = 'online' | 'offline' | 'away' | 'busy' | 'typing';

export interface AppUser {
  id: string;
  name: string;
  avatar: string;
  status: UserStatus;
  lastSeen: Date;
  role: 'member' | 'admin';
}
