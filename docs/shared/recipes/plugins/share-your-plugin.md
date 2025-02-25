# Share your Nx Plugin

In order to use your plugin in other workspaces or share it with the community, you will need to publish it to an npm registry. To publish your plugin follow these steps:

1. Build your plugin with the command `nx run my-plugin:build`
1. `npm publish ./dist/package/my-plugin` and follow the prompts from npm.
1. That's it!

{% callout type="warning" title="Version bump" %}
Currently you will have to modify the `package.json` version by yourself or with a tool.
{% /callout %}

After that, you can then install your plugin like any other npm package,
`npm i -D @my-org/my-plugin` or `yarn add -D @my-org/my-plugin`.

## Listing your Nx Plugin

Nx provides a utility (`nx list`) that lists both core and community plugins. To submit your plugin, please follow the steps below:

- Fork the [Nx repo](https://github.com/nrwl/nx/fork) (if you haven't already)
- Update the [`community/approved-plugins.json` file](https://github.com/nrwl/nx/blob/master/community/approved-plugins.json) with a new entry for your plugin that includes name, url and description
- Use the following commit message template: `chore(core): nx plugin submission [PLUGIN_NAME]`
- push your changes, and run `yarn submit-plugin`

> The `yarn submit-plugin` command automatically opens the GitHub pull request process with the correct template.

We will then verify the plugin, offer suggestions or merge the pull request!

## Write Migrations

Once other repos are using your plugin, it would help them if you write migrations to automatically update their configuration files whenever you make breaking changes. Read the [migration generators guide](/recipes/advanced-plugins/migration-generators) to find out how.
