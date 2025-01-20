import { RawProduct } from '../types/RawProduct';
import { ErrorType } from '../types/ErrorType';

export const formatProduct = <Type>(product: RawProduct): Type => {
  const {
    itemId,
    price,
    fullPrice,
    priceRegular,
    priceDiscount,
    image,
    images,
  } = product;

  return {
    ...product,
    id: itemId || product.id,
    priceRegular: fullPrice || priceRegular,
    priceDiscount: price || priceDiscount,
    image: image || (images && images[0]),
    specifications: {
      screen: product.screen || ErrorType.NO_INFO,
      capacity: product.capacity || ErrorType.NO_INFO,
      ram: product.ram || ErrorType.NO_INFO,
      processor: product.processor || ErrorType.NO_INFO,
      resolution: product.resolution || ErrorType.NO_INFO,
      camera: product.camera || ErrorType.NO_INFO,
      zoom: product.zoom || ErrorType.NO_INFO,
      cell: product.cell || ErrorType.NO_INFO,
    },
  } as Type;
};
