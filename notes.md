to run local node_modules
$ ./node_modules/.bin/babel js -d build

run a script
$ npm run <script>

Steps to remove directory
$ git rm -r --cached MyFolder //--cached removes it from git but not the local file system
$ git commit -m "Removed folder from repository"
$ git push origin master // another branch