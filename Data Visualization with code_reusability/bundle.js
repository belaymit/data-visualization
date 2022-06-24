(function (React$1, ReactDOM, d3) {
      'use strict';

      React$1 = React$1 && Object.prototype.hasOwnProperty.call(React$1, 'default') ? React$1['default'] : React$1;
      ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

      const BackgroundCircle=({radius, strokewidth})=>(
       React.createElement( 'circle', { 
            	r: radius, fill: "yellow", stroke: "black", 'stroke-width': strokewidth })
      );

      const Eyes=({eyeOffsetX, eyeOffsetY, eyeRadius})=>(
        React.createElement( React.Fragment, null,
         React.createElement( 'circle', {
            cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
          React.createElement( 'circle', {
            cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius })
      )
      );

      const Mouth = ({mouthRadius, mouthWidth})=>{
      const mouthArc = d3.arc()
        .innerRadius(mouthRadius)
      	.outerRadius(mouthRadius+mouthWidth)
      	.startAngle(Math.PI/2)
      	.endAngle(Math.PI*3/2);
        return React.createElement( 'path', { d: mouthArc() });
      };

      const FaceContainer = ({children, width, height, centrX, centrY}) =>(
       		React.createElement( 'svg', { width: width, height: height },
          React.createElement( 'g', { transform: `translate(${centrX}, ${centrY})` },
            children
            )
            )
      );

      const Face = ({
      width,
      height,
      centrX,
      centrY,
      strokewidth,
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius,
      mouthRadius,
      mouthWidth  
      }) =>(
        React.createElement( FaceContainer, {
            width: width, height: height, centrX: centrX, centrY: centrY },
            React.createElement( BackgroundCircle, { 
              radius: centrY-strokewidth/2, strokewidth: strokewidth }),  
            React.createElement( Eyes, {
              eyeOffsetX: eyeOffsetX, eyeOffsetY: eyeOffsetY, eyeRadius: eyeRadius }),  
            React.createElement( Mouth, {
              mouthRadius: mouthRadius, mouthWidth: mouthWidth })
          )
      );

      const width = 160;
      const height = 160;
      const array = d3.range(6*3);

      const App = () => array.map(()=>(
       React$1.createElement( Face, {
            width: width, height: height, centrX: width/2, centrY: height/2, strokewidth: 10, eyeOffsetX: 30, eyeOffsetY: 30, eyeRadius: 10, mouthRadius: 40, mouthWidth: 10 })
      ));
      const rootElement = document.getElementById("root");
      ReactDOM.render(React$1.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRDaXJjbGUuanMiLCJFeWVzLmpzIiwiTW91dGhBcmNoLmpzIiwiRmFjZUNvbnRhaW5lci5qcyIsIkZhY2UuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQmFja2dyb3VuZENpcmNsZT0oe3JhZGl1cywgc3Ryb2tld2lkdGh9KT0+KFxuIDxjaXJjbGUgXG4gICAgICBcdHI9e3JhZGl1c31cbiAgICAgICAgZmlsbD1cInllbGxvd1wiXG4gICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPXtzdHJva2V3aWR0aH1cbiAgICAgICAgICAgICAgLz5cbik7IiwiZXhwb3J0IGNvbnN0IEV5ZXM9KHtleWVPZmZzZXRYLCBleWVPZmZzZXRZLCBleWVSYWRpdXN9KT0+KFxuICA8PlxuICAgPGNpcmNsZVxuICAgICAgY3ggPXstZXllT2Zmc2V0WH1cbiAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3ggPXtleWVPZmZzZXRYfVxuICAgICAgY3k9ey1leWVPZmZzZXRZfVxuICAgICAgcj17ZXllUmFkaXVzfVxuICAgLz5cbjwvPlxuKTtcbiIsImltcG9ydCB7YXJjfSBmcm9tICdkMyc7IFxuZXhwb3J0IGNvbnN0IE1vdXRoID0gKHttb3V0aFJhZGl1cywgbW91dGhXaWR0aH0pPT57XG5jb25zdCBtb3V0aEFyYyA9IGFyYygpXG4gIC5pbm5lclJhZGl1cyhtb3V0aFJhZGl1cylcblx0Lm91dGVyUmFkaXVzKG1vdXRoUmFkaXVzK21vdXRoV2lkdGgpXG5cdC5zdGFydEFuZ2xlKE1hdGguUEkvMilcblx0LmVuZEFuZ2xlKE1hdGguUEkqMy8yKVxuICByZXR1cm4gPHBhdGggZCA9IHttb3V0aEFyYygpfS8+O1xufTsiLCJleHBvcnQgY29uc3QgRmFjZUNvbnRhaW5lciA9ICh7Y2hpbGRyZW4sIHdpZHRoLCBoZWlnaHQsIGNlbnRyWCwgY2VudHJZfSkgPT4oXG4gXHRcdDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgPGcgdHJhbnNmb3JtID0ge2B0cmFuc2xhdGUoJHtjZW50clh9LCAke2NlbnRyWX0pYH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2c+XG4gICAgICA8L3N2Zz5cbik7ICIsImltcG9ydCB7QmFja2dyb3VuZENpcmNsZX0gZnJvbSAnLi9CYWNrZ3JvdW5kQ2lyY2xlJztcbmltcG9ydCB7RXllc30gZnJvbSAnLi9FeWVzJztcbmltcG9ydCB7TW91dGh9IGZyb20gJy4vTW91dGhBcmNoJztcbmltcG9ydCB7RmFjZUNvbnRhaW5lcn0gZnJvbSAnLi9GYWNlQ29udGFpbmVyJ1xuXG5leHBvcnQgY29uc3QgRmFjZSA9ICh7XG53aWR0aCxcbmhlaWdodCxcbmNlbnRyWCxcbmNlbnRyWSxcbnN0cm9rZXdpZHRoLFxuZXllT2Zmc2V0WCxcbmV5ZU9mZnNldFksXG5leWVSYWRpdXMsXG5tb3V0aFJhZGl1cyxcbm1vdXRoV2lkdGggIFxufSkgPT4oXG4gIDxGYWNlQ29udGFpbmVyXG4gICAgICB3aWR0aCA9IHt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY2VudHJYPXtjZW50clh9XG4gICAgICBjZW50clk9e2NlbnRyWX1cbiAgICAgID5cbiAgICAgIDxCYWNrZ3JvdW5kQ2lyY2xlIFxuICAgICAgICByYWRpdXMgPSB7Y2VudHJZLXN0cm9rZXdpZHRoLzJ9IFxuICAgICAgICBzdHJva2V3aWR0aD17c3Ryb2tld2lkdGh9Lz4gXG4gICAgICA8RXllc1xuICAgICAgICBleWVPZmZzZXRYPXtleWVPZmZzZXRYfVxuICAgICAgICBleWVPZmZzZXRZPXtleWVPZmZzZXRZfVxuICAgICAgICBleWVSYWRpdXM9e2V5ZVJhZGl1c31cbiAgICAgICAgLz4gXG4gICAgICA8TW91dGhcbiAgICAgICAgbW91dGhSYWRpdXMgPSB7bW91dGhSYWRpdXN9XG4gICAgICAgIG1vdXRoV2lkdGggPSB7bW91dGhXaWR0aH1cbiAgICAgICAgLz5cbiAgICA8L0ZhY2VDb250YWluZXI+XG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCJcbmltcG9ydCB7cmFuZ2V9IGZyb20gJ2QzJztcbmltcG9ydCB7RmFjZX0gZnJvbSAnLi9GYWNlJztcblxuY29uc3Qgd2lkdGggPSAxNjA7XG5jb25zdCBoZWlnaHQgPSAxNjA7XG5jb25zdCBhcnJheSA9IHJhbmdlKDYqMyk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IGFycmF5Lm1hcCgoKT0+KFxuIDxGYWNlXG4gICAgICB3aWR0aCA9IHt3aWR0aH1cbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgY2VudHJYPSB7d2lkdGgvMn1cbiAgICAgIGNlbnRyWT0ge2hlaWdodC8yfVxuICAgICAgc3Ryb2tld2lkdGg9ezEwfVxuICAgICAgZXllT2Zmc2V0WCA9IHszMH1cbiAgICAgIGV5ZU9mZnNldFkgPSB7MzB9XG4gICAgICBleWVSYWRpdXMgPSB7MTB9XG4gICAgICBtb3V0aFJhZGl1cyA9IHs0MH1cbiAgICAgIG1vdXRoV2lkdGg9ezEwfSBcbiAgICAgIC8+XG4pKTtcbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiXSwibmFtZXMiOlsiYXJjIiwicmFuZ2UiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O01BQU8sTUFBTSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztNQUNwRCxDQUFDO01BQ0QsT0FBTyxHQUFHLE1BQU8sRUFDVCxNQUFLLFFBQVEsRUFDYixRQUFPLE9BQU8sRUFDZCxnQkFBYyxhQUFZLENBQ2xCO01BQ2hCLENBQUM7O01DUE0sTUFBTSxJQUFJLENBQUMs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