axios.get('/data/login-flow.txt').then(({data}) => {
  const fc = flowchart.parse(data);
  fc.drawSVG('chart');
});
