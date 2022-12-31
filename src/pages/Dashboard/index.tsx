import React from 'react'
import ColumnContainer from '../../components/ColumnContainer/ColumnContainer'
import Table from '../../components/Table/Table'
import SidePanel from '../../components/Card/SidePanel'
import RecantActivity from './RecantActivity'
import Title from '../../components/Title/Title'
import Deploy from './Deploy'
import Strategy from '../../components/Card/Strategy'
import HorizoantalScroll from '../../components/HorizoantalScroll/HorizoantalScroll'
import Scanner from '../../components/Card/Scanner'
import Stock from '../../components/Card/Stock'
import PageWrapper from '../../components/PageWrapper'
import Header from '../../components/Header'
import { FlexWrap } from '../../components/FlexWrap'

const Dashboard = () => {
  return (
    <PageWrapper header={<Header />} 

      content={
      <React.Fragment>
        <ColumnContainer gap='md'>
            <Table />
            <FlexWrap>
              <RecantActivity />
              <Deploy />
            </FlexWrap>
          </ColumnContainer>
          <ColumnContainer gap='md'>
            <Title titleName='Discover Strategies'/>
            <HorizoantalScroll>
              <React.Fragment>
                <Strategy title='Bolling band and RSI' stocks={22} date='10 Nov 2022'/>
                <Strategy title='Nothing Spaecial' stocks={22} date='10 Nov 2022'/>
                <Strategy title='Sky Rocketing' stocks={22} date='10 Nov 2022'/>
                <Strategy title='jkband and RSI' stocks={22} date='10 Nov 2022'/>
              </React.Fragment>
            </HorizoantalScroll>
          </ColumnContainer>

          <ColumnContainer gap='md'>
            <Title titleName='Discover Scanners'/>
            <HorizoantalScroll>
              <React.Fragment>
                <Scanner/>
                <Scanner/>
                <Scanner/>
                <Scanner/>
                <Scanner/>
                <Scanner/>
                <Scanner/>
              </React.Fragment>
            </HorizoantalScroll>
          </ColumnContainer>

          <ColumnContainer gap='md'>
            <Title titleName='All Stocks'/>
            <HorizoantalScroll>
              <React.Fragment>
                <Stock/>
                <Stock/>
                <Stock/>
                <Stock/>
                <Stock/>
              </React.Fragment>
            </HorizoantalScroll>
          </ColumnContainer>
      </React.Fragment>
    } 
    sidepanel={<SidePanel/>}/>
  )
}

export default Dashboard