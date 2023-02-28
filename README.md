# Tequi grammar

This is a grammar for a conlang called Tequi in the form of a React app. The app provides toggleable interlinear glosses, tooltips with grammar information, and some nice layout. It uses Markdoc as an authoring framework and Next.js as a React framework. 

# Development info

## Previewing

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Modifications to the code are reflected in real time. In particular, changes to `pages/` result in new or modified content pages. 

## Lexicon

In `markdoc/config.ts`, the value of `config.variables` is a hash of lexical entries. Each entry's value is a list of words (enabling multiword expressions), each word is a list of morphemes, and each morpheme has these fields:

- `kind`: either `root`, `clitic`, `redup`, or `infix`
- `side` [only when `kind` is not `root`]: the side the morpheme is attached to, `left` or `right`. This allows distinctions between prefixes and suffixes, proclitics and enclitics, etc. For infixes, it determines which side of its parent morpheme the gloss is attached to in interlinear text.
- `segments`: a list of segments
- `gloss`: a single-morpheme gloss to display in interlinear text
- `note`: a note to display in informational tooltips

A segment can be an infix, or a `sounds` object with the following fields:

- `kind`: `sounds`
- `spelling`
- `ipa`

You can use keys from `config.variables` to produce words in the output.  

## Markdoc tags

In addition to the default Markdoc tags, the app provides:

### Linguistic examples

The `example` tag has these attributes:

```
{% example 
   content=concat($key1, $key2)
   ft="Free translation"
   note="Note" /%}
```

The values in `content` are keys from the lexicon.

### Linguistic examples

```
{% content=concat($word, $other_word) 
   example ft="Translation" 
   note="Note" %}
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
