import { Button, Flex, Heading, HStack, Input, Spacer } from "@chakra-ui/react"

export default function NavBar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
        <Heading as="h1">Bids<span className="ampersant">&</span>Cars</Heading>
        <Button variant="ghost" color="gray.600">Auctions</Button>
        <Button borderRadius="full" colorPalette="green">Sell a car</Button>
        <Spacer />

        <HStack gap="5px">
            <Input placeholder="Search for cars"/>
            <Button colorPalette="green">Login</Button>
        </HStack>
    </Flex>
  )
}
