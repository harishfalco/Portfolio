import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import homeAnime from '../../assets/home_anime.gif'
import Modal from '../Modal/Modal'
import './Home.css'

const Home = () => {
   
     const [showModal, setShowModal] = useState(false);
    
     useEffect(() => {
         setTimeout(
             ()=>{
                setShowModal(true)
             },2000)
     },[])

    const closeModal = ()=>{
        setShowModal(false)
    }

    return (
        <div className="home-container">
            {
            showModal &&  <Modal closeModal = {closeModal} />
            }
           
            <div className="header-text">
                <h1>Welcome to my portfolio</h1>
                <p>This is <b>Harish Kumar</b> a full stack dev and explorer</p>
            </div>
            <div className="head-btns">
                <Link to="/about" className="btn btn-white"> 
                    <p className="btn-text">Know more about me</p>
                </Link>
                <Link to="/contact" className="btn btn-transparent"> 
                    <p className="btn-text">Get in touch</p>
                </Link>
            </div>
            <div className="splash-image">
                 <img
                  src={ homeAnime}
                  alt="Anime"
                  />
            </div>
          
        </div>
    )
}

export default Home
