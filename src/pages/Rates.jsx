import { Wave } from 'react-animated-text';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency, selectFilteredRates, selectIsError, selectIsLoading, selectRates } from '../reduxState/selectors';
import Loader from '../components/Loader/Loader';
import RatesList from '../components/RatesList/RatesList';
import { fetchLatestSymbols } from '../reduxState/currency/operation';
import { useEffect } from 'react';
import Filter from '../components/Filter/Filter';

const Rates = () => {
  const dispatch = useDispatch()
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading)
  const baseCurrency = useSelector(selectBaseCurrency)
  const rates = useSelector(selectRates)
  const filteredrates = useSelector(selectFilteredRates)
useEffect(() => {
 dispatch(fetchLatestSymbols(baseCurrency))
}, [baseCurrency, dispatch])

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        {rates.length > 0 && <Filter/>}
        {filteredrates.length > 0 && <RatesList rates={filteredrates}/>}
        {isLoading && <Loader/>}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
