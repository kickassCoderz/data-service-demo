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
    getOne<T extends TBaseResponse>(
        resource: string,
        parameters: TGetOneParameters,
        context?: TQueryContext | undefined
    ): Promise<T> {
        throw new Error('Method not implemented.')
    }
    getList<T extends TBaseResponse>(
        resource: string,
        parameters?: TGetListParameters | undefined,
        context?: TQueryContext | undefined
    ): Promise<TGetListResponse<T[]>> {
        throw new Error('Method not implemented.')
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
