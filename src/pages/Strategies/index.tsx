import React from 'react'
import SidePanel from '../../components/Card/SidePanel'
import Strategy from '../../components/Card/Strategy'
import StrategyMain from '../../components/Card/StrategyMain'
import ColumnContainer from '../../components/ColumnContainer/ColumnContainer'
import Header from '../../components/Header'
import HorizoantalScroll from '../../components/HorizoantalScroll/HorizoantalScroll'
import PageWrapper from '../../components/PageWrapper'
import Title from '../../components/Title/Title'

const Strategies = () => {
  return (
    <PageWrapper header={<Header title='Stragtegies'/>} 

    content={
      <React.Fragment>
        <ColumnContainer gap='md'>
          <Title filterOff={true} titleName='My strategies'/>
          <HorizoantalScroll>
            <React.Fragment>
              <Strategy title='Bolling band and RSI' stocks={22} date='10 Nov 2022' percentage={160}/>
              <Strategy title='Nothing Spaecial' stocks={22} date='10 Nov 2022' percentage={120}/>
              <Strategy title='Sky Rocketing' stocks={22} date='10 Nov 2022' percentage={80}/>
              <Strategy title='jkband and RSI' stocks={22} date='10 Nov 2022' percentage={200}/>
            </React.Fragment>
          </HorizoantalScroll>
        </ColumnContainer>
        <ColumnContainer gap='md'>
          <Title viewallOff={true} titleName='discover strategies'/>
          <ColumnContainer gap='md'>
            <StrategyMain/>
            <StrategyMain/>
            <StrategyMain/>
            <StrategyMain/>
            <StrategyMain/>
          </ColumnContainer>
        </ColumnContainer>
      </React.Fragment>
    } 
    
    sidepanel={<SidePanel/>}/>
  )
}

export default Strategies