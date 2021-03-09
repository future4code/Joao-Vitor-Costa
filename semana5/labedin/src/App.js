import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardLinguas from './components/CardLinguas/CardLinguas';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQG2md_QQh2B5A/profile-displayphoto-shrink_200_200/0/1611925545317?e=1619654400&v=beta&t=vedqWyLt20c4kV-syVOEoFrdrRo_YJQLuuj6-HkozQY" 
          nome="João Vítor Alves de Mello Costa" 
          descricao="Oi, eu sou o João Vítor. Tenho 18 anos, e acabei de me formar no ensino médio. Pretendo me tornar um grande desenvolvedor, inciando minha jornada na Labenu. Pretendo ainda cursar alguma faculdade na área, mais precisamente Sistemas de informação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      <CardPequeno 
        imagem="https://cdn.icon-icons.com/icons2/1182/PNG/512/1490129331-rounded07_82197.png"
        nome="Email: "
        descricao= "joao.vitoramc@gmail.com"
        />
        <CardPequeno 
        imagem = "https://i.pinimg.com/originals/f0/a4/17/f0a4170e43fae6a84ff990b6df105199.png"
        nome="Endereço: "
        descricao = "Rua Veredinha, 58, Pompeia"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Labenu" 
          descricao="Atualmente estou no curso de desenvolvimento Web Full Stack da Labenu!" 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Escola" 
          descricao="Durante toda minha trajetória na escola, nunca tive notas vermelhas, ou seja, nunca 'fiquei de recuperação', tentando sempre garantir bons resultados." 
        />
      </div>

      <div className="page-section-container">
        <h2>Linguagens de programação conhecidas</h2>
        <CardPequeno 
        imagem="https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png"
        nome="HTML5"
        descricao= "Conhecimento intermediário"
        />

        <CardPequeno 
        imagem="data:image/png;base64,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"
        nome="CSS3"
        descricao= "Conhecimento intermediário"
        />

        <CardPequeno 
        imagem="https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg"
        nome="JavaScript"
        descricao= "Conhecimento básico"
        />
      </div>

        <div className="page-section-container">
        <h2>Línguas</h2>
        <CardLinguas 
        nome = "Português: "
        descricao = "Nível fluente"
        />
        <CardLinguas 
        nome = "Inglês: "
        descricao = "Nível básico"
        />
        <CardLinguas 
        nome = "Espanhol: "
        descricao = "Nível básico"
        />
        </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />       

        <ImagemButton 
          imagem="https://i.pinimg.com/736x/c8/95/2d/c8952d6e421a83d298a219edee783167.jpg" 
          texto="Instagram" 
        />    

        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/174/174857.png" 
          texto="LinkedIn" 
        />     
      </div>
    </div>
  );
}

export default App;
