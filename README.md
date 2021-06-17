# Tailwind Labs  <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="" width="32"/> 



Follwing and engaging with the tutorial from TailwindLabs

Without knoladge from React at the moment... 
Creation of a web landing.

Why Tailwind?
Rapidly build modern websites without ever leaving your HTML.
A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

Tailwind condense all the styles that could be stressing sometimes to remember to small variables that can be adjusted to any special case.
Where you could find a large code to display a simple @media tailwind show that is possible to complete this task with only two variables.


## Documentation

[Tailwindcss Website](https://tailwindcss.com)


  
## Vid CDN

Link a .css on our HTML using,
```
 <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

```

Using this link you can find some limitation, such 

❌ You can't customize Tailwind's default theme

❌ You can't use any directives like @apply, @variants, etc.

❌ You can't enable additional variants like group-focus

❌ You can't install third-party plugins

❌ You can't tree-shake unused styles


## With PostCSS


Good side for PostCSS is that there is a major technologies out there working with this extension, we can use as many possibilities we can image, such next.js, vue, react and much more. 

We're going to set a front-en build tool using Vite in dev as it will update every time we change something in the code 

[Learn more about Vite](https://vitejs.dev/)

Lets create a package.JSON file first to link our frameworks,

```
npm init -y
```

### Now, let's install some dependencies

```
npm install -D tailwindcss postcss autoprefixer vite

```
The -D Install the DEV dependencies inside the same .JSON file, tailwind install the Tailwindcss dependencies, PostCSS link our tailwind with CSS,

Autoprefixer who translate all the information we set inside the HTML using tailwind form to normal CSS and then we have our server Vite.

After that, we go inside the .JSON package file and change the script to,

```
"script": {
"test":"echo\"Error: no test specified \" && exit 1"
}
//to 
"dev": { "vite"
}
```

Now we create a post.css file using the CLI,

we can imagine that this would be the place where we go when we want to customize our program. 

```
npx tailwindcss init -p
```
```
//It will show this,
   tailwindcss 2.1.4
  
   ✅ Created Tailwind config file: tailwind.config.js
   ✅ Created PostCSS config file: postcss.config.js
  
➜  tailwind-tutorials git:(main) ✗  

//This will create a postcss config file in .js using the "command" -p
//And a tailwind.config.js
```

Now we link our tailwind.css file,
```
<link href="/css/tailwind.css/ rel="stylesheet">
```
On the CSS, this case called tailwind.css

We use the tailwind CLI [Command line interface] to search in the registery files from tailwind enviourment to build a PostCSS.

tailwindcss works as a sort of a marker to inform the postcss what directives rules, or transofr they need to follow and apply.

```bash
//Inside our CSS custom input a Postcss directive
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## Tech Stack

**Client:** TailwindCSS

**Server:** Node, Vite



  
