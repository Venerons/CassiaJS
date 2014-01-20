#!/bin/sh
echo -en "\033[1;31mStarting CassiaJS Build...\n\033[0m"
cd /Users/Venerons/github/local/CassiaJS/
#
# HEADER
#
echo "// CassiaJS v1.0.0 | Copyright (c) 2012-2014 Daniele Veneroni | Licensed under the MIT License (X11 License)" > headerjs
#
# JAVASCRIPT COMPRESSION
#
echo -en "\033[1;31mStarting JS compression...\n\033[0m"
if [ -e cassia.min.js ]; then
	rm cassia.min.js;
fi
java -jar /Users/Venerons/Documents/Developer/yuicompressor-2.4.8.jar cassia.js -o cassia.min.js --type js --charset utf-8 --preserve-semi
echo "" >> cassia.min.js
mv cassia.min.js tmp
cat headerjs tmp > cassia.min.js
rm tmp
echo -en "\033[1;32mJS compression finished.\n\033[0m"
#
# CLEANUP
#
rm headerjs
echo -en "\033[1;32mCassiaJS Build finished.\n\033[0m"
