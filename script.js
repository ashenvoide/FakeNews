// Este é um exemplo simplificado de como a lógica de verificação funcionaria no navegador.
// Para um projeto real, seria necessário um back-end e técnicas mais sofisticadas.

const palavrasSuspeitas = [
    "cura milagrosa", "remédio secreto", "teoria da conspiração", "revelado",
    "exclusivo", "urgente", "chocante", "inacreditável", "proibido", "censurado",
    "fim do mundo", "sinais", "verdade oculta", "plano secreto", "controle",
    "elite", "globalista", "nova ordem mundial", "satânico", "illuminati",
    "agenda", "vacina perigosa", "efeitos colaterais graves", "contém veneno",
    "causa autismo", "microchip", "5G perigoso", "radiação prejudicial",
    "terra plana", "chemtrails", "adrenocromo", "cloroquina cura", "ivermectina cura",
    "soro da verdade", "contas falsas", "robôs", "bots", "exército virtual",
    "fake news", "notícia falsa", "desmascarado", "fraude", "golpe", "mentira",
    "engano", "farsa", "manipulação", "distorção", "sensacionalista", "escândalo",
    "sequestro", "abdução", "alienígena", "OVNI", "fantasma", "espírito",
    "sobrenatural", "bruxaria", "feitiço", "maldição", "milagre", "profecia",
    "apocalipse", "anticristo", "demônio", "anjo caído", "entidade", "portal",
    "dimensão", "viagem no tempo", "teletransporte", "invisibilidade", "levitação",
    "telecinese", "clarividência", "telepatia", "poderes psíquicos", "aura",
    "energia", "vibração", "chakra", "karma", "reencarnação", "astrologia",
    "tarot", "numerologia", "quiromancia", "magia", "ocultismo", "esoterismo",
    "misticismo", "ayahuasca", "chá de cogumelo", "dimetiltriptamina", "DMT",
    "psicodélico", "alucinógeno", "cannabis cura", "óleo de CBD cura", "legalização",
    "descriminalização", "proibição", "guerra às drogas", "narcotráfico", "cartel",
    "facção", "tráfico humano", "exploração sexual", "pedofilia", "pornografia infantil",
    "abuso", "assédio", "violência sexual", "estupro", "incesto", "seita", "culto",
    "fanatismo religioso", "extremismo", "terrorismo", "radicalismo", "jihad",
    "fundamentalismo", "nazismo", "fascismo", "racismo", "xenofobia", "antissemitismo",
    "islamofobia", "homofobia", "transfobia", "misoginia", "machismo", "supremacia branca",
    "nacionalismo extremista", "separatismo", "genocídio", "limpeza étnica", "massacre",
    "tortura", "execução", "pena de morte", "suicídio", "eutanásia", "aborto",
    "clonagem", "edição genética", "OGM", "transgênico", "veneno", "agrotóxico",
    "poluição", "aquecimento global", "mudanças climáticas", "negação do clima",
    "terra oca", "civilização perdida", "ATLANTIDA", "EL DORADO", "SACRED GEOMETRY",
    "free energy", "perpetual motion", "anti-gravity", "area 51", "roswell",
    "alien autopsy", "men in black", "crop circles", "bigfoot", "yeti", "chupacabra",
    "sereia", "lobisomem", "vampiro", "zumbi", "fantasma", "maldição", "possessão",
    "exorcismo", "demônio", "anjo caído", "anticristo", "apocalipse", "profecia",
    "fim do mundo", "arrebatamento", "tribulação", "anticristo", "sinais",
    "cura gay", "terapia de conversão", "ideologia de gênero", "marxismo cultural",
    "globalismo", "foro de são paulo", "comunismo", "socialismo", "capitalismo",
    "liberalismo", "conservadorismo", "anarquismo", "fascismo", "nazismo",
    "ditadura", "democracia", "monarquia", "república", "oligarquia", "teocracia",
    "plutocracia", "tecnocracia", "sinarquia", "criptocracia", "kakistocracia",
    "kleptocracia", "ochlocracia", "partidocracia", "burocracia", "meritocracia",
    "aristocracia", "demagogia", "propaganda", "doutrinação", "lavagem cerebral",
    "manipulação midiática", "controle da informação", "notícias falsas", "deepfake",
    "inteligência artificial perigosa", "robôs assassinos", "singularidade",
    "matrix", "simulação", "vida após a morte", "experiência de quase morte", "EQM",
    "projecção astral", "viagem astral", "corpo astral", "espírito", "alma",
    "reencarnação", "karma", "dharma", "nirvana", "samsara", "moksha", "iluminação",
    "despertar", "consciência", "expansão da consciência", "terceiro olho", "pineal",
    "meditação", "yoga", "reiki", "acupuntura", "homeopatia", "cristais", "tarot",
    "astrologia", "numerologia", "quiromancia", "leitura de aura", "passe",
    "cromoterapia", "musicoterapia", "aromaterapia", "fitoterapia", "cura quântica",
    "medicina alternativa", "tratamento natural", "remédio caseiro", "chá milagroso",
    "dieta detox", "jejum intermitente", "veganismo cura", "crudivorismo cura",
    "frutarianismo cura", "respiracionismo", "imunidade de rebanho", "distanciamento social",
    "máscara ineficaz", "lockdown desnecessário", "economia em colapso", "crise financeira",
    "hiperinflação", "bolha imobiliária", "mercado de ações manipulado", "ouro digital",
    "criptomoeda é fraude", "blockchain é seguro", "hackers invadem", "dados vazados",
    "vigilância em massa", "controle total", "big brother", "estado policial",
    "perda de liberdade", "direitos humanos violados", "censura", "perseguição",
    "guerra civil", "insurreição", "revolução", "protesto violento", "quebra-quebra",
    "saque", "anarquia", "caos", "destruição", "catástrofe natural", "terremoto",
    "tsunami", "vulção", "furacão", "tornado", "enchente", "seca", "pandemia",
    "epidemia", "vírus letal", "doença misteriosa", "cura encontrada", "vacina obrigatória",
    "passaporte sanitário", "controle populacional", "eugenia", "esterilização forçada",
    "experimentos secretos", "cobaias humanas", "clonagem humana", "ciborgues",
    "inteligência artificial superior", "fim da humanidade", "era das máquinas",
    "conflito intergaláctico", "invasão alienígena", "arma secreta", "raio da morte",
    "controle mental", "hipnose", "subliminar", "propaganda subliminar", "guerra psicológica",
    "operação de bandeira falsa", "false flag operation", "agente infiltrado", "espião",
    "sabotagem", "terrorismo de estado", "guerra híbrida", "ataque cibernético", "guerra fria",
    "nova guerra fria", "conflito nuclear", "ameaça existencial", "crise humanitária",
    "fome", "pobreza extrema", "desigualdade social", "injustiça", "corrupção", "impunidade",
    "sistema falido", "reforma urgente", "mudança radical", "resistência", "revolta",
    "libertação", "despertar da consciência", "nova era", "transição planetária",
    "ascensão", "quinta dimensão", "seres de luz", "mestres ascensos", "pleiadianos",
    "sirianos", "arcturianos", "comandos estelares", "frota estelar", "confederação galáctica",
    "anjos", "arcanjos", "demônios", "entidades", "espíritos", "obsessores", "mentores espirituais",
    "guias espirituais", "protetores", "oração", "meditação", "mantra", "ritual", "magia",
    "feitiço", "amarração amorosa", "pacto", "sacrifício", "maldição", "quebranto", "mau-olhado",
    "simpatia", "banho de descarrego", "limpeza energética", "alinhamento de chakras",
    "cura prânica", "toque terapêutico", "massagem tântrica", "expansão da sexualidade",
    "liberação sexual", "poliamor", "relacionamento aberto", "swinger", "BDSM", "fetiche",
    "transgeneridade", "não-binaridade", "gênero fluido", "orientação sexual", "identidade de gênero",
    "direitos LGBTQIA+", "movimento feminista", "luta antirracista", "questão indígena",
    "causa animal", "proteção ambiental", "desenvolvimento sustentável", "economia verde",
    "criptomoedas", "bitcoin", "ethereum", "finanças descentralizadas", "DeFi", "NFTs",
    "metaverso", "realidade virtual", "realidade aumentada", "inteligência artificial",
    "machine learning", "big data", "internet das coisas", "IOT", "cidades inteligentes",
    "tecnologia 5G", "energia limpa", "energia solar", "energia eólica", "energia nuclear",
    "fusão nuclear", "viagem espacial", "colonização de marte", "busca por vida extraterrestre",
    "SETI", "espaço profundo", "buracos negros", "buracos de minhoca", "viagem no tempo",
    "universos paralelos", "multiverso", "teoria das cordas", "física quântica",
    "consciência quântica", "campo unificado", "energia do ponto zero", "vácuo quântico",
    "anti-matéria", "matéria escura", "energia escura", "expansão do universo", "big bang",
    "big crunch", "big rip", "ciclo cósmico", "simulação", "vida é uma simulação",
    "criacionismo", "design inteligente", "evolucionismo", "darwinismo social",
    "eugenia", "melhoramento genético", "edição de genes", "CRISPR", "bebês de proveta",
    "fertilização in vitro", "barriga de aluguel", "transplante de órgãos",
    "órgãos artificiais", "próteses biônicas", "interface cérebro-computador",
    "exosqueleto", "nanotecnologia", "medicina regenerativa", "células estaminais",
    "terapia genética", "imortalidade", "extensão da vida", "criogenia", "consciência digital",
    "upload da mente", "singularidade tecnológica", "inteligência artificial super-humana",
    "transumanismo", "pós-humanismo", "chip cerebral", "implante cibernético",
    "realidade sintética", "mundo virtual", "jogos online perigosos", "vício em tecnologia",
    "isolamento social", "depressão", "ansiedade", "saúde mental", "terapia", "psiquiatria",
    "psicologia", "neurociência", "funcionamento do cérebro", "memória", "aprendizagem",
    "emoções", "consciência", "subconsciente", "inconsciente coletivo", "arquétipos",
    "sincronicidade", "intuição", "criatividade", "medo", "raiva", "tristeza", "alegria",
    "amor", "ódio", "ciúme", "inveja", "culpa", "vergonha", "arrependimento", "esperança",
    "fé", "perdão", "compaixão", "empatia", "generosidade", "gratidão", "felicidade",
    "propósito", "sentido da vida", "busca espiritual", "religião", "filosofia", "ciência",
    "arte", "música", "literatura", "poesia", "pintura", "escultura", "teatro", "cinema",
    "dança", "fotografia", "arquitetura", "gastronomia", "viagem", "cultura", "história",
    "geografia", "matemática", "física", "química", "biologia", "astronomia", "geologia",
    "meteorologia", "oceanografia", "antropologia", "sociologia", "economia", "política",
    "direito", "educação", "saúde", "bem-estar", "esporte", "lazer", "entretenimento",
    "notícias", "informação", "comunicação", "mídia", "internet", "redes sociais",
    "tecnologia", "inovação", "futuro", "passado", "presente", "tempo", "espaço", "universo",
    "terra", "planeta", "sol", "lua", "estrelas", "galáxias", "cosmo", "átomo", "molécula",
    "célula", "DNA", "gene", "vida", "morte", "nascimento", "infância", "adolescência",
    "adulto", "idoso", "família", "amigos", "sociedade", "humanidade", "mundo", "país",
    "cidade", "natureza", "animal", "planta", "mineral", "elemento", "substância",
    "energia", "força", "movimento", "velocidade", "aceleração", "gravidade", "luz",
    "som", "calor", "frio", "pressão", "volume", "massa", "peso", "distância", "tempo",
    "temperatura", "clima", "estação", "dia", "noite", "manhã", "tarde", "noite", "hora",
    "minuto", "segundo", "ano", "mês", "semana", "dia", "data", "calendário", "relógio",
    "mapa", "bússola", "gps", "telefone", "computador", "internet", "software", "hardware",
    "aplicativo", "programa", "código", "linguagem", "algoritmo", "rede", "servidor",
    "cliente", "site", "blog", "fórum", "chat", "email", "mensagem", "chamada", "vídeo",
    "áudio", "imagem", "texto", "arquivo", "pasta", "disco", "memória", "processador",
    "monitor", "teclado", "mouse", "impressora", "scanner", "câmera", "microfone",
    "alto-falante", "fone de ouvido", "bateria", "carregador", "cabo", "adaptador",
    "router", "modem", "switch", "hub", "cabo de rede", "wi-fi", "bluetooth", "USB",
    "HDMI", "VGA", "ethernet", "fibra óptica", "satélite", "rádio", "televisão",
    "jornal", "revista", "livro", "dicionário", "enciclopédia", "glossário", "manual",
    "guia", "instrução", "tutorial", "exemplo", "demonstração", "simulação", "modelo",
    "protótipo", "projeto", "plano", "ideia", "conceito", "teoria", "hipótese",
    "pesquisa", "estudo", "análise", "relatório", "artigo", "tese", "dissertação",
    "monografia", "livro didático", "material de referência", "documentação",
    "especificação", "padrão", "norma", "protocolo", "regra", "lei", "código",
    "regulamento", "diretriz", "recomendação", "orientação", "conselho", "sugestão",
    "dica", "truque", "segredo", "mistério", "enigma", "quebra-cabeça", "jogo",
    "brinquedo", "diversão", "entretenimento", "passatempo", "hobby", "arte",
    "artesanato", "culinária", "jardinagem", "colecionismo", "esporte", "atividade física",
    "exercício", "treinamento", "dieta", "alimentação saudável", "nutrição", "receita",
    "ingrediente", "tempero", "sabor", "aroma", "textura", "cor", "som", "luz",
    "temperatura", "clima", "estação", "paisagem", "ambiente", "ecossistema",
    "biodiversidade", "natureza", "animal", "planta", "fungo", "micróbio", "vírus",
    "bactéria", "célula", "átomo", "partícula", "onda", "campo", "energia", "força",
    "matéria", "espaço", "tempo", "universo", "realidade", "ilusão", "sonho",
    "imaginação", "fantasia", "criatividade", "inspiração", "ideia", "pensamento",
    "razão", "lógica", "intuição", "sentimento", "emoção", "paixão", "desejo",
    "necessidade", "motivação", "objetivo", "meta", "plano", "ação", "resultado",
    "consequência", "causa", "efeito", "problema", "solução", "dificuldade",
    "oportunidade", "desafio", "sucesso", "fracasso", "vitória", "derrota",
    "conflito", "cooperação", "competição", "colaboração", "acordo", "desacordo",
    "negociação", "diplomacia", "guerra", "paz", "justiça", "injustiça", "igualdade",
    "desigualdade", "liberdade", "opressão", "direitos", "deveres", "responsabilidade",
    "ética", "moral", "valor", "princípio", "crença", "religião", "espiritualidade",
    "fé", "esperança", "amor", "medo", "coragem", "covardia", "generosidade",
    "egoísmo", "honestidade", "mentira", "verdade", "confiança", "desconfiança",
    "lealdade", "traição", "amizade", "inimizade", "família", "comunidade", "sociedade",
    "cultura", "tradição", "costume", "hábito", "rotina", "mudança", "transformação",
    "evolução", "revolução", "progresso", "retrocesso", "avanço", "estagnação",
    "desenvolvimento", "crescimento", "declínio", "auge", "fim", "começo", "início",
    "meio", "fim", "ciclo", "processo", "sistema", "estrutura", "organização",
    "instituição", "governo", "estado", "nação", "país", "cidade", "aldeia", "casa",
    "família", "indivíduo", "pessoa", "ser humano", "vida", "morte", "nascimento"
];

async function verificarNoticia() {
    const texto = document.getElementById("textoNoticia").value;
    const resultado = document.getElementById("resultado");

    if (texto.trim() === '') {
        resultado.innerHTML = "Por favor, insira um texto para verificar.";
        resultado.className = "alerta-neutro";
        return;
    }

    try {
        resultado.innerHTML = "Analisando o texto em busca de padrões suspeitos...";
        resultado.className = "alerta-neutro";

        let suspeitoEncontrado = false;
        const textoMinusculo = texto.toLowerCase();
        let fonteSuspeita = "";

        // Análise de palavras-chave no navegador (simplificado)
        for (const palavra of palavrasSuspeitas) {
            if (textoMinusculo.includes(palavra)) {
                suspeitoEncontrado = true;
                fonteSuspeita = "Palavras-chave suspeitas detectadas";
                break;
            }
        }

        if (suspeitoEncontrado) {
            resultado.innerHTML = `⚠️ **Conteúdo suspeito encontrado!** (${fonteSuspeita})`;
            resultado.className = "alerta-fake";
        } else {
            resultado.innerHTML = "🔍 **Análise inicial não encontrou padrões suspeitos.** Lembre-se de sempre verificar em fontes confiáveis.";
            resultado.className = "alerta-verdade";
        }

        // Em um projeto real, aqui você faria uma requisição para o back-end
        // para realizar buscas mais aprofundadas em APIs de busca e agências de checagem.

    } catch (error) {
        console.error('Erro na análise:', error);
        resultado.innerHTML = "❌ Erro ao realizar a análise.";
        resultado.className = "alerta-fake";
    }
}
