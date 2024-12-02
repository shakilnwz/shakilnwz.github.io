# Vite project with TailwindCSS v4 beta using Deno 2

Tools used:
- Deno v2+
- Vite
- Vue 3
- TailwindCSS v4 beta

Steps:
- [Install Deno](#install-deno).
- [Create Vite project](#create-vite-project).
- [Add TailwindCSS](#add-tailwindcss).
- [Configure Deno and Vite](#configure-deno-and-vite).
- [Usage](#usage).

## Install Deno

We can install Deno using following command:

ArchLinux (from AUR):
```zsh
$ yay -S deno
```
Ubuntu (using snap):
```zsh
$ sudo snap install deno
```
Universal command for MacOS or Linux (requires curl):
> [!NOTE]
> This might require adding deno executable or local bin to PATH

```zsh
$ curl -fsSL https://deno.land/install.sh | sh
```
Windows (using PowerShell):
```ps1
irm https://deno.land/install.ps1 | iex
```
Upgrade Deno:
The distro specific package for deno might not be the latest version.
To upgrade Deno we can run following command:
```zsh
$ deno upgrade
```
More Information for troubleshooting and installation can be found at [Official Website of Deno](https://deno.com/).

## Create Vite project

Assuming Deno already installed in the system having version 2 or up.
```zsh
$ deno run --allow-read --allow-write --allow-env npm:create-vite-extra@latest .
```
Deno will use the npm packages for creating a vite app.
The `--allow-write --allow-read --allow-env` flag ensures the packages can be written in the storage,
packages have read permission and environment variable is accessible.
We can also not pass those flags as `deno run` is interactive and it will ask which permission is needed.
The dot (.) will ensure project is created in the current directory.
Now we can choose which project we want to create.

## Add TailwindCSS

To add latest TailwindCSS (beta in this case) we can use the following command.
```zsh
$ deno add npm:tailwindcss@next npm:@tailwindcss/vite@next
```
This command will add those packages from npm. The tailwindcss 4 will use it's dedicated vite plugin.

## Configure Deno and Vite
Now tailwindCSS have some predefined scripts that needed to run. To use that in deno we have do specify node modules directory.
In deno.json we have to add `"nodeModulesDir": "auto"`.

Deno config:
```json
{
  "tasks": {
    "dev": "deno run -A --node-modules-dir npm:vite",
    "build": "deno run -A --node-modules-dir npm:vite build",
    "preview": "deno run -A --node-modules-dir npm:vite preview",
    "serve": "deno run --allow-net --allow-read jsr:@std/http@1/file-server dist/"
  },
  "compilerOptions": {
    "lib": ["ES2020", "DOM", "DOM.Iterable"]
  },
  "imports": {
    "@deno/vite-plugin": "npm:@deno/vite-plugin@^1.0.0",
    "@tailwindcss/vite": "npm:@tailwindcss/vite@^4.0.0-beta.3",
    "@vitejs/plugin-vue": "npm:@vitejs/plugin-vue@^5.1.4",
    "tailwindcss": "npm:tailwindcss@^4.0.0-beta.3",
    "vite": "npm:vite@^5.4.9",
    "vue": "npm:vue@^3.5.12"
  },
    "nodeModulesDir": "auto"
}
```
Now we can run deno install to install those packages but we have to pass `--allow-scripts` flag.
```zsh
$ deno install --allow-scripts=npm:svelte-preprocess@6.0.3
```
The `--allow-scripts` flag takes the scripts to run.
In this case `svelte-preprocess@6.0.3` and as it is from an npm package `npm:` was added.
This extra steps are needed as deno is secure by default. So we need to pass explicitly what we want to run.

Now we have to import tailwindcss in our vite config.

Vite Config:
```js
import { defineConfig } from "vite";
import deno from "@deno/vite-plugin";
import vue from "@vitejs/plugin-vue";

// import tailwindcss
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), vue(), tailwindcss()],
});
```
This imports deno, vue (as vue was selected as project type in this case), and tailwindcss.

TailwindCSS v4 uses CSS first as configuration, So no `tailwind.config.json` is not needed.
In our main style.css we simply have to import tailwindcss.

Main CSS:
```css
@import 'tailwindcss';
```
This can also have other configuration for tailwindcss, if we have any the imports must be at the top of the file.

That's all we have to do.

> [!NOTE]
> In this project vue is used so the plugin vue is in the vite and deno config.

## Usage

When we created the project deno added some tasks in the config.


### Start a dev server

To run a local development server we have to run:
```sh
$ deno task dev
```

### Build production assets

To build for production assets we can run:
```zsh
$ deno task build
```
That's all.
