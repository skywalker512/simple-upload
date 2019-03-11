#!/bin/sh
# pngquant 是一个与 tinypng 类似的有损压缩PNG算法

imagemin --plugin=pngquant src/images/* --out-dir=dist/images