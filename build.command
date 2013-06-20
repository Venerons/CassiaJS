#!/bin/sh
cd /Users/Venerons/github/local/CassiaJS/
echo "CassiaJS production build started..."
java -jar /Users/Venerons/Documents/Developer/compiler.jar --js=cassia.js --js_output_file=cassia.min.js
echo "CassiaJS production build completed."
