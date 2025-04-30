# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Author](#author)

### the Chalenge


Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Home Page](./Screenshot-3.jpg)
![destination Page](./Screenshot-4.jpg)
![destination Page](./Screenshot-5.jpg)
![destination Page](./Screenshot-6.jpg)
![crew Page](./Screenshot-2.jpg)
![crew Page](./Screenshot-7.jpg)
![crew Page](./Screenshot-8.jpg)
![crew Page](./Screenshot-9.jpg)
![technology Page](./Screenshot-1.jpg)
![technology Page](./Screenshot-10.jpg)
![technology Page](./Screenshot-11.jpg)
![technology Page](./Screenshot-12.jpg)


### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/space-tourism-website-NGiCZS1nze)
- Live Site URL: [Live Site](https://omar-p-code.github.io/space-tourism-website/public/index.html)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [JavaScript]
- [Pugjs] - JavaScript Template Engine
- [sass]  -  CSS Preprocessor

### What I learned

I learned How To Make Swipes For The Mobile And Some Events Like touchend And touchstart
And Also Learned How To Work With Figma Design This Is My First Time To Work With It

```pug
  ul.pagination
    - let crew = ['commander', 'engineer', 'specialist', 'pilot']
    - for(let mem in crew)
        - if (mem == member)
          li.active: a(href="./crew-" + crew[mem] + ".html")
        - else
          li: a(href="./crew-" + crew[mem] + ".html")
    script 
      .
         fetch('./data.json')
         .then(data => data.json())
         .then(data => {
            let crew = data.crew[#{member}]; ....})
```
```scss
@mixin text_preset($preset, $moblie, $tablet) {
   // desktop
   font-size: map-get($preset, font-size)/1.1;
   line-height: map-get($preset, line-height);
   letter-spacing: map-get($preset, letter-spacing);

   @media (max-width: 998px) {
      font-size: map-get($tablet, font-size)/1.1;
      line-height: map-get($tablet, line-height);
      letter-spacing: map-get($tablet, letter-spacing);
   }

   @media (max-width: 540px) {
      font-size: map-get($moblie, font-size)/1.1;
      line-height: map-get($moblie, line-height);
      letter-spacing: map-get($moblie, letter-spacing);
   }
}
```
```js
    document.addEventListener('touchstart', function(e) {
      touchstart = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
      if (touchend == touchstart) {
          return true;
      }

      try {
      touchend = e.changedTouches[0].screenX;
      // If the touchend position is greater than the touchstart position, it means the user swiped right
      if (touchend < touchstart) {
          document.querySelector('.container .pagination .active').nextElementSibling.firstElementChild.click();
      } else if (touchend > touchstart) {
          document.querySelector('.container .pagination .active').previousElementSibling.firstElementChild.click();
      }
      }
      catch {
          return true;
      }
```
### Continued development

I want To Update This Project To Make Him Dynamic Static Site With modular Model Without A Big Frameworks

## Author

- Website - [omar](https://omar-p-code.github.io/my_portfolio/public/index.html)
- Frontend Mentor - [@omar-p-code](https://www.frontendmentor.io/profile/omar-p-code)
