import { ProductIds } from '../../utils/enums'

enum Currency {
  EUR = 'EUR',
  GBP = 'GBP',
}

interface ConfigurationData {
  age: number
}

export interface PriceConfig {
  productId: ProductIds
  configurationData: ConfigurationData
}

export interface Price {
  monthlyPremium: number
  currency: keyof typeof Currency
}

export const getPrice = (priceConfig: PriceConfig): Price => {
  switch (priceConfig.productId) {
    case ProductIds.devIns: {
      return {
        monthlyPremium: priceConfig.configurationData.age * 2,
        currency: 'EUR',
      }
    }
    default: {
      throw new Error(`${priceConfig.productId} is not yet supported`)
    }
  }
}
