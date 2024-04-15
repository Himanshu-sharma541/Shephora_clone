 
let data =[
        {
            img: "https://www.sephora.com/contentimages/homepage/031524/2024-sse-bundle-c-site-desktop-mobile-rwd-hero-banner-insider-us-can-final-image-only-2000x2000.jpeg?imwidth=545",
            title: " Major Beauty Savings!",
            dec: "Join our free loyalty program to save. Ends 4/15. ",
            dec2: "JOIN BEAUTY INSIDER",
            link: "https://www.sephora.com/beauty/savings-event?icid2=homepage_slideshow_promofinancial_animation_savingsevent0424_fy243608_default_us_rwd_banner_040924_unrecognized"
        },
        {
            img: "https://www.sephora.com/contentimages/2004-04-06-slotting-luxe-site-rwd-home-page-hero-banner-3-product-english-US-CA_01.jpg?imwidth=545",
            title: "Everyday Luxury",
            dec: "Meet the gift to self you need right now.",
            dec2: "SHOP NOW",
            link: "https://www.sephora.com/shop/luxury-beauty?icid2=homepage_slideshow_multi-world_program_luxe_broadcast_us_rwd_banner_040924"

        },
        {
            img: "https://www.sephora.com/contentimages/2024-4-2-rare-beauty-fos-soft-pinch-powder-blush-site-app-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=545",
            title: "Just In from Rare Beauty",
            dec: "Get a glowy flush of color with this silky-smooth formula.",
            dec2: "SHOP NOW ▸",
            link: "https://www.sephora.com/product/P509960?icid2=homepage_slideshow_color_brand-sku-launch_rarebeauty_softpinch_fy243335_broadcast_us_rwd_banner_041224"

        },
        {
            img: "https://www.sephora.com/contentimages/homepage/041624/2024-04-02-slotting-april-hybrid-value-size-standard-site-rwd-home-page-hero-banner-4-product-US-handoff_01-2000x2000.jpeg?imwidth=545",
            title: "Big in Beauty",
            dec: "Stock up on bestselling value sizes.",
            dec2: "SHOP NOW ▸",
            link: "https://www.sephora.com/beauty/supersized-beauty-products?icid2=homepage_slideshow_multi-world_slotting_jumbos_fy243659_broadcast_us_rwd_banner_041224"
        },
        {
            img: "https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-pink-us-can-2883-release.jpg?imwidth=545",
            title: "Pink on Pink",
            dec: "Make this lip-and-cheek look your whole personality. ",
            dec2: "SHOP NOW ▸",
            link: "https://www.sephora.com/beauty/monochromatic-makeup?icid2=homepage_slideshow_color_animation_febmakeupstory0224_pink_fy243190_broadcast_us_rwd_banner_041224#pink"

        },
        {
            img: "https://www.sephora.com/contentimages/2004-04-06-slotting-luxe-site-rwd-home-page-hero-banner-3-product-english-US-CA_01.jpg?imwidth=545",
            title: "Glow Fast",
            dec: "With powerful formulas for dullness and dark spots.",
            dec2: "SHOP NOW ▸",
            link: "https://www.sephora.com/beauty/innovative-effective-skincare?icid2=homepage_slideshow_skincare_program_aprilskin0424_fy243210_broadcast_us_rwd_banner_040424_brightening#brightening"

        },
]
let slider = document.querySelector("#slider")
let BackBtn = document.querySelector("#backBtn")
let NextBtn = document.querySelector("#nextBtn")
data.forEach((ele)=>{
    let div = document.createElement("div")
    div.id = "#box"
    let div1 = document.createElement("div")
    div1.id = "#Box2"
    let div2 = document.createElement("div")
    let a = document.createElement('a')
    a.href = ele.link
    
    
    let image = document.createElement("img")
    image.src = ele.img;
    let h3 = document.createElement("h3")
    h3.innerHTML = ele.title
    let dec = document.createElement("p")
    dec.innerText = ele.dec
    let dec2 = document.createElement('p')
    dec2.innerHTML = `<b>${ele.dec2}</b>`

    div1.append(image)
    div2.append(h3, dec, dec2)
    div.append(div1, div2)
    slider.append(div)
})
