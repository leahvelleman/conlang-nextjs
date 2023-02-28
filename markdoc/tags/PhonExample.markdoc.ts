import { ReactPhonExample } from "../../components/ReactPhonExample"

export const phonexample = {
  render: ReactPhonExample,
  attributes: {
    fts: {
      type: Array,
    },
    content: {
      type: Array,
    },
    note: {
      type: String,
    }
  },
};
