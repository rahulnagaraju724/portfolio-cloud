   var initDot = document.getElementById("loading");
   var loading = setInterval(function() {
       if(initDot.innerHTML.length == 5) {
           initDot.innerHTML = "";
       } else {
           initDot.innerHTML += ".";
       }
   }, 350); // Dot Speed

   var $loadingMessage = $('#loadingH1');
    
   setTimeout(function() {
         clearInterval(loading);
         $loadingMessage.hide();
      }, 1500);

    const delayTime=8;
    const briefDelay=350;
   
   var initProgram = setTimeout(function(){
       var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
       var message = "RUNNING RESUME PROTOCOL (RP) FOR @RAHULNAGARAJU";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: RAHUL NAGARAJU";
       var $alias = "KNOWN ALIAS: RAHUL"
       var $occupation  = "OCCUPATION: SOFTWARE ENGINEER | CLOUD ENGINEER";
       var $TechnicalSkills  = "TECHNICAL SKILLS";

         var $Programming = "Programming & Scripting: Python, Go, Bash, PowerShell, Java, SQL";
         var $CloudPlatforms = "Cloud Platforms: AWS, Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud";
         var $ContainerizationOrchestration = "Containerization & Orchestration: Docker, Kubernetes (CKA Certified), Amazon ECR";             var $iac = "IaC - Automation & Configuration Management: Terraform, AWS CloudFormation, Ansible";
         var $Iac = "IaC - Automation & Configuration Management: Terraform, AWS CloudFormation, Ansible";
         var $DevOps = "CI/CD & DevOps Tools: Jenkins, GitLab CI/CD, GitHub Actions, AWS CodePipeline";
         var $DataStorage = "Data Storage: MySQL, AWS RDS, S3, DynamoDB, Redshift";
         var $Monitoring = "Monitoring, Logging & Alerting: Prometheus, Grafana, AWS CloudWatch, ELK Stack (Elasticsearch, Logstash, Kibana), PagerDuty";
         var $Networking = "Networking: TCP/IP, Subnetting, DNS, VPC, VPN, Load Balancers, CDN";
         var $Security = "Security: IAM, SSL/TLS, Firewalls, Security Groups, KMS, SIEM";
         var $Compliance = "Compliance: GDPR, HIPAA, SOC 2, PCI DSS, NIST Cybersecurity Framework, FedRAMP";
         
       var $AWS = "AWS";
         var $AWSSkills = "AWS CloudFormation, AWS Lambda, AWS EC2, AWS S3, AWS RDS, AWS VPC, AWS IAM, AWS CloudWatch, AWS ECS/EKS, AWS CloudTrail, AWS Elastic Beanstalk, AWS Route 53, AWS CodePipeline, AWS SQS/SNS, AWS Redshift, AWS DynamoDB";
       var $design = "DESIGN CORE: ADOBE SUITE";
         var $webDesign = "WEB DESIGN: INDESIGN CC | MUSE CC";
         var $branding = "ILLUSTRATIONS & BRANDING: ILLUSTRATOR CC | PHOTOSHOP CC";
         var $designAnimation = "ANIMATION DESIGN: AFTER EFFECTS CC | FLASH CC";
         
      function initIdentityResults(i){
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, delayTime);   
            }else{
               $('#message').removeClass("cursor");
               var loadingResume = function(){
                     $("#loadingMessage2").show()
                     var dotAlpha = document.getElementById("alpha-loading");
                     var loadingAlpha = setInterval(function() {
                      if(dotAlpha.innerHTML.length == 6) {
                          dotAlpha.innerHTML = "";
                      } else {
                          dotAlpha.innerHTML += ".";
                          setTimeout(function() {
                              clearInterval(loadingAlpha);
                              $("#loadingMessage2").hide();
                           }, 1000);
                      }
                  }, 350);  // Dot Speed
               }
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, delayTime);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initAlias(0);
                        }, briefDelay);      
                     }
               }
               setTimeout(function() {
                  initName(0);
               }, 2500);
            }
            function initAlias(i){
                  $("#alias").addClass("sign cursor").text($alias.substring(0, i));
                     if(i < $alias.length){
                        setTimeout(function(){
                           initAlias(i + 1);   
                        }, delayTime);
                     }else{
                        $("#alias").removeClass("cursor");
                        setTimeout(function() {
                           initOccupation(0);
                        }, briefDelay);
                     }
            }
            function initOccupation(i){
               $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                     if(i < $occupation.length){
                        setTimeout(function(){
                           initOccupation(i + 1);   
                        }, delayTime);
                     }else{
                        $("#occupation").removeClass("cursor");
                        setTimeout(function() {
                           initTechnicalSkills(0);
                        }, briefDelay);
                     }
            }
            function initTechnicalSkills(i){
               $('#front-end-span').addClass('fa fa-wrench');
               $('#technical-skills').addClass("cursor").text($TechnicalSkills.substring(0, i));
                  if(i < $TechnicalSkills.length){
                     setTimeout(function(){
                        initTechnicalSkills(i + 1);  
                     }, delayTime);
                  }else{
                     $('#technical-skills').removeClass("cursor");
                        setTimeout(function() {
                           initProgramming(0);
                        }, briefDelay);
                  }
            }
            function initProgramming(i){
               $('#programming').addClass("sign cursor").text($Programming.substring(0, i));
                  if(i < $Programming.length){
                     setTimeout(function(){
                         initProgramming(i + 1);  
                     }, delayTime);
                  }else{
                     $('#programming').removeClass("cursor");
                        setTimeout(function() {
                           initCloudPlatforms(0);
                        }, briefDelay);
                  }
            }
            function initCloudPlatforms(i){
               $('#cloud-platforms').addClass("sign cursor").text($CloudPlatforms.substring(0, i));
                  if(i < $CloudPlatforms.length){
                     setTimeout(function(){
                         initCloudPlatforms(i + 1);  
                     }, delayTime);
                  }else{
                     $('#cloud-platforms').removeClass("cursor");
                        setTimeout(function() {
                           initContainerizationOrchestration(0);
                        }, briefDelay);
                  }
            }
            function initContainerizationOrchestration(i){
               $('#containerization-orchestration').addClass("sign cursor").text($ContainerizationOrchestration.substring(0, i));
                  if(i < $ContainerizationOrchestration.length){
                     setTimeout(function(){
                         initContainerizationOrchestration(i + 1);  
                     }, delayTime);
                  }else{
                     $('#containerization-orchestration').removeClass("cursor");
                     setTimeout(function() {
                           initIac(0);
                        }, briefDelay);
                  }
            }
             function initIac(i){
               $('#iac').addClass("sign cursor").text($Iac.substring(0, i));
                  if(i < $Iac.length){
                     setTimeout(function(){
                         initIac(i + 1);  
                     }, delayTime);
                  }else{
                     $('#iac').removeClass("cursor");
                     setTimeout(function() {
                           initDevOps(0);
                        }, briefDelay);
                  }
            }
            function initDevOps(i){
               $('#devops').addClass("sign cursor").text($DevOps.substring(0, i));
                  if(i < $DevOps.length){
                     setTimeout(function(){
                         initDevOps(i + 1);  
                     }, delayTime);
                  }else{
                     $('#devops').removeClass("cursor");
                     setTimeout(function() {
                           initDataStorage(0);
                        }, briefDelay);
                  }
            }
            function initDataStorage(i){
               $('#data-storage').addClass("sign cursor").text($DataStorage.substring(0, i));
                  if(i < $DataStorage.length){
                     setTimeout(function(){
                         initDataStorage(i + 1);  
                     }, delayTime);
                  }else{
                     $('#data-storage').removeClass("cursor");
                     setTimeout(function() {
                           initMonitoring(0);
                        }, briefDelay);
                  }
            }
            function initMonitoring(i){
               $('#monitoring').addClass("sign cursor").text($Monitoring.substring(0, i));
                  if(i < $Monitoring.length){
                     setTimeout(function(){
                         initMonitoring(i + 1);  
                     }, delayTime);
                  }else{
                     $('#monitoring').removeClass("cursor");
                     setTimeout(function() {
                           initNetworking(0);
                        }, briefDelay);
                  }
            }
            function initNetworking(i){
               $('#networking').addClass("sign cursor").text($Networking.substring(0, i));
                  if(i < $Networking.length){
                     setTimeout(function(){
                         initNetworking(i + 1);  
                     }, delayTime);
                  }else{
                     $('#networking').removeClass("cursor");
                     setTimeout(function() {
                           initSecurity(0);
                        }, briefDelay);
                  }
            }
            function initSecurity(i){
               $('#security').addClass("sign cursor").text($Security.substring(0, i));
                  if(i < $Security.length){
                     setTimeout(function(){
                         initSecurity(i + 1);  
                     }, delayTime);
                  }else{
                     $('#security').removeClass("cursor");
                     setTimeout(function() {
                           initCompliance(0);
                        }, briefDelay);
                  }
            }
            function initCompliance(i){
               $('#compliance').addClass("sign cursor").text($Compliance.substring(0, i));
                  if(i < $Compliance.length){
                     setTimeout(function(){
                         initCompliance(i + 1);  
                     }, delayTime);
                  }else{
                     $('#compliance').removeClass("cursor");
                     setTimeout(function() {
                           initAWS(0);
                        }, briefDelay);
                  }
            }
            function initAWS(i){
               $('#aws-span').addClass("fa fa-wordpress")
               $('#aws').addClass("cursor").text($AWS.substring(0, i));
                  if(i < $AWS.length){
                     setTimeout(function(){
                         initAWS(i + 1);  
                     }, delayTime);
                  }else{
                     $('#aws').removeClass("cursor");
                     setTimeout(function() {
                           initAWSSkills(0);
                        }, briefDelay);
                  }
            }
            function initAWSSkills(i){
               $('#aws-skills').addClass("cursor").text($AWSSkills.substring(0, i));
                  if(i < $AWSSkills.length){
                     setTimeout(function(){
                         initAWSSkills(i + 1);  
                     }, delayTime);
                  }else{
                     $('#aws-skills').removeClass("cursor");
                     setTimeout(function() {
                           initDesign(0);
                        }, briefDelay);
                  }
            }
            function initDesign(i){
               $('#design-span').addClass('fa fa-paint-brush');
               $('#design').addClass("cursor").text($design.substring(0, i));
                  if(i < $design.length){
                     setTimeout(function(){
                         initDesign(i + 1);  
                     }, delayTime);
                  }else{
                     $('#design').removeClass("cursor");
                     setTimeout(function() {
                           initWebDesign(0);
                        }, briefDelay);
                  }
            }
            function initWebDesign(i){
               $('#web-design').addClass("sign cursor").text($webDesign.substring(0, i));
                  if(i < $webDesign.length){
                     setTimeout(function(){
                         initWebDesign(i + 1);  
                     }, delayTime);
                  }else{
                     $('#web-design').removeClass("cursor");
                     setTimeout(function() {
                           initBranding(0);
                        }, briefDelay);
                  }
            }
            function initBranding(i){
               $('#branding').addClass("sign cursor").text($branding.substring(0, i));
                  if(i < $branding.length){
                     setTimeout(function(){
                         initBranding(i + 1);  
                     }, delayTime);
                  }else{
                     $('#branding').removeClass("cursor");
                     setTimeout(function() {
                           initDesignAnimation(0);
                        }, briefDelay);
                  }
            }
            function initDesignAnimation(i){
               $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
                  if(i < $designAnimation.length){
                     setTimeout(function(){
                         initDesignAnimation(i + 1);  
                     }, delayTime);
                  }else{
                     //$('#design-animation').removeClass("cursor");
                  }
            }
         }
         
      function initProgramAlpha(i){
          $("#greeting").addClass("cursor").text(greeting.substring(0, i));
            if(i < greeting.length){
                setTimeout(function(){
                    initProgramAlpha(i + 1);
                }, delayTime);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, briefDelay);

initProgram()


