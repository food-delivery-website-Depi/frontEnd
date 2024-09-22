import React,{ useState} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExoloreMenue from '../../components/ExploreMenu/ExoloreMenue'

const Home = () => {

  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header />
      <ExoloreMenue category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
