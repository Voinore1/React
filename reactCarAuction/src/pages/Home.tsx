import AuctionCard from "@/components/custom_components/AuctionCard";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";


const api = "https://localhost:7135/api"

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
