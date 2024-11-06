// Função para atualizar o horário
function atualizarHorario() {
  const agora = new Date(); // Obtém a data e hora atual
  const hora = String(agora.getHours()).padStart(2, '0'); // Obtém a hora com dois dígitos
  const minuto = String(agora.getMinutes()).padStart(2, '0'); // Obtém os minutos com dois dígitos
  const segundo = String(agora.getSeconds()).padStart(2, '0'); // Obtém os segundos com dois dígitos

  // Atualiza o elemento com a hora, minuto e segundo
  document.getElementById('hora').textContent = hora;
  document.getElementById('minuto').textContent = minuto;
  document.getElementById('segundo').textContent = segundo;

  //const dia = agora.getDate()

  const dia = String(agora.getDate()).padStart(2, '0'); 
  const mes = agora.getMonth()
  const ano = agora.getFullYear()

  if (mes > 9){
    document.getElementById('mes').textContent = 0 + mes +1 
  }

  document.getElementById('dia').textContent = dia;
  document.getElementById('mes').textContent = mes +1 
  document.getElementById('ano').textContent = ano

}

// Atualiza o horário imediatamente ao carregar a página


// Define um intervalo para atualizar o horário a cada segundo (1000 milissegundos)
setInterval(atualizarHorario, 1000);


// Em um arquivo JS separado
function loadPage() {
  const iframe = document.getElementById('browser-iframe');
  const addressBar = document.getElementById('address-bar');
  const url = addressBar.value.startsWith("http") ? addressBar.value : "https://" + addressBar.value;
  
  iframe.src = url;

  
}
