#!/bin/sh
for file in src/scripts/*.js
do
  # --compress 压缩文件 --mangle 混淆 reserved 属性排除混淆 
  uglifyjs $file --compress --mangle > dist/scripts/$(basename $file)
done
