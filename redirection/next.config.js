/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async ()=>{
        return[
            {
                source:'/user',
                destination:'/',
                permanent:false // permanent:false rkhna he SEO behter krne liye 
            },
            {
                source:'/user/:userId',
                destination:'/',
                permanent:false // permanent:false rkhna he SEO behter krne liye 
            }
        ]
    }
}

module.exports = nextConfig
