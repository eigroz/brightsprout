/* Year 2-to-3 pathway based on DfE English Appendix 1; every fifth quest reviews learning. */
const QUESTS=[
['The j sound',['badge','edge','bridge','dodge','fudge','age','huge','change','charge','village']],
['Silent starters',['knock','know','knee','knew','gnat','gnaw','write','wrote','wrong','wrap']],
['Words ending in l',['table','apple','bottle','little','middle','camel','tunnel','squirrel','metal','pedal']],
['Helpful endings',['helpful','careful','playful','hopeless','fearless','careless','payment','enjoyment','sadness','kindness']],
['Sound Steps Path Test',['bridge','change','knock','write','apple','little','helpful','careless','payment','kindness']],
['Adding -ly',['badly','sadly','slowly','quickly','softly','happily','angrily','gently','simply','usually']],
['Adding endings',['hiking','hiked','hiker','nicer','nicest','running','runner','bigger','biggest','dropped']],
['Short forms',['cannot','didn’t','hasn’t','couldn’t','it’s','I’ll','we’re','they’re','you’re','won’t']],
['Sound-alike words',['there','their','here','hear','see','sea','one','won','sun','son']],
['Word Building Path Test',['quickly','happily','hiking','running','couldn’t','they’re','there','their','one','won']],
['Everyday tricky words',['door','floor','poor','because','find','kind','mind','behind','child','children']],
['More tricky words',['wild','climb','most','only','both','old','cold','gold','hold','told']],
['Words to remember',['every','everybody','even','great','break','steak','pretty','beautiful','after','fast']],
['Final Year 2 words',['last','past','father','class','grass','pass','plant','path','bath','hour']],
['Year 2 Explorer Test',['because','children','climb','every','great','beautiful','father','class','plant','hour']],
['The y sound',['myth','gym','Egypt','pyramid','mystery','symbol','system','lyric','typical','crystal']],
['The ou surprise',['young','touch','double','trouble','country','rough','tough','enough','couple','cousin']],
['Prefixes',['disappoint','disagree','disobey','disappear','misbehave','mislead','misspell','inactive','incorrect','invisible']],
['Again with re-',['redo','return','refresh','reappear','rebuild','replay','rewrite','reread','replace','recycle']],
['Pattern Woods Path Test',['mystery','system','young','country','enough','disappear','misspell','incorrect','rewrite','recycle']],
['The -ation ending',['information','adoration','sensation','preparation','admiration','invention','injection','action','completion','celebration']],
['More -ly rules',['sadly','completely','usually','finally','gently','simply','happily','angrily','basically','frantically']],
['ch with different sounds',['chef','chalet','machine','brochure','chemist','chorus','school','echo','character','scheme']],
['Hidden letter teams',['league','tongue','antique','unique','science','scene','discipline','fascinate','muscle','crescent']],
['Word Parts Path Test',['information','celebration','completely','happily','machine','chemist','school','unique','science','scene']],
['ei, eigh and ey',['eight','eighth','weight','neighbour','vein','veil','reign','they','obey','grey']],
['Word families',['solve','solution','sign','signal','magic','magician','press','pressure','please','pleasant']],
['Year 3 challenge words',['accident','actual','address','answer','arrive','bicycle','calendar','centre','circle','complete']],
['Ready for Year 4',['decide','describe','early','earth','exercise','experience','famous','February','forward','fruit']],
['Wordwood Champion Test',['weight','neighbour','solution','magician','accident','bicycle','calendar','describe','February','fruit']]
].map((q,i)=>({id:i+1,title:q[0],words:q[1],test:(i+1)%5===0,world:Math.floor(i/5)+1,stage:i<15?'Year 2':'Year 3'}));

const QUEST_GUIDES={
1:{sound:'/j/',rule:'After a short vowel, /j/ is often written dge. Elsewhere it may be ge.',strategy:'Stretch the last sound, then choose dge or ge.'},
2:{sound:'silent first letters',rule:'In kn, gn and wr, the first letter is written but not spoken.',strategy:'Whisper the silent letter before spelling the whole word.'},
3:{sound:'/l/ at the end',rule:'Final /l/ is most often -le, but can be -el, -al or -il.',strategy:'Clap the syllables and mark the letters spelling final /l/.'},
4:{sound:'word endings',rule:'-ful, -less, -ment and -ness attach to a root word.',strategy:'Spot the root first, then attach the ending.'},
6:{sound:'/lee/ ending',rule:'The ending -ly tells us how something happens.',strategy:'Keep the root word visible, then add ly.'},
7:{sound:'adding endings',rule:'A short vowel may need a doubled consonant; a final e may be dropped.',strategy:'Find the root, then check whether to double or drop.'},
8:{sound:'shortened words',rule:'An apostrophe marks letters left out of a contraction.',strategy:'Say both full words and put the apostrophe where letters disappear.'},
9:{sound:'same sound, different meaning',rule:'Homophones sound the same; meaning chooses their spelling.',strategy:'Use the whole sentence to choose the meaning.'},
11:{sound:'common exception words',rule:'Some useful words do not follow the sound spellings learned so far.',strategy:'Say it, spot the tricky part, cover, write and check.'},
16:{sound:'/i/ written y',rule:'In some Greek-root words, y spells short /i/.',strategy:'Mark the y, say /i/, then read the whole word.'},
17:{sound:'/u/ written ou',rule:'In this family, ou spells the /u/ sound.',strategy:'Ring ou and connect the words as one family.'},
18:{sound:'prefixes',rule:'dis-, mis- and in- change the meaning of a root.',strategy:'Build the word in two parts: prefix, then root.'},
19:{sound:'re- means again or back',rule:'The prefix re- is added before a root word.',strategy:'Say re, say the root, then join them.'},
21:{sound:'/shun/ ending',rule:'The /shun/ ending is often written -ation.',strategy:'Find the root, then learn ation as one stable chunk.'},
22:{sound:'/lee/ ending',rule:'Usually add -ly; consonant+y changes to i before -ly.',strategy:'Say the root, make the change, then add ly.'},
23:{sound:'/ch/, /sh/ or /k/',rule:'The letters ch can represent three sounds in these words.',strategy:'Sort each word by the sound ch makes.'},
24:{sound:'unusual letter teams',rule:'gue, que and sc can contain letters we do not clearly hear.',strategy:'Highlight the fixed team, say its letters, then read the word.'},
26:{sound:'/ay/ sound',rule:'/ay/ can be written ei, eigh or ey in this group.',strategy:'Sort the words by grapheme and compare them.'},
27:{sound:'related words',rule:'A word relative can reveal a hidden spelling sound.',strategy:'Find the relative that makes the spelling easier to hear.'}
};
const QUEST_SENTENCES={there:'Put the book over there.',their:'The children packed their bags.',here:'Please sit here.',hear:'Can you hear the music?',see:'I can see a rainbow.',sea:'The boat sailed across the sea.',one:'There is one apple left.',won:'Our team won the match.',sun:'The sun is shining.',son:'Their son likes football.',"they’re":'They’re going to the library.',"we’re":'We’re ready to begin.',"you’re":'You’re doing very well.'};
function questGuide(quest){if(QUEST_GUIDES[quest.id])return QUEST_GUIDES[quest.id];if(quest.test)return{sound:'mixed review',rule:'This path test revisits patterns from the previous four quests.',strategy:'Say, segment, spell, then read the word back.'};return QUEST_GUIDES[11]}
function questWordData(quest){const guide=questGuide(quest);return quest.words.map(word=>({word,sentence:QUEST_SENTENCES[word]||`Listen carefully. The word is ${word}. Can you spell ${word}?`,pattern:quest.title,guide,stage:quest.stage}))}
