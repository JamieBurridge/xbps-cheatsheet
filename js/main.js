const PACKAGE_NAME = '<package>';

const dataCommands = [
  {
    heading: 'Installing',
    commands: [
      {
        command: `xbps-install ${PACKAGE_NAME}`,
        description: 'Install a package',
      },
    ],
  },
  {
    heading: 'Removing',
    commands: [
      {
        command: `xbps-remove ${PACKAGE_NAME}`,
        description: 'Remove a package',
      },
    ],
  },
];

dataCommands.forEach((data, index) => {
  // Container
  const commandsListContainerEl = document.querySelector(
    '.commands-list-container'
  );
  const commandSectionEl = document.createElement('section');
  commandSectionEl.className = 'commands-list';
  commandsListContainerEl.appendChild(commandSectionEl);

  // Heading
  const sectionHeadingEl = document.createElement('h3');
  sectionHeadingEl.textContent = data.heading;
  commandSectionEl.appendChild(sectionHeadingEl);

  // Commands
  for (let i = 0; i < data.commands.length; i++) {
    const commandRowEl = document.createElement('div');
    const commandEl = document.createElement('p');
    const commandDescEl = document.createElement('p');
    const commandDividorEl = document.createElement('div');

    commandRowEl.className = 'command-row';
    commandEl.className = 'command';
    commandDescEl.className = 'command-desc';

    commandEl.textContent = data.commands[i].command;
    commandDescEl.textContent = data.commands[i].description;
    commandDividorEl.textContent = '|';

    commandRowEl.appendChild(commandEl);
    commandRowEl.appendChild(commandDividorEl);
    commandRowEl.appendChild(commandDescEl);
    commandSectionEl.appendChild(commandRowEl);
  }
});
