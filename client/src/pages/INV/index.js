import {useState} from 'react'
import MainTabs from "../../components/Main-tabs";
import SubTabs from "../../components/Sub-tabs";
/* import './stat.css' */

function INV({mainTab, setMainTab}) {
  const [sub, setSub] = useState('WEAPONS')
  
  /* const subs = ['WEAPONS', 'APPAREL', 'AID', 'MISC', 'JUNK', 'MODS', 'AMMO'] */
  const subs = [
    {
      name:'WEAPONS',
      position: '-12.5%'
    },
    {
      name:'APPAREL',
      position: '7%'
    },
    {
      name:'AID',
      position: '20%'
    },
    {
      name:'MISC',
      position: '30%'
    },
    {
      name:'JUNK',
      position: '42%'
    },
    {
      name:'MODS',
      position: '54%'
    },
    {
      name:'AMMO',
      position: '68%'
    }
  ]

  

    return (
        <>
      <header>
        <MainTabs mainTab={mainTab} setMainTab={setMainTab}></MainTabs>
        <SubTabs tabs={subs} sub={sub} setSub={setSub}></SubTabs>
      </header>

      <main>inv</main>

      <footer className='large-text'>
        <div className='backing'>HP 90/90</div>

        <div className='backing xp-container'>
          LEVEL 1
          <div id='xp-bar'>
            <div id='xp-fill'></div>
          </div>
        </div>

        <div className='backing' id="ap">AP 70/70</div>
      </footer>
      </>
)}

export default INV;