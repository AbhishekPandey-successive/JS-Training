# JS-Training
12 factor App

12 -Factor App is Methodology  for building Soft-as-a-Service  apps that have features like:
       1.Declarative format for setup Information
        2.Maximum Portability between Execution and Enviornment.
        3.Minimize time and Cost for new Developers Joining the cost.
        4.Minimize divergence between development and Production.

1. Code Base

     1.Code Base is single repo or any set of many repos who share a root commit.
     2.Each app has there separate code base,  if there is multiple code Bases than it is not app ,its a Distributed System.
     3.Multiples App Sharing the Same Code base is violation of the 12 factor App.
     4.Deploy is running instance of the App.

2.Dependencies

      1. Various libraries can be installed from Packaging system and scoped into the directory containing the app.
      2. 12 factor App never relies on implicit existence of  System wide Packages.
      3.It uses dependency dependency isolation tool during execution to ensure no implicit dependencies leak in from the Surrounding system.
      4.Every Programmimg Languages has respective dependency declaration such as C has Autoconff.
      5. It simplifies setup for developers new to the app.
      6.Developers can checkout the app's codebase  and can setup everything needed to run app's code.

3. Config 

       1.An app's config is everything that is likely to vary between deploys,staging, production,developer enviornments etc.
       2. It includes Resource handle to the database,credentials to external services,Per-deploy value.
       3.Config varies substantially across deploys, code does not.
       4.Definition of config does not include internal application config.
       5.Another approach to config is the use of config files which are not checked into version control such as config/database.yml in Rails.
       6. 12 factor App stores config in Enviornment Variables. Env vars are easy to change between deploys without changing any code.
       7. Another aspect of cofig management is grouping ,sometimes apps batch config into named groups named after specific deploys such as development,test and Production.
4. Backing Service 

       1.Backing service is service that app consumes over the network as a part of normal execution.
       2.It includes datastores such as MySQL or CouchDB,messaging/queueing systems,SMTP services ,caching systems.

       3.Backing services are traditionally managed by the same systems administrators who deploys the app's runtime.

       4.The code for a twelve-factor app makes no distinction between local and third party services.

       5. A deploy of the twelve-factor app should be able to swap out a local MySQL database with one managed by a third party without any changes to the app's code.Likewise a local server could swapped with a third-party SMTP service without code changes.

5. Build ,release ,run
      
      Build :A build stage is a transform which converts a code repo into an executable bundle known as build.

      Release: It takes the build produced by the Build stage and combines it with deploys current config.

      Run: Run stage runs the app in the execution enviornment by launching some set of the app's processes against a selected release.

6. Processes 
     
     1.The app is executed in the execution enviornment as one or more processes.
     2.Twelve factor processes are stateless and sharing nothing. Any data that needs to persist must be stored in stateful backing service, typically database.
     3.The memory space or filesystem of the process can be used as a brief , single-transaction cache.

7.Port Binding

      1.Web Apps are sometimes executed inside a webserver container.
      2.12 factor app is completely self -contained and does not rely on runtime injection of webserver into the execution enviornment to create a web-facing services.

8.Concurrency 

     1.According to the Concurrency , any computer Program once run ,is represented by one or more Process.
     2. Multiple Processes can be run in the Program.

9. Disposability

     1.Twelve Factor app's process are disposable ,meaning they can be started or stopped at a moment's notice. This facilities fast elastic scaling,rapid deployment of code or config changes , and robustness of prodction deploys.

10.Dev/prod Parity

There has been substantial gaps between development and Production. These gaps manifest in three areas:
     1.The time gap : A developer may work on code that takes a time.
     2.Personnel Gap: Developers write code ,ops engineers deploy it.
     3.The tools gap : Developers may be using a stack like Ngninx,SQLite and OSX

11.Logs 

    1.Logs Provide the visibility into the behavior of a running app.In server -based ebviornments they are commonly written to a file on disk,but this only an output format.
    2.Logs are the stream of aggegated ,time-oedred events collected from the output streams of all running processes and backing services.


12. Admin Processes

    1. The process formation is the array of processes taht are used to do the app's regular bussiness as it runs.
    2.Administrative or Maintence tasks for the app such as:
        1.Running database migration
        2.Running a console
        3. Running one time scripts committed intos apps repo.


           
      
2.Atomic Design  

Atomic Design is a Process that consists of five separate steps taht work together to build more coherent, hierarchial, and thoughtful interface design system.

The following are the five stages of atomic design:

1.Atoms: Atoms are the most basic components ,they are the building blocks of design such as buttons ,lines ,icons,text fields,text labels etc.

2.Molecules: Molecule can be created by combining two or more atoms. For instace,in input field and a button can combine to become a search from , which can perform the search function on the interface.

3.Organisms: An Organsim is a collection of Molecules that have been bonded together to form complex individual portions of the design such as login page,form etc.

4.Templates: Templates are the Glues that combine the different organisms or individual sections to create a complete design.

5.Pages:Pages have highest level of fiedelity. As they are highl palpable,most inviduals spend most of their time on pages during the process.

Applying Atomic Design 
It is very easy , al we have to do is put it together and work with it. Start with design atoms and gradually move to templates and pages ,having in mind the priciple of Building up.

Conclusion:
As a designer we need to know the tomic design system to make our work easier and reduce the time and effort invested into designing drastically.



