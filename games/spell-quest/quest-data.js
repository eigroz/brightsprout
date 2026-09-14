/* Curriculum pathway data is kept separate so new year groups can be added cleanly. */
const QUESTS = [
  ['Sound detectives',['because','beautiful','different','important','thought','enough','favourite','remember','straight','surprise']],
  ['Vowel teams',['eight','weight','reign','veil','neighbour','break','great','steak','breathe','increase']],
  ['Long and short sounds',['woman','women','minute','natural','popular','ordinary','calendar','grammar','famous','favourite']],
  ['Consonant teams',['character','chemist','chorus','scheme','school','echo','anchor','technology','knowledge','question']],
  ['Sound Trail Path Test',['straight','weight','breathe','women','calendar','chemist','knowledge','question','enough','favourite']],
  ['Adding -ful and -less',['helpful','careful','hopeful','thoughtful','beautiful','careless','hopeless','fearless','endless','useless']],
  ['Adding -ly',['sadly','completely','usually','finally','gently','simply','happily','angrily','basically','frantically']],
  ['Adding -ment and -ness',['enjoyment','movement','statement','treatment','payment','kindness','darkness','fairness','sadness','happiness']],
  ['Changing root words',['hoping','hopping','preferred','beginning','forgotten','limiting','gardener','happiest','easily','business']],
  ['Suffix Springs Path Test',['thoughtful','careless','completely','happily','enjoyment','kindness','hopping','beginning','easily','business']],
  ['re- and dis-',['redo','return','refresh','reappear','rebuild','disagree','dislike','disobey','disappear','dishonest']],
  ['mis- and in-',['misbehave','mislead','misplace','misread','mistake','inactive','incorrect','incomplete','insecure','invisible']],
  ['sub- and inter-',['subdivide','subheading','submarine','submerge','subsoil','interact','international','internet','interrelated','intercity']],
  ['Word families',['solve','solution','sign','signal','magic','magician','press','pressure','please','pleasant']],
  ['Prefix Peaks Path Test',['reappear','disappear','misbehave','misread','inactive','incorrect','submarine','international','solution','pressure']],
  ['Here or hear?',['here','hear','heel','heal','plain','plane','break','brake','mail','male']],
  ['There, their and they’re',['there','their',"they're",'where','wear','were',"we're",'your',"you're",'our']],
  ['To, too and two',['to','too','two','one','won','four','for','eight','ate','be']],
  ['Meaning chooses spelling',['peace','piece','rain','reign','seen','scene','weather','whether','whose',"who's"]],
  ['Homophone Harbour Path Test',['here','hear','plain','plane','there','their',"they're",'to','too','two']],
  ['Unexpected vowels',['answer','appear','arrive','believe','build','busy','early','earth','fruit','guard']],
  ['Silent letters',['island','answer','knowledge','often','thumb','knock','write','wrap','solemn','doubt']],
  ['The many sounds of -ough',['though','although','thought','bought','brought','through','breakthrough','rough','tough','enough']],
  ['Commonly confused words',['accept','except','affect','effect','breath','breathe','loose','lose','quite','quiet']],
  ['Tricky Word Tower Path Test',['believe','business','fruit','guard','island','knowledge','though','through','enough','breathe']],
  ['Roots and relatives',['act','action','actual','actually','medicine','medical','mention','position','possess','possession']],
  ['Syllable strategies',['accident','bicycle','calendar','consider','continue','exercise','experience','experiment','material','particular']],
  ['Words in sentences',['address','centre','complete','decide','describe','history','imagine','interest','library','sentence']],
  ['Cumulative recall',['caught','different','difficult','February','forward','height','important','occasion','opposite','possible']],
  ['Wordwood Champion Test',['bicycle','beautiful','different','disappear','favourite','knowledge','occasionally','separate','straight','therefore']]
].map((q,i)=>({id:i+1,title:q[0],words:q[1],test:(i+1)%5===0,world:Math.floor(i/5)+1}));

const QUEST_SENTENCES = {
  there:'Put the book over there.',their:'The children packed their bags.',"they're":'They’re going to the library.',
  to:'We walked to school.',too:'I would like to come too.',two:'There are two birds in the tree.',
  here:'Please sit here.',hear:'Can you hear the music?',weather:'The weather is sunny.',whether:'I wonder whether it will rain.',
  whose:'Whose coat is this?',"who's":'Who’s coming with us?',your:'Remember your reading book.',"you're":'You’re doing very well.',
  our:'Our class planted seeds.',"we're":'We’re ready to begin.',were:'We were happy to help.'
};

function questWordData(quest){return quest.words.map(word=>({word,sentence:QUEST_SENTENCES[word]||`Listen carefully and spell the word ${word}.`,pattern:quest.title}))}

