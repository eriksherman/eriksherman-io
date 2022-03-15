export interface ShowerCategory {
    Id: string
    Name: string
    ProductLine: string
    Icon: string
    Description: string // ?
    children: string[] // all ids
}

export interface ShowerTemplate {
    Id: string
    Sku: string
    Name: string
    Description: string
    ImageMeasurement: string
    PriceEstimate?: number // diy only
    PromoAllowed?: boolean // fs only
    Options: ShowerOption[]
    Measurements: {
        [key: string]: ShowerMeasurementValue
    }
    parent: string // id
    ProductLine: string // comes from the parent
}

export interface ShowerOption {
    Id: string
    ImageLarge: string
    Value: string
    Type: string
    Name: string
    Ranking: string
}

export interface ShowerMeasurementValue {
    min: number
    max: number
    default: string
}
