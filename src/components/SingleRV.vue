<template>
    <section class="single-container">
<section class="single-container-one">
    <h2 class="single-container-one-title">{{ listing.RVName }}</h2>
    <div>
        <span class="single-container-one-rating">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-star fa-w-14 mr-1"><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" class=""></path></svg>
            {{ listing.AverageRating }}
        </span>
        <span class="single-container-one-location">  {{ listing.City }}</span>, <span class="single-container-one-location">{{ listing.Country }}</span>
        <span>{{ listing.RVType }}</span> <span>sleep {{ listing.Guests }}</span>
    </div>
    <div>
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="truck-fast" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="icon svg-inline--fa fa-truck-fast fa-w-14" data-v-5545de2a=""><path fill="currentColor" d="M96 64V96H240C248.8 96 256 103.2 256 112C256 120.8 248.8 128 240 128H16C7.164 128 0 120.8 0 112C0 103.2 7.164 96 16 96H64V64C64 28.65 92.65 0 128 0H352C387.3 0 416 28.65 416 64V96H481.3C495.3 96 508.6 102.1 517.7 112.8L596.4 204.6C603.9 213.3 608 224.4 608 235.8V384H624C632.8 384 640 391.2 640 400C640 408.8 632.8 416 624 416H576C576 469 533 512 480 512C426.1 512 384 469 384 416H255.1C255.1 469 213 512 159.1 512C106.1 512 63.1 469 63.1 416V288H95.1V344.4C112.1 329.2 135.4 320 159.1 320C201.8 320 237.4 346.7 250.5 384H384V64C384 46.33 369.7 32 352 32H127.1C110.3 32 95.1 46.33 95.1 64H96zM493.4 133.6C490.4 130 485.1 128 481.3 128H416V224H570.9L493.4 133.6zM416 256V344.4C432.1 329.2 455.4 320 480 320C521.8 320 557.4 346.7 570.5 384H576V256H416zM160 352C124.7 352 96 380.7 96 416C96 451.3 124.7 480 160 480C195.3 480 224 451.3 224 416C224 380.7 195.3 352 160 352zM480 480C515.3 480 544 451.3 544 416C544 380.7 515.3 352 480 352C444.7 352 416 380.7 416 416C416 451.3 444.7 480 480 480zM272 160C280.8 160 288 167.2 288 176C288 184.8 280.8 192 272 192H48C39.16 192 32 184.8 32 176C32 167.2 39.16 160 48 160H272zM240 224C248.8 224 256 231.2 256 240C256 248.8 248.8 256 240 256H16C7.164 256 0 248.8 0 240C0 231.2 7.164 224 16 224H240z" data-v-5545de2a="" class=""></path></svg>
            <span>
                <h2>No truck no problem</h2>
                <p>This host offers delivery up to 60 miles</p>
            </span>
        </div>
        <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="paw-simple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon svg-inline--fa fa-paw-simple fa-w-14" data-v-5545de2a=""><path fill="currentColor" d="M96 88C96 57.07 121.1 32 152 32C182.9 32 208 57.07 208 88C208 118.9 182.9 144 152 144C121.1 144 96 118.9 96 88zM152 112C165.3 112 176 101.3 176 88C176 74.75 165.3 64 152 64C138.7 64 128 74.75 128 88C128 101.3 138.7 112 152 112zM154.5 202.9C167.7 176.6 194.6 160 224 160C253.4 160 280.3 176.6 293.5 202.9L327.2 270.5C330.7 277.3 337.2 281.1 344.6 284.1C385.9 296.4 416 334.7 416 380C416 435.2 371.2 480 316 480C294.8 480 275.2 473.4 259.1 462.2C241.7 450.2 206.3 450.2 188.9 462.2C172.8 473.4 153.2 480 132 480C76.77 480 32 435.2 32 380C32 334.7 62.12 296.4 103.4 284.1C110.8 281.1 117.3 277.3 120.8 270.5L154.5 202.9zM183.2 217.2L149.4 284.8C141.1 301.3 126.3 310.7 112.6 314.8C84.44 323.2 64 349.2 64 380C64 417.6 94.44 448 132 448C146.4 448 159.7 443.5 170.7 435.9C186.7 424.8 207.2 421.2 224 421.2C240.8 421.2 261.3 424.8 277.3 435.9C288.3 443.5 301.6 448 316 448C353.6 448 384 417.6 384 380C384 349.2 363.6 323.2 335.4 314.8C321.7 310.7 306.9 301.3 298.6 284.8L264.8 217.2C257.1 201.8 241.3 192 224 192C206.7 192 190.9 201.8 183.2 217.2V217.2zM352 88C352 118.9 326.9 144 296 144C265.1 144 240 118.9 240 88C240 57.07 265.1 32 296 32C326.9 32 352 57.07 352 88zM296 64C282.7 64 272 74.75 272 88C272 101.3 282.7 112 296 112C309.3 112 320 101.3 320 88C320 74.75 309.3 64 296 64zM336 200C336 169.1 361.1 144 392 144C422.9 144 448 169.1 448 200C448 230.9 422.9 256 392 256C361.1 256 336 230.9 336 200zM392 224C405.3 224 416 213.3 416 200C416 186.7 405.3 176 392 176C378.7 176 368 186.7 368 200C368 213.3 378.7 224 392 224zM112 200C112 230.9 86.93 256 56 256C25.07 256 0 230.9 0 200C0 169.1 25.07 144 56 144C86.93 144 112 169.1 112 200zM56 176C42.75 176 32 186.7 32 200C32 213.3 42.75 224 56 224C69.25 224 80 213.3 80 200C80 186.7 69.25 176 56 176z" data-v-5545de2a="" class=""></path></svg>

            <span>
                <h2>Pet friendly</h2>
                <p>Bring your pet along for the trip</p>
            </span>
        </div>
    </div>
    <div>
        <h2>{{ listing.RVName }}</h2>
        <section>
            <div>
                <h2>Sleeps</h2>
                <p>{{ listing.Guests }}</p>
            </div>
            <div>
                <h2>Weight</h2>
                <p>{{ listing.Weight }}</p>
            </div>
            <div>
                <h2>Type of RV</h2>
                <p>{{ listing.RVType }}</p>
            </div>
        </section>
    </div>
    <div>
        <h2>Rates</h2>
        <section>
            <div>
                <h2>Daily</h2>
                <p>${{ listing.AveragePrice }}/night</p>
            </div>
            <div>
                <h2>Weekly</h2>
                <p>${{ listing.DiscountedAverageNightlyPrice }}/night</p>
            </div>
        </section>
    </div>
</section>
<section class="single-container-two">
    <div>
        <h2>${{ listing.AveragePrice }} <span class="inner">/night</span> </h2>
    </div>
    <div class="single-container-two-guest">
        <h2>Guests</h2>
        <p>{{ listing.Guests }}</p>
    </div>
    <button class="check">Check Availability</button>
</section>
    </section>
</template>
<script>

export default {
    data() {
        return {
            id: this.$route.params.id,
            data: []
        }
    },
    methods: {
        getDatas() {
            
           // console.log(this.isLoading)
            fetch("https://api.rvezy.com/api/rvlistings/unified-search?swLat=45.224121941465604&swLng=-76.19331305664062&neLat=45.548191514007186&neLng=-75.21003668945312&SortOrder=Recommended&CurrentPage=0&FeaturedCurrentPage=0&FeaturedPageSize=5&IncludeFeatured")
            .then((response) => response.json())
            .then((data) => {
                
            
                
                const featured = data.FeaturedRVs.ListRVs
                const popular = data.PopularRVs.ListRVs
                const newData = featured.concat(popular)
                this.data = newData
             
                //console.log(this.data)
                
               
            } )
        },
    },
    computed: {
    listing() {
        console.log(this.data)
      return this.data.find((item) => item.RVName === this.id);
    },
  },
  created() {
        this.getDatas()
       
    }

}
</script>