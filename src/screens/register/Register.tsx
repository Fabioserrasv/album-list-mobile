import { useCallback } from "react"
import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { AppStackParamList, ROUTE } from '@/config/route';
import { useAuth } from '@/hooks/contexts/useAuth';

import { Page } from '@/components/page/Page';
import { Card } from '@/components/card/Card';
import { Input } from '@/components/form/input/Input';
import { InputGroup } from '@/components/form/input-group/InputGroup';
import { Button } from '@/components/button/Button';


type RouteName = typeof ROUTE.APP.SIGN_UP;
type LoginProps = NativeStackScreenProps<AppStackParamList, RouteName>

const validationFormSignup = z
  .object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type FormLoginData = z.infer<typeof validationFormSignup>;

export default function Register({ navigation }: LoginProps) {
  const { signup } = useAuth();

  const { control, handleSubmit, formState } = useForm<FormLoginData>({
    resolver: zodResolver(validationFormSignup),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const { errors } = formState;

  const goToLogin = () => navigation.push(ROUTE.APP.LOGIN);

  const handleSubmitFormSignup: SubmitHandler<FormLoginData> = useCallback(async (data) => {
    try {
      await signup(
        data.username,
        data.email,
        data.password,
        data.confirmPassword
      );
      goToLogin()
    } catch(e: any) {
      console.log(e)
    }
    
  }, [goToLogin])

  return (
    <Page>
      <Card title="Sign Up" height={300}>
        <InputGroup label='Username' error={errors.username?.message}>
          <Input name="username" control={control} />
        </InputGroup>

        <InputGroup label='E-mail' error={errors.email?.message}>
          <Input name="email" control={control} />
        </InputGroup>

        <InputGroup label='Senha' error={errors.password?.message}>
          <Input name="password" control={control} />
        </InputGroup>

        <InputGroup label='Repita a senha' error={errors.confirmPassword?.message}>
          <Input name="confirmPassword" control={control} />
        </InputGroup>

        <Button onClick={handleSubmit(handleSubmitFormSignup)} >
          Login
        </Button>
      </Card>
    </Page>
  );
}
