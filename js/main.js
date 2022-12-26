const PACKAGE_NAME = '<package>';

const Commands = {
  install: 'xbps-install',
  remove: 'xbps-remove',
  query: 'xbps-query',
  src: './xbps-src',
};

const dataCommands = [
  {
    heading: 'Installing',
    commands: [
      {
        command: `${Commands.install} ${PACKAGE_NAME}`,
        description: 'Install a package',
      },
      {
        command: `${Commands.install} -Su`,
        description: 'Sync repositories and update system',
      },
      ,
    ],
  },
  {
    heading: 'Removing',
    commands: [
      {
        command: `${Commands.remove} ${PACKAGE_NAME}`,
        description: 'Remove a package',
      },
      {
        command: `${Commands.remove} -R ${PACKAGE_NAME}`,
        description: 'Remove package and unused dependencies',
      },
      {
        command: `${Commands.remove} -Oo`,
        description: 'Clean cache and remove unsused dependencies',
      },
    ],
  },
  {
    heading: 'Querying',
    commands: [
      {
        command: `${Commands.query} -Rs ${PACKAGE_NAME}`,
        description: 'Search for package in the repositories',
      },
      {
        command: `${Commands.query} -l`,
        description: 'Lists all installed packages',
      },
    ],
  },
  {
    heading: 'Source',
    commands: [
      {
        command: `${Commands.src} pkg ${PACKAGE_NAME}`,
        description: 'Builds package from source',
      },
      {
        command: `${Commands.install} --repository=hostdir/binpkgs/ ${PACKAGE_NAME}`,
        description: 'Install package',
      },
      {
        command: `${Commands.install} --repository=hostdir/binpkgs/nonfree ${PACKAGE_NAME}`,
        description: 'Install nonfree packages',
      },
    ],
  },
];

dataCommands.forEach((data) => {
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
  data.commands.forEach((commandData) => {
    const commandRowEl = document.createElement('div');
    const commandEl = document.createElement('p');
    const commandDescEl = document.createElement('p');
    const commandDividorEl = document.createElement('div');

    commandRowEl.className = 'command-row';
    commandEl.className = 'command';
    commandDescEl.className = 'command-desc';

    commandEl.textContent = commandData.command;
    commandDescEl.textContent = commandData.description;
    commandDividorEl.textContent = '|';

    commandRowEl.appendChild(commandEl);
    commandRowEl.appendChild(commandDividorEl);
    commandRowEl.appendChild(commandDescEl);
    commandSectionEl.appendChild(commandRowEl);
  });
});
