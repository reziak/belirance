import { useAuth } from '../auth/hooks/useAuth'

export const Dashboard = () => {
  const { signOut, user } = useAuth()

  return (
    <>
      <h1>Dashboard</h1>
      <p>Bem vindo, {user}</p>
      <button onClick={signOut}>Logout</button>
    </>
  )
}
