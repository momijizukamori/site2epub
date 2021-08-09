const WebExtPlugin = require('web-ext-plugin');
const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [
    {
        name: "wattpad",
        module: {
            rules: [
                {
                    test: [/background\.js$/, /content_script\.js$/],
                    use: [
                        {
                            loader: "imports-loader",
                            options: {
                                imports: [
                                    "named ./sites/wattpad LoadUrl",
                                    "named ./sites/wattpad WattpadLogic SiteLogic"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        mode: "none",
        resolve:
            {
                fallback: { "path": require.resolve("path-browserify") }
            },
        entry: {
            content_script: "./src/content_script.js",
            background: "./src/background.js",
        },
        output: {
            path: path.resolve(__dirname, "dist/wattpad/addon"),
            filename: "[name].js"
        },
        plugins: [new CopyPlugin({
            patterns: [
                { from: "./manifests/wattpad.json", to: path.resolve(__dirname, "dist/wattpad/manifest.json") },
                { from: "./icons/icon.png", to: path.resolve(__dirname, "dist/wattpad/icons/icon.png") },
            ],
        }),
            new webpack.ProvidePlugin({
                process: 'process/browser.js',
            }), new WebExtPlugin({ sourceDir: path.resolve(__dirname, "dist/wattpad") })],
    },
    {
        name: "chrysgarden",
        module: {
            rules: [
                {
                    test: [/background\.js$/, /content_script\.js$/],
                    use: [
                        {
                            loader: "imports-loader",
                            options: {
                                imports: [
                                    "named ./sites/chrysgarden LoadUrl",
                                    "named ./sites/chrysgarden ChrysGardenLogic SiteLogic"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        mode: "none",
        resolve:
            {
                fallback: { "path": require.resolve("path-browserify") }
            },
        entry: {
            content_script: "./src/content_script.js",
            background: "./src/background.js",
        },
        output: {
            path: path.resolve(__dirname, "dist/chrysgarden/addon"),
            filename: "[name].js"
        },
        plugins: [new CopyPlugin({
            patterns: [
                { from: "./manifests/chrysgarden.json", to: path.resolve(__dirname, "dist/chrysgarden/manifest.json") },
                { from: "./icons/icon.png", to: path.resolve(__dirname, "dist/chrysgarden/icons/icon.png") },
            ],
        }),
            new webpack.ProvidePlugin({
                process: 'process/browser.js',
            }), new WebExtPlugin({ sourceDir: path.resolve(__dirname, "dist/chrysgarden") })],
    },
    {
    name: "changpei",
    module: {
        rules: [
            {
                test: [/background\.js$/, /content_script\.js$/, /chapter_script\.js$/],
                use: [
                    {
                        loader: "imports-loader",
                        options: {
                            imports: [
                                "named ./sites/changpei LoadUrl",
                                "named ./sites/changpei ChangpeiLogic SiteLogic"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    mode: "none",
    resolve:
        {
            fallback: { "path": require.resolve("path-browserify") }
        },
    entry: {
        content_script: "./src/content_script.js",
        background: "./src/background.js",
        chapter_script: "./src/chapter_script.js",
    },
    output: {
        path: path.resolve(__dirname, "dist/changpei/addon"),
        filename: "[name].js"
    },
    experiments: {
        syncWebAssembly: true
    },
    plugins: [new CopyPlugin({
        patterns: [
            { from: "./manifests/changpei.json", to: path.resolve(__dirname, "dist/changpei/manifest.json") },
            { from: "./icons/icon.png", to: path.resolve(__dirname, "dist/changpei/icons/icon.png") },
        ],
    }),
        new webpack.ProvidePlugin({
        process: 'process/browser.js',
    }), new WebExtPlugin({ sourceDir: path.resolve(__dirname, "dist/changpei") })],
},
    {
        name: "jjwxc",
        module: {
            rules: [
                {
                    test: [/background\.js$/, /content_script\.js$/],
                    use: [
                        {
                            loader: "imports-loader",
                            options: {
                                imports: [
                                    "named ./sites/jjwxc JJWXCLogic SiteLogic"
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        mode: "none",
        resolve:
            {
                fallback: { "path": require.resolve("path-browserify"), "zlib": require.resolve("browserify-zlib"), "fs": false,  "buffer": false,  "stream": require.resolve("stream-browserify") }
            },
        entry: {
            content_script: "./src/content_script.js",
            background: "./src/background.js",
        },
        output: {
            path: path.resolve(__dirname, "dist/jjwxc/addon"),
            filename: "[name].js"
        },
        experiments: {
            syncWebAssembly: true
        },
        plugins: [new CopyPlugin({
            patterns: [
                { from: "./manifests/jjwxc.json", to: path.resolve(__dirname, "dist/jjwxc/manifest.json") },
                { from: "./src/woff2.wasm", to: path.resolve(__dirname, "dist/jjwxc/addon/woff2.wasm") },
                { from: "./icons/icon.png", to: path.resolve(__dirname, "dist/jjwxc/icons/icon.png") },
            ],
        }),
            new webpack.ProvidePlugin({
                process: 'process/browser.js',
            }), new WebExtPlugin({ sourceDir: path.resolve(__dirname, "dist/jjwxc") })],
    }];
