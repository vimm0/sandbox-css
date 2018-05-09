# sandbox-css

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Configuration

1. You install the necessary dependencies

`npm install -D node-sass sass-loader`

2. For global styles, simply import the file into main.js:

`import './styles/my-styles.scss'`

3. In .vue files, add the lang to the `<style> ` element.

`<style lang="scss">`
