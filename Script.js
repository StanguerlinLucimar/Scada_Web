function MudarTela(IdDaTelaDesejada) {
  // Procura do HTML o elemento que tem a classe Tela e Ativa
  const TelaAtual = document.querySelector(".Tela.Ativa");
  if (TelaAtual) 
    TelaAtual.classList.remove("Ativa");
// Procura pelo id da tela desejada e adiciona a Class ativa
  const NovaTela = document.getElementById (IdDaTelaDesejada)
    if (NovaTela)
        NovaTela.classList.add('Ativa')

}


