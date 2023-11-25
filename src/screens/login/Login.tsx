import { useCallback } from "react"

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

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
import { Link } from "@/components/link/Link";


type RouteName = typeof ROUTE.APP.LOGIN;
type LoginProps = NativeStackScreenProps<AppStackParamList, RouteName>

const validationFormLogin = z
  .object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
  })

type FormLoginData = z.infer<typeof validationFormLogin>;

export default function Login({ navigation }: LoginProps) {
  const { login } = useAuth();

  const { control, handleSubmit, formState } = useForm<FormLoginData>({
    resolver: zodResolver(validationFormLogin),
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const { errors } = formState;

  const handleSubmitFormLogin: SubmitHandler<FormLoginData> = useCallback(async (data) => {
    try {
      await login(
        data.email,
        data.password
      );
    } catch (e: any) {
      console.log(e)
    }
  }, [])

  return (
    <Page contentCenter>
      <Card title="Login" height={280}>
        <InputGroup label='E-mail' error={errors.email?.message}>
          <Input name="email" control={control} />
        </InputGroup>

        <InputGroup label='Senha' error={errors.password?.message}>
          <Input name="password" type="password" control={control} />
        </InputGroup>

        <Link to={ROUTE.APP.SIGN_UP} params={undefined}>
          Register
        </Link>

        <Button onClick={handleSubmit(handleSubmitFormLogin)} >
          Login
        </Button>
      </Card>
    </Page>
  );
}
