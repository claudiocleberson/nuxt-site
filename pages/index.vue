<template>
<section>
  <AppHeader></AppHeader>
  <body> <!-- Add your content of header -->
  <!-- Add your site or app content here -->
    <div class="hero-full-container background-image-container white-text-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1 style="font-size: 44px; font-family: monospace">ESSENCIAL</h1>
            <h4 style="font-size: 22px">Simplificando Processos</h4>
            <br>
            <a href="#" v-scroll-to="'#aboutUs'" class="btn btn-default btn-lg" title="">Saiba Mais</a>
          </div>
        </div>
      </div>
    </div>

    <div id="aboutUs" class="section-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8 col-md-offset-2">
            <div class="text-center">
              <h2>A Essencial</h2>
              <p>Somos uma <strong>Assessoria para departamento Financeiro</strong>,
                voltada ao desenvolvimento contínuo dos processos,
                sistemas e integrantes, nosso objetivo é através da
                simplicidade solucionar os problemas de maneira
                permanente, entendemos que diante de processos
                eficientes, sistemas parametrizados e profissionais
                treinados os recursos financeiros e a imagem da empresa
                são preservados, é este o equilíbrio que buscamos levar
                a nossos clientes.</p>
            </div>
         </div>
        </div>
      </div>
    </div>

    <div class="section-container">
      <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <div id="carousel-example-generic" class="carousel carousel-fade slide" data-ride="carousel">
                  <div class="carousel-inner" role="listbox">
                      <div class="item active">
                          <img class="img-responsive" src="/images/reestruturacaoImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">
                            <h4 style="color: #1763e9; margin-top: 30px">
                              <strong>REESTRUTURAÇÃO – PROCESSO / SISTEMA / INTEGRANTE</strong>
                            </h4>
                            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                              <i class="fa fa-chevron-left" aria-hidden="true"></i>
                              <span class="sr-only">Anterior</span>
                            </a>
                            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                              <i class="fa fa-chevron-right" aria-hidden="true"></i>
                              <span class="sr-only">Proxímo</span>
                            </a>
                            <ul>
                              <li>Diagnóstico do departamento Financeiro;</li>
                              <li>Simplicidade nos processos e praticidade nas tomadas de decisão;</li>
                              <li>Melhoria dos controles internos;</li>
                              <li>Eliminação da redundância de atividades;</li>
                              <li>Aumento da eficiência no acesso a informação;</li>
                              <li>Aumento da produtividade;</li>
                              <li>Redução nos limites de tempo de resposta ao mercado;</li>
                              <li>Integração dos departamentos e das informações.</li>
                            </ul>
                            <nuxt-link  :to="{name: 'servicos', hash: '#reestruturacao_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </nuxt-link >
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="/images/organizacaocreditoImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">

                              <h4 style="color: #1763e9; margin-top: 30px">
                                <strong>ORGANIZAÇÃO E CONTROLE – CADASTRO, CRÉDITO E COBRANÇA.</strong>
                              </h4>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                              <ul>
                                <li>Intermediar – Interesses departamentos (Comercial x Financeiro);</li>
                                <li>Crédito - Aumento de Venda x Redução de Inadimplência;</li>
                                <li>Definir e Simplificar - Politica de Crédito e Cobrança;</li>
                                <li>Preservar - Imagem frente aos Clientes e Recursos Financeiros;</li>
                                <li>Solução Permanente - Problemas nos Processos e Sistema;</li>
                                <li>Cobrança – Cumprir rigorosamente as etapas.</li>
                              </ul>
                            <nuxt-link  :to="{name: 'servicos', hash: '#organizacaocredito_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </nuxt-link >
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="/images/organizacaopagarImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">

                            <h4 style="color: #1763e9; margin-top: 30px">
                              <strong>ORGANIZAÇÃO E CONTROLE - CONTAS A PAGAR</strong>
                            </h4>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                            <ul>
                              <li>Intermediar – Interesses departamentos (Compras x Financeiro);</li>
                              <li>Definir e Simplificar - Politica de Pagamento;</li>
                              <li>Preservar - Imagem frente ao Mercado e Recursos Financeiros;</li>
                              <li>Solução Permanente – Problemas com Processos e Sistema;</li>
                            </ul>
                            <nuxt-link  :to="{name: 'servicos', hash: '#organizacaopagar_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                            </nuxt-link >
                          </div>
                      </div>
                      <div class="item">
                          <img class="img-responsive" src="/images/treinamentoImg.jpg" alt="First slide">
                          <div class="carousel-caption card-shadow reveal">
                            <h4 style="color: #1763e9; margin-top: 30px">
                              <strong>TREINAMENTOS E PALESTRAS PERSONALIZADAS</strong>
                            </h4>
                              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                <span class="sr-only">Anterior</span>
                              </a>
                              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                <span class="sr-only">Próximo</span>
                              </a>
                              <ul>
                                <li>Temas a partir da dificuldade da empresa;</li>
                                <li>Desenvolvimento Contínuo do Integrante;</li>
                                <li>Validação do entendimento quanto a Processos e Sistema;</li>
                                <li>Integração e espirito de Equipe;</li>
                                <li>Valorização e Motivação do Integrante;</li>
                              </ul>
                              <nuxt-link  :to="{name: 'servicos', hash: '#treinamento_section'}" tag="a" class="btn btn-primary" title="">
                              Saiba Mais
                              </nuxt-link >
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="section-container">
      <div class="container text-center">
        <div class="row section-container-spacer">
          <div class="col-xs-12 col-md-12">
            <h2>Quem somos</h2>
            <p>Amigos e companheiros de trabalho em empresa de grande porte
               da Construção Civil, hoje sócios, Renan Moura e Claudio Pereira
               sempre em conversas informais discutiam a dificuldade que as empresas
               possuem em fazer bem o “Básico”, falávamos que havia muita busca por
               Consultorias, Processos, ferramentas em níveis “avançados” antes mesmo
               de encontrarem a “Excelência” nos processos mais “Simples”, foi então
               a decisão por levar eficiência através da simplicidade ao mercado
               fundando a ESSENCIAL, onde a ideia é levar o que o significado no nome
               já diz: “Dar atenção ao que é muito necessário”.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <img src="/images/profil-01.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Renan Carlos</h3>
            <h4>Gestor de Marketing e MBA em Gestão Empresarial pela FGV</h4>
            <p>15 anos de experiência na área Admistravista e Financeira em empresas de grande porte. Soma a parceria como
            como Consultor, Intrutor, Palestrante e orientador aos processos vinculados a Gestão Comercial.</p>
            <p>
              <a href="https://facebook.com/renancarlos.moura" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="hidden social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/renan-moura-846316143/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class="col-xs-12 col-md-6">
            <img src="/images/Claudio_gray.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Claudio Pereira</h3>
            <h4>Administrador de Empresas</h4>
            <p>Mais de 10 anos de experiência nas aréas Administrativas,
              Finaceiro e Contábil. Soma a parceria como Palestrante,
              Instrutor e orientador aos processos vinculados a Gestão Contábil e Fiscal.
            </p>
            <p>
              <a href="https://www.facebook.com/claudio.pereira.3950" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="hidden social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/in/claudio-pereira-06416a49/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
          <div class=" hidden col-xs-12 col-md-4">
            <img src="/images/profil-03.jpg" alt="" class="reveal img-responsive reveal-content image-center">
            <h3>Gregor Clegane</h3>
            <h4>Developer</h4>
            <p>Busce rutrum nisi non dui placerat sodales. Vivamus feugiat rutrum malesuada. Nulla volutpat sapien ac gravida varius</p>
            <p>
              <a href="https://facebook.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/" class="social-round-icon fa-icon" title="">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="parceiros" class="section-container">
      <div class="container text-center">
        <div class="row section-container-spacer">
          <div class="col-xs-12 col-md-12">
            <h2 class="text-center">Parceiros</h2>
            <blockquote>"A vida vai juntando pessoas, unindo propósitos, formando grandes <strong>parcerias</strong> e trazendo a tona os vencedores"
              <footer>Edezia Oliveira</footer>
            </blockquote>
            <a></a>
          </div>
        </div>
        <div class="row">
          <div  class="col-xs-12 col-md-4">
            <a href="http://www.ajaxbr.com.br" title="Website da Ajax">
              <img  src="/images/ajax_logo.png" alt="" class="img-responsive reveal-content image-center">
            </a>
            </div>
          <div  class="col-xs-12 col-md-4">
            <a href="http://www.assystem.com.br" title="Web site da Assystem">
                <img  src="/images/assystem_logo.png" alt="" class="img-responsive reveal-content image-center">
            </a>
          </div>
          <div class="col-xs-12 col-md-4">
            <a title="Website Credito e Cobraça" href="http://www.creditoecobraca.com"  target="_blank">
              <img src="/images/creditocobraca_logo.png" alt="" class="img-responsive reveal-content image-center">
            </a>
          </div>
        </div>
      </div>
    </div>

      <div class="modal" id="formSubmitted" role="dialog">
        <div class="modal-dialog">
          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Mensagem Enviada</h4>
            </div>
            <div class="modal-body">
              <p>Assunto: {{subject}}</p>
              <p>Mensagem:</p>
              <p>{{message}}</p>
            </div>
            <div class="modal-footer">
              <button type="button" v-on:click="submitForm" class="btn btn-success" data-dismiss="modal">Enviar</button>
            </div>
          </div>
        </div>
      </div>

    <div class="section-container contact-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-12">
            <div class="section-container-spacer">
              <h2 class="text-center">Contato</h2>
              <p class="text-center">Contate-nos, que teremos o
                prazer de esclarescer dúvidas, e ajudar a melhorar os
                processos financeiro das sua empresa.</p>
            </div>
            <div class="card-container">
              <div class="card card-shadow col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 reveal">
                <form  name="NovoContato" netlify-honeypot="bot-field" action="" id="contactForm" class="reveal-content" netlify>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <p class="hidden">
                          <label>Don’t fill this out: <input name="bot-field"></label>
                        </p>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">
                      </div>
                      <div class="form-group">
                        <input type="text" v-model="subject" class="form-control" id="subject" placeholder="Assunto">
                      </div>
                      <div class="form-group">
                        <textarea class="form-control" v-model="message" rows="3" placeholder="Digite sua messagem"></textarea>
                      </div>
                      <button type="button" :disabled="!formIsValid" data-toggle="modal" data-target="#formSubmitted" class="btn btn-primary">Enviar</button>
                    </div>
                    <div class="col-md-6">
                      <ul class="list-unstyled address-container">
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          (011)96477-4503
                        </li>
                        <li style="word-wrap: normal">
                          <span class="fa-icon">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                          </span>
                          essencial@essencial<wbr>nagestao.com.br
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa fa-map-o" aria-hidden="true"></i>
                          </span>
                            Rua Guarantan, 11 sala 10,
                            <br>
                            Engenho Novo - Barueri/SP
                            <br>
                            CEP: 06416-180
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-image col-xs-12" style="background-image: url('/images/img-01.jpg')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </body>
 <AppFooter></AppFooter>
</section>
</template>

<script>
import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {
      email: '',
      subject: '',
      message: ''
    }
  },
  computed :{
    formIsValid () {
       return this.email !== ''
       && this.subject !== ''
       && this.message !== '';
     },
  },
  methods: {
    submitForm () {
      var x = document.getElementById('contactForm');
      x.submit();
      console.log("Form submitted")
    },
  }
}
</script>

<style>

</style>
