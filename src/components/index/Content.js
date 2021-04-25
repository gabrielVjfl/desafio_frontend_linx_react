import React from 'react'

const Content = () => {
  return (
      <div>
          
          <aside id="container-content">

<article id="article-content">
    <h3 className="title-aside-h3">Ajude o algorítimo a ser mais certeiro</h3>
    <p className="text-aside-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies
        tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim.
        Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex
        tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel
        egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.
    </p>
    <p className="text-aside-description">
        Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices.
        Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies
        a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci.
        Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
        magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
    </p>
</article>


<form id="form-content">

    <label className="labelForm" for="myInputName">Seu Nome:</label>
    <input type="text" id="myInputName" name="name" placeholder="Digite o seu nome" 
    required/>
    <br/>
    <label className="labelForm" for="myInputEmail">E-mail:</label>
    <input type="email" id="myInputEmail" name="email" 
    placeholder="Digite o seu melhor e-mail"
        required/>
    <br/>
    <label className="labelForm" for="myInputCpf">CPF:</label>
    <input type="text" id="myInputCpf" name="cpf" placeholder="Digite o seu CPF" required/>

    <section className="radio-inputs">
        <label className="labelForm" for="men">Masculino</label>
        <input type="radio" id="men" required name="gender" value="masculino"/><br/>
        <label className="labelForm" for="woman">Femenino</label>
        <input type="radio" id="woman" required name="gender" value="femenino"/>
    </section>

    <button type="submit" className="btn-form">Enviar</button>

</form>

</aside>
<br/>

<div class="container-divisions">
<hr class="hr">
</hr>
<h4 class="text-divisions">Sua seleção especial</h4>
<hr class="hr">
</hr>


</div>

      </div>
     
  )
}
export default Content