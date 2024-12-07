import { Card, Text, Heading } from '@chakra-ui/react';

interface AuctionModel{
    id: number,
    sellerId: number,
    venichleId: number,
    timeStart: Date,
    timeEnd: Date,
    name: string,
    minDescription: string,
    startPrice: number,
    currentPrice: number,
    isSold: boolean,
    cityNow: string,
    mainPhotoURL: string,
    sellerUserName: string
  }

interface AuctionCardProps {
    auction: AuctionModel;
}

const AuctionCard: React.FC<AuctionCardProps> = ({ auction }) => {
    return (
        <Card.Root borderWidth={1} borderRadius="md" boxShadow="md" _hover={{ boxShadow: 'lg' }}>
            <Card.Header>
                <Text>{auction.mainPhotoURL}</Text>
            </Card.Header>
            <Card.Body>
                <Heading size="md" fontWeight="bold">{auction.name}</Heading>
                <Text fontSize="sm">{auction.minDescription}</Text>
                <Text fontSize="sm" color="gray.400">{auction.cityNow}</Text>
            </Card.Body>
        </Card.Root>
    );
};
      
      
export default AuctionCard;
