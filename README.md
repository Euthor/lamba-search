# lambda-search
[Levenshtein distance][leven-dist] fuzzy searches as serverless lambdas

## Scripts

## Deploy

```bash
$ serverless deploy
```

### Run production

```bash
$ serverless invoke --function search --data "John Doe"
```

### Run Local

For invoking searches locally

```bash
$ serverless invoke local --function search --data "John Doe"
```

# Authors

- [@nicholaswmin][nicholaswmin]

[leven-dist]: https://en.wikipedia.org/wiki/Levenshtein_distance
[nicholaswmin]: https://github.com/nicholaswmin
