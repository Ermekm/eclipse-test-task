/// <reference path="../../node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import type { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}