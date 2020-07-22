// Ouvindo o form
const form = document.querySelector('#form');
form.addEventListener('submit', handleSubmit);
// Função principal
function handleSubmit(event) {
  // Impedindo a pagina de carregar quando o botão submit for clicado
  event.preventDefault();
  // Resgatando o valor dos inputs
  const gender = getSelectedValue('#gender');
  const age = getInputNumberValue('#age');
  const weight = getInputNumberValue('#weight');
  const height = getInputNumberValue('#height');
  const activityLevel = getSelectedValue('#activity_level');
  // formula para o calculo
  const tmb = Math.round( 
    gender === 'female' 
      ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );
  // Mostrando o resultado na tela
  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;  
  const layout = `
    <h2>Aqui está o resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
    </div>
  `;

  const result = document.querySelector('#result');
  result.innerHTML = layout;
};

// Acessando os seletores
function getSelectedValue(id) {
  const select = document.querySelector(id);
  return select.options[select.selectedIndex].value;
}

// Transformando os valores dos inputs em Numbers
function getInputNumberValue(id){
  return Number(document.querySelector(id).value)
}
