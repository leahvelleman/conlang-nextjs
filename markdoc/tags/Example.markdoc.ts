import { ReactExample } from "../../components/ReactExample"

export const example = {
  render: ReactExample,
  attributes: {
    ft: {
      type: String,
    },
    content: {
      type: Array,
    },
    note: {
      type: String,
    }
  },
};
