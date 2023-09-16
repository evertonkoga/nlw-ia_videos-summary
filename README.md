<center>
  <p align="center">
    <img src="https://github.com/evertonkoga/nlw-ia_upload-ai_web/assets/54872138/b6746361-ee0c-4cbe-b369-7b3b672d07b1" width=110px height="110px" /> &nbsp;
    <img src="https://github.com/evertonkoga/nlw-ia_upload-ai_web/assets/54872138/614f532a-3957-4a14-bc29-67546276330a" width=110px height="110px" /> &nbsp;
    <img src="https://github.com/evertonkoga/nlw-ia_upload-ai_web/assets/54872138/3ff658d3-f972-4272-98a2-291fee5e6198" width=110px height="110px" />
  </p>  
  <h1 align="center">🎬 Aplicação: Gerador de Resumos para Vídeos</h1>
  <p align="justify">    
    A aplicação recebe uma URL de um shorts do YouTube, extrai o conteúdo em áudio do vídeo e, em seguida, gera um resumo.<br/><br/>
    Para desenvolver o front-end e back-end(NodeJS), foi utilizado o <b><a href="https://vitejs.dev/">Vite</a></b> com as tecnologias <b>Javascript, HTML</b> e <b>CSS</b> puro, com o suporte das libs <b>ffmpeg, node-wav</b> e <b>ytdl-core</b> para a manipulação e conversão do vídeo em áudio.
    Complementando essa funcionalidade, foi incluido a lib <b>@xenova/transformers</b>, que utiliza modelos de IA para extrair o texto do conteúdo e gerar o resumo.
    É importante mencionar que esses modelos estão hospedados na plataforma <a href="https://huggingface.co/models">Hugging Face</a>.
  </p>
</center>
<br />

> Os ícones dessa aplicação foram adquiridos no https://phosphoricons.com

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
