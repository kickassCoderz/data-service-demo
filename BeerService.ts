import {
    IDataService,
    TBaseResponse,
    TCreateManyParameters,
    TCreateOneParameters,
    TDeleteManyParameters,
    TDeleteOneParameters,
    TGetListParameters,
    TGetListResponse,
    TGetManyParameters,
    TGetOneParameters,
    TQueryContext,
    TUpdateManyParameters,
    TUpdateOneParameters
} from '@kickass-coderz/data-service'

class BeerService implements IDataService {
    async getOne<T extends TBaseResponse>(
        resource: string,
        parameters: TGetOneParameters,
        context?: TQueryContext | undefined
    ): Promise<T> {
        const response = await fetch(`https://api.punkapi.com/v2/${resource}/${parameters.id}`, {
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            }
        })
        const result = await response.json()

        return result[0]
    }

    async getList<T extends TBaseResponse>(
        resource: string,
        parameters?: TGetListParameters | undefined,
        context?: TQueryContext | undefined
    ): Promise<TGetListResponse<T[]>> {
        const response = await fetch(`https://api.punkapi.com/v2/${resource}`, {
            headers: {
                'content-type': 'application/json',
                accept: 'application/json'
            }
        })
        const result = await response.json()

        return {
            data: result,
            total: result.length
        }
    }

    getMany<T extends TBaseResponse>(
        resource: string,
        parameters: TGetManyParameters,
        context?: TQueryContext | undefined
    ): Promise<T[]> {
        throw new Error('Method not implemented.')
    }

    createOne<T extends TBaseResponse>(resource: string, parameters: TCreateOneParameters): Promise<T> {
        throw new Error('Method not implemented.')
    }
    createMany<T extends TBaseResponse>(resource: string, parameters: TCreateManyParameters): Promise<T[]> {
        throw new Error('Method not implemented.')
    }
    updateOne<T extends TBaseResponse>(resource: string, parameters: TUpdateOneParameters): Promise<T> {
        throw new Error('Method not implemented.')
    }
    updateMany<T extends TBaseResponse>(resource: string, parameters: TUpdateManyParameters): Promise<T[]> {
        throw new Error('Method not implemented.')
    }
    deleteOne<T extends Partial<TBaseResponse>>(resource: string, parameters: TDeleteOneParameters): Promise<T> {
        throw new Error('Method not implemented.')
    }
    deleteMany<T extends Partial<TBaseResponse>>(resource: string, parameters: TDeleteManyParameters): Promise<T[]> {
        throw new Error('Method not implemented.')
    }
}

const beerService = new BeerService()

export { beerService }
