# Zokrates


```bash
sudo docker run -v /home/nano/projects/nodejs/udacity/project3/Blockchain-Capstone-master/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

zokrates@ad806dc9ed27:~$ ls
code  examples  zokrates


zokrates@ad806dc9ed27:~$ ./zokrates compile -i code/square/square.code
Compiling code/square/square.code

Compiled program:
def main(_0, _1) -> (1):
        (1 * _0) * (1 * _0) == 1 * _4
        # _2, _3 = ConditionEq((-1) * _1 + 1 * _4)
        ((-1) * _1 + 1 * _4) * (1 * _3) == 1 * _2
        (1 * ~one + (-1) * _2) * ((-1) * _1 + 1 * _4) == 0
        (1 * ~one) * (1 * ~one + (-1) * _2) == 1 * ~out_0
         return ~out_0
Compiled code written to 'out'
Human readable code to 'out.ztf'
Number of constraints: 4


zokrates@ad806dc9ed27:~$ ./zokrates setup                             
Performing setup...
def main(_0, _1) -> (1):
        (1 * _0) * (1 * _0) == 1 * _4
        # _2, _3 = ConditionEq((-1) * _1 + 1 * _4)
        ((-1) * _1 + 1 * _4) * (1 * _3) == 1 * _2
        (1 * ~one + (-1) * _2) * ((-1) * _1 + 1 * _4) == 0
        (1 * ~one) * (1 * ~one + (-1) * _2) == 1 * ~out_0
         return ~out_0
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/reference/proving_schemes.html#g16-malleability for implications.
Has generated 7 points
Setup completed.


zokrates@ad806dc9ed27:~$ ./zokrates compute-witness -a 3 9
Computing witness...
def main(_0, _1) -> (1):
        (1 * _0) * (1 * _0) == 1 * _4
        # _2, _3 = ConditionEq((-1) * _1 + 1 * _4)
        ((-1) * _1 + 1 * _4) * (1 * _3) == 1 * _2
        (1 * ~one + (-1) * _2) * ((-1) * _1 + 1 * _4) == 0
        (1 * ~one) * (1 * ~one + (-1) * _2) == 1 * ~out_0
         return ~out_0

Witness: 

["1"]


zokrates@ad806dc9ed27:~$ ./zokrates generate-proof
Generating proof...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/reference/proving_schemes.html#g16-malleability for implications.
generate-proof successful: {
        "proof": {
            "a": ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"],
            "b": [["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"], ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]],
            "c": ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"]
        },
        "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"]
    }


zokrates@ad806dc9ed27:~$ ./zokrates export-verifier
Exporting verifier...
Finished exporting verifier.


zokrates@ad806dc9ed27:~$ ls
abi.json  code  examples  out  out.ztf  proof.json  proving.key  verification.key  verifier.sol  witness  zokrates
zokrates@ad806dc9ed27:~$ 
```


## Other

Start docker container:

```bash
sudo docker run -v /home/nano/projects/nodejs/udacity/project3/Blockchain-Capstone-master/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

./zokrates compile -i code/zokrates/code/square/square.code
```

Destroy docker container:

```bash
docker ps -a -q
docker rm [id]
```
