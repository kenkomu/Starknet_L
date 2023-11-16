import type { Component } from 'solid-js';

const Addproperty: Component = () => {
    return (
        <div>



            <div class="inner-pages maxw1600 m0a dashboard-bd">
                {/* Wrapper */}
                <div id="wrapper" class="int_main_wraapper">
                    {/* START SECTION HEADINGS */}
                    {/* Header Container
        ================================================== */}
                    <div class="dash-content-wrap">
                        <header id="header-container" class="db-top-header">
                            {/* Header */}
                            <div id="header">
                                <div class="container-fluid">
                                    {/* Left Side Content */}
                                    <div class="left-side">
                                        {/* Logo */}
                                        <div id="logo">
                                            <a href="index.html"><img src="images/logo.svg" alt="" /></a>
                                        </div>
                                        {/* Mobile Navigation */}
                                        <div class="mmenu-trigger">
                                            <button class="hamburger hamburger--collapse" type="button">
                                                <span class="hamburger-box">
                                                    <span class="hamburger-inner"></span>
                                                </span>
                                            </button>
                                        </div>
                                        {/* Main Navigation */}
                                        <nav id="navigation" class="style-1">
                                            <ul id="responsive">
                                                <li><a href="add-property.html">Home</a>

                                                </li>
                                                <li><a href="my-listings.html#">Listing</a>

                                                </li>
                                                <li><a href="my-listings.html#">Property</a>

                                                </li>



                                            </ul>
                                        </nav>
                                        <div class="clearfix"></div>
                                        {/* Main Navigation / End */}
                                    </div>
                                    {/* Left Side Content / End */}
                                    {/* Right Side Content / */}
                                    <div class="header-user-menu user-menu">
                                        <div class="header-user-name">
                                            <span><img src="images/testimonials/ts-1.jpg" alt="" /></span>Hi, Mary!
                                        </div>

                                    </div>
                                    {/* Right Side Content / End */}
                                </div>
                            </div>
                            {/* Header / End */}
                        </header>
                    </div>
                    <div class="clearfix"></div>
                    {/* Header Container / End */}

                    {/* START SECTION USER PROFILE */}
                    <section class="user-page section-padding pt-5">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                                    <div class="user-profile-box mb-0">
                                        <div class="sidebar-header"><img src="images/logo-blue.svg" alt="header-logo2.png" /> </div>
                                        <div class="header clearfix">
                                            <img src="images/testimonials/ts-1.jpg" alt="avatar" class="img-fluid profile-img" />
                                        </div>
                                        <div class="active-user">
                                            <h2>Mary Smith</h2>
                                        </div>
                                        <div class="detail clearfix">
                                            <ul class="mb-0">
                                                <li>
                                                    <a href="dashboard.html">
                                                        <i class="fa fa-map-marker"></i> Dashboard
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="my-listings.html">
                                                        <i class="fa fa-list" aria-hidden="true"></i>My Properties
                                                    </a>
                                                </li>

                                                <li>
                                                    <a class="active" href="add-property.html">
                                                        <i class="fa fa-list" aria-hidden="true"></i>Add Property
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="payment-method.html">
                                                        <i class="fas fa-credit-card"></i>Payments
                                                    </a>
                                                </li>



                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-12 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2">
                                    <div class="col-lg-12 mobile-dashbord dashbord">
                                        <div class="dashboard_navigationbar dashxl">
                                            <div class="dropdown">
                                                <button onClick="myFunction()" class="dropbtn"><i class="fa fa-bars pr10 mr-2"></i> Dashboard Navigation</button>
                                                <ul id="myDropdown" class="dropdown-content">
                                                    <li>
                                                        <a href="dashboard.html">
                                                            <i class="fa fa-map-marker mr-3"></i> Dashboard
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="my-listings.html">
                                                            <i class="fa fa-list mr-3" aria-hidden="true"></i>My Properties
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a class="active" href="add-property.html">
                                                            <i class="fa fa-list mr-3" aria-hidden="true"></i>Add Property
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="payment-method.html">
                                                            <i class="fas fa-credit-card mr-3"></i>Payments
                                                        </a>
                                                    </li>



                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-add-property">
                                        <h3>Property description and price</h3>
                                        <div class="property-form-group">
                                            <form>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>
                                                            <label for="title">Property Title</label>
                                                            <input type="text" name="title" id="title" placeholder="Enter your property title" />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <p>
                                                            <label for="description">Property Description</label>
                                                            <textarea id="description" name="pro-dexc" placeholder="Describe about your property"></textarea>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <div class="nice-select form-control wide" tabindex="0"><span class="current">Select status</span>
                                                                <ul class="list">
                                                                    <li data-value="1" class="option">Rent</li>
                                                                    <li data-value="2" class="option">Sale</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-12 dropdown faq-drop">
                                                        <div class="form-group categories">
                                                            <div class="nice-select form-control wide" tabindex="0"><span class="current">Type</span>
                                                                <ul class="list">
                                                                    <li data-value="1" class="option">house</li>
                                                                    <li data-value="2" class="option">commercial</li>
                                                                    <li data-value="3" class="option">apartment</li>
                                                                    <li data-value="4" class="option">lot</li>
                                                                    <li data-value="5" class="option">garage</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 col-md-12 dropdown faq-drop">

                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-12">
                                                        <p class="no-mb">
                                                            <label for="price">Price</label>
                                                            <input type="text" name="price" placeholder="USD" id="price" />
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-6 col-md-12">
                                                        <p class="no-mb last">
                                                            <label for="area">Area</label>
                                                            <input type="text" name="area" placeholder="Sqft" id="area" />
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="single-add-property">
                                        <h3>property Media</h3>
                                        <div class="property-form-group">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <form action="https://code-theme.com/file-upload" class="dropzone"></form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="single-add-property">
                                        <h3>property Location</h3>
                                        <div class="property-form-group">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="address">Address</label>
                                                        <input type="text" name="address" placeholder="Enter Your Address" id="address" />
                                                    </p>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="city">City</label>
                                                        <input type="text" name="city" placeholder="Enter Your City" id="city" />
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="state">State</label>
                                                        <input type="text" name="state" placeholder="Enter Your State" id="state" />
                                                    </p>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="country">Country</label>
                                                        <input type="text" name="country" placeholder="Enter Your Country" id="country" />
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12">
                                                    <p class="no-mb first">
                                                        <label for="latitude">Google Maps latitude</label>
                                                        <input type="text" name="latitude" placeholder="Google Maps latitude" id="latitude" />
                                                    </p>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p class="no-mb last">
                                                        <label for="longitude">Google Maps longitude</label>
                                                        <input type="text" name="longitude" placeholder="Google Maps longitude" id="longitude" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="single-add-property">
                                        <h3>Contact Information</h3>
                                        <div class="property-form-group">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="con-name">Name</label>
                                                        <input type="text" placeholder="Enter Your Name" id="con-name" name="con-name" />
                                                    </p>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p>
                                                        <label for="con-user">Username</label>
                                                        <input type="text" placeholder="Enter Your Username" id="con-user" name="con-user" />
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-12">
                                                    <p class="no-mb first">
                                                        <label for="con-email">Email</label>
                                                        <input type="email" placeholder="Enter Your Email" id="con-email" name="con-email" />
                                                    </p>
                                                </div>
                                                <div class="col-lg-6 col-md-12">
                                                    <p class="no-mb last">
                                                        <label for="con-phn">Phone</label>
                                                        <input type="text" placeholder="Enter Your Phone Number" id="con-phn" name="con-phn" />
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="add-property-button pt-5">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="prperty-submit-button">
                                                        <button type="submit">Submit Property</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* END SECTION USER PROFILE */}

                    {/* START FOOTER */}
                    <footer class="first-footer">
                        <div class="second-footer">
                            <div class="container">
                                <p>2021 © Copyright - All Rights Reserved.</p>
                                <p>Made With <i aria-hidden="true"></i> Ken</p>
                            </div>
                        </div>
                    </footer>

                    <a data-scroll href="add-property.html#wrapper" class="go-up"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a>
                    {/* END FOOTER */}





                </div>
                {/* Wrapper / End */}
            </div>



        </div>
    )
}


export default Addproperty;