import {useEffect, useState} from 'react'
import * as SC from "@/components/CurrencyConverter/CurrencyConverter.style";

const CurrencyConverter = () => {
    const [convertedValue, setConvertedValue] = useState<null | number>(null)

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
                const data = await response.json()
                const exchangeRate = Math.round(data.Valute.GBP.Value)
                const value = 250 * exchangeRate

                setConvertedValue(value)
            } catch (error) {
                console.log('Error fetching exchange rate:', error)
            }
        }

        fetchExchangeRate()
    }, [])

    return <>{convertedValue !== null && <SC.Result>{convertedValue}</SC.Result>}</>
}

export default CurrencyConverter
