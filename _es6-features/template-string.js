function hidden(template, ...args) {
  return template.join(' ');
}

function colorize(color) {
  return (template, ...args) => {
    return template.reduce((full, part, index) => {
      const arg = args[index - 1];
      return `${full} <span style="color: ${color}">${arg}</span> ${part}`;
    });
  };
}
