export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  onlineCount: number;
  unreadCount: number;
  lastMessage: string;
  lastMessageAt: Date;
}
