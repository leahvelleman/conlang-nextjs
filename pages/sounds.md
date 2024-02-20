---
title: Sounds
description: tada!
---

### Vowel sounds

Tequi has five vowels, including a distinctive high central vowel **y** that might remind you of Slavic languages, Turkish, or Japanese. 


{% table .alternating %}
---
- **i**
- [i]
- **y**
- [ɨ]
- **u**
- [u]
---
- **e**
- [e]
-
-
- **o**
- [o]
---
-
-
- **a**
- [a]
-
-
{% /table %}

The vowel **u** is rare, and mostly occurs in words where a historical **w** was lost.

{% phonexample content=concat($eat, $feed, $hear, $convince) fts=["eat", "feed", "hear", "convince"] notes=["from <strong>*law</strong>","", "from <strong>*sē’ew</strong",""] /%}

**Y** is pronounced `[z]` after **s** or **ts**, and `[ɻ]` after **sh**, **ch**, or **r**.

{% phonexample fts=["sizzle", "drop [something compact]", "that"] content=concat($sizzle, $lower_cmp, $dem) /%}

All six vowels can be long as well as short. Write long vowels with a macron: **ā ē ī ō ū ȳ**.

There are nine diphthongs. Just like **u**, the diphthong **iu** is rare. 

{% table .alternating %}
---
- **iu**
- [ju]
- **iy**
- [jɨ]
- **ui**
- [wi]
- **uy**
- [wɨ]
---
- **io**
- [jo]
- **ie**
- [je]
- 
- 
- **ue**
- [we]
---
- **ia**
- [ja]
-
-
- **ua**
- [wa]
-
-
{% /table %}

Diphthongs can also be long as well as short. Write the macron on the second letter: **iā iē iō iȳ iū uā uē uī uȳ**.

Diphthongs starting in **i** can't occur after **sh** or **ch**, and diphthongs starting in **u** can't occur after **wh**, **qu**, or **w**.

**Y** can't occur before or after another vowel (though it can be part of a diphthong).

Other sequences of vowels are pronounced as separate syllables. Any vowel in this kind of sequence can be long. Lots of words are mostly or entirely vowels.

{% phonexample fts=["beginning of", "have water", "bear (over there)"] content=concat($beginning_of, $have_water, $bear_point) /%}

### Consonant sounds

Tequi has 19 consonant sounds. The sounds **hp ht hk** are rare at the beginnings of words.

{% table .alternating %}
---
- **p**
- [p]
- **t**
- [t]
-
-
- **k**
- [k]
- 
-
- **'**
- [ʔ]
---
- **hp**
- [ʰp]
- **ht**
- [ʰt]
-
-
- **hk**
- [ʰk]
-
-
-
-
---
- 
-
- **s**
- [s]
- **sh**
- [ʃ]
-
-
- **wh**
- [ʍ]
- **h**
- [h]
---
-
-
- **ts**
- [ts]
- **ch**
- [tʃ]
-
-
- **qu**
- [kʍ]
-
-
---
- **m**
- [m]
- **n**
- [n]
- 
-
-
-
-
-
-
-
---
-
-
- **l**
- [l]
- **r**
- [ʐ]
-
-
- **w**
- [w]
- 
-
{% /table %}

**Sh** and **ch** change pronunciation to `[ʂ]` and `[tʂ]` before **y**. (In other words, **shy** is `[ʂɻ]` and **chy** is `[tʂɻ]`.)

### Morphophonology

Many words have two stems: a short stem used at the end of a word or before a consonant, and a long stem used before a vowel.

Most of the time, you can predict the short stem from the long stem. The consonants fall into three categories: _hard,_ _soft,_ and _neutral._

{% table %}
- Hard
- Soft
- Neutral
---
- **p**
- **hp**
- **m**
---
- **t**
- **ht**
- **n**, **l**
---
- **ts**
- **s**
- 
---
- **ch**
- **sh**
- **r**
---
- **k**
- **hk**
-
---
- **qu**
- **wh**
- **w**
---
- **’**
- **h**
-
{% /table %}

If a long stem ends in a hard consonant, the short stem replaces it with `/ʔ/`. The consonant reappears before a vowel. 

{% phonexample fts=["sleep", "put to sleep"] content=concat($sleep, $put_to_sleep) notes=["from <strong>*shak</strong>", ""] /%}

Similarly, a soft consonant in the long stem becomes **h** in the short stem, and a neutral consonant in the long stem disappears in the short stem. The consonant reappears before a vowel. 

{% phonexample fts=["have", "give to", "want", "tempt"] content=concat($have, $give_to, $want, $tempt) notes=["from <strong>*owh</strong>", "",  "from <strong>*hōn</strong>", ""] /%}

Before a consonant, use the short stem. If this puts two consonants in a row, delete the first and _mutate_ the second. In mutation, a `/ʔ/` turns soft consonants hard, and a **h** turns hard consonants soft.

{% phonexample fts=["have", "say", "announce", "be confident"] content=concat($have, $say, $announce, $be_confident) notes=["","","from <strong>oh</strong> + <strong>cha</strong> <i>have and say</i>","from <strong>oh</strong> + <strong>si</strong> <i>have oneself</i>"] /%}

A few words have an unpredictable short stem.

{% phonexample fts=["burn", "set fire to", "burn oneself"] content=concat($burn, $set_fire_to, $burn_oneself) notes=["","","not <strong>*asi</strong>"] /%}

### Syllables

Tequi has no consonant clusters. A syllable can start with a single consonant, no more. Only the last syllable of a word can end in a consonant, and it can only end in **h** or **’**.



#### Lenition



#### Mutation

A hard sound disappears. But a following soft sound changes into a hard one.

A soft sound disappears. But a following hard sound changes into a soft one.

A neutral sound disappears with no effect.


### Foo

### Lorem ipsum dolor sit amet concupitescing 

A linguist would want to know how many consonant _phonemes_ Tequi has. In other words, if you wanted to write it with a few basic consonants, and treat the other sounds as variant pronunciations, how few could you get away with?

The Tequi alphabet only distinguishes 9 basic consonants. It spells the other sounds using combinations of these basic consonants, or as combinations of a consonant with a glide.

{% table %}
---
- `p`
- `t`
- `k`
- `ʔ`
---
- 
- `s`
-
- `h`
---
- `m`
- `n`
- 
-
---
-
- `l`
- 
- 
-
{% /table %}

So could Tequi only have 9 consonant phonemes? Well, maybe — but it's a bit of a stretch. In particular, you'd have to argue that Tequi had a _silent glide_ which corresponded to /ɨ/ but was never pronounced. So for instance, **si** would be /sɨ̯i/, with the /ɨ̯/ totally silent. This works fine as a spelling rule, but it seems far-fetched as a phonological one. (It's a bit like claiming that English silent **e** was a real phoneme.)
