import { Box, Button, Fieldset, Input, Stack, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { useNavigate, Form, Link } from "react-router-dom";
import { toaster } from "@/components/ui/toaster"
import axios from "axios";
import { accountService } from "@/sevices/accounts.service";
import { useState } from "react";
import { useAccountContext } from "@/contexts/account.context";
import { InputGroup } from "@/components/ui/input-group";
import { KeyRound, User } from "lucide-react";

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
                
                const payload = JSON.parse(atob(res.data.accessToken.split('.')[1]));
                setEmail(payload.Email);

                accountService.login(payload.Email);
                toaster.create({
                    description: "Signed in seccssfully!",
                    type: "success"
                })

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
            <InputGroup startElement={<User/>}>
                <Input name="username" type="text" value={Username} 
                onChange={(e) => setMail(e.target.value)} placeholder="Enter username"/>
            </InputGroup>

            <InputGroup startElement={<KeyRound/>}>
                <Input name="password" type="password" value={Password} 
                onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
            </InputGroup>
        </Fieldset.Content>

        <Box m="7px" alignSelf="center">
            <Link to="/register">
                <Text color="green.600">Don't have account?</Text>
            </Link>
        </Box>

        <Button colorPalette="green" type="submit" alignSelf="center">
            Login
        </Button>

        </Fieldset.Root>
    </Form>
  )
}

export default Login;