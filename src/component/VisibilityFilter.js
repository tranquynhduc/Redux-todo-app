
import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { VISIBILITY_FILTER } from './../Contants';
import { useDispatch } from 'react-redux';
import { SetFilter } from './../redux/reducer/Actions';


const VisibilityFilter = () => {
  const dispatch = useDispatch()
  return (
    <Container className='text-center'>
      <Tabs>
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map(filterKey => {
            const currentFilter = VISIBILITY_FILTER[filterKey];
            return (
              <Tab
                key={`filterKey${filterKey}`}
                onClick={() => dispatch(SetFilter(currentFilter))}
              >
                {currentFilter}
              </Tab>
            )
          })}
        </TabList>
      </Tabs>

    </Container>
  )
}
export default VisibilityFilter;