#!/bin/sh
for file in src/styles/*.scss
do
  # $ 变量 () 用来区分边界
  # 获取文件名
  filename=$(basename $file)
  # 正则 替换后缀
  distpath=$(echo $filename | sed 's/\.scss$/\.css/')
  node-sass $file | cssmin > dist/styles/$distpath
done
