import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useNavigate, Form } from "react-router-dom";
import { toaster } from "@/components/ui/toaster"
import axios from "axios";
import { accountService } from "@/sevices/accounts.service";
import { useState } from "react";
import { useAccountContext } from "@/contexts/account.context";

const api = import.meta.env.VITE_ACCOUNT_API_URL;

const Login: React.FC = () => {

    const {setEmail} = useAccountContext();
    const [Username, setMail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        axios.post(api + "/login", {Username, Password}).then(res => {
            if(res.status === 200){
                console.log("logined");
                accountService.login(res.data.token);
                toaster.create({
                    description: "Signed in seccssfully!",
                    type: "success"
                })

                setEmail(Username);

                navigate(-1);
            }
        }).catch(err => {
            toaster.create({
                description: err.response.data.message,
                type: "error"
            })
        });
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Fieldset.Root m="0 auto" pt="10px" size="lg" maxW="md" marginTop="10px">
        <Stack alignSelf="center">
            <Fieldset.Legend>Login</Fieldset.Legend>
        </Stack>

        <Fieldset.Content p="10px">
            <Field label="Email addres">
            <Input name="username" type="text" value={Username} 
            onChange={(e) => setMail(e.target.value)} placeholder="Enter username"/>
            </Field>

            <Field label="Password">
            <Input name="password" type="password" value={Password} 
            onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
            </Field>

        </Fieldset.Content>

        <Button colorPalette="green" type="submit" alignSelf="center">
            Login
        </Button>

        </Fieldset.Root>
    </Form>
  )
}

export default Login;