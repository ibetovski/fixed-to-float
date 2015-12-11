# fixed-to-float
Convert your fixed layout CSS from pixels to percentages.

This tool is developed mainly for mobile designs which accidently are done in pixels instead of percentages. Or just some part of it is in pixels.

## Installation
```bash
  $ npm install -g fixed-to-float
```

## Usage
```bash
  $ fixed-to-float source_file destination_file
  prompt: Enter device width:  (800) 
  prompt: Enter device height:  (1280)
```

You will be prompted with a question for device sizes. These sizes will be used to calculate the percentages. If you press `[ENTER]` the script will use the defaults: 800 for width, 1280 for height.

The script converts the values only for the listed CSS properties:
* width
* left
* right
* height
* top
* bottom

### Example
Create `css.css` file with content:
```css
div {
  width: 100px;
  margin-left: 20px;
  margin-right: 30px;
  top: 300px;
  height: 400px;
}
```
Execute:
```bash
  $ fixed-to-float css.css css_float.css
```
This will create file `css_float.css` with content:
```css
div {
  width: 12.5%;
  margin-left:  2.5%;
  margin-right: 3.75%;
  top: 23.4375%;
  height:  31.25%;
}
```

# MIT License