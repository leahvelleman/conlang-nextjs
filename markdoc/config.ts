
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
	     segments: [{ kind: "sounds", spelling: "tsyk", ipa: "tszk" }],
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
