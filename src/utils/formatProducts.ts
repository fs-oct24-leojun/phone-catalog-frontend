import { RawProduct } from "../types/rawProduct";
import { ErrorType } from "../types/ErrorType";

export const formatProduct = <Type>(product: RawProduct): Type => {
  const { price, fullPrice, priceRegular, priceDiscount } = product;

  return {
    ...product,
    priceRegular: fullPrice || priceRegular,
    priceDiscount: price || priceDiscount,
    specifications: {
      screen: product.screen || ErrorType.NO_INFO,
      capacity: product.capacity || ErrorType.NO_INFO,
      ram: product.ram || ErrorType.NO_INFO,
      processor: product.processor || ErrorType.NO_INFO,
      resolution: product.resolution || ErrorType.NO_INFO,
      camera: product.camera || ErrorType.NO_INFO,
      zoom: product.zoom || ErrorType.NO_INFO,
      cell: product.cell || ErrorType.NO_INFO,
    }
  } as Type;
};