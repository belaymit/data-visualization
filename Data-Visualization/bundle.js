(function (React, ReactDOM, d3) {
    'use strict';

    React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
    ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

    const width = 960;
    const height = 500;
    const centrX = width/2;
    const centrY = height/2;
    const strokewidth = 10;
    const eyeOffsetX = 90;
    const eyeOffsetY = 100;
    const eyeRadius = 45;
    const mouthWidth = 20;
    const mouthRadius = 140;

    const mouthArch = d3.arc()
    	.innerRadius(mouthRadius)
    	.outerRadius(mouthRadius+mouthWidth)
    	.startAngle(Math.PI/2)
    	.endAngle(Math.PI*3/2);
    const App = () =>{
    return(
     React.createElement( 'svg', { width: width, height: height },
        React.createElement( 'g', { transform: `translate(${centrX}, ${centrY})` },
          React.createElement( 'circle', { 
          	r: centrY-strokewidth/2, fill: "yellow", stroke: "black", 'stroke-width': strokewidth }),
        React.createElement( 'circle', {
          cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'circle', {
          cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'path', { d: mouthArch() })
        )
        )
    );
    }; 

    const rootElement = document.getElementById("root");
    ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiXG5pbXBvcnQge2FyY30gZnJvbSAnZDMnOyBcblxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBjZW50clggPSB3aWR0aC8yO1xuY29uc3QgY2VudHJZID0gaGVpZ2h0LzI7XG5jb25zdCBzdHJva2V3aWR0aCA9IDEwO1xuY29uc3QgZXllT2Zmc2V0WCA9IDkwO1xuY29uc3QgZXllT2Zmc2V0WSA9IDEwMDtcbmNvbnN0IGV5ZVJhZGl1cyA9IDQ1O1xuY29uc3QgbW91dGhXaWR0aCA9IDIwO1xuY29uc3QgbW91dGhSYWRpdXMgPSAxNDA7XG5cbmNvbnN0IG1vdXRoQXJjaCA9IGFyYygpXG5cdC5pbm5lclJhZGl1cyhtb3V0aFJhZGl1cylcblx0Lm91dGVyUmFkaXVzKG1vdXRoUmFkaXVzK21vdXRoV2lkdGgpXG5cdC5zdGFydEFuZ2xlKE1hdGguUEkvMilcblx0LmVuZEFuZ2xlKE1hdGguUEkqMy8yKVxuY29uc3QgQXBwID0gKCkgPT57XG5yZXR1cm4oXG4gPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICA8ZyB0cmFuc2Zvcm0gPSB7YHRyYW5zbGF0ZSgke2NlbnRyWH0sICR7Y2VudHJZfSlgfT5cbiAgICAgIDxjaXJjbGUgXG4gICAgICBcdHI9e2NlbnRyWS1zdHJva2V3aWR0aC8yfVxuICAgICAgICBmaWxsPVwieWVsbG93XCJcbiAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICBzdHJva2Utd2lkdGg9e3N0cm9rZXdpZHRofVxuICAgICAgICAgICAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4ID17LWV5ZU9mZnNldFh9XG4gICAgICBjeT17LWV5ZU9mZnNldFl9XG4gICAgICByPXtleWVSYWRpdXN9XG4gICAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4ID17ZXllT2Zmc2V0WH1cbiAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAgIC8+XG4gICAgPHBhdGggZD0ge21vdXRoQXJjaCgpfS8+XG4gICAgPC9nPlxuICAgIDwvc3ZnPlxuKTtcbn07IFxuXG5jb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7Il0sIm5hbWVzIjpbImFyYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBSUEsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNuQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEIsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN0QixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDdkIsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN0QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDeEI7SUFDQSxNQUFNLFNBQVMsR0FBR0EsTUFBRyxFQUFFO0lBQ3ZCLEVBQUUsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUMxQixFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3JDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztJQUN2QixNQUFNLEdBQUcsR0FBRyxLQUFLO0lBQ2pCO0lBQ0EsQ0FBQyw4QkFBSyxPQUFPLEtBQU0sRUFBQyxRQUFRO0lBQzVCLElBQUksNEJBQUcsV0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELE1BQU07SUFDTixPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFFLEVBQ3ZCLE1BQUssUUFBUSxFQUNiLFFBQU8sT0FBTyxFQUNkLGdCQUFjLGFBQVk7SUFFbEMsSUFBSTtJQUNKLE1BQU0sSUFBSyxDQUFDLFVBQVcsRUFDakIsSUFBSSxDQUFDLFVBQVcsRUFDaEIsR0FBRyxXQUFVO0lBRW5CLElBQUk7SUFDSixNQUFNLElBQUssVUFBVyxFQUNoQixJQUFJLENBQUMsVUFBVyxFQUNoQixHQUFHLFdBQVU7SUFFbkIsSUFBSSwrQkFBTSxHQUFJLFNBQVMsSUFBRyxDQUFFO0lBQzVCLEtBQVE7SUFDUixLQUFVO0lBQ1YsRUFBRTtJQUNGLENBQUMsQ0FBQztBQUNGO0lBQ0EsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDLHFCQUFDLFNBQUcsRUFBRyxFQUFFLFdBQVcsQ0FBQzs7OzsifQ==