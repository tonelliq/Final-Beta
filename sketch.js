
let width = 800
let height = 700

let count = 1

let x = width/2
let y = height/2

let integers
let metro = 0

let speed = width/160
let key = 'major'

let r = 150
let g = 0
let b = 0

let colorspeed = 0
let colorspeed2 = 0
let colorspeed3 = 0

let rspeed = 'up'
let gspeed = 'up'
let bspeed = 'up'


let color = 255
let color2 = 0
let color3 = [r, g, b]

let mode = 'intro'

let q = 0
let number = 1

let iscare = false
let iiscare = false
let iiiscare = false

//sentances
let title

function setup() {

  let mouseX
  let mouseY

  //width = windowWidth
  //height = windowHeight
  let canvas = createCanvas(width, height)
  canvas.parent("p5")
  //piano
  integers = ([width + width, width + width, width + width, width + width, width + width, width + width, width + width, width + width, width + width, width + width,  width + width, width + width, width + width, width + width, 0, width*.9375 - width/2, width*.875 - width/2, width*.8125 - width/2, width*.75 - width/2, width*.6875 - width/2, width*.625 - width/2, width*.5625 - width/2, width*.5 - width/2, width*.4375 - width/2, width*.375 - width/2, width*.3125 - width/2, width*.25 - width/2, width*.1875 - width/2, width*.125 - width/2, width*.0625 - width/2])
  //integers = ([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760, 770, 780, 790, 800])
  //integers = ([0, 200, 400, 600])

  p1 = (random(integers))
  p2 = (random(integers))
  p3 = (random(integers))
  p4 = (random(integers))
  p5 = (random(integers))
  p6 = (random(integers))
  p7 = (random(integers))
  p8 = (random(integers))
  p9 = (random(integers))
  p10 = (random(integers))
  p11 = (random(integers))
  p12 = (random(integers))
  p13 = (random(integers))

  pa1 = (random(integers))
  pa2 = (random(integers))
  pa3 = (random(integers))
  pa4 = (random(integers))
  pa5 = (random(integers))
  pa6 = (random(integers))
  pa7 = (random(integers))
  pa8 = (random(integers))
  pa9 = (random(integers))
  pa10 = (random(integers))
  pa11 = (random(integers))
  pa12 = (random(integers))
  pa13 = (random(integers))


  //sentences
  //titles = (['"AADOGKSMDNG"', '"NJFVNSRIGJ"', '"DRGL;KRSGR"', '"438TUFHIR"', '"IOHSEFHOI"', '"L;KEFSG;"' ])
  
  letters = (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '{', '}', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', ':', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', ',', '.', '/', '?'])
  letter = (random(letters))
  letter2 = (random(letters))
  letter3 = (random(letters))
  letter4 = (random(letters))
  letter5 = (random(letters))
  letter6 = (random(letters))
  letter7 = (random(letters))
  letter8 = (random(letters))
  letter9 = (random(letters))
  letter10 = (random(letters))
  letter11 = (random(letters))
  letter12 = (random(letters))
  letter13 = (random(letters))
  letter14 = (random(letters))
  letter15 = (random(letters))
  letter16 = (random(letters))
  letter17 = (random(letters))
  letter18 = (random(letters))
  letter19 = (random(letters))
  letter20 = (random(letters))
  letter21 = (random(letters))
  letter22 = (random(letters))
  letter23 = (random(letters))
  letter24 = (random(letters))
  letter25 = (random(letters))
  letter26 = (random(letters))
  letter27 = (random(letters))
  letter28 = (random(letters))
  letter29 = (random(letters))
  letter30 = (random(letters))
  letter31 = (random(letters))
  letter32 = (random(letters))
  letter33 = (random(letters))
  letter34 = (random(letters))
  letter35 = (random(letters))
  letter36 = (random(letters))
  letter37 = (random(letters))
  letter38 = (random(letters))
  letter39 = (random(letters))
  letter40 = (random(letters))
  letter41 = (random(letters))
  letter35 = (random(letters))
  letter36 = (random(letters))
  letter37 = (random(letters))
  letter38 = (random(letters))
  letter39 = (random(letters))
  letter40 = (random(letters))
  letter41 = (random(letters))
  letter42 = (random(letters))
  letter43 = (random(letters))
  letter44 = (random(letters))
  letter45 = (random(letters))
  letter46 = (random(letters))
  letter47 = (random(letters))
  letter48 = (random(letters))

  nouns = (['person ', 'skin ', 'time ', 'year ', 'man ', 'woman ', 'life ', 'child ', 'world ', 'family ', 'problem ', 'place ', 'night ', 'home ', 'water ', 'story ', 'eye ', 'word ', 'business ', 'kind ', 'head ', 'friend ', 'power ', 'pain ', 'end ', 'law ', 'name ', 'idea ', 'history ', 'reason ', 'love ', 'belief ', 'fear ', 'loss ', 'growth ', 'mind ', 'road '])
  
  verbs = (['accept ', 'adapt to ', 'adjust to ', 'admire ', 'adopt ', 'agree to ', 'apologize to ', 'appear ', 'argue with ', 'arrive at ', 'ask ', 'attach to ', 'avoid ', 'beat ', 'become ', 'bend ', 'break ', 'build ', 'burn ', 'climb ', 'consider ', 'continue ', 'create ', 'cry with ', 'cut ', 'dance with ', 'decide ', 'demand ', 'deny ', 'decide ', 'deliver ', 'deserve ', 'desire ', 'destroy ', 'disagree with ', 'doubt ', 'dream about ', 'drink ', 'drive ', 'drop ', 'expect ', 'explain ', 'fail ', 'fall ', 'fight ', 'find ', 'forget ', 'forgive ', 'freeze ', 'get ', 'give ', 'hate ', 'hear ', 'hide ', 'hit ', 'hold ', 'hurry ', 'ignore ', 'imagine ', 'insist ', 'kick ', 'kiss ', 'know ', 'laugh at ', 'leave ', 'listen to ', 'look at ', 'make ', 'meet ', 'offer ', 'overcome ', 'owe ', 'own ', 'pay ', 'play ', 'prepare ', 'promise ', 'provide ', 'react to ', 'read ', 'reflect ', 'regret ', 'rely on ', 'remember ', 'replace ', 'resent ', 'resist ', 'rise ', 'serve ', 'shoot ', 'steal ', 'stop ', 'struggle with ', 'suffer ', 'take ', 'tell ', 'think that ', 'try ', 'understand ', 'wait for ', 'want ', 'watch ', 'weep to '])

  verbends = (['accept ', 'adapt ', 'adjust ', 'admire ', 'adopt ', 'agree ', 'apologize ', 'appear ', 'argue ', 'arrive ', 'ask ', 'attach ', 'avoid ', 'beat ', 'become ', 'bend ', 'break ', 'build ', 'burn ', 'climb ', 'consider ', 'continue ', 'create ', 'cry ', 'cut ', 'dance ', 'decide ', 'demand ', 'deny ', 'decide ', 'deliver ', 'deserve ', 'desire ', 'destroy ', 'disagree ', 'doubt ', 'dream ', 'drink ', 'drive ', 'drop ', 'exist ', 'expect ', 'explain ', 'fail ', 'fall ', 'fight ', 'find ', 'forget ', 'forgive ', 'freeze ', 'get ', 'give ', 'hate ', 'hear ', 'hide ', 'hit ', 'hold on ', 'hurry ', 'ignore ', 'imagine ', 'insist ', 'kick ', 'kiss ', 'know ', 'laugh ', 'leave ', 'listen ', 'look ', 'meet ', 'offer ', 'overcome ', 'owe ', 'own ', 'pay ', 'play ', 'prepare ', 'pretend ', 'promise ', 'provide ', 'react ', 'read ', 'reflect ', 'regret ', 'rely ', 'remember ', 'replace ', 'resent ', 'resist ', 'rise ', 'serve ', 'shoot ', 'steal ', 'stop ', 'struggle ', 'suffer ', 'take ', 'tell ', 'think ', 'try ', 'understand ', 'wait ', 'want ', 'watch ', 'weep '])

  pastverbs = (['accepted ', 'adapted to ', 'adjusted to ', 'admired ', 'adopted ', 'agreed to ', 'apologized to ', 'appeared ', 'argued with ', 'arrived at ', 'asked ', 'attached to ', 'avoided ', 'beat ', 'became ', 'bent ', 'broke ', 'built ', 'burned ', 'climbed ', 'considered ', 'continued ', 'created ', 'cried with ', 'cut ', 'danced with ', 'demanded ', 'denied ', 'decided ', 'delivered ', 'deserved ', 'desired ', 'destroyed ', 'disagreed with ', 'doubted ', 'dreamt about ', 'drank ', 'drove ', 'dropped ', 'expected ', 'explained ', 'failed ', 'fell to ', 'fought ', 'found ', 'forgot ', 'forgave ', 'froze ', 'got ', 'gave ', 'hated ', 'heard ', 'hid ', 'hit ', 'held ', 'hurried ', 'ignored ', 'imagined ', 'insisted ', 'kicked ', 'kissed ', 'knew ', 'laughed at ', 'left ', 'listened to ', 'looked at ', 'made ', 'met ', 'offered ', 'overcame ', 'owed ', 'owned ', 'paid ', 'played ', 'prepared ', 'promised ', 'provided ', 'reacted to ', 'read ', 'reflected ', 'regretted ', 'relied on ', 'remembered ', 'replaced ', 'resented ', 'resisted ', 'rose ', 'served ', 'shot ', 'stole ', 'stopped ', 'struggled with ', 'suffered ', 'took ', 'told ', 'thought that ', 'tried ', 'understood ', 'waited for ', 'wanted ', 'watched ', 'wept to '])

  pastverbends = (['accepted ', 'adapted ', 'adjusted ', 'admired ', 'adopted ', 'agreed ', 'apologized ', 'appeared ', 'argued ', 'arrived ', 'asked ', 'attached ', 'avoided ', 'bite ', 'became ', 'bent ', 'broke ', 'built ', 'burned ', 'climbed ', 'considered ', 'continued ', 'created ', 'cried ', 'cut ', 'danced ', 'decided ', 'demanded ', 'denied ', 'delivered ', 'deserved ', 'desired ', 'destroyed ', 'disagreed ', 'doubted ', 'dreamt ', 'drank ', 'drove ', 'dropped ', 'existed ', 'expected ', 'explained ', 'failed ', 'fell ', 'fought ', 'found ', 'forgot ', 'forgave ', 'froze ', 'gave ', 'hated ', 'heard ', 'hid ', 'hit ', 'held on ', 'hurried ', 'ignored ', 'imagined ', 'insisted ', 'kicked ', 'kissed ', 'knew ', 'laughed ', 'left ', 'listened ', 'looked ', 'made ', 'met ', 'offered ', 'overcame ', 'owed ', 'owned ', 'paid ', 'played ', 'prepared ', 'pretended ', 'promised ', 'provided ', 'reacted ', 'read ', 'reflected ', 'regretted ', 'relied ', 'remembered ', 'replaced ', 'resented ', 'resisted ', 'rose ', 'served ', 'shot ', 'stole ', 'stopped ', 'struggled ', 'suffered ', 'took ', 'told ', 'thought ', 'tried ', 'understood ', 'waited ', 'wanted ', 'watched ', 'wept '])

  adverbs = (['accidentally ', 'dutifully ', 'finally ', 'innocently ', 'quickly ', 'slowly ', 'usually ', 'always ', 'eagerly ', 'gracefully ', 'hopelessly ', 'never ', 'often ', 'solemnly ', 'blindly ', 'defiantly ', 'only ', 'silently ', 'warmly '])
  
  adjectives = (['good ', 'new ', 'first ', 'great ', 'different ', 'young ', 'bad ', 'known ', 'united ', 'scared ', 'old ', 'willing ', 'forgotten ', 'hopeless ', 'dead ', 'gone ', 'wrong ', 'complete ', 'incomplete ', 'frozen ', 'silent ', 'closed ', 'impossible '])

  pronouns = (['i ', 'you ', 'he ', 'she ', 'we ', 'they ', 'it ', 'that '])

  pronounalts = (['me ', 'him ', 'her ', 'us ', 'them ', 'it '])
  
  singpossessives = (['my ', 'his ', 'her ', 'their ', 'the '])

  plurpossessives = (['mine ', 'his ', 'hers ', 'theirs '])

  prepositions = (['to ', 'away from '])

  conjunctions = (['and ', 'but '])
  
  the = (['the '])

  iswass = (['is ', 'was '])

  quote = (['"'])

  why = (['why '])

  question = (['?'])

  doess = (['do i ', 'do you ', 'does he ', 'does she ', 'do they ', 'do we '])

  gogets = (['go ', 'get '])

  iswaspronouns = (['am i ', 'are you ', 'is he ', 'is she ', 'are we ', 'are they ', 'is it ', 'is that '])
  
  who = (['who '])

  what = (['what '])

  period = ('.')

  puncts = (['', '', '', '', '', '', '', '', ':', ',', ',', ',', '.', '.'])


  //title = (random(titles))
  title = (quote + letter + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8 + quote)
 

  noun = (random(nouns))
  noun2 = (random(nouns))
  noun3 = (random(nouns))
  noun4 = (random(nouns))
  noun5 = (random(nouns))
  noun6 = (random(nouns))
  noun7 = (random(nouns))
  noun8 = (random(nouns))

  nounb = (random(nouns))
  nounb2 = (random(nouns))
  nounb3 = (random(nouns))
  nounb4 = (random(nouns))
  nounb5 = (random(nouns))
  nounb6 = (random(nouns))
  nounb7 = (random(nouns))
  nounb8 = (random(nouns))
 
  verb = (random(verbs))
  verb2 = (random(verbs))
  verb3 = (random(verbs))
  verb4 = (random(verbs))
  verb5 = (random(verbs))
  verb6 = (random(verbs))
  verb7 = (random(verbs))
  verb8 = (random(verbs))

  verbend = (random(verbends))
  verbend2 = (random(verbends))
  verbend3 = (random(verbends))
  verbend4 = (random(verbends))
  verbend5 = (random(verbends))
  verbend6 = (random(verbends))
  verbend7 = (random(verbends))
  verbend8 = (random(verbends))

  pastverb = (random(pastverbs))
  pastverb2 = (random(pastverbs))
  pastverb3 = (random(pastverbs))
  pastverb4 = (random(pastverbs))
  pastverb5 = (random(pastverbs))
  pastverb6 = (random(pastverbs))
  pastverb7 = (random(pastverbs))
  pastverb8 = (random(pastverbs))

  pastverbend = (random(pastverbends))
  pastverbend2 = (random(pastverbends))
  pastverbend3 = (random(pastverbends))
  pastverbend4 = (random(pastverbends))
  pastverbend5 = (random(pastverbends))
  pastverbend6 = (random(pastverbends))
  pastverbend7 = (random(pastverbends))
  pastverbend8 = (random(pastverbends))

  adverb = (random(adverbs))
  adverb2 = (random(adverbs))
  adverb3 = (random(adverbs))
  adverb4 = (random(adverbs))
  adverb5 = (random(adverbs))
  adverb6 = (random(adverbs))
  adverb7 = (random(adverbs))
  adverb8 = (random(adverbs))

  adjective = (random(adjectives))
  adjective2 = (random(adjectives))
  adjective3 = (random(adjectives))
  adjective4 = (random(adjectives))
  adjective5 = (random(adjectives))
  adjective6 = (random(adjectives))
  adjective7 = (random(adjectives))
  adjective8 = (random(adjectives))

  pronoun = (random(pronouns))
  pronoun2 = (random(pronouns))
  pronoun3 = (random(pronouns))
  pronoun4 = (random(pronouns))
  pronoun5 = (random(pronouns))
  pronoun6 = (random(pronouns))
  pronoun7 = (random(pronouns))
  pronoun8 = (random(pronouns))

  pronounalt = (random(pronounalts))
  pronounalt2 = (random(pronounalts))
  pronounalt3 = (random(pronounalts))
  pronounalt4 = (random(pronounalts))
  pronounalt5 = (random(pronounalts))
  pronounalt6 = (random(pronounalts))
  pronounalt7 = (random(pronounalts))
  pronounalt8 = (random(pronounalts))

  singpossessive = (random(singpossessives))
  singpossessive2 = (random(singpossessives))
  singpossessive3 = (random(singpossessives))
  singpossessive4 = (random(singpossessives))
  singpossessive5 = (random(singpossessives))
  singpossessive6 = (random(singpossessives))
  singpossessive7 = (random(singpossessives))
  singpossessive8 = (random(singpossessives))

  plurpossessive = (random(plurpossessives))
  plurpossessive2 = (random(plurpossessives))
  plurpossessive3 = (random(plurpossessives))
  plurpossessive4 = (random(plurpossessives))
  plurpossessive5 = (random(plurpossessives))
  plurpossessive6 = (random(plurpossessives))
  plurpossessive7 = (random(plurpossessives))
  plurpossessive8 = (random(plurpossessives))

  preposition = (random(prepositions))
  preposition2 = (random(prepositions))
  preposition3 = (random(prepositions))
  preposition4 = (random(prepositions))
  preposition5 = (random(prepositions))
  preposition6 = (random(prepositions))
  preposition7 = (random(prepositions))
  preposition8 = (random(prepositions))

  conjunction = (random(conjunctions))
  conjunction2 = (random(conjunctions))
  conjunction3 = (random(conjunctions))
  conjunction4 = (random(conjunctions))
  conjunction5 = (random(conjunctions))
  conjunction6 = (random(conjunctions))
  conjunction7 = (random(conjunctions))
  conjunction8 = (random(conjunctions))

  iswas = (random(iswass))
  iswas2 = (random(iswass))
  iswas3 = (random(iswass))
  iswas4 = (random(iswass))
  iswas5 = (random(iswass))
  iswas6 = (random(iswass))
  iswas7 = (random(iswass))
  iswas8 = (random(iswass))

  does = (random(doess))
  does2 = (random(doess))
  does3 = (random(doess))
  does4 = (random(doess))
  does5 = (random(doess))
  does6 = (random(doess))
  does7 = (random(doess))
  does8 = (random(doess))

  goget = (random(gogets))
  goget2 = (random(gogets))
  goget3 = (random(gogets))
  goget4 = (random(gogets))
  goget5 = (random(gogets))
  goget6 = (random(gogets))
  goget7 = (random(gogets))
  goget8 = (random(gogets))

  iswaspronoun = (random(iswaspronouns))
  iswaspronoun2 = (random(iswaspronouns))
  iswaspronoun3 = (random(iswaspronouns))
  iswaspronoun4 = (random(iswaspronouns))
  iswaspronoun5 = (random(iswaspronouns))
  iswaspronoun6 = (random(iswaspronouns))
  iswaspronoun7 = (random(iswaspronouns))
  iswaspronoun8 = (random(iswaspronouns))

  punct = (random(puncts))
  punct2 = (random(puncts))
  punct3 = (random(puncts))
  punct4 = (random(puncts))
  punct5 = (random(puncts))
  punct6 = (random(puncts))
  punct7 = (random(puncts))
  punct8 = (random(puncts))

sentances = ([
(singpossessive + noun + pastverb + punct),
(pronoun + pastverb + singpossessive + noun + punct),
(pronoun + pastverb + conjunction + pronoun + pastverbend + punct),
(pronoun + pastverb + singpossessive + noun + punct),
(pronoun + pastverb + adverb + punct),
(the + noun + iswas + plurpossessive + punct),
(pronoun + adverb + pastverb + the + noun + punct),
(why + iswas + singpossessive + noun + adjective + question),
(does + verbend + question),
(does + verb + pronounalt + question),
(does + verb + the + noun + question),
(why + does + verbend + question),
(the + noun + pastverb + the + nounb + punct),
(conjunction + pronoun + pastverbend + punct),
(why + iswaspronoun + adjective + question),
(goget + preposition + pronounalt + punct),
(goget + preposition + the + noun + punct),
(why + verbend + question),
(verb + pronounalt + punct),
(verb + pronounalt + conjunction + verbend + punct),
(who + iswaspronoun + question),
(adverb + punct),
(singpossessive + noun + iswas + adjective + punct)
])

sentances2 = ([
(singpossessive2 + noun2 + pastverb2 + punct2),
(pronoun2 + pastverb2 + singpossessive2 + noun2 + punct2),
(pronoun2 + pastverb2 + conjunction2 + pronoun2 + pastverbend2 + punct2),
(pronoun2 + pastverb2 + singpossessive2 + noun2 + punct2),
(pronoun2 + pastverb2 + adverb2 + punct2),
(the + noun2 + iswas2 + plurpossessive2 + punct2),
(pronoun2 + adverb2 + pastverb2 + the + noun2 + punct2),
(why + iswas2 + singpossessive2 + noun2 + adjective2 + question),
(does2 + verbend2 + question),
(does2 + verb2 + pronounalt2 + question),
(does2 + verb2 + the + noun2 + question),
(why + does2 + verbend2 + question),
(the + noun2 + pastverb2 + the + nounb2 + punct2),
(conjunction2 + pronoun2 + pastverbend2 + punct2),
(why + iswaspronoun2 + adjective2 + question),
(goget2 + preposition2 + pronounalt2 + punct2),
(goget2 + preposition2 + the + noun2 + punct2),
(why + verbend2 + question),
(verb2 + pronounalt2 + punct2),
(verb2 + pronounalt2 + conjunction2 + verbend2 + punct2),
(who + iswaspronoun2 + question),
(adverb2 + punct2),
(singpossessive2 + noun2 + iswas2 + adjective2 + punct2),
])

sentances3 = ([
(singpossessive3 + noun3 + pastverb3 + punct3),
(pronoun3 + pastverb3 + singpossessive3 + noun3 + punct3),
(pronoun3 + pastverb3 + conjunction3 + pronoun3 + pastverbend3 + punct3),
(pronoun3 + pastverb3 + singpossessive3 + noun3 + punct3),
(pronoun3 + pastverb3 + adverb3 + punct3),
(the + noun3 + iswas3 + plurpossessive3 + punct3),
(pronoun3 + adverb3 + pastverb3 + the + noun3 + punct3),
(why + iswas3 + singpossessive3 + noun3 + adjective3 + question),
(does3 + verbend3 + question),
(does3 + verb3 + pronounalt3 + question),
(does3 + verb3 + the + noun3 + question),
(why + does3 + verbend3 + question),
(the + noun3 + pastverb3 + the + nounb3 + punct3),
(conjunction3 + pronoun3 + pastverbend3 + punct3),
(why + iswaspronoun3 + adjective3 + question),
(goget3 + preposition3 + pronounalt3 + punct3),
(goget3 + preposition3 + the + noun3 + punct3),
(why + verbend3 + question),
(verb3 + pronounalt3 + punct3),
(verb3 + pronounalt3 + conjunction3 + verbend3 + punct3),
(who + iswaspronoun3 + question),
(adverb3 + punct3),
(singpossessive3 + noun3 + iswas3 + adjective3 + punct3)
])

sentances4 = ([
(singpossessive4 + noun4 + pastverb4 + punct4),
(pronoun4 + pastverb4 + singpossessive4 + noun4 + punct4),
(pronoun4 + pastverb4 + conjunction4 + pronoun4 + pastverbend4 + punct4),
(pronoun4 + pastverb4 + singpossessive4 + noun4 + punct4),
(pronoun4 + pastverb4 + adverb4 + punct4),
(the + noun4 + iswas4 + plurpossessive4 + punct4),
(pronoun4 + adverb4 + pastverb4 + the + noun4 + punct4),
(why + iswas4 + singpossessive4 + noun4 + adjective4 + question),
(does4 + verbend4 + question),
(does4 + verb4 + pronounalt4 + question),
(does4 + verb4 + the + noun4 + question),
(why + does4 + verbend4 + question),
(the + noun4 + pastverb4 + the + nounb4 + punct4),
(conjunction4 + pronoun4 + pastverbend4 + punct4),
(why + iswaspronoun4 + adjective4 + question),
(goget4 + preposition4 + pronounalt4 + punct4),
(goget4 + preposition4 + the + noun4 + punct4),
(why + verbend4 + question),
(verb4 + pronounalt4 + punct4),
(verb4 + pronounalt4 + conjunction4 + verbend4 + punct4),
(who + iswaspronoun4 + question),
(adverb4 + punct4),
(singpossessive4 + noun4 + iswas4 + adjective4 + punct4)
])

sentances5 = ([
(singpossessive5 + noun5 + pastverb5 + punct5),
(pronoun5 + pastverb5 + singpossessive5 + noun5 + punct5),
(pronoun5 + pastverb5 + conjunction5 + pronoun5 + pastverbend5 + punct5),
(pronoun5 + pastverb5 + singpossessive5 + noun5 + punct5),
(pronoun5 + pastverb5 + adverb5 + punct5),
(the + noun5 + iswas5 + plurpossessive5 + punct5),
(pronoun5 + adverb5 + pastverb5 + the + noun5 + punct5),
(why + iswas5 + singpossessive5 + noun5 + adjective5 + question),
(does5 + verbend5 + question),
(does5 + verb5 + pronounalt5 + question),
(does5 + verb5 + the + noun5 + question),
(why + does5 + verbend5 + question),
(the + noun5 + pastverb5 + the + nounb5 + punct5),
(conjunction5 + pronoun5 + pastverbend5 + punct5),
(why + iswaspronoun5 + adjective5 + question),
(goget5 + preposition5 + pronounalt5 + punct5),
(goget5 + preposition5 + the + noun5 + punct5),
(why + verbend5 + question),
(verb5 + pronounalt5 + punct5),
(verb5 + pronounalt5 + conjunction5 + verbend5 + punct5),
(who + iswaspronoun5 + question),
(adverb5 + punct5),
(singpossessive5 + noun5 + iswas5 + adjective5 + punct5)
])

sentances6 = ([
(singpossessive6 + noun6 + pastverb6 + punct6),
(pronoun6 + pastverb6 + singpossessive6 + noun6 + punct6),
(pronoun6 + pastverb6 + conjunction6 + pronoun6 + pastverbend6 + punct6),
(pronoun6 + pastverb6 + singpossessive6 + noun6 + punct6),
(pronoun6 + pastverb6 + adverb6 + punct6),
(the + noun6 + iswas6 + plurpossessive6 + punct6),
(pronoun6 + adverb6 + pastverb6 + the + noun6 + punct6),
(why + iswas6 + singpossessive6 + noun6 + adjective6 + question),
(does6 + verbend6 + question),
(does6 + verb6 + pronounalt6 + question),
(does6 + verb6 + the + noun6 + question),
(why + does6 + verbend6 + question),
(the + noun6 + pastverb6 + the + nounb6 + punct6),
(conjunction6 + pronoun6 + pastverbend6 + punct6),
(why + iswaspronoun6 + adjective6 + question),
(goget6 + preposition6 + pronounalt6 + punct6),
(goget6 + preposition6 + the + noun6 + punct6),
(why + verbend6 + question),
(verb6 + pronounalt6 + punct6),
(verb6 + pronounalt6 + conjunction6 + verbend6 + punct6),
(who + iswaspronoun6 + question),
(adverb6 + punct6),
(singpossessive6 + noun6 + iswas6 + adjective6 + punct6)
])

sentances7 = ([
(singpossessive7 + noun7 + pastverb7 + punct7),
(pronoun7 + pastverb7 + singpossessive7 + noun7 + punct7),
(pronoun7 + pastverb7 + conjunction7 + pronoun7 + pastverbend7 + punct7),
(pronoun7 + pastverb7 + singpossessive7 + noun7 + punct7),
(pronoun7 + pastverb7 + adverb7 + punct7),
(the + noun7 + iswas7 + plurpossessive7 + punct7),
(pronoun7 + adverb7 + pastverb7 + the + noun7 + punct7),
(why + iswas7 + singpossessive7 + noun7 + adjective7 + question),
(does7 + verbend7 + question),
(does7 + verb7 + pronounalt7 + question),
(does7 + verb7 + the + noun7 + question),
(why + does7 + verbend7 + question),
(the + noun7 + pastverb7 + the + nounb7 + punct7),
(conjunction7 + pronoun7 + pastverbend7 + punct7),
(why + iswaspronoun7 + adjective7 + question),
(goget7 + preposition7 + pronounalt7 + punct7),
(goget7 + preposition7 + the + noun7 + punct7),
(why + verbend7 + question),
(verb7 + pronounalt7 + punct7),
(verb7 + pronounalt7 + conjunction7 + verbend7 + punct7),
(who + iswaspronoun7 + question),
(adverb7 + punct7),
(singpossessive7 + noun7 + iswas7 + adjective7 + punct7)
])

sentances8 = ([
(singpossessive8 + noun8 + pastverb8 + period),
(pronoun8 + pastverb8 + singpossessive8 + noun8 + period),
(pronoun8 + pastverb8 + conjunction8 + pronoun8 + pastverbend8 + period),
(pronoun8 + pastverb8 + singpossessive8 + noun8 + period),
(pronoun8 + pastverb8 + adverb8 + period),
(the + noun8 + iswas8 + plurpossessive8 + period),
(pronoun8 + adverb8 + pastverb8 + the + noun8 + period),
(why + iswas8 + singpossessive8 + noun8 + adjective8 + question),
(does8 + verbend8 + question),
(does8 + verb8 + pronounalt8 + question),
(does8 + verb8 + the + noun8 + question),
(why + does8 + verbend8 + question),
(the + noun8 + pastverb8 + the + nounb8 + period),
(conjunction8 + pronoun8 + pastverbend8 + period),
(why + iswaspronoun8 + adjective8 + question),
(goget8 + preposition8 + pronounalt8 + period),
(goget8 + preposition8 + the + noun8 + period),
(why + verbend8 + question),
(verb8 + pronounalt8 + period),
(verb8 + pronounalt8 + conjunction8 + verbend8 + period),
(who + iswaspronoun8 + question),
(adverb8 + period),
(singpossessive8 + noun8 + iswas8 + adjective8 + period)
])

  sentance = (random(sentances))
  sentance2 = (random(sentances2))
  sentance3 = (random(sentances3))
  sentance4 = (random(sentances4))
  sentance5 = (random(sentances5))
  sentance6 = (random(sentances6))
  sentance7 = (random(sentances7))
  sentance8 = (random(sentances8))




//questionnaire
quests = ([
'how has your experience been so far ?',
'would you like to continue ?',
'please answer all questions truthfully .',
who + iswaspronoun + question,
does + verbend + question,
why + verbend + question,
letter + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8,
why + iswaspronoun + adjective + question,
why + iswas + singpossessive + noun + adjective + question,
what + does + verbend + question,
what + iswas + 'that ' + question,
what + iswaspronoun + verbend + question,
why + does + verbend + question,
'am i ' + adjective + question,
'are you ' + adjective + question,
])

questionnaire = random(quests)

}

function preload() {

  //font
  poem = loadFont('Bebas-Regular.otf')
  impact = loadFont('Impact_Label_Reversed.ttf')
  gothic = loadFont('OldLondon.ttf')
  
  //major
  A3 = loadSound('A3vH.wav')
  A4 = loadSound('A4vH.wav')
  A5 = loadSound('A5vH.wav')
  A6 = loadSound('A6vH.wav')
  A7 = loadSound('A7vH.wav')
  B1 = loadSound('B1vH.wav')
  B2 = loadSound('B2vH.wav')
  B7 = loadSound('B7vH.wav')
  C1 = loadSound('C1vH.wav')
  C4 = loadSound('C4vH.wav')
  C5 = loadSound('C5vH.wav')
  C6 = loadSound('C6vH.wav')
  C7 = loadSound('C7vH.wav')

  //minor
  D2 = loadSound('D2vH.wav')
  D3 = loadSound('D3vH.wav')
  D4 = loadSound('D4vH.wav')
  D5 = loadSound('D5vH.wav')
  D6 = loadSound('D6vH.wav')
  D7 = loadSound('D7vH.wav')
  F1 = loadSound('F1vH.wav')
  F2 = loadSound('F2vH.wav')
  F3 = loadSound('F3vH.wav')
  F4 = loadSound('F4vH.wav')
  F5 = loadSound('F5vH.wav')
  F6 = loadSound('F6vH.wav')
  F7 = loadSound('F7vH.wav')
}

function draw() {

  //print(count)
    //color3 =[random(0, 255), random(0, 255), random(0, 255)]

    // r += colorspeed
    // g += colorspeed2
    // b += colorspeed3
    color3 = ([r, g, b])

    glitch = (random(letters))
    glitch2 = (random(letters))
    glitch3 = (random(letters))
    glitch4 = (random(letters))


    if (r >= 200) {
      rspeed = 'down'
    } else if (r <= 50) {
      rspeed = 'up'
    }

    if (g >= 200) {
      gspeed = 'down'
    } else if (g <= 50) {
      gspeed = 'up'
    }

    if (b >= 200) {
      bspeed = 'down'
    } else if (b <= 50) {
      bspeed = 'up'
    }

    if (rspeed == 'up') {
      r += colorspeed
    } else if (rspeed == 'down') {
      r -= colorspeed
    }

    if (gspeed == 'up') {
      g += colorspeed2
    } else if (gspeed == 'down') {
      g -= colorspeed2
    }

    if (bspeed == 'up') {
      b += colorspeed3
    } else if (bspeed == 'down') {
      b -= colorspeed3
    }

    //print(g)
    //print(color3)

    background(color)
    
    //constants
    // push()
    // stroke(0)
    // strokeWeight(2)
    // fill(color)
    // rect(0, 0, width, height)
    // pop()

    // push()
    // textSize(16)
    // textFont()
    // noStroke()
    // fill(color)
    // text(count, 20, 30)
    // pop()

    metro += speed

    if (metro == width) {
      metro = 0
      count = (count + 1)
    }


    //intro
    if (mode == 'intro' && count <=3) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(44)
      textFont(poem)
      noStroke()
      fill(color)

      textAlign(CENTER, TOP)
      text('THE FOLLOWING IS A COLLECTION OF WORKS.', width/2, height*.25)

      textAlign(CENTER, CENTER)
      fill(color3)
      text('MANY ELEMENTS ARE RANDOMLY GENERATED.', width/2, height*.5)

      textAlign(CENTER, BASELINE)
      fill(color)
      text('USER INPUT IS OCCASIONALLY REQUIRED.', width/2, height*.75)
    } else if (mode == 'intro' && count == 4) {
      mode = 'title'
    }

    //introalt
    if (mode == 'introalt' && count <= 3) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(44)
      textFont(poem)
      noStroke()
      fill(color)

      textAlign(CENTER, TOP)
      text('THE FOLLO' + glitch + 'ING IS A COLLECTION OF WORKS.', width/2, height*.25)

      textAlign(CENTER, CENTER)
      fill(color3)
      text('MANY ELEMENTS ARE RANDO' + glitch2 + 'LY' + ' ' + glitch4 + 'ENERATED.', width/2, height*.5)

      textAlign(CENTER, BASELINE)
      fill(color)
      text('U' + glitch3 + 'ER INPUT IS OCCASIONALLY REQUIRED.', width/2, height*.75)
    } else if (mode == 'introalt' && count == 4) {
      mode = 'title'
    }


    //title
    if (mode == 'title' && count == 4) {

      
    stroke(0)
    strokeWeight(2)
    fill(color2)
    rect(0, 0, width, height)
   

      textSize(104)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text(title, width/2, height/2)
    } else if (mode == 'title' && count == 5) {
      mode = 'xi'
      count = 1
    }

    //xi
    if (mode == 'xi' && count == 1) {

      stroke(0)
    strokeWeight(2)
    fill(color2)
    rect(0, 0, width, height)

      textSize(36)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text('~ a poem ~', width/2, height - 60)

      textSize(104)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text(number, width/2, height/2)

    } else if (mode == 'xi' && count == 2) {

      mode = 'i'
      count = 1
      number = (number + 1)


    }

    //i
    if (iscare == false) {
    if (mode == 'i' && count == 1) {

      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      // text(sentance2, width/2, height*.225)
      // text(sentance3, width/2, height*.325)
      // text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    }else if (mode == 'i' && count == 2) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      // text(sentance3, width/2, height*.325)
      // text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 3) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      // text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 4) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 5) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)
      text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 6) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)
      text(sentance5, width/2, height*.525)
      text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 7) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)
      text(sentance5, width/2, height*.525)
      text(sentance6, width/2, height*.625)
      text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 8 || count == 9) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)
      text(sentance5, width/2, height*.525)
      text(sentance6, width/2, height*.625)
      text(sentance7, width/2, height*.725)
      text(sentance8, width/2, height*.825)

      textSize(54)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)

      text('~', width/2, height*.125 - 60)
      text('~', width/2, height*.825 + 60)

    } 
  }
  
  // q >= 30
  if (iscare == true) {
    if (mode == 'i' && count == 1) {

      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      // text(sentance2, width/2, height*.225)
      // text(sentance3, width/2, height*.325)
      // text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 2) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      // text(sentance3, width/2, height*.325)
      // text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 3) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      // text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 4) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)
      // text(sentance5, width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 5) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)

      fill(color3)
      text('dont look at me like that.', width/2, height*.525)
      // text(sentance6, width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 6) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)

      fill(color3)
      text('dont look at me like that.', width/2, height*.525)
      text('i said, dont look at me like that.', width/2, height*.625)
      // text(sentance7, width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 7) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)

      fill(color3)
      text('dont look at me like that.', width/2, height*.525)
      text('i said, dont look at me like that.', width/2, height*.625)
      text('what, you think i cant see you?', width/2, height*.725)
      // text(sentance8, width/2, height*.825)
    } else if (mode == 'i' && count == 8 || mode == 'i' && count == 9) {
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(54)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      
      text(sentance, width/2, height*.125)
      text(sentance2, width/2, height*.225)
      text(sentance3, width/2, height*.325)
      text(sentance4, width/2, height*.425)

      fill(color3)
      text('dont look at me like that.', width/2, height*.525)
      text('i said, dont look at me like that.', width/2, height*.625)
      text('what, you think i cant see you?', width/2, height*.725)
      text('if only you knew what i knew.', width/2, height*.825)

      textSize(54)
      textFont(impact)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)

      text(glitch + glitch2, width/2, height*.125 - 60)
      text(glitch3 + glitch4, width/2, height*.825 + 60)

      iiscare = true
      iiiscare = true

    } 


  }

    if (mode == 'i' && count == 10) {

      mode = 'xii'
      count = 1

  iscare = false
  

  noun = (random(nouns))
  noun2 = (random(nouns))
  noun3 = (random(nouns))
  noun4 = (random(nouns))
  noun5 = (random(nouns))
  noun6 = (random(nouns))
  noun7 = (random(nouns))
  noun8 = (random(nouns))

  nounb = (random(nouns))
  nounb2 = (random(nouns))
  nounb3 = (random(nouns))
  nounb4 = (random(nouns))
  nounb5 = (random(nouns))
  nounb6 = (random(nouns))
  nounb7 = (random(nouns))
  nounb8 = (random(nouns))
 
  verb = (random(verbs))
  verb2 = (random(verbs))
  verb3 = (random(verbs))
  verb4 = (random(verbs))
  verb5 = (random(verbs))
  verb6 = (random(verbs))
  verb7 = (random(verbs))
  verb8 = (random(verbs))

  verbend = (random(verbends))
  verbend2 = (random(verbends))
  verbend3 = (random(verbends))
  verbend4 = (random(verbends))
  verbend5 = (random(verbends))
  verbend6 = (random(verbends))
  verbend7 = (random(verbends))
  verbend8 = (random(verbends))


  pastverb = (random(pastverbs))
  pastverb2 = (random(pastverbs))
  pastverb3 = (random(pastverbs))
  pastverb4 = (random(pastverbs))
  pastverb5 = (random(pastverbs))
  pastverb6 = (random(pastverbs))
  pastverb7 = (random(pastverbs))
  pastverb8 = (random(pastverbs))

  pastverbend = (random(pastverbends))
  pastverbend2 = (random(pastverbends))
  pastverbend3 = (random(pastverbends))
  pastverbend4 = (random(pastverbends))
  pastverbend5 = (random(pastverbends))
  pastverbend6 = (random(pastverbends))
  pastverbend7 = (random(pastverbends))
  pastverbend8 = (random(pastverbends))

  adverb = (random(adverbs))
  adverb2 = (random(adverbs))
  adverb3 = (random(adverbs))
  adverb4 = (random(adverbs))
  adverb5 = (random(adverbs))
  adverb6 = (random(adverbs))
  adverb7 = (random(adverbs))
  adverb8 = (random(adverbs))

  adjective = (random(adjectives))
  adjective2 = (random(adjectives))
  adjective3 = (random(adjectives))
  adjective4 = (random(adjectives))
  adjective5 = (random(adjectives))
  adjective6 = (random(adjectives))
  adjective7 = (random(adjectives))
  adjective8 = (random(adjectives))

  pronoun = (random(pronouns))
  pronoun2 = (random(pronouns))
  pronoun3 = (random(pronouns))
  pronoun4 = (random(pronouns))
  pronoun5 = (random(pronouns))
  pronoun6 = (random(pronouns))
  pronoun7 = (random(pronouns))
  pronoun8 = (random(pronouns))

  pronounalt = (random(pronounalts))
  pronounalt2 = (random(pronounalts))
  pronounalt3 = (random(pronounalts))
  pronounalt4 = (random(pronounalts))
  pronounalt5 = (random(pronounalts))
  pronounalt6 = (random(pronounalts))
  pronounalt7 = (random(pronounalts))
  pronounalt8 = (random(pronounalts))

  singpossessive = (random(singpossessives))
  singpossessive2 = (random(singpossessives))
  singpossessive3 = (random(singpossessives))
  singpossessive4 = (random(singpossessives))
  singpossessive5 = (random(singpossessives))
  singpossessive6 = (random(singpossessives))
  singpossessive7 = (random(singpossessives))
  singpossessive8 = (random(singpossessives))

  plurpossessive = (random(plurpossessives))
  plurpossessive2 = (random(plurpossessives))
  plurpossessive3 = (random(plurpossessives))
  plurpossessive4 = (random(plurpossessives))
  plurpossessive5 = (random(plurpossessives))
  plurpossessive6 = (random(plurpossessives))
  plurpossessive7 = (random(plurpossessives))
  plurpossessive8 = (random(plurpossessives))

  preposition = (random(prepositions))
  preposition2 = (random(prepositions))
  preposition3 = (random(prepositions))
  preposition4 = (random(prepositions))
  preposition5 = (random(prepositions))
  preposition6 = (random(prepositions))
  preposition7 = (random(prepositions))
  preposition8 = (random(prepositions))

  conjunction = (random(conjunctions))
  conjunction2 = (random(conjunctions))
  conjunction3 = (random(conjunctions))
  conjunction4 = (random(conjunctions))
  conjunction5 = (random(conjunctions))
  conjunction6 = (random(conjunctions))
  conjunction7 = (random(conjunctions))
  conjunction8 = (random(conjunctions))

  iswas = (random(iswass))
  iswas2 = (random(iswass))
  iswas3 = (random(iswass))
  iswas4 = (random(iswass))
  iswas5 = (random(iswass))
  iswas6 = (random(iswass))
  iswas7 = (random(iswass))
  iswas8 = (random(iswass))

  does = (random(doess))
  does2 = (random(doess))
  does3 = (random(doess))
  does4 = (random(doess))
  does5 = (random(doess))
  does6 = (random(doess))
  does7 = (random(doess))
  does8 = (random(doess))

  goget = (random(gogets))
  goget2 = (random(gogets))
  goget3 = (random(gogets))
  goget4 = (random(gogets))
  goget5 = (random(gogets))
  goget6 = (random(gogets))
  goget7 = (random(gogets))
  goget8 = (random(gogets))

  iswaspronoun = (random(iswaspronouns))
  iswaspronoun2 = (random(iswaspronouns))
  iswaspronoun3 = (random(iswaspronouns))
  iswaspronoun4 = (random(iswaspronouns))
  iswaspronoun5 = (random(iswaspronouns))
  iswaspronoun6 = (random(iswaspronouns))
  iswaspronoun7 = (random(iswaspronouns))
  iswaspronoun8 = (random(iswaspronouns))

  punct = (random(puncts))
  punct2 = (random(puncts))
  punct3 = (random(puncts))
  punct4 = (random(puncts))
  punct5 = (random(puncts))
  punct6 = (random(puncts))
  punct7 = (random(puncts))
  punct8 = (random(puncts))


sentances = ([
(singpossessive + noun + pastverb + punct),
(pronoun + pastverb + singpossessive + noun + punct),
(pronoun + pastverb + conjunction + pronoun + pastverbend + punct),
(pronoun + pastverb + singpossessive + noun + punct),
(pronoun + pastverb + adverb + punct),
(the + noun + iswas + plurpossessive + punct),
(pronoun + adverb + pastverb + the + noun + punct),
(why + iswas + singpossessive + noun + adjective + question),
(does + verbend + question),
(does + verb + pronounalt + question),
(does + verb + the + noun + question),
(why + does + verbend + question),
(the + noun + pastverb + the + nounb + punct),
(conjunction + pronoun + pastverbend + punct),
(why + iswaspronoun + adjective + question),
(goget + preposition + pronounalt + punct),
(goget + preposition + the + noun + punct),
(why + verbend + question),
(verb + pronounalt + punct),
(verb + pronounalt + conjunction + verbend + punct),
(who + iswaspronoun + question),
(adverb + punct),
(singpossessive + noun + iswas + adjective + punct)
])

sentances2 = ([
(singpossessive2 + noun2 + pastverb2 + punct2),
(pronoun2 + pastverb2 + singpossessive2 + noun2 + punct2),
(pronoun2 + pastverb2 + conjunction2 + pronoun2 + pastverbend2 + punct2),
(pronoun2 + pastverb2 + singpossessive2 + noun2 + punct2),
(pronoun2 + pastverb2 + adverb2 + punct2),
(the + noun2 + iswas2 + plurpossessive2 + punct2),
(pronoun2 + adverb2 + pastverb2 + the + noun2 + punct2),
(why + iswas2 + singpossessive2 + noun2 + adjective2 + question),
(does2 + verbend2 + question),
(does2 + verb2 + pronounalt2 + question),
(does2 + verb2 + the + noun2 + question),
(why + does2 + verbend2 + question),
(the + noun2 + pastverb2 + the + nounb2 + punct2),
(conjunction2 + pronoun2 + pastverbend2 + punct2),
(why + iswaspronoun2 + adjective2 + question),
(goget2 + preposition2 + pronounalt2 + punct2),
(goget2 + preposition2 + the + noun2 + punct2),
(why + verbend2 + question),
(verb2 + pronounalt2 + punct2),
(verb2 + pronounalt2 + conjunction2 + verbend2 + punct2),
(who + iswaspronoun2 + question),
(adverb2 + punct2),
(singpossessive2 + noun2 + iswas2 + adjective2 + punct2),
])

sentances3 = ([
(singpossessive3 + noun3 + pastverb3 + punct3),
(pronoun3 + pastverb3 + singpossessive3 + noun3 + punct3),
(pronoun3 + pastverb3 + conjunction3 + pronoun3 + pastverbend3 + punct3),
(pronoun3 + pastverb3 + singpossessive3 + noun3 + punct3),
(pronoun3 + pastverb3 + adverb3 + punct3),
(the + noun3 + iswas3 + plurpossessive3 + punct3),
(pronoun3 + adverb3 + pastverb3 + the + noun3 + punct3),
(why + iswas3 + singpossessive3 + noun3 + adjective3 + question),
(does3 + verbend3 + question),
(does3 + verb3 + pronounalt3 + question),
(does3 + verb3 + the + noun3 + question),
(why + does3 + verbend3 + question),
(the + noun3 + pastverb3 + the + nounb3 + punct3),
(conjunction3 + pronoun3 + pastverbend3 + punct3),
(why + iswaspronoun3 + adjective3 + question),
(goget3 + preposition3 + pronounalt3 + punct3),
(goget3 + preposition3 + the + noun3 + punct3),
(why + verbend3 + question),
(verb3 + pronounalt3 + punct3),
(verb3 + pronounalt3 + conjunction3 + verbend3 + punct3),
(who + iswaspronoun3 + question),
(adverb3 + punct3),
(singpossessive3 + noun3 + iswas3 + adjective3 + punct3)
])

sentances4 = ([
(singpossessive4 + noun4 + pastverb4 + punct4),
(pronoun4 + pastverb4 + singpossessive4 + noun4 + punct4),
(pronoun4 + pastverb4 + conjunction4 + pronoun4 + pastverbend4 + punct4),
(pronoun4 + pastverb4 + singpossessive4 + noun4 + punct4),
(pronoun4 + pastverb4 + adverb4 + punct4),
(the + noun4 + iswas4 + plurpossessive4 + punct4),
(pronoun4 + adverb4 + pastverb4 + the + noun4 + punct4),
(why + iswas4 + singpossessive4 + noun4 + adjective4 + question),
(does4 + verbend4 + question),
(does4 + verb4 + pronounalt4 + question),
(does4 + verb4 + the + noun4 + question),
(why + does4 + verbend4 + question),
(the + noun4 + pastverb4 + the + nounb4 + punct4),
(conjunction4 + pronoun4 + pastverbend4 + punct4),
(why + iswaspronoun4 + adjective4 + question),
(goget4 + preposition4 + pronounalt4 + punct4),
(goget4 + preposition4 + the + noun4 + punct4),
(why + verbend4 + question),
(verb4 + pronounalt4 + punct4),
(verb4 + pronounalt4 + conjunction4 + verbend4 + punct4),
(who + iswaspronoun4 + question),
(adverb4 + punct4),
(singpossessive4 + noun4 + iswas4 + adjective4 + punct4)
])

sentances5 = ([
(singpossessive5 + noun5 + pastverb5 + punct5),
(pronoun5 + pastverb5 + singpossessive5 + noun5 + punct5),
(pronoun5 + pastverb5 + conjunction5 + pronoun5 + pastverbend5 + punct5),
(pronoun5 + pastverb5 + singpossessive5 + noun5 + punct5),
(pronoun5 + pastverb5 + adverb5 + punct5),
(the + noun5 + iswas5 + plurpossessive5 + punct5),
(pronoun5 + adverb5 + pastverb5 + the + noun5 + punct5),
(why + iswas5 + singpossessive5 + noun5 + adjective5 + question),
(does5 + verbend5 + question),
(does5 + verb5 + pronounalt5 + question),
(does5 + verb5 + the + noun5 + question),
(why + does5 + verbend5 + question),
(the + noun5 + pastverb5 + the + nounb5 + punct5),
(conjunction5 + pronoun5 + pastverbend5 + punct5),
(why + iswaspronoun5 + adjective5 + question),
(goget5 + preposition5 + pronounalt5 + punct5),
(goget5 + preposition5 + the + noun5 + punct5),
(why + verbend5 + question),
(verb5 + pronounalt5 + punct5),
(verb5 + pronounalt5 + conjunction5 + verbend5 + punct5),
(who + iswaspronoun5 + question),
(adverb5 + punct5),
(singpossessive5 + noun5 + iswas5 + adjective5 + punct5)
])

sentances6 = ([
(singpossessive6 + noun6 + pastverb6 + punct6),
(pronoun6 + pastverb6 + singpossessive6 + noun6 + punct6),
(pronoun6 + pastverb6 + conjunction6 + pronoun6 + pastverbend6 + punct6),
(pronoun6 + pastverb6 + singpossessive6 + noun6 + punct6),
(pronoun6 + pastverb6 + adverb6 + punct6),
(the + noun6 + iswas6 + plurpossessive6 + punct6),
(pronoun6 + adverb6 + pastverb6 + the + noun6 + punct6),
(why + iswas6 + singpossessive6 + noun6 + adjective6 + question),
(does6 + verbend6 + question),
(does6 + verb6 + pronounalt6 + question),
(does6 + verb6 + the + noun6 + question),
(why + does6 + verbend6 + question),
(the + noun6 + pastverb6 + the + nounb6 + punct6),
(conjunction6 + pronoun6 + pastverbend6 + punct6),
(why + iswaspronoun6 + adjective6 + question),
(goget6 + preposition6 + pronounalt6 + punct6),
(goget6 + preposition6 + the + noun6 + punct6),
(why + verbend6 + question),
(verb6 + pronounalt6 + punct6),
(verb6 + pronounalt6 + conjunction6 + verbend6 + punct6),
(who + iswaspronoun6 + question),
(adverb6 + punct6),
(singpossessive6 + noun6 + iswas6 + adjective6 + punct6)
])

sentances7 = ([
(singpossessive7 + noun7 + pastverb7 + punct7),
(pronoun7 + pastverb7 + singpossessive7 + noun7 + punct7),
(pronoun7 + pastverb7 + conjunction7 + pronoun7 + pastverbend7 + punct7),
(pronoun7 + pastverb7 + singpossessive7 + noun7 + punct7),
(pronoun7 + pastverb7 + adverb7 + punct7),
(the + noun7 + iswas7 + plurpossessive7 + punct7),
(pronoun7 + adverb7 + pastverb7 + the + noun7 + punct7),
(why + iswas7 + singpossessive7 + noun7 + adjective7 + question),
(does7 + verbend7 + question),
(does7 + verb7 + pronounalt7 + question),
(does7 + verb7 + the + noun7 + question),
(why + does7 + verbend7 + question),
(the + noun7 + pastverb7 + the + nounb7 + punct7),
(conjunction7 + pronoun7 + pastverbend7 + punct7),
(why + iswaspronoun7 + adjective7 + question),
(goget7 + preposition7 + pronounalt7 + punct7),
(goget7 + preposition7 + the + noun7 + punct7),
(why + verbend7 + question),
(verb7 + pronounalt7 + punct7),
(verb7 + pronounalt7 + conjunction7 + verbend7 + punct7),
(who + iswaspronoun7 + question),
(adverb7 + punct7),
(singpossessive7 + noun7 + iswas7 + adjective7 + punct7)
])

sentances8 = ([
(singpossessive8 + noun8 + pastverb8 + period),
(pronoun8 + pastverb8 + singpossessive8 + noun8 + period),
(pronoun8 + pastverb8 + conjunction8 + pronoun8 + pastverbend8 + period),
(pronoun8 + pastverb8 + singpossessive8 + noun8 + period),
(pronoun8 + pastverb8 + adverb8 + period),
(the + noun8 + iswas8 + plurpossessive8 + period),
(pronoun8 + adverb8 + pastverb8 + the + noun8 + period),
(why + iswas8 + singpossessive8 + noun8 + adjective8 + question),
(does8 + verbend8 + question),
(does8 + verb8 + pronounalt8 + question),
(does8 + verb8 + the + noun8 + question),
(why + does8 + verbend8 + question),
(the + noun8 + pastverb8 + the + nounb8 + period),
(conjunction8 + pronoun8 + pastverbend8 + period),
(why + iswaspronoun8 + adjective8 + question),
(goget8 + preposition8 + pronounalt8 + period),
(goget8 + preposition8 + the + noun8 + period),
(why + verbend8 + question),
(verb8 + pronounalt8 + period),
(verb8 + pronounalt8 + conjunction8 + verbend8 + period),
(who + iswaspronoun8 + question),
(adverb8 + period),
(singpossessive8 + noun8 + iswas8 + adjective8 + period)
])

    sentance = (random(sentances))
    sentance2 = (random(sentances2))
    sentance3 = (random(sentances3))
    sentance4 = (random(sentances4))
    sentance5 = (random(sentances5))
    sentance6 = (random(sentances6))
    sentance7 = (random(sentances7))
    sentance8 = (random(sentances8))

    }

    //xii
    if (mode == 'xii' && count == 1) {

      stroke(0)
    strokeWeight(2)
    fill(color2)
    rect(0, 0, width, height)

      textSize(36)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text('~ a song ~', width/2, height - 60)

      textSize(104)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text(number, width/2, height/2)

    } else if (mode == 'xii' && count == 2) {

      mode = 'ii'
      count = 1
      number = (number + 1)

}

    //ii

    if (mode == 'ii' && iiscare == false) {

    p1 += speed
    p2 += speed
    p3 += speed
    p4 += speed
    p5 += speed
    p6 += speed
    p7 += speed
    p8 += speed
    p9 += speed
    p10 += speed
    p11 += speed
    p12 += speed
    p13 += speed

    pa1 += speed
    pa2 += speed
    pa3 += speed
    pa4 += speed
    pa5 += speed
    pa6 += speed
    pa7 += speed
    pa8 += speed
    pa9 += speed
    pa10 += speed
    pa11 += speed
    pa12 += speed
    pa13 += speed

    
    if (p1 == width) {
      p1 = 0
    }
    if (p2 == width) {
      p2 = 0
    }
    if (p3 == width) {
      p3 = 0
    }
    if (p4 == width) {
      p4 = 0
    }
    if (p5 == width) {
      p5 = 0
    }
    if (p6 == width) {
      p6 = 0
    }
    if (p7 == width) {
      p7 = 0
    }
    if (p8 == width) {
      p8 = 0
    }
    if (p9 == width) {
      p9 = 0
    }
    if (p10 == width) {
      p10 = 0
    }
    if (p11 == width) {
      p11 = 0
    }
    if (p12 == width) {
      p12 = 0
    }
    if (p13 == width) {
      p13 = 0
    }

    if (pa1 == width*2) {
      pa1 = 0
    }
    if (pa2 == width*2) {
      pa2 = 0
    }
    if (pa3 == width*2) {
      pa3 = 0
    }
    if (p4 == width*2) {
      pa4 = 0
    }
    if (p5 == width*2) {
      pa5 = 0
    }
    if (pa6 == width*2) {
      pa6 = 0
    }
    if (pa7 == width*2) {
      pa7 = 0
    }
    if (pa8 == width*2) {
      pa8 = 0
    }
    if (pa9 == width*2) {
      pa9 = 0
    }
    if (pa10 == width*2) {
      pa10 = 0
    }
    if (pa11 == width*2) {
      pa11 = 0
    }
    if (pa12 == width*2) {
      pa12 = 0
    }
    if (pa13 == width*2) {
      pa13 = 0
    }

    if (count == 5 && key == 'major') {

      count = 1
      key = 'minor'

    }

    if (count == 5 && key == 'minor') {

      key = 'major'
      mode = 'xiii'
      count = 1

      p1 = (random(integers))
      p2 = (random(integers))
      p3 = (random(integers))
      p4 = (random(integers))
      p5 = (random(integers))
      p6 = (random(integers))
      p7 = (random(integers))
      p8 = (random(integers))
      p9 = (random(integers))
      p10 = (random(integers))
      p11 = (random(integers))
      p12 = (random(integers))
      p13 = (random(integers))

      pa1 = (random(integers))
      pa2 = (random(integers))
      pa3 = (random(integers))
      pa4 = (random(integers))
      pa5 = (random(integers))
      pa6 = (random(integers))
      pa7 = (random(integers))
      pa8 = (random(integers))
      pa9 = (random(integers))
      pa10 = (random(integers))
      pa11 = (random(integers))
      pa12 = (random(integers))
      pa13 = (random(integers))

    }

    if (key == 'major') {

      // color = (220)
      // color2 = (20)

    if (x == p1 || x == pa1) {
      A3.play()
    }

    if (x == p2 || x == pa2) {
      A4.play()
    }

    if (x == p3 || x == pa3) {
      A5.play()
    }

    if (x == p4 || x == pa4) {
      A6.play()
    }

    // if (x == p5) {
    //   A7.play()
    // }

    if (x == p6 || x == pa6) {
      B1.play()
    }

    if (x == p7 || x == pa7) {
      B2.play()
    }

    // if (x == p8) {
    //   B7.play()
    // }

    if (x == p9 || x == pa9) {
      C1.play()
    }

    if (x == p10 || x == pa10) {
      C4.play()
    }

    if (x == p11 || x == pa11) {
      C5.play()
    }

    if (x == p12 || x == pa12) {
      C6.play()
    }

    if (x == p13 || x == pa13) {
      C7.play()
    }
  }

    if (key == 'minor') {

      // color = (20)
      // color2 = (220)

      if (x == p1 || x == pa1) {
      D2.play()
    }

    if (x == p2 || x == pa2) {
      D3.play()
    }

    if (x == p3 || x == pa3) {
      D4.play()
    }

    if (x == p4 || x == pa4) {
      D5.play()
    }

    // if (x == p5) {
    //   A7.play()
    // }

    if (x == p6 || x == pa6) {
      D7.play()
    }

    if (x == p7 || x == pa7) {
      F1.play()
    }

    // if (x == p8) {
    //   B7.play()
    // }

    if (x == p9 || x == pa9) {
      F3.play()
    }

    if (x == p10 || x == pa10) {
      F4.play()
    }

    if (x == p11 || x == pa11) {
      F5.play()
    }

    if (x == p12 || x == pa12) {
      F6.play()
    }

    if (x == p13 || x == pa13) {
      F7.play()
    }

    }

    stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

    noStroke()
    fill(color)
    ellipse(x, y, 10, 10)
    strokeWeight(2)


    stroke(color)
    line(p1, 0, p1, height)
    line(p2, 0, p2, height)
    line(p3, 0, p3, height)
    line(p4, 0, p4, height)
    // line(p5, 0, p5, height)
    line(p6, 0, p6, height)
    line(p7, 0, p7, height)
    // line(p8, 0, p8, height)
    line(p9, 0, p9, height)
    line(p10, 0, p10, height)
    line(p11, 0, p11, height)
    line(p12, 0, p12, height)
    line(p13, 0, p13, height)



    line(pa1, 0, pa1, height)
    line(pa2, 0, pa2, height)
    line(pa3, 0, pa3, height)
    line(pa4, 0, pa4, height)
    // line(p5, 0, p5, height)
    line(pa6, 0, pa6, height)
    line(pa7, 0, pa7, height)
    // line(p8, 0, p8, height)
    line(pa9, 0, pa9, height)
    line(pa10, 0, pa10, height)
    line(pa11, 0, pa11, height)
    line(pa12, 0, pa12, height)
    line(pa13, 0, pa13, height)

} else if (mode == 'ii' && iiscare == true && count <= 8) {
      
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

    noStroke()
    fill(color)
    ellipse(x, y, 10, 10)
    strokeWeight(2)

    } else if (mode == 'ii' && iiscare == true && count == 9) {
      mode = 'xiii'
      count = 1
      iiscare = false
    }


    if (mode == 'xiii' && count == 1) {

      letter = (random(letters))
  letter2 = (random(letters))
  letter3 = (random(letters))
  letter4 = (random(letters))
  letter5 = (random(letters))
  letter6 = (random(letters))
  letter7 = (random(letters))
  letter8 = (random(letters))

      stroke(0)
    strokeWeight(2)
    fill(color2)
    rect(0, 0, width, height)

      textSize(36)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text('~ questionnaire ~', width/2, height - 60)

      textSize(104)
      textFont(gothic)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text(number, width/2, height/2)

    } else if (mode == 'xiii' && count == 2) {

      mode = 'iii'
      count = 1
      number = (number + 1)

    } 

    if (iiiscare == false) {
    if (mode == 'iii' && count <= 8) {

      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(104)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(questionnaire, 0, 0, width + 25, height - 200)
    

      if (mouseX >= 100 && mouseX <= 300 && mouseY >= 540 && mouseY <= 670) {
      noStroke()
      fill(color)
      rect(100, 540, 200, 130)
      
      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color2)
      text('YES', width/2 - width/4, height - 120)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text('NO', width/2 + width/4, height - 120)

    } else if (mouseX >= 530 && mouseX <= 675 && mouseY >= 540 && mouseY <= 670) {
      noStroke()
      fill(color)
      rect(530, 540, 145, 130)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text('YES', width/2 - width/4, height - 120)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color2)
      text('NO', width/2 + width/4, height - 120)

    } else {
      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text('YES', width/2 - width/4, height - 120)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text('NO', width/2 + width/4, height - 120)
    }
  }
} else if (iiiscare == true)
    if (mode == 'iii' && count <= 8) {

      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(104)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text(letter + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8 + letter9 + letter10 + letter11 + letter12 + letter13 + letter14 + letter15 + letter16 + ' ' + letter17 + letter18 + letter19 + letter20 + letter21 + letter22 + letter23 + letter24 + letter25 + letter26 + letter27 + letter28 + letter29 + letter30 + letter31 + letter32 + ' ' + letter33 + letter34 + letter35 + letter36 + letter37 + letter38 + letter39 + letter40 + letter41 + letter42 + letter43 + letter44 + letter45 + letter46 + letter47 + letter48, 0, 0, width + 25, height - 200)
    

      if (mouseX >= 100 && mouseX <= 300 && mouseY >= 540 && mouseY <= 670) {
      noStroke()
      fill(color)
      rect(100, 540, 200, 130)
      
      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color2)
      text(glitch + glitch2 + glitch3, width/2 - width/4, height - 120)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(glitch4 + glitch, width/2 + width/4, height - 120)

    } else if (mouseX >= 530 && mouseX <= 675 && mouseY >= 540 && mouseY <= 670) {
      noStroke()
      fill(color)
      rect(530, 540, 145, 130)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(glitch + glitch2 + glitch3, width/2 - width/4, height - 120)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color2)
      text(glitch4 + glitch, width/2 + width/4, height - 120)

    } else {
      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(glitch + glitch2 + glitch3, width/2 - width/4, height - 120)

      textSize(164)
      textFont(poem)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color)
      text(glitch4 + glitch, width/2 + width/4, height - 120)
    }
  }


    if (mode == 'iii' && count == 9 && iiiscare == false) {

      count = 1
      mode = 'xi'
      
    } else if (mode == 'iii' && count == 9 && iiiscare == true) {

      mode = 'xiv'
      count = 1

    }

if (mode == 'xiv' && count == 1) {
      
      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

      textSize(154)
      textFont(impact)
      textAlign(CENTER, CENTER)
      noStroke()
      fill(color3)
      text('get out of here.', 0, 0, width, height)

} else if (mode == 'xiv' && count == 2) {

    mode = 'iv'
    count = 1
  }

if (mode == 'iv' && count <= 4) {

      stroke(0)
      strokeWeight(2)
      fill(color2)
      rect(0, 0, width, height)

  } else if  (mode == 'iv' && count == 5) {

    mode = 'introalt'
    count = 1

    iscare = false
    iiscare = false
    iiiscare = false
    q = 0
    number = 1
    letter = (random(letters))
  letter2 = (random(letters))
  letter3 = (random(letters))
  letter4 = (random(letters))
  letter5 = (random(letters))
  letter6 = (random(letters))
  letter7 = (random(letters))
  letter8 = (random(letters))
    title = (quote + letter + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8 + quote)
    

  }

}



function mouseClicked() {

  if (mode == 'iii' && q <= 29 && mouseX >= 100 && mouseX <= 300 && mouseY >= 540 && mouseY <= 670 || q >= 31 && mouseX >= 100 && mouseX <= 300 && mouseY >= 540 && mouseY <= 670 || q <= 29 && mouseX >= 530 && mouseX <= 675 && mouseY >= 540 && mouseY <= 670 || q >= 31 && mouseX >= 530 && mouseX <= 675 && mouseY >= 540 && mouseY <= 670) {

  letter = (random(letters))
  letter2 = (random(letters))
  letter3 = (random(letters))
  letter4 = (random(letters))
  letter5 = (random(letters))
  letter6 = (random(letters))
  letter7 = (random(letters))
  letter8 = (random(letters))
  letter9 = (random(letters))
  letter10 = (random(letters))
  letter11 = (random(letters))
  letter12 = (random(letters))
  letter13 = (random(letters))
  letter14 = (random(letters))
  letter15 = (random(letters))
  letter16 = (random(letters))
  letter17 = (random(letters))
  letter18 = (random(letters))
  letter19 = (random(letters))
  letter20 = (random(letters))
  letter21 = (random(letters))
  letter22 = (random(letters))
  letter23 = (random(letters))
  letter24 = (random(letters))
  letter25 = (random(letters))
  letter26 = (random(letters))
  letter27 = (random(letters))
  letter28 = (random(letters))
  letter29 = (random(letters))
  letter30 = (random(letters))
  letter31 = (random(letters))
  letter32 = (random(letters))
  letter33 = (random(letters))
  letter34 = (random(letters))
  letter35 = (random(letters))
  letter36 = (random(letters))
  letter37 = (random(letters))
  letter38 = (random(letters))
  letter39 = (random(letters))
  letter40 = (random(letters))
  letter41 = (random(letters))
  letter35 = (random(letters))
  letter36 = (random(letters))
  letter37 = (random(letters))
  letter38 = (random(letters))
  letter39 = (random(letters))
  letter40 = (random(letters))
  letter41 = (random(letters))
  letter42 = (random(letters))
  letter43 = (random(letters))
  letter44 = (random(letters))
  letter45 = (random(letters))
  letter46 = (random(letters))
  letter47 = (random(letters))
  letter48 = (random(letters))

  noun = (random(nouns))
  noun2 = (random(nouns))
  noun3 = (random(nouns))
  noun4 = (random(nouns))
  noun5 = (random(nouns))
  noun6 = (random(nouns))
  noun7 = (random(nouns))
  noun8 = (random(nouns))

  nounb = (random(nouns))
  nounb2 = (random(nouns))
  nounb3 = (random(nouns))
  nounb4 = (random(nouns))
  nounb5 = (random(nouns))
  nounb6 = (random(nouns))
  nounb7 = (random(nouns))
  nounb8 = (random(nouns))
 
  verb = (random(verbs))
  verb2 = (random(verbs))
  verb3 = (random(verbs))
  verb4 = (random(verbs))
  verb5 = (random(verbs))
  verb6 = (random(verbs))
  verb7 = (random(verbs))
  verb8 = (random(verbs))

  verbend = (random(verbends))
  verbend2 = (random(verbends))
  verbend3 = (random(verbends))
  verbend4 = (random(verbends))
  verbend5 = (random(verbends))
  verbend6 = (random(verbends))
  verbend7 = (random(verbends))
  verbend8 = (random(verbends))

  pastverb = (random(pastverbs))
  pastverb2 = (random(pastverbs))
  pastverb3 = (random(pastverbs))
  pastverb4 = (random(pastverbs))
  pastverb5 = (random(pastverbs))
  pastverb6 = (random(pastverbs))
  pastverb7 = (random(pastverbs))
  pastverb8 = (random(pastverbs))

  pastverbend = (random(pastverbends))
  pastverbend2 = (random(pastverbends))
  pastverbend3 = (random(pastverbends))
  pastverbend4 = (random(pastverbends))
  pastverbend5 = (random(pastverbends))
  pastverbend6 = (random(pastverbends))
  pastverbend7 = (random(pastverbends))
  pastverbend8 = (random(pastverbends))

  adverb = (random(adverbs))
  adverb2 = (random(adverbs))
  adverb3 = (random(adverbs))
  adverb4 = (random(adverbs))
  adverb5 = (random(adverbs))
  adverb6 = (random(adverbs))
  adverb7 = (random(adverbs))
  adverb8 = (random(adverbs))

  adjective = (random(adjectives))
  adjective2 = (random(adjectives))
  adjective3 = (random(adjectives))
  adjective4 = (random(adjectives))
  adjective5 = (random(adjectives))
  adjective6 = (random(adjectives))
  adjective7 = (random(adjectives))
  adjective8 = (random(adjectives))

  pronoun = (random(pronouns))
  pronoun2 = (random(pronouns))
  pronoun3 = (random(pronouns))
  pronoun4 = (random(pronouns))
  pronoun5 = (random(pronouns))
  pronoun6 = (random(pronouns))
  pronoun7 = (random(pronouns))
  pronoun8 = (random(pronouns))

  pronounalt = (random(pronounalts))
  pronounalt2 = (random(pronounalts))
  pronounalt3 = (random(pronounalts))
  pronounalt4 = (random(pronounalts))
  pronounalt5 = (random(pronounalts))
  pronounalt6 = (random(pronounalts))
  pronounalt7 = (random(pronounalts))
  pronounalt8 = (random(pronounalts))

  singpossessive = (random(singpossessives))

  plurpossessive = (random(plurpossessives))

  preposition = (random(prepositions))

  conjunction = (random(conjunctions))

  iswas = (random(iswass))

  does = (random(doess))

  goget = (random(gogets))

  iswaspronoun = (random(iswaspronouns))

  punct = (random(puncts))


  if (mode == 'iii' && mouseX >= 100 && mouseX <= 300 && mouseY >= 540 && mouseY <= 670) {
quests = ([
'how has your experience been so far ?',
'would you like to continue ?',
'please answer all questions truthfully .',
who + iswaspronoun + question,
does + verbend + question,
why + verbend + question,
letter + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8,
why + iswaspronoun + adjective + question,
why + iswas + singpossessive + noun + adjective + question,
what + does + verbend + question,
what + iswas + 'that ' + question,
what + iswaspronoun + verbend + question,
why + does + verbend + question,
'am i ' + adjective + question,
'are you ' + adjective + question,
])
    questionnaire = (random(quests))

    q = (q+1)


  } else if (mode == 'iii' && mouseX >= 530 && mouseX <= 675 && mouseY >= 540 && mouseY <= 670) {
quests = ([
'how has your experience been so far ?',
'would you like to continue ?',
'please answer all questions truthfully .',
who + iswaspronoun + question,
does + verbend + question,
why + verbend + question,
letter + letter2 + letter3 + letter4 + letter5 + letter6 + letter7 + letter8,
why + iswaspronoun + adjective + question,
why + iswas + singpossessive + noun + adjective + question,
what + does + verbend + question,
what + iswas + 'that ' + question,
what + iswaspronoun + verbend + question,
why + does + verbend + question,
'am i ' + adjective + question,
'are you ' + adjective + question,
])
    questionnaire = (random(quests))
    q = (q+1)

  }

} else if (mode == 'iii' && q == 30) {

  if (mouseX >= 100 && mouseX <= 300 && mouseY >= 540 && mouseY <= 670) {
    quests = ([
    'who do you think you are ?'
    ])
    questionnaire = (random(quests))
    q = (q+1)

    iscare = true

  } else if (mouseX >= 530 && mouseX <= 675 && mouseY >= 540 && mouseY <= 670) {
    quests = ([
    'who do you think you are ?'
    ])
    questionnaire = (random(quests))
    q = (q+1)

    iscare = true

  }




}

}
