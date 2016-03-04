                         <!--           SCROLL MENU             -->
                    <nav class="scrollMenu text-center">
                        <ul class="main_menu">
                           <li><a   class="home">Home</a></li>
                                <li><a  class="about">About</a></li>
                                <li><a  class="catalog">Catalog</a></li>
                                <li><a  class="services">Services</a></li>
                                <li><a  class="news">News</a></li>
                                <li><a  class="contacts">Contacts</a></li>
                        </ul>
                     </nav>
          <header>
                        <!--           /SCROLL MENU             -->
               <div class="container text-center">
                    <div class="text-center h1">PUBLIC  LIBRARY</div>
                            <!--         MAIN MENU           -->
                        <nav class="text-center">
                            <ul class="main_menu">
                                <li><a  class="home">Home</a></li>
                                <li><a  class="about">About</a></li>
                                <li><a  class="catalog">Catalog</a></li>
                                <li><a  class="services">Services</a></li>
                                <li><a  class="news">News</a></li>
                                <li><a  class="contacts">Contacts</a></li>
                            </ul>
                             <!--         /MAIN MENU           -->
                         
                                   <!--    SELECT MENU          -->
                        <form>
                            <select class="select_menu">
                                <option class="home" selected >Home</a></option>
                                <option class="about">About</a></option>
                                <option class="catalog">Catalog</option>
                                <option class="services">Services</option>
                                <option class="news">News</option>
                                <option class="contacts">Contacts</option>
                            </select>
                            
                            
                        </form>
                                 <!--    /SELECT MENU          -->
                        </nav>
                        
                        <div class="container text-center" id="sliderText">
                       
                        </div>
                    <ul class="text-center siderPict">
                        <li><img src="images/library1.jpg"/></li>
                        <li><img src="images/library2.jpg"/></li>
                        <li><img src="images/library3.jpg"/></li>
                    </ul>   
                    
                              <!-- Button trigger modal -->
<button type="button" id="signIn" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
 Sign in
</button>
<button type="button" id="signInMobile" class="btn btn-primary btn-lg">Sign in</button>
                             
                              <!-- /Button trigger modal -->

                                      <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span>        <span class="sr-only">close</span>
        </button>
        <div role="tabpanel">
                                            <!--TABS-->
                                    
                                 <!-- Tabs navigation elements -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active">
         <a href="#login" aria-controls="login" role="tab" data-toggle="tab">Login</a></li>
    <li role="presentation">
        <a href="#register" aria-controls="register" role="tab" data-toggle="tab">Register</a></li>
  </ul>
                                <!-- /Tabs navigation elements -->

                                  <!--     Tabs content       -->
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane text-left active" id="login">
        <br/>
            <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group text-right">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-success">Login</button>
                    </div>
                  </div>
            </form>
        </div>
        <div role="tabpanel" class="tab-pane" id="register">
            <br/>
            <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Password" required>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                    <div class="col-sm-10">
                      <input type="password" class="form-control" id="inputPassword3" placeholder="Verify Password" required>
                    </div>
                  </div>
                  <div class="form-group text-right">
                    <div class="col-sm-offset-2 col-sm-10">
                      <button type="submit" class="btn btn-success">Register</button>
                    </div>
                  </div>
            </form>
            
        </div>
    </div>      
                                    <!--     /Tabs content       -->
    </div>
  </div>
</div>
                    
               </div>
                 
                  
                   
              </div> 
                                            <!-- /Modal -->
          </header>