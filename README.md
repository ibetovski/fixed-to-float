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

The script will create `fixed-to-float-white-list.json` in your current directory. The default content is:
```json
[
  "width",
  "left",
  "right",
  "height",
  "top",
  "bottom",
  "margin-top",
  "margin-left",
  "padding-top",
  "padding-left",
  "padding-bottom"
]
```
You can edit that file in order to teach the script which properties to be converted and to leave the rest untouched. And run the script again.

### Example
Create `css.css` file with content:
```css
div {
  width: 300px;
  height: 200px;
  top: 20px;
  left: 20px;
  right: 10px;
  bottom: 10px;
  position: absolute;
  margin-left: 300px;
  margin-right: 200px;
  margin-top: 200px;
  margin-bottom: 100px;

  border-top: 2px;
  border-bottom: 2px;
}


div.content {
  width: 400px;
  margin-left: 20px;

  padding-top: 20px;
  padding-left: 30px;
  padding-bottom: 30px;
}
```
Execute:
```bash
  $ fixed-to-float css.css css_float.css
```
This will create file `css_float.css` with content:
```css
div {
  width: 37.5%%;
  height: 15.625%%;
  top: 1.563%%;
  left: 2.5%%;
  right: 1.25%%;
  bottom: 0.781%%;
  position: absolute;
  margin-left: 37.5%%;
  margin-right: 200px;
  margin-top: 15.625%%;
  margin-bottom: 100px;

  border-top: 2px;
  border-bottom: 2px;
}


div.content {
  width: 50%%;
  margin-left: 2.5%%;

  padding-top: 1.563%%;
  padding-left: 3.75%%;
  padding-bottom: 2.344%%;
}
```

Here is the expected log in the concole:
```bash
$ fixed-to-float blo.css blo.css_
prompt: Enter dimensions width:  (800)
prompt: Enter dimensions height:  (1280)
   info     - CSS properties that will be converted
   info     - width,left,right,height,top,bottom,margin-top,margin-left,padding-top,padding-left,padding-bottom
   info     - You can edit fixed-to-float-white-list.json if you like to add/remove properties to be matched and run the script again.
   info     -  width: 300px   ->    width: 37.5%%
   info     -  height: 200px  ->    height: 15.625%%
   info     -  top: 20px  ->    top: 1.563%%
   info     -  left: 20px   ->    left: 2.5%%
   info     -  right: 10px  ->    right: 1.25%%
   info     -  bottom: 10px   ->    bottom: 0.781%%
   info     -  margin-left: 300px   ->    margin-left: 37.5%%
   info     -  margin-top: 200px  ->    margin-top: 15.625%%
   info     -  width: 400px   ->    width: 50%%
   info     -  margin-left: 20px  ->    margin-left: 2.5%%
   info     -  padding-top: 20px  ->    padding-top: 1.563%%
   info     -  padding-left: 30px   ->    padding-left: 3.75%%
   info     -  padding-bottom: 30px   ->    padding-bottom: 2.344%%
   info     - Done!
   info     - blo.css_ was created
$
```

# MIT License