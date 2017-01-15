### to run local node_modules
$ ./node_modules/.bin/babel js -d build

// need to use git cmd line to run this in Windows OS

$ ./node_modules/.bin/babel js --presets es2015 --out-dir build

### run a script
$ npm run your_script

### Steps to remove directory
$ git rm -r --cached MyFolder //--cached removes it from git but not the local file system

$ git commit -m "Removed folder from repository"

$ git push origin master // another branch

## TODOs
1. Practice
2. More Practive
3. Even More Practice