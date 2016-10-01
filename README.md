# Match Proportion
JQuery plugin which will resize elements to match some proportion.
## Examples
```html
<div id="target" style="width: 30px;"></div>
```
```javascript
$('#target').matchProportion({
    width: 3,
    height: 7,
    fixedSide: 'width' // you can skip this, it's like this by default
});
```

Will make target div `height` equals to `70px` (it will match proportion `3x7`),
or:
```html
<div id="target" style="height: 70px;"></div>
```
```javascript
$('#target').matchProportion({
    width: 3,
    height: 7,
    fixedSide: 'height'
});
```

Will make target div `width` equals to `30px` (it will match proportion `3x7`).

Also you can use data attributes for initialization, in this way proportion will be recalculated on events: `'ready', 'page:load', 'shown.bs.modal', 'shown.bs.tab', 'resize'`: 
```html
<div id="target" style="width:10px;" data-match-proportion="{'width': 3; 'height': 7}"></div>
```

You can configure recalculation on differen events in this way:
```javascript
$.fn.matchProportionDefaults = {
    initEvents: ['ready', 'mu-custom-event'],
};
```
