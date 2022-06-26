# lambda-search
Fuzzy searches as serverless lambdas

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
# Fuzzy search through lib/list.json for "John Doe"
$ serverless invoke local --function search --data "John Doe"
```

# Authors

- [@nicholaswmin][1]

[1]: https://github.com/nicholaswmin
