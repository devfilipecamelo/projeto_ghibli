function pesquisar(){
  
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //se campoPesquisa estiver vazio
  if (!campoPesquisa){
    section.innerHTML = "<h3>Nada foi encontrado. Digite algo a ser pesquisado</h3>"
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  
  let resultados = "";
  let titulo = ""; 
  let sinopse = "";
  let tags = "";

  for (let filme of filmes){

    titulo = filme.titulo.toLowerCase();
    sinopse = filme.sinopse.toLowerCase();
    tags = filme.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || filme.ano.includes(campoPesquisa) || tags.includes(campoPesquisa)){

      resultados += `
      
      <div class="item-resultado">
        <h2>
          <a href="${filme.link}" target="_blank">${filme.titulo}</a>
        </h2>
        <h3 class ="ano-h3">${filme.ano}</h3>
        <p class="descricao-meta">${filme.sinopse}</p>
        <a href="${filme.link}" target="_blank">Mais informações</a>
      </div>
     
    `;

    console.log("teste");
    
    }
    
    if (!resultados){
      resultados = "<h3>Nada foi encontrado</h3>";
    }

  }
  
  section.innerHTML = resultados;

}











