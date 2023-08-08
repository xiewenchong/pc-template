const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  userId: state => state.user.userId,
  userLevel: state => state.user.userLevel,
  name: state => state.user.name,
  roles: state => state.user.roles,
  
  sessions: state => state.chat.sessions,
  currentSession: state => state.chat.currentSession,
  // permission_routes: state => state.permission.routes
}
export default getters
