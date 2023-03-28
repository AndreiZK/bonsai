import styles from './App.module.scss'

import Navbar from './components/Navbar/Navbar'
import Plans from './components/Plans/Plans'
import Addons from './components/Addons/Addons'
import CTA from './components/CTA/CTA'
import FAQ from './components/FAQ/FAQ'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Plans />
      <Addons />
      <CTA />
      <FAQ />
    </div>
  )
}

export default App
