import AuctionCard from "@/components/custom_components/AuctionCard";
import { AuctionModel } from "@/models/AuctionModel";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const api = import.meta.env.VITE_API_URL;




const AuctionCardGrid: React.FC = () => {

  const [auctions, setAuctions] = useState<AuctionModel[]>([]);

  useEffect(() => {
    fetch(api + "/Auction").then(res => res.json()).then(data => {
      setAuctions(data);
    }).catch(error => {console.error("Error fetching", error)})
  }, []);

  return(
    <SimpleGrid p="10px" minChildWidth="200px" gap="10px">
      {auctions.map((auction) => <AuctionCard key={auction.id} auction={auction}/>)}
    </SimpleGrid>
  );
}

export default AuctionCardGrid;
