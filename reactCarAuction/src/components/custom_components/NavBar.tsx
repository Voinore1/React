import { accountService } from "@/sevices/accounts.service"
import { Button, Flex, Heading, HStack, Input, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { toaster } from "../ui/toaster";
import { useAccountContext } from "@/contexts/account.context";
import axios from "axios";

const api = import.meta.env.VITE_ACCOUNT_API_URL;

export default function NavBar() {

    const logout = () => {
        axios.post(api + "/logout");
        accountService.logout();
        clear();
        toaster.create({
            description: "Logged out successfully!",
            type: "success"
        })
    }

    const {isAuth, clear} = useAccountContext();

  return (
    <Flex as="nav" p="10px" alignItems="center" borderColor="gray.300" borderWidth="2px" rounded="md" borderTopWidth="0">
        <Link to="/">
            <Heading as="h1">Bids<span className="ampersant">&</span>Cars</Heading>
        </Link>
        <Link to="/">
            <Button variant="ghost" color="gray.600">Auctions</Button>
        </Link>
        <Button borderRadius="full" colorPalette="green">Sell a car</Button>
        <Spacer />

        <HStack gap="5px">
            <Input placeholder="Search for cars"/>
            {
                isAuth()
                ?
                <Link to="/">
                    <Button variant="outline" onClick={logout} colorPalette="green">Logout</Button>
                </Link>
                :
                <Link to="/login">
                    <Button colorPalette="green">Login</Button>
                </Link>
            }
        </HStack>
    </Flex>
  )
}
