# Astro Template

## Comes with

- [Astro](https://astro.build/)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [TailwindCSS](https://tailwindcss.com/)

### Development Tools

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)

## Development

```bash
pnpm run dev
```

## Build

```bash
pnpm run build
```

## Commit Messages

Commit messages should follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#specification) specification.

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit should contain the following structural elements, to communicate intent to the consumers of your library:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
