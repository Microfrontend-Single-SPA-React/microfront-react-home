# Microfront React

## Root Config
> [!CAUTION]
> The root config repository can be found [here](https://github.com/j17hernandez/microfront-react-root-config.git)


### SASS Pattern 7 - 1

Each folder must contain a file named \_module.scss with the imports of the existing files in that folder, the structure for the creation of new files will be the following, where, as its name indicates the files will be stored in its respective folder.

- 01_variables
- 02_mixins
- 03_functions
- 04_common
- 05_components
- 06_views
- 07_layout

Now, in the root of the assets/scss/ folder a file called main.scss must be created, in this file the imports of the \_module.scss existing in the previously mentioned folders must be made, this must be done in the established order, this to avoid problems with the styles of the components.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and hot-reloads for production

```
npm run serve
```
