<template>
<br>

<div class="info">
    <h1> Welcome to my tutoring service </h1>
    <h2> Please fill in the following form to book a tutoring session </h2>
</div>

<br>
<div class="form">
<form>
    
    <label>First Name </label><input id="FirstName" v-model="first">
    <br>
    <label>Last Name </label> <input id="last name" v-model="last">
    <br>
    <br>
    <label>Courses </label> 
        <select name="courses" placeholder="Courses">
            <option name="Programming">Programming</option>
            <option name="Math">Mathematics</option>
            <option name="Physics">Physics</option>
            <option name="Chemistry">Chemistry</option>
            <option name="Biology">Biology</option>
        </select>
    <br>
    <br>
    <label> Number of hours needed </label>
    <select name="Hours" placeholder="Hours">
            <option name="0.5">0.5</option>
            <option name="1">1</option>
            <option name="1.5">1.5</option>
            <option name="2">2</option>
    </select>
    <br>
    <br>
    <label> Beginning date</label> <input type="date" v-model="start">
    <br>
    <br>
    <label> End date</label> <input type="date">
    <br>
    <br>
    
    <label> Credit Card Number</label> <input placeholder="1234-5678-1234-5678">
    <br>
    <br>

    <label> Credit Card Name</label> <input placeholder="John Smith">
    <br>
    <br>

    <label> Expiration Month/Year </label>
    <select name="Hours" placeholder="01">
            <option name="01">01</option>
            <option name="02">02</option>
            <option name="03">03</option>
            <option name="04">04</option>
            <option name="05">05</option>
            <option name="06">06</option>
            <option name="07">07</option>
            <option name="08">08</option>
            <option name="09">09</option>
            <option name="10">10</option>
            <option name="11">11</option>
            <option name="12">12</option>
           
    </select>
    

    <select name="Hours" placeholder="2023">
            <option name="2023">2023</option>
            <option name="2024">2024</option>
            <option name="2025">2025</option>
            <option name="2026">2026</option>
            <option name="2027">2027</option>
            <option name="2028">2028</option>

           
    </select>
    
    <br>
    <br>

    <label> Credit Card CSV</label> <input placeholder="123">
    <br>
    <br>



    <input type="checkbox"> <label> I have read the terms of usage. I accept to pay 20$ per hour. </label>
    <br>
    <br>
    <button @click="confirm" type="button">Submit</button>
    <h3 id="confirm">{{ output }}</h3>
</form>


</div>
</template>

<style>

.info {
    position: relative;
    margin-top: 10px;
}

.form {
    position: absolute;
    margin-top: 20px;
}

</style>

<script>


export default {
  data() {
    return {
      first: '',
      last: '',
      output: '',
      start: ''
    }
  },
  methods: {
    confirm: function() {
      if(this.first && this.last) {
        this.output = "Hi " + this.first + " " + this.last + ", I will see you on " + this.start + " !";
      }
    }
  }
}



</script>