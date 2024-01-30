/* eslint-disable no-undef */
module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: ["@babel/plugin-proposal-private-property-in-object"],
    resolve: {
        extensions: [".js", ".jsx", ".scss"],
        alias: {
            "@sass": path.resolve(__dirname, "sass"),
        },
    },
};
