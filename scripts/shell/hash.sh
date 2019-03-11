#!/bin/sh
# 将 dist 目录下的 png jpg 图片变成 hash(文件没有修改就不会变化) hash的长度为8 然后将调用的地方进行修改
hashmark -c dist -r -l 8 '**/*.{png,jpg}' '{dir}/{name}.{hash}{ext}' | replaceinfiles -S -s 'dist/**/*.css' -d '{dir}/{base}'

hashmark -c dist -r -l 8 '**/*.{css,js}' '{dir}/{name}.{hash}{ext}' | replaceinfiles -S -s 'src/index.html' -d 'dist/index.html'
