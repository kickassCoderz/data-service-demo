import { DataServiceProvider } from '@kickass-coderz/data-service'
import { Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'

import { beerService } from '../BeerService'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <DataServiceProvider dataService={beerService}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
            <ReactQueryDevtools />
        </DataServiceProvider>
    )
}

export default App
