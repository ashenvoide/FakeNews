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
    // saúde / curas / remédios
  "cura", "cura milagrosa", "remédio secreto", "remédio caseiro",
  "cura garantida","cura imediata","cura em 24 horas","cura em 7 dias",
  "tratamento secreto","tratamento caseiro","cura natural",
  "vacina", "vacina perigosa", "vacina mata", "vacina causa autismo",
  "vacina causa", "não tome vacina", "chip na vacina",

  // conspirações / governo / mídia
  "governo esconde","segredo revelado","não querem que você saiba",
  "mídia mente","mídia comprada","plano secreto","nova ordem mundial",
  "controle da mente","eles não querem","escondem de você",

  // política / eleições
  "urnas fraudadas","eleição roubada","fraude eleitoral","golpe confirmado",
  "voto manipulado","fraude confirmada","manipulação de votos",

  // dinheiro / golpes / ganhos fáceis
  "ganhe dinheiro fácil","fique rico rápido","método infalível","dinheiro grátis",
  "trabalhe 1 hora por dia","renda extra fácil","oferta imperdível","enriquecer rápido",

  // ciência absurda / paranormal / apocalipse
  "terra plana","nunca fomos à lua","alienígenas confirmados","fim do mundo",
  "profecia","profecia revelada","sinais do fim","apocalipse confirmado",

  // tecnologia / 5g / chips
  "chip 5g","controle 5g","chip implantado","chip na vacina","robôs vão dominar",

  // sensacionalismo / ação imediata
  "urgente","compartilhe já","antes que apaguem","espalhe agora","exclusivo",
  "chocante","inacreditável","revelação chocante","segredo do governo",

  // palavras gerais para ampliar
  "fake","boato","mentira","farsa","enganoso","enganar","fraude","censurado"
];

// 2) Sufixos e prefixos para gerar combinações variadas
const prefixes = [
  "", "URGENTE: ", "ATENÇÃO: ", "EXCLUSIVO: ", "ALERTA: ",
  "NÃO MANDE PARA NINGUÉM: ", "COMPARTILHE: ", "FORMA RÁPIDA: "
];

const infixes = [
  "", " confirmado", " comprovado", " denunciado", " revelado",
  " escondido", " secreto", " proibido", " proibida", " oculto"
];

const suffixes = [
  "", " agora", " já", " antes que apaguem", " sem censura", " por favor compartilhe",
  " vídeo", " imagem", " estudo", " pesquisa", " documento", " arquivo"
];

// 3) Lista inicial manual (mantemos alguns termos importantes explícitos)
const explicit = [
  // termos mais usados em fake news - explícitos
  "compartilhe antes que apaguem", "não querem que você saiba", "segredo do governo",
  "cura do câncer encontrada", "cura do HIV encontrada", "milagre comprovado",
  "cura milagrosa da diabetes", "cura natural para câncer", "vacina causa autismo",
  "vacina mata crianças", "vacina foi retirada", "experimento proibido",
  "laboratório secreto", "engenharia social", "manipulação da mídia",
  "teoria da conspiração", "mídia oculta", "empresas escondem", "indústria esconde"
];

// 4) Geração automática: combina bases × prefixes × infixes × suffixes
// Usamos um Set para evitar duplicatas e limitar a quantidade (por segurança)
// Iremos gerar até pelo menos 1200 entradas (ou mais, conforme combinações)
const suspeitasSet = new Set();

// adiciona explicitamente
explicit.forEach(s => suspeitasSet.add(s.toLowerCase()));

// adiciona as bases simples
bases.forEach(b => suspeitasSet.add(b.toLowerCase()));

// combinações
for (let pre of prefixes) {
  for (let b of bases) {
    for (let inf of infixes) {
      for (let suf of suffixes) {
        // constrói frase
        let frase = (pre + b + inf + suf).trim();
        // normaliza espaços
        frase = frase.replace(/\s+/g, ' ').trim().toLowerCase();
        if (frase.length > 0) suspeitasSet.add(frase);
        if (suspeitasSet.size >= 1800) break;
      }
      if (suspeitasSet.size >= 1800) break;
    }
    if (suspeitasSet.size >= 1800) break;
  }
  if (suspeitasSet.size >= 1800) break;
}

// 5) Adiciona variações comuns (pluralização, com e sem acento, com hífen)
const extras = [
  "vacinas perigosas","vacinas mata","vacina perigosa", "cura milagrosa confirmada",
  "cura milagrosa comprovada", "cura caseira incrível", "remédio natural milagroso",
  "cura rápida", "cura instantânea", "cura em 3 dias", "cura em 5 dias",
  "cura em 10 dias", "remédio secreto da família", "segredo revelado pelo médico"
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
