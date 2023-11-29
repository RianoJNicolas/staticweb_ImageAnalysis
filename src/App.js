import React from 'react';

// componente de titulo
function Title(props) {
  return <h1>{props.title}</h1>;
}

// componente de cuadro de texto para insertar una URL
function UrlInput(props) {
  return <input type="text" onChange={props.onChange} />;
}

// componente de boton con texto "Analyze"
function AnalyzeButton(props) {
  return <button onClick={props.onClick}>Analyze</button>;
}

// componente de boton con texto "Generate"
function GenerateButton(props) {
  return <button onClick={props.onClick}>Generate</button>;
}

export default App;
