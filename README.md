# require-performance-test
A ideia desse projeto é apenas verificar a carga de processamento na inclusão de módulos JavaScript usando commonjs e a prática de utilizar apenas uma única resopnsabilidade em cada módulo.

Dessa forma, criei um módulo chamado **model** para simular acessos ao banco de dados com rotinas separadas em arquivos, como **insert** e **update**. Para expor essas rotinas, foi criado um arquivo **index.js** para agrupar tudo num único ponto de acesso e expor as rotinas públicas do **model** para o resto do sistema.

Se eu carregar o **model** em vários outros módulos, o tempo de carregamento deve ser maior no primeiro, caindo drasticamente nas inclusões do mesmo módulo **model** em outros módulos. Isso mostraria que o primeiro carregamento do **index.js** proveniente do **model** seria mais lento apenas na primeira vez.

O resultado da execução foi como mostrado abaixo, caindo para menos da metade do tempo nas inclusões posteriores a primeira vez em várias execuções. Isso mitigou meu medo de criar um processamento pesado no acesso aos arquivos de módulos fragmentados em vários arquivos separados.

```bash
> requires@1.0.0 start
> node ./src/index.js

primeiro: 1.801ms
segundo: 0.503ms
segundo: 0.537ms
inserted data { module: 'segundo service' }
updated data { module: 'segundo service' }
inserted data { module: 'primeiro service' }
updated data { module: 'primeiro service' }
inserted data { module: 'terceiro service' }
updated data { module: 'terceiro service' }
```