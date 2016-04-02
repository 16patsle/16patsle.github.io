$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: '16patsle Blog',

		// Tagline for your site
		siteTagline: 'A blog',

		// Email address
		siteEmail: 'patricksletvold@hotmail.com',

		// Name
		siteAuthor: 'Your Name',

		// Navigation items
		siteNavItems: [
			{ name: 'Github', href: 'https://github.com/16patsle', newWindow: false},
			{ name: 'About'}
		],

		// Posts folder name
		postsFolder: 'blog/posts',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'blog/pages',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: '16patsle',
			repo: '16patsle.github.io'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
