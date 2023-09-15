<center>
  <p align="center">
    <img src="https://github.com/evertonkoga/nlw-ia_upload-ai_api/assets/54872138/5a3dc362-9a7c-4bf7-be47-46b053962e15" width=350px/>
  </p>  
  <h1 align="center">🎬 Aplicação: Gerador de Resumos para Vídeos</h1>
  <p align="center">    
    A aplicação recebe uma URL de um shorts do YouTube, extrai o conteúdo em áudio do vídeo e, em seguida, gera um resumo.<br/>
    Para construir o front-end e back-end, foi utilizado Javascript, HTML e CSS puro, com o suporte das libs <b>ffmpeg, node-wav</b> e <b>ytdl-core</b> para a manipulação e conversão do vídeo em áudio.
    Complementando essa funcionalidade, foi incluido a lib <b>@xenova/transformers</b>, que utiliza modelos de IA para extrair o texto do conteúdo e gerar o resumo.
    É importante mencionar que esses modelos estão hospedados na plataforma <a href="https://huggingface.co/models">Hugging Face</a>.
  </p>
</center>
<br />

## Como executar?

1. Clonar o repositório:
```sh
git clone https://github.com/evertonkoga/nlw-ia_videos-summary.git
```

2. Baixar as dependências:
```shell
npm i
```

3. Executar projeto back-end:
```shell
npm run server
```

4. Executar projeto front-end:
```shell
npm run web
```
