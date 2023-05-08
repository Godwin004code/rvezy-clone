<template>
  <section>
  <head-comp />
  </section>
</template>

<script>
// @ is an alias to /src
import HeadComp from '@/components/HeadComp.vue';

export default {
  name: 'HomeView',
  components: {
    HeadComp
  }
  
}
</script>

<style>
.inneer {
  background-image: linear-gradient(
    to right,
    #d6d7d8 0%,
    #e2e3e4 10%,
    #d6d7d8 20%,
    #d6d7d8 100%
  );
}
.guests {
  position: absolute;
  z-index: 10;
  background: white;
  border: 1px solid #032e5a;
  border-radius: 0.5rem;
  padding: 1.5rem!important;
  box-shadow: 0 0.1875rem 1.25rem rgba(0,0,0,.22);
  left: 30%;
  width: 250px;
  display: none;
}
.guests.active {
  display: block;
}
.option {
  display: flex;
}
.ad .option div {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ad .option div:first-child {
  
  border:1px solid  #f2f5f7;
    color: #68829c;
    border-radius: 50%;
    font-size: 1.5rem;
}
.ad .option div:last-child {
  font-size: 1.5rem;
  border-radius: 50%;
  background-color: transparent;
    border: 1px solid #032e5a;
    color: #032e5a;
}
.ad, .tow-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.ad h2 {
  font-size: 1.2rem;
    font-weight: 400;
    color: #032e5a;
}
.ad h3 {
  font-weight: 600;
    font-style: normal;
    font-size: .875rem;
    text-decoration: underline;
    color: #567390;
    cursor: pointer;
    
}
.ad:last-child {
  margin-bottom: 10px;
  align-items: center;
}
.zbtn {
  padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    background-color: #032e5a;
    color: #fff;
}
.drive-box {
  display: flex;
  justify-content: space-between;
}
.class-one {
  padding: 0.25rem!important;
  display: flex!important;
  border: 0.0625rem solid #cdd5de;
    border-radius: 0.25rem;
    padding: 0 0 0 2.75rem;
    width: 48%;
    margin-bottom: 10px;
    padding: 0.25rem!important;
}
.class-one input[type=checkbox] {
  width: 1.5rem;
    height: 1.5rem;
}
.class-one p, .class-one h2, .select-all {
  font-weight: 400;
    color: #68829c;
    font-size: .875rem;
    margin-top: 8px;
}
.select-all {
  font-size: 1.2rem;
  
}
.select {
  margin-bottom: 20px;
}
.class-one-part {
  margin-left: 10px;
}
</style>