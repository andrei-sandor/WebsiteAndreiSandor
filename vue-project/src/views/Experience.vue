
<template>
<div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info1">
        <h3 class="title">Rogue Research </h3>
        <div class="Rogue-Bullet-Points">
            <ul>
                <li>Developed (designed and tested) a complex image processing algorithm written in Python and C++, by using the OpenCV and NumPy frameworks, which gave more rigorous results than what is currently used by the company. Objective-C was also used.
</li>
                <li>Created an emulator for a robot of the company by using the Python programming language and using networking and asyincio concepts, which I learned by myself during the internship, to produce quickly the emulator to let my team finish it before a deadline.
</li>
                <li>Adapted to and learned quickly a new programming language (Objective-C) to produce quality unit testing for a complex object-oriented software in the neuroscience field running on macOS. C++ and C were also used.
</li>
            </ul>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="card">
      <div class="info2">
        <h3 class="title">Gildan</h3>
            <div class="Gildan-pts">
                <li> Developed machine learning models (regression, classification, metrics) in Python (scikit-learn, Pandas, matplotlib, NumPy) by making critical decisions to be the most accurate possible with the data. that rigorously improved the production process of the company to make it more efficient.
</li>
                <li> Collaborated with production to deploy machine learning models into a Flask (HTML and CSS) app to be used as a web application created via Microsoft Azure that was constantly evolving designed in such a way to be user friendly. 
 </li>
                <li> Created a machine learning model by using deep learning for which I had to use my problem-solving skills to gain more knowledge about that lead to a better machine learning model. 
 </li>
                <li> Adapted to many programming concepts to accomplish different tasks that are not related to each other in Python such as EDA, working with snowflake database from a Python point of view and working with time series that helped the company and my team to advance more in their tasks against time.
</li>
        </div>










      </div>
    </div>
    <br> 
<br>
    <div class="card">
      <div class="info3">
        <h3 class="title">Autodesk</h3>
        <div class="Autodesk-pts">
                <li> Solved numerous bugs by using analytical skills to understand complex computer graphics concepts that lead to more solid features.
</li>
                <li> Implemented new functionalities in a project in C++ by the use of object-oriented practices that combined many different computer graphics concepts that lead to produce features that clients were requesting. </li>
                <li> Created many unit tests for the project by using all my creativity to think about edge cases that lead to a full-proof project that was send early for user testing. </li>
                
        </div>
      </div>
    </div>

    
  </div>
</div>

<div class="vertical">
<div class="right-triangle1"></div>
<div class="right-triangle2"></div>
<div class="right-triangle3"></div>
</div>

<div class="Summer-2022">Summer 2022</div>
<div class="Summer-2023">Summer 2023</div>
<div class="Fall-2023">Fall 2023</div>
</template>

<style>

.Rogue-Bullet-Points{
    text-align: center;
    position: relative;
}

.timeline {
  background: var(--primary-color);
  margin: 20px auto;
  padding: 20px;
  position: absolute;
}

.info1 {
  padding: 20px 30px;
  position: relative;
  background-color: gray;
  width: 50%;
  margin-left: -350px;
}

.info2 {
  padding: 20px 30px;
  position: relative;
  background-color: gray;
  width: 50%;
  margin-left: 350px;
}

.info3 {
  padding: 20px 30px;
  position: relative;
  background-color: gray;
  width: 50%;
  margin-left: -350px;
}

.vertical
{
    position:absolute;
    border-right: 10px solid black;
    height: 1400px;
    margin-left: 250px;
}

.Summer-2022{
    position:absolute;
    margin-left:300px;
    top:270px;
}

.Summer-2023{
    position:absolute;
    margin-left:100px;
    top:780px;
}

.Fall-2023{
    position:absolute;
    margin-left:300px;
    top:1250px;
}

.right-triangle1
{
    position:absolute;
    width: 0;
	height: 0;
    margin-left:-50px;
    margin-top:200px;
	border-top: 45px solid transparent;
	border-left: 50px solid #111;
	border-bottom: 55px solid transparent;
}

.right-triangle2
{
    position:absolute;
    width: 0;
	height: 0;
    margin-left:25px;
    margin-top:725px;
	border-top: 25px solid transparent;
	border-right: 50px solid #111;
	border-bottom: 25px solid transparent;
}

.right-triangle3
{
    position:absolute;
    width: 0;
	height: 0;
    margin-left:-50px;
    margin-top:1170px;
	border-top: 45px solid transparent;
	border-left: 50px solid #111;
	border-bottom: 55px solid transparent;
}



</style>
