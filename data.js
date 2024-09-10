let filmes = [
    {
        titulo: "Nausicaä do Vale do Vento",
        ano: "1984",
        sinopse: "Em um futuro pós-apocalíptico, onde a humanidade devastou o planeta, surge Nausicaä, princesa do Vale do Vento. Em um mundo dominado por uma floresta tóxica e criaturas gigantescas, a jovem busca compreender a natureza e encontrar um caminho para a coexistência entre humanos e a natureza.",
        link: "https://studioghibli.com.br/filmografia/nausicaa-do-vale-do-vento/",
        tags: "aventura fantasia pós-apocalíptico ecologia feminismo guerra ação"
    },
    {
        titulo: "O Castelo no Céu",
        ano: "1986",
        sinopse: "Laputa, uma ilha flutuante, é a chave para um futuro brilhante ou para a destruição do mundo. Em busca da lendária ilha, o jovem Pazu e a misteriosa Sheeta embarcam em uma aventura emocionante, perseguidos por piratas do ar e pelo exército.",
        link: "https://studioghibli.com.br/filmografia/o-castelo-no-ceu/",
        tags: "aventura fantasia steampunk ilha flutuante piratas ação amizade"
    },
    {
        titulo: "Meu Amigo Totoro",
        ano: "1988",
        sinopse: "Duas irmãs se mudam com o pai para o campo e descobrem um mundo mágico habitado por criaturas encantadoras, como o Totoro, um espírito da floresta. Uma história emocionante sobre a infância, a natureza e a imaginação.",
        link: "https://studioghibli.com.br/filmografia/meu-amigo-totoro/",
        tags: "fantasia infância amizade família natureza criaturas mágicas imaginação"
    },
    {
        titulo: "Túmulo dos Vagalumes",
        ano: "1988",
        sinopse: "Em meio ao caos da Segunda Guerra Mundial, dois irmãos órfãos lutam para sobreviver no Japão devastado. Uma história comovente sobre a perda, a esperança e a dura realidade da guerra.",
        link: "https://studioghibli.com.br/filmografia/tumulo-dos-vagalumes/",
        tags: "drama guerra sobrevivência família perda esperança realidade"
    },
    {
        titulo: "O Serviço de Entregas da Kiki",
        ano: "1989",
        sinopse: "Kiki, uma jovem bruxa, precisa passar por um período de treinamento em uma nova cidade. Com sua vassoura mágica e seu gato preto Jiji, ela inicia um serviço de entregas voadoras, aprendendo sobre independência, amizade e autoconfiança.",
        link: "https://studioghibli.com.br/filmografia/o-servico-de-entregas-da-kiki/",
        tags: "fantasia bruxaria amadurecimento amizade independência autoconfiança magia"
    },
    {
        titulo: "Memórias de Ontem",
        ano: "1991",
        sinopse: "Taeko, uma mulher solteira de 27 anos, viaja para o interior do Japão e revive memórias de sua infância. Uma história delicada sobre nostalgia, autoconhecimento e as escolhas que fazemos na vida.",
        link: "https://studioghibli.com.br/filmografia/memorias-de-ontem/",
        tags: "drama romance nostalgia autoconhecimento vida adulta infância memórias"
    },
    {
        titulo: "Porco Rosso: O Último Herói Romântico",
        ano: "1992",
        sinopse: "Um piloto habilidoso, amaldiçoado com a aparência de um porco, combate piratas aéreos no mar Adriático. Uma aventura emocionante com toques de romance, humor e crítica social.",
        link: "https://studioghibli.com.br/filmografia/porco-rosso/",
        tags: "aventura comédia romance piratas aviação maldição crítica social"
    },
    {
        titulo: "Eu Posso Ouvir o Oceano",
        ano: "1993",
        sinopse: "Um triângulo amoroso entre três amigos de escola no litoral do Japão. Uma história sensível sobre amadurecimento, amizade e os desafios da adolescência.",
        link: "https://studioghibli.com.br/filmografia/eu-posso-ouvir-o-oceano/",
        tags: "drama romance adolescência amizade primeiro amor relacionamentos escola"
    },
    {
        titulo: "Pom Poko: A Grande Batalha dos Guaxinins",
        ano: "1994",
        sinopse: "Guaxinins mágicos lutam para proteger sua floresta da expansão urbana. Uma aventura divertida e com toques ecológicos, que aborda a importância da natureza e o impacto da ação humana.",
        link: "https://studioghibli.com.br/filmografia/pom-poko/",
        tags: "aventura comédia fantasia ecologia folclore japonês animais meio ambiente"
    },
    {
        titulo: "Sussurros do Coração",
        ano: "1995",
        sinopse: "Shizuku, uma jovem apaixonada por livros, conhece Seiji, um talentoso aprendiz de luthier. Juntos, eles compartilham sonhos, inspirações e o amor pela música. Uma história encantadora sobre amadurecimento, seguir seus sonhos e a importância da arte.",
        link: "https://studioghibli.com.br/filmografia/sussurros-do-coracao/",
        tags: "romance drama música amadurecimento sonhos arte primeiro amor livros"
    },
    {
        titulo: "Princesa Mononoke",
        ano: "1997",
        sinopse: "Em um Japão feudal mágico, um príncipe amaldiçoado busca a cura e se vê no meio de uma batalha entre os deuses da floresta e os humanos que exploram seus recursos. Uma aventura épica sobre a relação entre a humanidade e a natureza.",
        link: "https://studioghibli.com.br/filmografia/princesa-mononoke/",
        tags: "aventura fantasia ação ecologia folclore japonês guerra espiritualidade"
    },
    {
        titulo: "Meus Vizinhos os Yamadas",
        ano: "1999",
        sinopse: "Uma comédia leve e divertida sobre o cotidiano de uma família japonesa comum, os Yamadas. O filme retrata os desafios e alegrias da vida familiar com humor e sensibilidade.",
        link: "https://studioghibli.com.br/filmografia/meus-vizinhos-os-yamadas/",
        tags: "comédia família cotidiano humor cultura japonesa relacionamentos animação"
    },
    {
        titulo: "A Viagem de Chihiro",
        ano: "2001",
        sinopse: "Chihiro, uma menina de 10 anos, se muda para uma nova cidade e entra em um mundo mágico. Para salvar seus pais, transformados em porcos, ela precisa trabalhar em uma casa de banho para espíritos.",
        link: "https://studioghibli.com.br/filmografia/a-viagem-de-chihiro/",
        tags: "fantasia aventura magia espíritos folclore japonês superação amizade"
    },
    {
        titulo: "O Reino dos Gatos",
        ano: "2002",
        sinopse: "Haru, uma jovem desastrada, salva um gato de ser atropelado e descobre que ele é um príncipe do Reino dos Gatos. Convidada para se casar com o príncipe, ela embarca em uma aventura felina.",
        link: "https://studioghibli.com.br/filmografia/o-reino-dos-gatos/",
        tags: "fantasia aventura comédia gatos magia amizade reino animal"
    },
    {
        titulo: "O Castelo Animado",
        ano: "2004",
        sinopse: "Sophie, uma jovem chapeleira, é amaldiçoada por uma bruxa e transformada em uma velha. Em busca de uma cura, ela se junta a Howl, um misterioso mago que vive em um castelo ambulante.",
        link: "https://studioghibli.com.br/filmografia/o-castelo-animado/",
        tags: "fantasia aventura romance bruxaria magia autoaceitação guerra"
    },
    {
        titulo: "Contos de Terramar",
        ano: "2006",
        sinopse: "Em um mundo mágico, um príncipe em fuga, um arquimago e uma jovem misteriosa se cruzam em uma aventura épica. Baseado nos livros de Ursula K. Le Guin.",
        link: "https://studioghibli.com.br/filmografia/contos-de-terramar/",
        tags: "fantasia aventura magia dragões destino superação literatura"
    },
    {
        titulo: "Ponyo: Uma Amizade que Veio do Mar",
        ano: "2008",
        sinopse: "Um peixinho mágico foge de casa e conhece Sosuke, um menino humano. Desejando se tornar humana, Ponyo embarca em uma aventura que pode desequilibrar o mundo.",
        link: "https://studioghibli.com.br/filmografia/ponyo-uma-amizade-que-veio-do-mar/",
        tags: "fantasia aventura amizade magia criaturas marinhas família infância"
    },
    {
        titulo: "O Mundo dos Pequeninos",
        ano: "2010",
        sinopse: "Uma família de pessoas minúsculas, que vivem escondidas em uma casa humana, precisa se mudar quando seu lar é ameaçado. Uma aventura emocionante sobre a importância da família e do lar.",
        link: "https://studioghibli.com.br/filmografia/o-mundos-dos-pequeninos/",
        tags: "fantasia aventura família amizade superação miniaturas coexistência"
    },
    {
        titulo: "Da Colina Kokuriko",
        ano: "2011",
        sinopse: "Dois estudantes se apaixonam enquanto tentam salvar o antigo clube de seu colégio da demolição. Uma história delicada sobre amadurecimento, amizade e a importância de preservar o passado.",
        link: "https://studioghibli.com.br/filmografia/da-colina-kokuriko/",
        tags: "romance drama amizade preservação história cultura japonesa adolescência"
    },
    {
        titulo: "Vidas ao Vento",
        ano: "2013",
        sinopse: "Jiro Horikoshi, um jovem apaixonado por aviação, sonha em construir aviões incríveis. Inspirado por um famoso projetista italiano, ele enfrenta desafios e tragédias para realizar seu sonho.",
        link: "https://studioghibli.com.br/filmografia/vidas-ao-vento/",
        tags: "drama biografia aviação sonhos persistência guerra Japão"
    },
    {
        titulo: "O Conto da Princesa Kaguya",
        ano: "2013",
        sinopse: "Uma princesa da lua é encontrada dentro de um bambu brilhante e criada por um casal de camponeses. À medida que cresce, ela precisa escolher entre a vida simples na Terra e seu destino celestial.",
        link: "https://studioghibli.com.br/filmografia/o-conto-da-princesa-kaguya/",
        tags: "fantasia drama folclore japonês crescimento destino aceitação melancolia"
    },
    {
        titulo: "As Memórias de Marnie",
        ano: "2014",
        sinopse: "Anna, uma menina solitária, é enviada para passar o verão com seus tios no litoral. Lá, ela conhece Marnie, uma misteriosa garota que vive em uma mansão à beira-mar.",
        link: "https://studioghibli.com.br/filmografia/as-memorias-de-marnie/",
        tags: "fantasia drama mistério amizade autodescoberta família solidão"
    },
    {
        titulo: "Aya e a Bruxa",
        ano: "2020",
        sinopse: "Aya, uma menina órfã, é adotada por uma bruxa egoísta e embarca em uma aventura mágica. Com a ajuda de um gato falante, ela precisa usar sua inteligência e astúcia para enfrentar a bruxa.",
        link: "https://studioghibli.com.br/filmografia/aya-e-a-bruxa/",
        tags: "fantasia aventura bruxaria magia amizade superação determinação"
    },
    {
        titulo: "O Menino e a Garça",
        ano: "2023",
        sinopse: "Um garoto lidando com a perda da mãe e a mudança para o campo conhece uma garça falante que o leva para um mundo mágico. Uma história sobre amadurecimento, fantasia e esperança.",
        link: "https://studioghibli.com.br/filmografia/o-menino-e-a-garca/",
        tags: "fantasia aventura drama superação amizade esperança magia"
    }
];

