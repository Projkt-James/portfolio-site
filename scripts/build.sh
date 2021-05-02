
# Clean up pre-existing dist directory
if [ -d "$PWD/dist" ] 
then
    echo "Removing existing /dist directory"
    rm -rf "$PWD/dist"
fi

# Make new dist directory
mkdir "$PWD/dist"

npm run scss-build

# Copy dist files to directory
cp -r $PWD/assets $PWD/dist/assets
cp -r $PWD/css $PWD/dist/css
cp -r $PWD/js $PWD/dist/js
cp $PWD/index.html $PWD/dist/index.html
