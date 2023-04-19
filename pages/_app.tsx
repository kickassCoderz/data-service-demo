import { DataServiceProvider } from '@kickass-coderz/data-service'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'

import { beerService } from '../BeerService'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <DataServiceProvider dataService={beerService}>
            <Component {...pageProps} />
            <ReactQueryDevtools />
        </DataServiceProvider>
    )
}

export default App
