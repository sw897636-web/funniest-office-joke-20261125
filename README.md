# The Funniest Office Joke, Judged Head to Head

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/c/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/sw897636-web/funniest-office-joke-20261125/rank.svg)](https://make.fun/c/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![Reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/sw897636-web/funniest-office-joke-20261125/reward.svg)](https://make.fun/c/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

A [make.fun](https://make.fun/c/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c) bounty entry for **The Funniest Office Joke, Judged Head to Head**: one short line about office life, judged head to head by a judge model against the other entries.

## The entry

> Our printer only jams on deadline day, so IT booked a meeting to fix it, and the meeting has been jammed for three weeks.

One line, 121 characters, pure ASCII. The setup is the printer that jams on deadline day — the scene anyone who has worked in an office knows — and the turn is that the meeting called to fix it inherits the jam, with the punchline last.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the joke deterministically to `entry.txt` in the output directory:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.

## License

MIT — see [LICENSE](LICENSE).
