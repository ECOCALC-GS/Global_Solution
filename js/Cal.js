// Mudar a Página de Valores da calculadora
let currentPage = 1;

function showPage(page) {
    const sections = document.querySelectorAll('form > div');
    sections.forEach(section => section.classList.remove('active'));

    const activeSection = document.querySelector(`.q${page}`);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    document.getElementById('prev-btn').style.display = page === 1 ? 'none' : 'inline-block';
    document.getElementById('next-btn').style.display = page === 7 ? 'none' : 'inline-block';
}

function nextPage() {
    if (currentPage < 7) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage(page) {
    if (page === 7) {
        
        currentPage = 1;
    } else if (page > 1) {
      
        currentPage = page - 1;
    }
    showPage(currentPage); 
}

showPage(currentPage);

// claculadora da Pegada de Caborno
function calcular() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c1 = parseFloat(document.getElementById('c1').value);
    let c2 = parseFloat(document.getElementById('c2').value);
    let c3 = parseFloat(document.getElementById('c3').value);
    let d1 = parseFloat(document.getElementById('d1').value);
    let d2 = parseFloat(document.getElementById('d2').value);
    let d3 = parseFloat(document.getElementById('d3').value);
    let d4 = parseFloat(document.getElementById('d4').value);
    let d5 = parseFloat(document.getElementById('d5').value);
    let e = parseFloat(document.getElementById('e').value);
    let f1 = parseFloat(document.getElementById('f1').value);
    let f2 = parseFloat(document.getElementById('f2').value);

    a = a * 0.19362;
    b = b * 0.15 * 0.9;

    let c = (c1 * 2.31) + (c2 * 1.90) + (c3 * 2.68);
    let d = (d1 * 27) + (d2 * 8) + (d3 * 6.9) + (d4 * 0.5) + (d5 * 4);
    e = e * 20;
    let f = (f1 * 1300 * 0.3) + (f2 * 17000 * 0.15);

    let resultadoFinal = (a * 12 + b * 365 + c * 52.14 + d * 52.14 + e * 12 + f) / 1000;

    // Exibindo o resultado final
    document.getElementById('resultado').textContent = resultadoFinal.toFixed(2);

    // Mensagens baseadas na pegada de carbono
    let mensagem = "";
    if (resultadoFinal >= 15) {
        mensagem = `
            <h3>Sua pegada de carbono é Alta.</h3>
            <p>Isso significa que suas atividades diárias estão gerando uma quantidade significativa de emissões de CO₂ na atmosfera, o que contribui para o aquecimento global e mudanças climáticas. Atividades como o uso excessivo de energia de fontes não-renováveis (como carvão ou gás), o transporte individual com veículos movidos a combustíveis fósseis e o consumo de carne em grande quantidade são os principais responsáveis por essa pegada.</p>
            <h4>Implicações Globais:</h4>
            <ul>
                <li><b>Se todos no Brasil adotassem o seu estilo de vida,</b> as emissões de CO₂ seriam consideravelmente aumentadas, acelerando o impacto negativo sobre o clima no país.</li>
                <li><b>Se todos no mundo seguissem o seu exemplo,</b> as emissões de CO₂ aumentariam exponencialmente, exacerbando ainda mais os efeitos do aquecimento global e acelerando a mudança climática.</li>
            </ul>
            <h4>Recomendações para Reduzir sua Pegada de Carbono:</h4>
            <ul>
                <li>Reduza o consumo de energia proveniente de fontes fósseis. Considere instalar painéis solares ou mudar para fornecedores de energia renovável.</li>
                <li>Considere alternativas de transporte mais sustentáveis, como andar de bicicleta, caminhar ou utilizar transporte público.</li>
                <li>Adote uma dieta com menor impacto ambiental, reduzindo o consumo de carne vermelha e priorizando alimentos vegetais.</li>
            </ul>
            <h4>Como a Pegada de Carbono Afeta o Meio Ambiente?</h4> 
            <ul>
                <li>
                    <b>Mudanças Climáticas:</b> A principal consequência de uma pegada de carbono alta é o agravamento das mudanças 
                    climáticas. Isso inclui o aumento da temperatura global, eventos climáticos extremos (como secas, tempestades e inundações), 
                    derretimento de geleiras, aumento do nível do mar e mudanças nos ecossistemas. 
                </li>
                <li>
                    <b>Qualidade do Ar e Saúde:</b> A queima de combustíveis fósseis para gerar energia e transporte contribui para a poluição do ar, 
                    que é responsável por problemas respiratórios e outras doenças relacionadas à qualidade do ar, afetando a saúde humana e animal.
                </li>
                <li>
                    <b>Perda de Biodiversidade:</b> O aumento da temperatura e a destruição de habitats naturais devido ao desmatamento, mudanças no 
                    uso da terra e poluição causam uma perda significativa de biodiversidade, o que compromete a estabilidade dos ecossistemas. 
                </li>
            </ul>
        `;
    } else if (resultadoFinal >= 5 && resultadoFinal < 15) {
        mensagem = `
            <h3>Sua pegada de carbono é Média.</h3>
            <p>Isso significa que você está tomando algumas decisões que ajudam a reduzir o impacto ambiental, mas ainda há espaço para melhorar. O uso de energia de fontes renováveis, o transporte público e uma dieta equilibrada são bons passos, mas mudanças adicionais podem contribuir para uma pegada de carbono mais baixa.</p>
            <h4>Implicações Globais:</h4>
            <ul>
                <li><b>Se todos no Brasil adotassem o seu estilo de vida,</b> as emissões de CO₂ seriam significativamente menores do que no cenário anterior, mas ainda assim poderiam contribuir para o aumento das emissões nacionais e globais.</li>
                <li><b>Se todos no mundo seguissem o seu exemplo,</b> ainda assim as emissões seriam consideráveis, mas com um impacto relativamente mais moderado em comparação com uma pegada de carbono alta. Mesmo uma pegada média, se adotada em escala global, continuaria a contribuir para o aquecimento global, embora de forma menos intensa.</li>
            </ul>
            <h4>Recomendações para Reduzir sua Pegada de Carbono:</h4>
            <ul>
                <li>Aumente a utilização de transporte público ou compartilhe caronas para reduzir as emissões associadas ao transporte. </li>
                <li>Se possível, adote hábitos de consumo mais sustentáveis, como reciclar mais, reduzir o desperdício de alimentos e utilizar produtos com menor pegada ambiental.</li>
                <li>Considere reduzir ainda mais o consumo de carne, especialmente a carne vermelha, e substitua por opções vegetais. </li>
            </ul>
            <h4>Como a Pegada de Carbono Afeta o Meio Ambiente?</h4> 
            <ul>
                <li>
                    <b>Mudanças Climáticas:</b> A principal consequência de uma pegada de carbono alta é o agravamento das mudanças 
                    climáticas. Isso inclui o aumento da temperatura global, eventos climáticos extremos (como secas, tempestades e inundações), 
                    derretimento de geleiras, aumento do nível do mar e mudanças nos ecossistemas. 
                </li>
                <li>
                    <b>Qualidade do Ar e Saúde:</b> A queima de combustíveis fósseis para gerar energia e transporte contribui para a poluição do ar, 
                    que é responsável por problemas respiratórios e outras doenças relacionadas à qualidade do ar, afetando a saúde humana e animal.
                </li>
                <li>
                    <b>Perda de Biodiversidade:</b> O aumento da temperatura e a destruição de habitats naturais devido ao desmatamento, mudanças no 
                    uso da terra e poluição causam uma perda significativa de biodiversidade, o que compromete a estabilidade dos ecossistemas. 
                </li>
            </ul>
        `;
    } else if (resultadoFinal < 5) {
        mensagem = `
            <h3>Sua pegada de carbono é Baixa.</h3>
            <p>Isso significa que você está fazendo escolhas conscientes que minimizam as emissões de CO₂. Seu consumo de energia renovável, o uso de transporte sustentável, a dieta equilibrada e os hábitos de consumo consciente estão ajudando a reduzir seu impacto ambiental.</p>
            <h4>Implicações Globais:</h4>
            <ul>
                <li><b>Se todos no Brasil adotassem o seu estilo de vida,</b> o país poderia reduzir substancialmente suas emissões de gases de efeito estufa, ajudando a alcançar as metas climáticas nacionais e contribuindo para a mitigação das mudanças climáticas. </li>
                <li><b>Se todos no mundo seguissem o seu exemplo,</b> isso resultaria em uma grande redução nas emissões globais de CO₂, ajudando a estabilizar o clima e a reduzir o aquecimento global. A adesão a hábitos de baixo carbono poderia, em longo prazo, reverter alguns dos efeitos mais severos das mudanças climáticas. </li>
            </ul>
            <h4>Recomendações para Reduzir sua Pegada de Carbono:</h4>
            <ul>
                <li>Continue explorando formas de otimizar ainda mais o uso de energia em sua casa (por exemplo, utilizando eletrodomésticos eficientes e adotando práticas como o uso de luz natural). </li>
                <li>Incentive outras pessoas a seguir exemplos de consumo consciente, como reduzir o uso de plásticos, priorizar transporte sustentável e adotar dietas com menos carne. </li>
                <li>Considere se envolver em iniciativas locais e globais para promover a sustentabilidade, como plantar árvores, apoiar políticas públicas de redução de emissões e apoiar empresas com práticas sustentáveis. </li>
            </ul>
            <h4>Como a Pegada de Carbono Afeta o Meio Ambiente?</h4> 
            <ul>
                <li>
                    <b>Mudanças Climáticas:</b> A principal consequência de uma pegada de carbono alta é o agravamento das mudanças 
                    climáticas. Isso inclui o aumento da temperatura global, eventos climáticos extremos (como secas, tempestades e inundações), 
                    derretimento de geleiras, aumento do nível do mar e mudanças nos ecossistemas. 
                </li>
                <li>
                    <b>Qualidade do Ar e Saúde:</b> A queima de combustíveis fósseis para gerar energia e transporte contribui para a poluição do ar, 
                    que é responsável por problemas respiratórios e outras doenças relacionadas à qualidade do ar, afetando a saúde humana e animal.
                </li>
                <li>
                    <b>Perda de Biodiversidade:</b> O aumento da temperatura e a destruição de habitats naturais devido ao desmatamento, mudanças no 
                    uso da terra e poluição causam uma perda significativa de biodiversidade, o que compromete a estabilidade dos ecossistemas. 
                </li>
            </ul>
        `;
    }

    // Exibe a mensagem no elemento HTML
    document.getElementById('mensagem').innerHTML = mensagem;

    // Navega para a página do resultado
    nextPage();
}
