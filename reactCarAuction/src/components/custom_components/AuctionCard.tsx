import { AuctionModel } from '@/models/AuctionModel';
import { Card, Text, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface AuctionCardProps {
    auction: AuctionModel;
}

const AuctionCard: React.FC<AuctionCardProps> = ({ auction }) => {
    return (
        <Link to={`details/${auction.id}`}>
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
        </Link>
    );
};
      
      
export default AuctionCard;
