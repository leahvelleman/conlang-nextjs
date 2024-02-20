
import * as tags from "./tags";
import * as nodes from "./nodes";

const textConcat = {
    transform(parameters: Object[]) {
        let result = [] as Object[];
        const strings = Object.values(parameters);
        for (let i = 0; i < strings.length; i++) {
            result = result.concat(strings[i])
        }
      return result;
    },
};
  


const config = {
    tags: tags,
    nodes: nodes,
    functions: { concat: textConcat },
    variables: {
      pushing: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "chaw", ipa: "tʃaw" }],
            gloss: "pushing",
            note: "is an [[expressive root]] meaning <i>pushing something heavy</i>",
          },
          {
            kind: "redup",
            side: "right",
            segments: [{ kind: "sounds", spelling: "a", ipa: "a" }],
            gloss: "EX",
            note: "is a [[pattern]] that forms [[expressives]]",
          },
        ],
      ],
      push: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "chaw", ipa: "tʃaw" }],
            gloss: "pushing",
            note: "is an [[expressive root]] meaning <i>pushing something heavy</i>",
          },
          {
            kind: "redup",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah" }],
            gloss: "VB",
            note: "is a [[pattern]] that forms [[verbs]]",
          },
        ],
      ],
      push_intens: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "chaw", ipa: "tʃaw" }],
            gloss: "pushing",
            note: "is an [[expressive root]] meaning <i>pushing something heavy</i>",
          },
          {
            kind: "redup",
            side: "right",
            segments: [{ kind: "sounds", spelling: "awa’", ipa: "awaʔ" }],
            gloss: "VB.INT",
            note: "is a [[pattern]] that forms [[intensive verbs]]",
          },
        ],
      ],
      mountain_dep: [
        [
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "omo", ipa: "omo"}],
                gloss: "mountain",
                note: "is a [[noun]] meaning <i>mountain</i>",
            },
            {
                kind: "affix",
                side: "right",
                segments: [{ kind: "sounds", spelling: "h", ipa: "h" }],
                gloss: "DEP",
                note: "is a [[suffix]] marking [[dependent state]]",
            },
        ]
      ],
      def: [
        [
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ri", ipa: "ʐi" }],
                gloss: "DEF",
                note: "is the [[definite article]]",
            }
        ]
      ],
      dem: [
        [
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ry", ipa: "ʐɻ" }],
                gloss: "DEM",
                note: "is the distal [[demonstrative]] ('that')",
            }
        ]
      ],
      sizzle: [
	[
	  {
	     kind: "root",
	     segments: [{ kind: "sounds", spelling: "tsyk", ipa: "tsz̩k" }],
	     gloss: "sizzle",
	     note: "is an [[expressive root]] meaning 'sizzle'."
	  },
	  {
	     kind: "redup", 
	     side: "right",
	     segments: [{ kind: "sounds", spelling: "y", ipa: "ɨ" }],
	     gloss: "VB",
	     note: "is a [[pattern]] that forms [[verbs]]"
	  }
	]
      ],
      lower_cmp: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "n", ipa: "n" }],
            gloss: "CMP",
            note: "is a [[shape prefix]] for compact things."
          },
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "ash", ipa: "aʂ" }],
            gloss: "send.NCTRL",
            note: "is a [[verb]] meaning <i>send uncontrolled</i>."
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "y", ipa: "ɻ"}],
            gloss: "down",
            note: "is an [[afterverb]] meaning <i>down</i>."
          }
        ]
      ],
      eat: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "lu", ipa: "lu"}],
            gloss: "eat",
            note: "is a [[verb]] meaning <i>eat</i>."
          }
        ]
      ],
      hear: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "sē’u", ipa: "se:ʔu"}],
            gloss: "hear",
            note: "is a [[verb]] meaning <i>hear</i>."
          },
        ]
      ],
      convince: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "sē’ew", ipa: "se:ʔew"}],
            gloss: "hear",
            note: "is a [[verb]] meaning <i>hear</i>."
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[causative verbs]]."
          }
        ]
      ],
      feed: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "law", ipa: "law"}],
            gloss: "eat",
            note: "is a [[verb]] meaning <i>eat</i>."
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[causative verbs]]."
          }
        ]
      ],
      beginning_of: [
        [
          {
            kind: "root",
            segments: [{kind: "sounds", spelling: "’eo", ipa: "ʔeo"}],
            gloss: "beginning",
            note: "is a [[noun]] meaning <i>beginning</i>."
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "i", ipa: "i"}],
            gloss: "DEP",
            note: "is a suffix marking [[dependent state]]"
          }
        ]
      ],
      have_water: [
        [
          {
            kind: "root",
            segments: [{kind: "sounds", spelling: "aē", ipa: "ae:"}],
            gloss: "water",
            note: "is a [[noun]] meaning <i>water</i>."
          },
          {
            kind: "affix",
            side: "right",
            segments: [{kind: "sounds", spelling: "u", ipa: "u"}],
            gloss: "have",
            note: "is a [[suffix verb]] meaning <i>have</i>."
          }
        ]
      ],
      bear_point: [
        [
          {
            kind: "root",
            segments: [{kind: "sounds", spelling: "aruaō", ipa: "aʐwao:"}],
            gloss: "bear.point",
            note: "is a [[noun]] meaning <i>bear</i>. The last vowel is lengthened, making it a [[pointing-out form]]."
          }
        ]
      ],
      go_ctrl: [
        [
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ika’", ipa: "ikaʔ"}],
                gloss: "go.CTRL",
                note: "is a [[verb]] meaning <i>go under control</i>."
            }
        ]
      ],
      move_ctrl_tall: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "t", ipa: "t"}],
            gloss: "TALL",
            note: "is a [[shape prefix]] for tall things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ū", ipa: "u:"}],
                gloss: "move.CTRL",
                note: "is a [[verb]] meaning <i>move under control</i>."
            },
        ]
      ],
      move_ctrl_wide: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "p", ipa: "p"}],
            gloss: "WIDE",
            note: "is a [[shape prefix]] for wide things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ū", ipa: "u:"}],
                gloss: "move.CTRL",
                note: "is a [[verb]] meaning <i>move under control</i>."
            },
        ]
      ],
      move_ctrl_loose: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "h", ipa: "h"}],
            gloss: "LOOSE",
            note: "is a [[shape prefix]] for amorphous things, loose groups, or liquids."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ū", ipa: "u:"}],
                gloss: "move.CTRL",
                note: "is a [[verb]] meaning <i>move under control</i>."
            },
        ]
      ],
      move_ctrl_cmp: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "n", ipa: "n"}],
            gloss: "CMP",
            note: "is a [[shape prefix]] for compact things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ū", ipa: "u:"}],
                gloss: "move.CTRL",
                note: "is a [[verb]] meaning <i>move under control</i>."
            },
        ]
      ],
      stand_up_cmp: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "n", ipa: "n"}],
            gloss: "CMP",
            note: "is a [[shape prefix]] for compact things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ek", ipa: "ek"}],
                gloss: "stand",
                note: "is a [[expressive root]] meaning <i>standing</i>."
            },
            {
              kind: "redup",
              side: "right",
              segments: [{ kind: "sounds", spelling: "eke'", ipa: "ekeʔ"}],
              gloss: "INTENS",
              note: "is a [[pattern]] that forms [[intensive verbs]]."
          },
        ]
      ],
      stand_up_tall: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "t", ipa: "t"}],
            gloss: "TALL",
            note: "is a [[shape prefix]] for tall things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ek", ipa: "ek"}],
                gloss: "stand",
                note: "is a [[expressive root]] meaning <i>standing</i>."
            },
            {
              kind: "redup",
              side: "right",
              segments: [{ kind: "sounds", spelling: "eke'", ipa: "ekeʔ"}],
              gloss: "INTENS",
              note: "is a [[pattern]] that forms [[intensive verbs]]."
          },
        ]
      ],
      stand_up_tall_idle: [
        [
          {
            kind: "redup",
            side: "left",
            segments: [{ kind: "sounds", spelling: "ty", ipa: "tɨ"}],
            gloss: "IMPF",
            note: "is a [[pattern]] for [[expressives]] conveying casualness."
          },
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "t", ipa: "t"}],
            gloss: "TALL",
            note: "is a [[shape prefix]] for tall things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ek", ipa: "ek"}],
                gloss: "stand",
                note: "is a [[expressive root]] meaning <i>standing</i>."
            },
            {
              kind: "redup",
              side: "right",
              segments: [{ kind: "sounds", spelling: "e", ipa: "e"}],
              gloss: "EX",
              note: "is a [[pattern]] that forms [[expressives]]."
          },
        ]
      ],
      stand_up_wide: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "p", ipa: "p"}],
            gloss: "WIDE",
            note: "is a [[shape prefix]] for wide things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ek", ipa: "ek"}],
                gloss: "stand",
                note: "is a [[expressive root]] meaning <i>standing</i>."
            },
            {
              kind: "redup",
              side: "right",
              segments: [{ kind: "sounds", spelling: "eke'", ipa: "ekeʔ"}],
              gloss: "INTENS",
              note: "is a [[pattern]] that forms [[intensive verbs]]."
          },
        ]
      ],
      stand_up_loose: [
        [
          {
            kind: "affix",
            side: "left",
            segments: [{ kind: "sounds", spelling: "wh", ipa: "ʍ"}],
            gloss: "LOOSE",
            note: "is a [[shape prefix]] for amorphous things."
         },
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "ek", ipa: "ek"}],
                gloss: "stand",
                note: "is a [[expressive root]] meaning <i>standing</i>."
            },
            {
              kind: "redup",
              side: "right",
              segments: [{ kind: "sounds", spelling: "eke'", ipa: "ekeʔ"}],
              gloss: "INTENS",
              note: "is a [[pattern]] that forms [[intensive verbs]]."
          },
        ]
      ],
      say: [
        [
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "cha", ipa: "tʃa"}],
                gloss: "say",
                note: "is a [[verb]] meaning <i>say</i>."
            },
        ]
      ],
      have: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "oh", ipa: "oh"}],
            gloss: "have",
            note: "is a [[verb]] meaning <i>have</i>."
          }
        ]
      ],
      be_confident: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "o", ipa: "o"}],
            gloss: "have",
            note: "is a [[verb]] meaning <i>have</i>."
          },

          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "si", ipa: "si"}],
            gloss: "REF",
            note: "is a suffix that forms [[reflexive verbs]]."
          }
        ]
      ],
      give_to: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "owh", ipa: "oʍ"}],
            gloss: "have",
            note: "is a [[verb]] meaning <i>have</i>."
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[causative verbs]]."
          }
        ]
      ],
      sleep: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "sha’", ipa: "ʃaʔ"}],
            gloss: "sleep",
            note: "is a [[verb]] meaning <i>sleep</i>"
          }
        ]
      ],
      put_to_sleep: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "shak", ipa: "ʃak"}],
            gloss: "sleep",
            note: "is a [[verb]] meaning <i>sleep</i>"
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[causative verbs]]."
          }
        ]
      ],
      want: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "hō", ipa: "ho:"}],
            gloss: "want",
            note: "is a [[verb]] meaning <i>want</i>"
          }
        ]
      ],
      tempt: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "hōn", ipa: "ho:n"}],
            gloss: "want",
            note: "is a [[verb]] meaning <i>want</i>"
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[causative verbs]]."
          }
        ]
      ],
      burn: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "ai’", ipa: "aiʔ"}],
            gloss: "burn",
            note: "is a [[verb]] meaning <i>burn</i>"
          }
        ]
      ],
      set_fire_to: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "ash", ipa: "aʃ"}],
            gloss: "burn",
            note: "is a [[verb]] meaning <i>burn</i>"
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "ah", ipa: "ah"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[causative verbs]]."
          }
        ]
      ],
      burn_oneself: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "ai", ipa: "ai"}],
            gloss: "burn",
            note: "is a [[verb]] meaning <i>burn</i>"
          },
          {
            kind: "affix",
            side: "right",
            segments: [{ kind: "sounds", spelling: "tsi", ipa: "tsi"}],
            gloss: "CAUS",
            note: "is a suffix that forms [[reflexive verbs]]."
          }
        ]
      ],
      announce: [
        [
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "o", ipa: "o"}],
            gloss: "come",
            note: "is a [[verb]] meaning <i>come</i>."
          },
          {
            kind: "root",
            segments: [{ kind: "sounds", spelling: "sha", ipa: "ʃa"}],
            gloss: "say",
            note: "is a [[verb]] meaning <i>say</i>."
        },
        ]
      ],
      rock: [
        [
            {
                kind: "root",
                segments: [{ kind: "sounds", spelling: "syqui", ipa: "szkʍi"}],
                gloss: "rock",
                note: "is a [[noun]] meaning <i>rock</i>."
            },
        ]
      ]
    },
  };

  export default config;
