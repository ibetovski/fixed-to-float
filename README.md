# fixed-to-float
Convert your fixed layout CSS from pixels to percents.

This tool is developed mainly for mobile designs which accidently are done in pixels instead of percentages.

## Installation
```
  $ npm install -g fixed-to-float
```

## Usage
```
  $ fixed-to-float source_file destination_file
```

The script converts the values only for the listed CSS properties:
* width
* left
* right
* height
* top
* bottom

### Example
Create `css.css` file with content:
```
div {
  width: 100px;
  margin-left: 20px;
  margin-right: 30px;
  top: 300px;
  height: 400px;
}
```
Execute:
```
  $ fixed-to-float css.css css_float.css
```
This will create file `css_float.css` with content:
```
div {
  width: 12.5%;
  margin-left:  2.5%;
  margin-right: 3.75%;
  top: 23.4375%;
  height:  31.25%;
}
```

# MIT License