base_dir=$PWD

cd ../../marscollective/marscollective.co/
yarn lerna version

cd $base_dir
git fetch upstream
git rebase upstream/main
git push
