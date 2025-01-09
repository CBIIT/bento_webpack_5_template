## Webpack configuration
Migrate all components to Webpack 5. Add additional configurations as necessary. All configurations are located in the ```webpack``` folder.

## Migration
Migrate core features and global components before migrating other components and pages. 

Update your dependencies

- After each step npm run dev or build (* add any dependency)
1. 'src/bento/*'
2. 'src/assets/*'
3. 'src/componnets/*' **except LayerView.js**
4. configure redux 'src/store/index.js'
5. **Add one route at a time in LayerView.js** (Add any missing depencencies)
6. Add graphQil configuration 

## Scripts
```
npm i

npm run dev  

npm run build
```

