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
   
   var initProgram = setTimeout(function(){
       var greeting = "UNIDENTIFIED ORGANIC LIFEFORM DETECTED";
       var message = "RUNNING RESUME PROTOCOL (RP) FOR @RAHULNAGARAJU";
       var $identityDiv = $("#identity-results");
       var $name = "NAME: RAHUL NAGARAJU";
       var $alias = "KNOWN ALIAS: RAHUL"
       var $occupation  = "OCCUPATION: SOFTWARE ENGINEER | CLOUD ENGINEER";
       var $TechnicalSkills  = "TECHNICAL SKILLS";
         
         
         var $CSSFrameworks = "Containerization & Orchestration: Docker, Kubernetes (CKA Certified), Amazon ECR";
         var $CSSPre = "CI/CD & DevOps Tools: Jenkins, GitLab CI/CD, GitHub Actions, AWS CodePipeline, Prometheus, ELK Stack";
         var $frontEndAnimation = "Data Storage: AWS RDS, DynamoDB, Redshift, Google BigQuery";
         
         var $Programming = "Programming & Scripting: Python, Go, Bash, PowerShell, Java, SQL";
         var $CloudPlatforms = "Cloud Platforms: AWS, Microsoft Azure, Google Cloud Platform (GCP), Oracle Cloud";
         var $ContainerizationOrchestration = "Containerization & Orchestration: Docker, Kubernetes (CKA Certified), Amazon ECR";             var $iac = "IaC - Automation & Configuration Management: Terraform, AWS CloudFormation, Ansible";
         var $Iac = "IaC - Automation & Configuration Management: Terraform, AWS CloudFormation, Ansible";
         var $DevOps = "CI/CD & DevOps Tools: Jenkins, GitLab CI/CD, GitHub Actions, AWS CodePipeline, Prometheus, ELK Stack";
         var $DataStorage = "Data Storage: AWS RDS, DynamoDB, Redshift, Google BigQuery";
         var $Monitoring = "Monitoring, Logging & Alerting: Prometheus, Grafana, AWS CloudWatch, ELK Stack (Elasticsearch, Logstash, Kibana), PagerDuty";
         var $Networking = "Networking: TCP/IP, Subnetting, DNS, VPC, VPN, Load Balancers, CDN";
         var $Security = "Security: IAM, SSL/TLS, Firewalls, Security Groups, KMS, SIEM";
         var $Compliance = "GDPR, HIPAA, SOC 2, PCI DSS, NIST Cybersecurity Framework, FedRAMP";
         
       var $cmsDevelopment = "WORDPRESS DEVELOPMENT: WORDPRESS";
         var $wordpress = "WORDPRESS: CUSTOM THEMING | PLUGINS";
       var $design = "DESIGN CORE: ADOBE SUITE";
         var $webDesign = "WEB DESIGN: INDESIGN CC | MUSE CC";
         var $branding = "ILLUSTRATIONS & BRANDING: ILLUSTRATOR CC | PHOTOSHOP CC";
         var $designAnimation = "ANIMATION DESIGN: AFTER EFFECTS CC | FLASH CC";
         
      function initIdentityResults(i){
          $("#message").addClass("sign cursor").text(message.substring(0, i));
            if(i < message.length){
                setTimeout(function(){
                    initIdentityResults(i + 1);
                }, 35);   
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
                           }, 2000);
                      }
                  }, 350);  // Dot Speed
               }
               loadingResume();
               function initName(i){
                  $("#name").addClass("sign cursor").text($name.substring(0, i));
                     if(i < $name.length){
                        setTimeout(function(){
                           initName(i + 1);   
                        }, 35);
                     }else{
                        $("#name").removeClass("cursor");
                        setTimeout(function() {
                           initAlias(0);
                        }, 1500);      
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
                        }, 35);
                     }else{
                        $("#alias").removeClass("cursor");
                        setTimeout(function() {
                           initOccupation(0);
                        }, 1500);
                     }
            }
            function initOccupation(i){
               $("#occupation").addClass("sign cursor").text($occupation.substring(0, i));
                     if(i < $occupation.length){
                        setTimeout(function(){
                           initOccupation(i + 1);   
                        }, 35);
                     }else{
                        $("#occupation").removeClass("cursor");
                        setTimeout(function() {
                           initTechnicalSkills(0);
                        }, 1500);
                     }
            }
            function initTechnicalSkills(i){
               $('#front-end-span').addClass('fa fa-wrench');
               $('#technical-skills').addClass("cursor").text($TechnicalSkills.substring(0, i));
                  if(i < $TechnicalSkills.length){
                     setTimeout(function(){
                        initTechnicalSkills(i + 1);  
                     }, 35);
                  }else{
                     $('#technical-skills').removeClass("cursor");
                        setTimeout(function() {
                           initProgramming(0);
                        }, 1500);
                  }
            }
            function initProgramming(i){
               $('#programming').addClass("sign cursor").text($Programming.substring(0, i));
                  if(i < $Programming.length){
                     setTimeout(function(){
                         initProgramming(i + 1);  
                     }, 35);
                  }else{
                     $('#programming').removeClass("cursor");
                        setTimeout(function() {
                           initCloudPlatforms(0);
                        }, 1500);
                  }
            }
            function initCloudPlatforms(i){
               $('#cloud-platforms').addClass("sign cursor").text($CloudPlatforms.substring(0, i));
                  if(i < $CloudPlatforms.length){
                     setTimeout(function(){
                         initCloudPlatforms(i + 1);  
                     }, 35);
                  }else{
                     $('#cloud-platforms').removeClass("cursor");
                        setTimeout(function() {
                           initContainerizationOrchestration(0);
                        }, 1500);
                  }
            }
            function initContainerizationOrchestration(i){
               $('#containerization-orchestration').addClass("sign cursor").text($ContainerizationOrchestration.substring(0, i));
                  if(i < $ContainerizationOrchestration.length){
                     setTimeout(function(){
                         initContainerizationOrchestration(i + 1);  
                     }, 35);
                  }else{
                     $('#containerization-orchestration').removeClass("cursor");
                     setTimeout(function() {
                           initIac(0);
                        }, 1500);
                  }
            }
             function initIac(i){
               $('#iac').addClass("sign cursor").text($Iac.substring(0, i));
                  if(i < $Iac.length){
                     setTimeout(function(){
                         initIac(i + 1);  
                     }, 35);
                  }else{
                     $('#iac').removeClass("cursor");
                     setTimeout(function() {
                           initDevOps(0);
                        }, 1500);
                  }
            }
            function initDevOps(i){
               $('#devops').addClass("sign cursor").text($DevOps.substring(0, i));
                  if(i < $DevOps.length){
                     setTimeout(function(){
                         initDevOps(i + 1);  
                     }, 35);
                  }else{
                     $('#devops').removeClass("cursor");
                     setTimeout(function() {
                           initDataStorage(0);
                        }, 1500);
                  }
            }
            function initDataStorage(i){
               $('#data-storage').addClass("sign cursor").text($DataStorage.substring(0, i));
                  if(i < $DataStorage.length){
                     setTimeout(function(){
                         initDataStorage(i + 1);  
                     }, 35);
                  }else{
                     $('#data-storage').removeClass("cursor");
                     setTimeout(function() {
                           initMonitoring(0);
                        }, 1500);
                  }
            }
            function initMonitoring(i){
               $('#monitoring').addClass("sign cursor").text($Monitoring.substring(0, i));
                  if(i < $Monitoring.length){
                     setTimeout(function(){
                         initMonitoring(i + 1);  
                     }, 35);
                  }else{
                     $('#monitoring').removeClass("cursor");
                     setTimeout(function() {
                           initNetworking(0);
                        }, 1500);
                  }
            }
            function initNetworking(i){
               $('#networking').addClass("sign cursor").text($Networking.substring(0, i));
                  if(i < $Networking.length){
                     setTimeout(function(){
                         initNetworking(i + 1);  
                     }, 35);
                  }else{
                     $('#networking').removeClass("cursor");
                     setTimeout(function() {
                           initSecurity(0);
                        }, 1500);
                  }
            }
            function initSecurity(i){
               $('#security').addClass("sign cursor").text($Security.substring(0, i));
                  if(i < $Security.length){
                     setTimeout(function(){
                         initSecurity(i + 1);  
                     }, 35);
                  }else{
                     $('#security').removeClass("cursor");
                     setTimeout(function() {
                           initCompliance(0);
                        }, 1500);
                  }
            }
            function initCompliance(i){
               $('#compliance').addClass("sign cursor").text($Compliance.substring(0, i));
                  if(i < $Compliance.length){
                     setTimeout(function(){
                         initCompliance(i + 1);  
                     }, 35);
                  }else{
                     $('#compliance').removeClass("cursor");
                     setTimeout(function() {
                           initCMSDevelopment(0);
                        }, 1500);
                  }
            }
            function initCMSDevelopment(i){
               $('#cms-span').addClass("fa fa-wordpress")
               $('#CMS-development').addClass("cursor").text($cmsDevelopment.substring(0, i));
                  if(i < $cmsDevelopment.length){
                     setTimeout(function(){
                         initCMSDevelopment(i + 1);  
                     }, 35);
                  }else{
                     $('#CMS-development').removeClass("cursor");
                     setTimeout(function() {
                           initWordpress(0);
                        }, 1500);
                  }
            }
            function initWordpress(i){
               $('#wordpress').addClass("sign cursor").text($wordpress.substring(0, i));
                  if(i < $wordpress.length){
                     setTimeout(function(){
                         initWordpress(i + 1);  
                     }, 35);
                  }else{
                     $('#wordpress').removeClass("cursor");
                     setTimeout(function() {
                           initDesign(0);
                        }, 1500);
                  }
            }
             function initDesign(i){
               $('#design-span').addClass('fa fa-paint-brush');
               $('#design').addClass("cursor").text($design.substring(0, i));
                  if(i < $design.length){
                     setTimeout(function(){
                         initDesign(i + 1);  
                     }, 35);
                  }else{
                     $('#design').removeClass("cursor");
                     setTimeout(function() {
                           initWebDesign(0);
                        }, 1500);
                  }
            }
            function initWebDesign(i){
               $('#web-design').addClass("sign cursor").text($webDesign.substring(0, i));
                  if(i < $webDesign.length){
                     setTimeout(function(){
                         initWebDesign(i + 1);  
                     }, 35);
                  }else{
                     $('#web-design').removeClass("cursor");
                     setTimeout(function() {
                           initBranding(0);
                        }, 1500);
                  }
            }
            function initBranding(i){
               $('#branding').addClass("sign cursor").text($branding.substring(0, i));
                  if(i < $branding.length){
                     setTimeout(function(){
                         initBranding(i + 1);  
                     }, 35);
                  }else{
                     $('#branding').removeClass("cursor");
                     setTimeout(function() {
                           initDesignAnimation(0);
                        }, 1500);
                  }
            }
            function initDesignAnimation(i){
               $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
                  if(i < $designAnimation.length){
                     setTimeout(function(){
                         initDesignAnimation(i + 1);  
                     }, 35);
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
                }, 35);   
            }else{
               $("#greeting").removeClass("cursor");
               initIdentityResults(0);
            }
         }
         initProgramAlpha(0)
   
   }, 1500);

initProgram()


