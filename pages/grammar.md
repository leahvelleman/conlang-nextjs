

## Parts of speech

### Verbs {% #verb %}

Most sentences have a verb as their predicate. 

If another part of speech is the predicate, use a _light verb._ The most common are **pō** _be_ for non-expressives and **cha** _say_ for expressives.

_Existential verbs_ have no arguments. They can express that a thing exists, that an event happens, or that a situation (like weather) is going on.

Other verbs have one or two arguments.

There are no verbs with three arguments, like English **give** or **tell.** Instead, use _pair verbs_ — a series of two verbs that share a subject but have separate objects, and that are lexicalized together with a (sometimes idiosyncratic) meaning. For instance, the pair verb for 'tell' comes from _say_ plus _go under control_.

### Expressives {% #expressives %}{% #expressive-root %}


## Word meanings

### Lexical aspect

Tequi doesn't mark tenses or aspects on 

### Motion

Verbs often have much less narrow meanings than they do in English. For instance, a single verb glossed _move under control_ can describe situations for which English would use 'send,' 'push,' 'pull,' 'carry,' 'twist,' 'raise,' and so on.

{% example ft="Move the rock (in a controlled way)." content=concat($move_ctrl_cmp, $def, $rock) /%}

When more precision is needed, use additional [verbs](#verbs) or [expressives](#expressives).

{% example ft="Push the rock." content=concat($pushing, $move_ctrl_cmp, $def, $rock) /%}

### Shape

In other ways, Tequi predicates are _more_ specific than English ones. In particular, there's a class of predicates that agree with the _shape_ of their subject or object.

{% table .example %}
---
- {% example ft="Move it (something tall)." content=concat($move_ctrl_tall, $dem) /%}
- {% example ft="It stands up (something tall)." content=concat($dem, $say, $stand_up_tall) /%}
---
- {% example ft="Move it (something wide)." content=concat($move_ctrl_wide, $dem) /%}
- {% example ft="It stands up (something wide)." content=concat($dem, $say,$stand_up_wide) /%}
---
- {% example ft="Move it (something amorphous)." content=concat($move_ctrl_loose, $dem) /%}
- {% example ft="It stands up (something amorphous)." content=concat($dem, $say,$stand_up_loose) /%}
{% /table %}

Predicates in this class always begin with a vowel. Indicate the shape of the argument with a consonant prefix.

{% table .smol %}
- Class 
- Prefix {% width="25%" %}
- Examples
---
- Tall 
- **t–** (**ch–** before **i**)
- People. Trees and tall plants.  Tall upright things: phone poles, towers, tall buildings, cranes, antennas. Long rigid things: branches, pieces of lumber, swords, fishing poles. Some abstractions that fit metaphorically: belief systems and institutions (from "tall buildings"), radio stations and record labels (from "antennas"), etc. 
---
- Wide
- **p–**
-  Domestic quadrupeds: cows, horses, dogs. Four-wheeled vehicles. 
  Ships and boats. Furniture: chairs, tables, beds. Low buildings like houses, barns, and sheds. Hills and mountains. Some abstractions that fit metaphorically: families (from "houses"), bus routes (from "vehicles"), etc. 
---
- Plain
- **n–**
-  Birds and wild animals. Plants that aren't dramatically tall. 
  Most household objects: books, pots, utensils, containers. Bicycles. Tools and parts. Bodyparts. Some food. Most abstractions. 
---
- Loose
- **wh–** (**h–** before **u**)
- Swarms, herds, and crowds. Mass nouns: rice, sand, forest. Liquids and gasses. Soft or flexible inanimate things: cloth, rope, noodles. Most abstractions. 
{% /table %}

When an expressive has a prefix, that prefix can be reduplicated just like any other part of the word. Here, the reduplicated part is **ty** because **teke** starts with **t**.

{% example ft="It stands around (something tall)." content=concat($dem, $stand_up_tall_idle) /%}

The argument that controls agreement is generally the one that moves: the subject of a motion verb, the object of a caused-motion verb like _give_ or _send,_ or the part of the sentence whose motion is described by an expressive. 