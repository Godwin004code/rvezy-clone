<template>
    
    <section class="skeleton">
    <div class="card-img"></div>
    <div class="card-one"></div>
    <div class="card-two"></div>
    <div class="card-three"></div>
    <div class="card-four"></div>
    </section>
</template>

<style>
.skeleton {
    min-width: 13.4375rem;
    margin-bottom: 50px;
   
}
.card-img {
    width: 100%;
    height: 150px;
    background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  margin-bottom: 5px;
}
.card-one {
    width: 80%;
    height: 20px;
    background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  margin-bottom: 10px;
  background-color: red;
}
.card-two {
    width: 90%;
    height: 25px;
    background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  margin-bottom: 10px;
  background-color: green;
}
.card-three {
    width: 40%;
    height: 20px;
    background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
  margin-bottom: 10px;
}
.card-four {
    width: 70%;
    height: 25px;
    background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
}
.fixed-class {
    position: fixed;
    left: 0;
    right: 0;
    background: white;
    top: 0;
}
.sleep {
    font-weight: 400;
    font-style: normal;
    font-size: .875rem;
    line-height: 1.25rem;
    color: #567390;   
}
.sleep.city {
    margin-bottom: 0.75rem;
}
.price{
    font-weight: 600;
    font-style: normal;
    font-size: 1.125rem;
    line-height: 1.5rem;
}
.rate {
    color: #032e5a;
}
.is-featured {
    margin-top: 1.25rem;
    border: none;
    color: #032e5a;
    background-color: #f2f5f7;
    padding: 0.25rem 0.5rem;
    font-weight: 600;
    font-size: .875rem;
    border-radius: 0.25rem;
    width: 40%;
    text-align: center;
}
.truncate-text {
    max-width: 10rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #032e5a;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.5rem;
}
.card-img {
    height: 150px;
    border-radius: 1rem;
   
}
.rv-container {
    
    width: 90%;
    margin: 0 auto;
}
.rv-container-main {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
}
.skeleton {
    margin-right: 20px;
}
.imgs {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
}
header {
    width: 100%;
    background-color: white;
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,17,44,.04);
    padding: .5rem .8rem;
}
.section-1 {
    display: flex;
}
.filter-1 {
    width: 42%;
    display: flex;
    background-color: #f2f5f7;
    border: 0.0625rem solid #cdd5de;
    border-radius: 0.5rem;
    height: 3rem;
    align-items: center;
    margin-left: 2rem;
}
.filter-1:hover {
    background-color: #f4f8ff;
    border-color: black;
}
.search-tag {
    font-size: .75rem;
    cursor: pointer;
    color: #35587b;
    
}
.filter-1 input {
    display: block;
    padding-right: 2.25rem;
    border-radius: 0;
    background-color: transparent;
    border: none;
    width: 100%;
    cursor: pointer;
}
.filter-1 input:focus {
    outline: 0;
}
.group-1 {
    height: 2rem;
    padding: 0 0.75rem;
    cursor: pointer;
}
.group-1.one {
   width: 55%;
}
.group-1.two {
    width: 20%;
    border-left: 0.0625rem solid #cdd5de;
    border-right: 0.0625rem solid #cdd5de;
}
.group-1.three {
    width: 25%;
}
.filters {
    
    width: 100%;
    background-color: hsl(0, 0%, 100%);
    padding: 0px .8rem 15px .8rem;
    border-bottom: 0.0625rem solid #dcdcdc;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    position: relative;
}

.filter-a {
    width: 65%;
    display: flex;
    justify-content: space-between;
}
.filter-b {
    display: flex;
    align-items: center;
}
.filter-b .map-text {
    font-size: 1rem;
    font-weight: 400;
    margin-right: 6px;
}
.filter-btn {
    border: 0.0625rem solid #cdd5de;
    background-color: #fff;
    border-radius: 0.25rem;
    padding: 0.75rem 1rem;
    color: #032e5a;
    font-weight: 600;
    line-height: 1rem;
    cursor: pointer;
    font-size: .875rem;
    display: flex;
    align-items: center;
}
.filter-btn .filter-btn-text {
    margin-right: 5px;
}
.clear-all {
    border: 0;
    background-color: transparent;
    text-decoration: underline;
    color: #567390;
    box-shadow: none;
    padding: 0.125rem 0.25rem;
    border-radius: 1rem;
    font-weight: 600;
    font-style: normal;
    font-size: .875rem;
    cursor: pointer;
}
.fa-w-14 {
    width: 0.875rem;
    height: 0.8rem;
}
.filter-btn:hover {
    background-color: #f2f5f7;
}
.active-btn {
    background-color: #f2f5f7;
}
.class-one {
    display: flex;
    align-items: start;
}
.classes {
    display: none;
}
.preloader-container {
    display: flex;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
}
.drivable-part, .towable-part, .more-filters-part, .price-part {
    max-width: 40rem;
    width: 50vw;
    box-shadow: 0 0.1875rem 1.25rem rgba(0,0,0,.22);
    margin-top: 0.5rem;
    border: 1px solid #032e5a;
    border-radius: 0.5rem;
    z-index: 5;
    position: absolute;
    top: 15%;
    background: white;
    padding: 1.5rem !important;
    display: none;
    margin-left: .8rem;
}
.price-part {
    max-width: 30rem;
    left: 20%;
}
.more-filters-part {
    right: 10%;
}
.more-filters-part .more-filters-one, .more-filters-part .more-filters-two {
    display: flex;
    justify-content: space-between;
}
.more-filters-part .more-filters-one h2, .more-filters-part .more-filters-two h2 {
    font-weight: 400;
    font-style: normal;
    font-size: .875rem;
    color: #032e5a;
    text-transform: capitalize;
    margin-bottom: 20px;
}
.more-filters-part .more-filters-one div label, .more-filters-part .more-filters-two div label {
    font-weight: 400;
    font-style: normal;
    font-size: .875rem;
    color: #032e5a;
}
.more-filters-part .more-filters-one, .more-filters-part .more-filters-two {
    width: 60%;
}
.more-filters-part .more-filters-one div, .more-filters-part .more-filters-two div {
    margin-bottom: 10px;
}

.filter-btn .up {
    display: none;
}
.filter-btn.active .up {
    display: block;
}
.filter-btn.active .down {
    display: none;
}

.towable-part {
    margin-left: 8.3rem;
}
.drivable-part.active, .towable-part.active , .more-filters-part.active,  .price-part.active {
    display: block;
    position: fixed;
}

.title {
    width: 90%;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
}
.title h2 {
    color: #032e5a;
    font-size: 1.5rem;
}
select {
    padding: 0.25rem;
}

@media only screen and (max-width: 500px) {
    .rv-container-main {
        width: 90%;
        margin: 0 auto;
        flex-direction: column;
    }
    .filters {
        display: none;
    }
    .skeleton {
        min-width: 100%;
    }
    .card-img {
        height: 200px;
    }
    .truncate-text {
        max-width: 25rem;
    }
    .is-featured {
        width: 100%;
    }
}
</style>