import { PasswordInput } from "@/shared/components/PasswodInput/PasswordInput";
import { TextInput } from "@/shared/components/TextInput/TextInput";
import { Container } from "@/shared/layout/container/Container";
import { Alert, Button, Form } from "antd";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [error] = useState<string | null>(null);
  const [initialState, setInitialState] = useState<any>({});

  useEffect(() => {
    form.setFieldsValue({ ...initialState });
  }, [initialState]);

  const handleChange = (e: any) => {
    setInitialState((prev: any) => ({ ...prev, ...e }));
    // form.setFieldsValue({ [Object.keys(e)[0]]: Object.values(e)[0] });
  };

  const handleSubmitForm = () => {
    console.log(initialState);
    navigate("/learn-space");
  };

  return (
    <Container>
      <div className="w-full h-[100vh]  flex justify-center items-center">
        <div className="border  flex flex-col items-center border-slate-100 rounded-[8px] py-[30px] px-[40px]">
          <p className="my-[30px] font-semibold text-xl"> Se connecter</p>

          {error ? <Alert message={error} type="error" /> : ""}

          <Form className="" form={form} onFinish={handleSubmitForm}>
            <TextInput
              label="Email"
              required
              name="username"
              // errorMessage="zaza"
              value={initialState["username"]}
              onChange={handleChange}
            />
            <PasswordInput
              label="Mot de passe"
              name="password"
              required
              value={initialState["password"]}
              onChange={handleChange}
            />
            <div className="login__form-forget-password">
              <Link to="#" className="text-blue-500">
                Mot de passe oublié ?
              </Link>
            </div>
            <div className="w-full py-[20px]">
              {/* <Link path="/">S'inscrire ?</Link> */}
              <p></p>
              <Button
                onClick={handleSubmitForm}
                type="primary"
                className="w-full bg-blue-500"
              >
                {"Se connecter"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};
