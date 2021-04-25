import React, {useState} from 'react'

const Footer = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')

const ValidationForm = (e) => {
  e.preventDefault();

  var regexEmail = /\S+@\S+\.\S+/;
  let emailValid = regexEmail.test(email);

  if (name == "") {
    alert("Campo nome vázio!");

    return false;
  }
  if (name.length <= 2) {
    alert("O nome precisa ter mais do que 2 letras!");
    return false;
  }
  if (email == "") {
    alert("Email vázio!");
    return false;
  }
  if (emailValid == false) {
    alert("Email inválido!");
    return false;
  }
  else {
    setName('')
    setEmail('')
    alert("Ok")
  }
}


  return (
<div>
    <div className="container-divisions">



    <hr className="hr">
    </hr>
    <h4 className="text-divisions">Compartilhe a novidade</h4>
    <hr className="hr">
    </hr>


</div>


<section>
    <p className="title-friends-share">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
    </p>



    <form  name="formShare">
        <div className="form-share">

            <label className="label-share" for="nameFriend">Nome do seu amigo:
                <input type="text" id="nameFriend" 
                value={name} onChange={(e) => setName(e.target.value)}
                required class="inputNameShare" name="name"
                    placeholder="Digite o nome"/>
            </label>

            <label className="label-share" for="emailFriend">Email dele:

                <input type="email" className="inputEmailShare"
                 value={email} onChange={(e) => setEmail(e.target.value)}
                 id="emailFriend" name="email" required
                    placeholder="Digite o e-mail do seu amigo"/>
            </label>


            <br/>



        </div>
        <button className="btn-form-share" onClick={ValidationForm}>Enviar Agora</button>

    </form>
</section>

   
    <div className="container-footer">


    <footer>

        <span className="text-footer">Testando suas habilidades em HTML,CSS E JAVASCRIPT</span>
        <span className="text-footer">Linx Impulse</span>
        <span className="text-footer">2019</span>
    </footer>

</div>
</div>
  )
}
export default Footer