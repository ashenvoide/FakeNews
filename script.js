async function verificarNoticia() {
    const texto = document.getElementById("textoNoticia").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    // Palavras-chave padrão
    const palavrasSuspeitas = [
       {
    "cura milagrosa", "remédio secreto", "vacina perigosa", "vacina mata", "vacina causa autismo",
    "chip 5g", "chip na vacina", "terra plana", "fim do mundo", "governo esconde",
    "cientistas escondem", "mídia comprada", "controle da mente", "nova doença inventada",
    "ganhe dinheiro fácil", "fique rico rápido", "100% garantido", "oferta imperdível",
    "ninguém fala sobre isso", "verdade oculta", "segredo revelado", "conspiração",
    "não tome vacina", "nasa mente", "trabalhe 1 hora por dia", "robôs vão dominar",
    
    "cura imediata", "doença inventada", "remédio escondido", "vacina inútil",
    "nova ordem mundial", "reptilianos", "fake comprovada", "milagre secreto",
    "clique aqui", "link suspeito", "hackeado", "alerta urgente", "chocante",
    "cientistas confirmam", "nunca conte", "verdade escondida", "isso muda tudo",
    "ganhe prêmio fácil", "não querem que você saiba", "segredo do governo",
    "fim da humanidade", "alienígenas controlam", "cura com ervas secretas",
    "experimento proibido", "internet esconde", "cura natural proibida",
    "cientistas foram silenciados", "descoberta oculta", "mídia mente"
  ]
}

    ];

    let encontrou = false;
    
    // Verificação automática de palavras-chave
    for (let palavra of palavrasSuspeitas) {
        if (texto.includes(palavra)) {
            encontrou = true;
            break;
        }
    }

    if (encontrou) {
        resultado.innerHTML = "🚨 Possível Fake News detectada!";
        resultado.className = "alerta-fake";
    } else {
        // Se não encontrou palavras-chave suspeitas, verifica com API externa
        const fakeNewsConfirmada = await verificarComAPIExterna(texto);
        if (fakeNewsConfirmada) {
            resultado.innerHTML = "🚨 Possível Fake News detectada!";
            resultado.className = "alerta-fake";
        } else {
            resultado.innerHTML = "✅ Não encontramos sinais claros de fake news.";
            resultado.className = "alerta-verdade";
        }
    }
}

// Função que integra uma API externa para verificar a veracidade da notícia
async function verificarComAPIExterna(texto) {
    try {
        const response = await fetch(`https://api.exemplo.com/verificar?texto=${encodeURIComponent(texto)}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer SUA_CHAVE_API'
            }
        });
        
        const data = await response.json();
        
        if (data.status === "fake") {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Erro na verificação com API externa:', error);
        return false;
    }
}
