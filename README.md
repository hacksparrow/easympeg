# easympeg

Command-line tool for converting multimedia files from one format to another.

## Installation

easympeg is built on top of [ffmpeg](https://www.ffmpeg.org/), so make sure it is installed on your system.

```
$ npm install easympeg -g
```

If that results in an `EACCESS` error, try this:

```
$ sudo npm install easympeg -g
```

## Usage

easympeg takes the following options:

`-i`: Input files. Can be a single file (*ok.mp3*) or a blob (*'raw/\*.wav'*). Specify a blob for batch conversion. Make sure to quote the inpur
`-o`: Output path. Can be a single file (*songs/cool.mp3*) or a directory name (*converted*). Directory name is required for batch conversion. If a directory name is not derivable, the output directory will default to *easympeg-output*.
`-f`: Output format. Example: *mp3*, *mp4*, *wav* etc.

**Examples**

```
$ easympeg -i 'download/*.wav' -f mp3
```
Converts all the wav files in the *download* directory in the present working directory to mp3 file in *easympeg-output*.

```
$ easympeg -i 'download/*.wav' -f mp3 -o 'ready'
```
Converts *cool.wav* to *cool.mp3* in the *ready* directory.

```
$ easympeg -i cool.wav -f mp3
```
Converts *cool.wav* to *cool.mp3* in the *easympeg-output* directory.

```
$ easympeg -i cool.wav -f mp3 -o converted
```
Converts *cool.wav* to *cool.mp3* in the *converted* directory.

## License (MIT)

Copyright (c) 2015 Hage Yaapa <[http://www.hacksparrow.com](http://www.hacksparrow.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
