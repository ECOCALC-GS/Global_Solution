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
<h3>Sua pegada de carbono é alta</h3>

<p>O que indica que suas atividades diárias estão gerando uma quantidade significativa de emissões de CO₂ na atmosfera. 
Isso contribui para o aquecimento global e as mudanças climáticas. Aspectos como o uso elevado de energia em casa, 
aquecimento de água com gás, consumo excessivo de combustível para veículos, alta ingestão de alimentos de origem animal, 
compras internacionais frequentes e viagens aéreas contribuem substancialmente para esse resultado.</p>

<h4>Implicações Globais:</h4>

<p>No cenário global, com uma população de 8 bilhões, emissões tão altas por pessoa resultariam em um aumento acelerado das temperaturas médias, 
levando ao derretimento de geleiras, elevação do nível do mar, desastres naturais mais intensos e eventos climáticos imprevisíveis. </p> 

<h4>Como a Pegada de Carbono Afeta o Meio Ambiente?</h4> 
<ul>
<li><b>Mudanças Climáticas:</b> A principal consequência de uma pegada de carbono alta é o agravamento das <b>mudanças climáticas. </b>
Isso inclui o aumento da temperatura global, eventos climáticos extremos (como secas, tempestades e inundações), derretimento de geleiras, 
aumento do nível do mar e mudanças nos ecossistemas. </li>

<li><b>Qualidade do Ar e Saúde:</b> A queima de combustíveis fósseis para gerar energia e transporte contribui para a poluição do ar, 
que é responsável por problemas respiratórios e outras doenças relacionadas à qualidade do ar, afetando a saúde humana e animal. </li>

<li><b>Perda de Biodiversidade:</b> O aumento da temperatura e a destruição de habitats naturais devido ao desmatamento, 
mudanças no uso da terra e poluição causam uma perda significativa de biodiversidade, o que compromete a estabilidade dos ecossistemas. </li>
</ul>

<h4>Conclusão</h4> 

<p>Seu comportamento e suas escolhas diárias têm um impacto direto no meio ambiente. 
Cada pequeno ajuste que você faz em sua rotina pode contribuir para um planeta mais saudável e sustentável para as gerações futuras. 
A boa notícia é que <b>todos podemos fazer a diferença.</b> Mesmo que suas emissões ainda sejam altas ou médias, o importante é <b>começar a mudança agora.</b> 
Ao adotar hábitos mais sustentáveis, você não só reduz a sua pegada de carbono, mas também inspira outros a seguir seu exemplo, criando um efeito 
positivo que pode se espalhar em escala global.</p>
        `;
    } else if (resultadoFinal >= 5 && resultadoFinal < 15) {
        mensagem = `
<h3>Sua pegada de carbono é considerada média</h3>

<p>Indicando que você já toma algumas ações positivas para reduzir o impacto ambiental. 
No entanto, ainda há oportunidades de melhora. O uso de transporte público, fontes de energia 
renováveis e uma dieta mais consciente são passos na direção certa, mas ajustes adicionais podem ajudar 
a reduzir ainda mais suas emissões de CO₂. </p>

<h4>Implicações Globais: </h4>

<p>Se todos adotassem seu estilo de vida, o impacto climático seria menos intenso em comparação com uma pegada alta. 
Ainda assim, as emissões globais continuariam contribuindo para o aquecimento global, resultando em mudanças climáticas, como eventos climáticos extremos e aumento do nível do mar. 
Uma redução generalizada de pegadas médias ajudaria a desacelerar esses efeitos. </p>

<h4>Como a Pegada de Carbono Afeta o Meio Ambiente?</h4> 
<ul>
<li><b>Mudanças Climáticas:</b> A principal consequência de uma pegada de carbono alta é o agravamento das <b>mudanças climáticas. </b>
Isso inclui o aumento da temperatura global, eventos climáticos extremos (como secas, tempestades e inundações), derretimento de geleiras, 
aumento do nível do mar e mudanças nos ecossistemas. </li>

<li><b>Qualidade do Ar e Saúde:</b> A queima de combustíveis fósseis para gerar energia e transporte contribui para a poluição do ar, 
que é responsável por problemas respiratórios e outras doenças relacionadas à qualidade do ar, afetando a saúde humana e animal. </li>

<li><b>Perda de Biodiversidade:</b> O aumento da temperatura e a destruição de habitats naturais devido ao desmatamento, 
mudanças no uso da terra e poluição causam uma perda significativa de biodiversidade, o que compromete a estabilidade dos ecossistemas. </li>
</ul>

<h4>Conclusão</h4> 

<p>Seu comportamento e suas escolhas diárias têm um impacto direto no meio ambiente. 
Cada pequeno ajuste que você faz em sua rotina pode contribuir para um planeta mais saudável e sustentável para as gerações futuras. 
A boa notícia é que <b>todos podemos fazer a diferença.</b> Mesmo que suas emissões ainda sejam altas ou médias, o importante é <b>começar a mudança agora.</b> 
Ao adotar hábitos mais sustentáveis, você não só reduz a sua pegada de carbono, mas também inspira outros a seguir seu exemplo, criando um efeito 
positivo que pode se espalhar em escala global.</p> 
        `;
    } else if (resultadoFinal < 5) {
        mensagem = `
<h3>Parabéns! Sua pegada de carbono é considerada baixa</h3>

<p>Refletindo escolhas conscientes e sustentáveis que ajudam a minimizar as emissões de CO₂. 
Práticas como o uso de energia renovável, transporte sustentável, uma dieta equilibrada e hábitos de consumo 
responsáveis estão contribuindo significativamente para a redução do seu impacto ambiental. </p>

<h4>Implicações Globais:</h4> 

<p>Se o estilo de vida de todos fosse semelhante ao seu, haveria uma redução substancial nas emissões globais de CO₂, 
promovendo a estabilização do clima e desacelerando o aquecimento global. Esse exemplo de baixo carbono, adotado em 
escala global, poderia ajudar a mitigar os impactos mais graves das mudanças climáticas e contribuir para um futuro mais sustentável.</p>

<h4>Como a Pegada de Carbono Afeta o Meio Ambiente?</h4> 
<ul>
<li><b>Mudanças Climáticas:</b> A principal consequência de uma pegada de carbono alta é o agravamento das <b>mudanças climáticas. </b>
Isso inclui o aumento da temperatura global, eventos climáticos extremos (como secas, tempestades e inundações), derretimento de geleiras, 
aumento do nível do mar e mudanças nos ecossistemas. </li>

<li><b>Qualidade do Ar e Saúde:</b> A queima de combustíveis fósseis para gerar energia e transporte contribui para a poluição do ar, 
que é responsável por problemas respiratórios e outras doenças relacionadas à qualidade do ar, afetando a saúde humana e animal. </li>

<li><b>Perda de Biodiversidade:</b> O aumento da temperatura e a destruição de habitats naturais devido ao desmatamento, 
mudanças no uso da terra e poluição causam uma perda significativa de biodiversidade, o que compromete a estabilidade dos ecossistemas. </li>
</ul>

<h4>Conclusão</h4> 

<p>Seu comportamento e suas escolhas diárias têm um impacto direto no meio ambiente. 
Cada pequeno ajuste que você faz em sua rotina pode contribuir para um planeta mais saudável e sustentável para as gerações futuras. 
A boa notícia é que <b>todos podemos fazer a diferença.</b> Mesmo que suas emissões ainda sejam altas ou médias, o importante é <b>começar a mudança agora.</b> 
Ao adotar hábitos mais sustentáveis, você não só reduz a sua pegada de carbono, mas também inspira outros a seguir seu exemplo, criando um efeito 
positivo que pode se espalhar em escala global.</p> 
        `;
    }

    // Exibe a mensagem no elemento HTML
    document.getElementById('mensagem').innerHTML = mensagem;

    // Navega para a página do resultado
    nextPage();
}
