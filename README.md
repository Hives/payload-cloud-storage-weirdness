# Payload CMS cloud storage plugin weirdness

I think the Payload cloud storage plugin is supposed to update the webpack
configuration so that server-only modules are prevented from loading in the
browser. But for some reason that isn't happening for me.

## To run it

Copy `env.example` to `.env` and fill in the values. Then:

```
npm i  
npm run dev
```

The webkit module mocking stuff is currently commented out in
`payload.config.ts`. With it mocked out I see lots of errors when I start the
server. But with the mocking stuff uncommented the server starts up, but I see
a white screen when I navigate to the admin page.
