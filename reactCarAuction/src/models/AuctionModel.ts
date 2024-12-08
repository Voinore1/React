export interface AuctionModel{
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