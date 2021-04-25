
import '../styles/email.css'
import '../styles/index.css'
import Header from '../components/email/Header'
import Content from '../components/email/Content'
import Card from '../components/email/Card'
import Footer from '../components/email/Footer'

function EmailPage() {
  return (
    <div className="container">
     <Header></Header>
     <Content></Content>
     <Card></Card>
     <Footer></Footer>
    </div>
  );
}

export default EmailPage;