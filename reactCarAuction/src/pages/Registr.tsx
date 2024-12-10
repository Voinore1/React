import { Button } from "@/components/ui/button";
import { InputGroup } from "@/components/ui/input-group";
import { toaster } from "@/components/ui/toaster";
import { useAccountContext } from "@/contexts/account.context";
import { accountService } from "@/sevices/accounts.service";
import { Box, Fieldset, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { KeyRound, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";

const api = import.meta.env.VITE_ACCOUNT_API_URL;

export default function Registr() {

    const { setEmail } = useAccountContext();
    const [Email, setMail] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        axios.post(api + "/register", { Username, Password, Email, PhoneNumber }).then(res => {
            if(res.status === 200 || res.status === 500){
                axios.post(api + "/login", { Username, Password }).then(response => {
                    if(response.status === 200){
                        
                        const payload = JSON.parse(atob(response.data.accessToken.split('.')[1]));
                        setEmail(payload.Email);
        
                        accountService.login(payload.data.accessToken);
                        toaster.create({
                            description: "Registered seccssfully!",
                            type: "success"
                        })
        
                        navigate(-2);
                    }
                });
            }
        }).catch(err => {
            if(err.response.status !== 500){
                toaster.create({
                    description: err.response.data.message,
                    type: "error"
                })
            }
        });

    }


    return (
        <Form onSubmit={handleSubmit}>
            <Fieldset.Root m="0 auto" pt="10px" size="lg" maxW="md" marginTop="10px">
                <Stack alignSelf="center">
                    <Fieldset.Legend>Register</Fieldset.Legend>
                </Stack>

                <Fieldset.Content p="10px">

                    <InputGroup startElement={<User />}>
                        <Input name="username" type="text" value={Username}
                            onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
                    </InputGroup>

                    <InputGroup startElement={<Mail />}>
                        <Input paddingLeft="10px" name="email addres" type="text" value={Email}
                            onChange={(e) => setMail(e.target.value)} placeholder="Enter email addres" />
                    </InputGroup>

                    <InputGroup startElement={<KeyRound />}>
                        <Input name="password" type="password" value={Password}
                            onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                    </InputGroup>


                    <InputGroup startElement={<Phone />}>
                        <Input name="phone number" type="text" value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter phone number" />
                    </InputGroup>

                </Fieldset.Content>

                <Box alignSelf="center">
                    <Link to="/login">
                        <Text color="green">Already have account?</Text>
                    </Link>
                </Box>

                <Button colorPalette="green" type="submit" alignSelf="center">
                    Register
                </Button>

            </Fieldset.Root>
        </Form>
    )
}
