import { ChecklistItemModel, Discipline, Category, Framework } from '../interfaces/ChecklistItem';

export default [
    {
        slug: "lazy-loading-image",
        title: "Lazy load images and iframe",
        description: "Images below the fold should be only loaded when visible.",
        category: Category.Images,
        disciplines: [Discipline.Frontend],
        usage: `Showing an image below the fold is supported by most browsers native by the following code:

\`\`<img src="/image.png" lazy="loading" alt="" />\`\`

Please note that only images below the fold should be lazy-loaded. Prevent to lazy load images below the fold, lazy loading affects the caching. Discuss with the designer or productowner what the fold is. If you need to display a product list, you can add an index to the looped items to lazy load the images after the first 10.

## Example ##

### ProductList.vue ###
\`\`<product-tile
  v-for="(product, index) in products"
  :key="product.id"
  :lazy="index > 10"
/>\`\`

### ProductTile.vue ###
\`\`<li><img src="/image.png" :lazy="lazy" alt="" /></li>\`\`


We can also use importance attribute (high or low) on a <script>, <img>, or <link> element (Blink only). In fact, it’s a great way to deprioritize images in carousels, as well as re-prioritize scripts. However, sometimes we might need a bit more granular control.

\`\`<img src="less-important-image.svg" importance="low" ... />
<link rel="preload" importance="low" href="/script.js" as="script" />\`\``,
        solutions: [],
        canIUse: 'loading-lazy-attr',
    },
    {
        slug: "image-formats",
        title: "Use modern image formats",
        description: "Modern image like AVIF or WebP formats can reduce the imagesize by over 50%.",
        category: Category.Images,
        disciplines: [Discipline.Frontend, Discipline.Backend],
        usage: ``,
        links: [
          'https://creativepro.com/webp-and-avif-file-formats-you-need-to-know-about/'
        ]
    },
    {
        slug: "image-sizes",
        title: "Define width and height",
        description: "Set the width and height of images to prevent to avoid layout jumps during the page load.",
        category: Category.Images,
        disciplines: [Discipline.Frontend, Discipline.Backend],
        usage: `Add the width and height attribrute to images:

\`\`<img src="/image.png" width="400" height="300" alt="" />\`\`

These values should be provided by the backend.
        `,
        links: [
          'https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/'
        ]
    },
    {
        slug: "css-animations",
        title: "Only animate transform and opacity in css",
        description: "Browsers can animate transform and opacity cheaply.",
        category: Category.CSS,
        disciplines: [Discipline.Frontend],
        usage: 'As composite-level changes are the most performant, the only properties that should ever be changed are those that only trigger compositing. These properties are opacity and transform.',
        links: [
          'https://www.algolia.com/blog/engineering/performant-web-animations/',
          'https://csstriggers.com/'
        ]
    },
    {
        slug: "brotli",
        title: "Use Brotli for plain text compression",
        description: "Brotli is an open-source lossless data format and has 11 predefined quality levels for the encoder, with higher quality level demanding more CPU in exchange for a better compression ratio. Slower compression will ultimately lead to higher compression rates, yet still, Brotli decompresses fast. It’s worth noting though that Brotli with the compression level 4 is both smaller and compresses faster than Gzip.",
        category: Category.CSS,
        disciplines: [Discipline.Frontend],
        usage: `First, login to your Microsoft Azure portal and open up the blade for the Web App that you wan to configure. From the Web App blade, select the Application Settings blade.

On the Application Settings blade, we don’t need to change anything but we do need to check something. Check the value for Platform. As you can see above, my site is 32-bit but yours may be 64-bit. I used to use 64-bit until someone showed me this article by Scott Hansleman, Penny Pinching in the Cloud.

Once you have the architecture for your site, scroll down the list of Web App blades and open the Extensions blade.

On the Extensions blade, select the Add button and scroll through the list until you find the extension Brotli HTTP Compression. There are two variants of the extension, one for 32-bit and another for 64-bit. Select the appropriate one and then accept the legal terms to add the extension to the site.

Once you have added the extension, I found that it didn’t work right away and I needed to restart the Web App for it to take effect. This may not always be the case but it certainly my observation.
`,
        canIUse: 'brotli',
        links: [
          'https://blogs.akamai.com/2016/02/understanding-brotlis-potential.html',
          'https://quixdb.github.io/squash-benchmark/#results-table'
        ]
    },
   {
        slug: "caching-headers",
        title: "Set caching headers for assets",
        description: "",
        category: Category.Server,
        disciplines: [Discipline.DevOps],
        usage: `\`\`Cache-Control: max-age: 31556952, immutable\`\``,
        links: [
          'https://web.dev/stale-while-revalidate/',
        ]
    },

] as ChecklistItemModel[];