import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Belirance } from '../../components/Belirance'
import {
  Card,
  FormGroups,
  HomeContainer,
  SignInButton,
  SignInForm,
} from './styles'
import { useAuth } from './hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type LoginFormInputs = z.infer<typeof loginFormSchema>

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  })
  const { signIn, user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/dashboard'

  if (user) navigate(from)

  const handleLogin = async (data: LoginFormInputs) => {
    const response = await signIn(data)

    if (response) {
      reset()
      navigate(from)
    }
  }

  return (
    <HomeContainer>
      <Card>
        <Belirance />
        <SignInForm onSubmit={handleSubmit(handleLogin)}>
          <FormGroups>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required {...register('email')} />
          </FormGroups>

          <FormGroups>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              required
              {...register('password')}
            />
          </FormGroups>
          <SignInButton type="submit" disabled={isSubmitting}>
            Entrar
          </SignInButton>
        </SignInForm>
      </Card>
    </HomeContainer>
  )
}
