#!/bin/sh
# chmod +x build.command
# ./build.command
cd /Users/Venerons/github/local/CassiaJS/
echo "CassiaJS production build started..."
java -jar compiler.jar --js=cassia.js --js_output_file=cassia.min.js
echo "CassiaJS production build completed."
