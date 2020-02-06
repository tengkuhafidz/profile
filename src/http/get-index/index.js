const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Tengku Hafidz', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Software Developer',
    location: 'Singapore',
    bio: 'Love starting out new things.',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'h@fidz.dev',
    twitter: '@sohafidz',
    linkedin: 'tengku-hafidz',
    instagram: 'tengkuhafidz',
    facebook: 'tengku.hafidz.1',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
