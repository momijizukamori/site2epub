A collection of extensions for creating epubs for offline reading from various online novel sites. They use a shared central framework, with per-site configurations. They only have one main external dependency, on `jszip`, which is used to compress the epub contents (epubs are essentially a special type of zip) - all other dependencies are simply for packaging. It also inlines a copy of `nodepub`, in order to make changes to support reading input from dynamic sources, and to remove unused features that require additional dependencies.

### To Build ###
* `npm install`
* `webpack build --config-name [site name]` (or `webpack build` to rebuild all)
* `cd dist/[site name]`
* `web-ext build`

### To Run ###
* **See [the installation doc](https://github.com/momijizukamori/site2epub/blob/master/docs/INSTALLATION.md)**
* These extensions are unsigned (for now) and will need to be run in developer mode. Download the most recent version of the site you want from the `web-ext-artifacts` folder and follow the instructions for running it for your browser:
  - Firefox - https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Add-ons
  - Chrome - https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/
* Go to the **chapter index** for the novel - if you try to run from somewhere other than the main chapter list, it will fail.