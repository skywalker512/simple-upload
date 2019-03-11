#!/bin/sh
# for 循环进行顺序执行每一步 是异步执行的
for step in 'images' 'scripts' 'styles' 'hash'
do
  npm run shell:$step
done
