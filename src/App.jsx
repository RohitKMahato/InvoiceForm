import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'
import HeaderComponent from './component/HeaderComponent'
import InvoiceDetails from './component/InvoiceDetails'
import BillingComponent from './component/BillingComponent'
import ItemTable from './component/ItemTable'
import MidComponent from './component/MidComponent'
import TermsAndConditions from './component/Term&Cond'
import FooterSec from './component/FooterSec'
import ActionButtons from './component/ActionBtn'
import InvoiceForm from './component/InvoiceForm'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className='min-h-screen py-0 screen-only'>
        {/* <Form /> */}


      {/* <InvoiceForm /> */}
        
        <HeaderComponent />
        <InvoiceDetails />
        <BillingComponent />
        <ItemTable />
        <MidComponent />
        <TermsAndConditions />
        <FooterSec />
       
      </div>
      <div>
        <ActionButtons />
      </div>
    </>
  )
}

export default App











