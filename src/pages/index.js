
import '../styles/index.css'
import HeaderIndex from '../components/index/Header'
import Content from '../components/index/Content'
import Card from '../components/index/Card'
import Footer from '../components/index/Footer'

function IndexPage() {
  return (
    <div className="container">
     <HeaderIndex></HeaderIndex>
     <Content></Content>
     <Card></Card>
     <Footer></Footer>
    </div>
  );
}

export default IndexPage;
