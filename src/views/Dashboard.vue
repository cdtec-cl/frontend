<template id="page-top">
  <div class="dashboard" id="wrapper" style="display: flex;">

    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggle" id="accordionSidebar" 
    style="width: 14rem !important; min-height: 100vh; background-color: #385676;">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">CDTEC <sup>2</sup></div>
      </a>
      <hr class="sidebar-divider my-0">
      <li class="nav-item active">
        <a class="nav-link" href="index.html">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Clientes</span></a>
      </li>
      <!--
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          Interface
        </div>
        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Components:</h6>
              <a class="collapse-item" href="buttons.html">Buttons</a>
              <a class="collapse-item" href="cards.html">Cards</a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <h6 class="collapse-header">Custom Utilities:</h6>
              <a class="collapse-item" href="utilities-color.html">Colors</a>
              <a class="collapse-item" href="utilities-border.html">Borders</a>
              <a class="collapse-item" href="utilities-animation.html">Animations</a>
              <a class="collapse-item" href="utilities-other.html">Other</a>
            </div>
          </div>
        </li>
        <hr class="sidebar-divider d-none d-md-block">
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      -->
    </ul>

    <div class="d-flex flex-column" style="width: 100%;">

      <div id="content">

        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

          
          <!-- Topbar Navbar -->
          <ul class="navbar-nav ml-auto">

            <!-- Nav Item - Search Dropdown (Visible Only XS) -->
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <!-- Dropdown - Messages -->
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Desarrollador</span>
                <img class="img-profile rounded-circle" src="../assets/user.jpg" style="width: 60px; height: 60px;">
              </a>
              <!-- Dropdown - User Information -->
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>

          </ul>

        </nav>
        
        <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Accounts</h1>
          </div>

          <div class="row">

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Agrifrut Comercial Ltda</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">63</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4" @click="alert('hola');">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Agricola Santa Juana de Chincolco SA</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">395</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Oficina CDTEC</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">354</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Farms</h1>
          </div>

          <div class="row">
            {{JSON.stringify('[{"id":1378,"name":"Agrifrut II (Nogales y Parrones)","description":"","latitude":-32.8729730502858,"longitude":-70.927852048291,"postalAddress":"","account":{"id":63,"name":"Agrifrut Comercial Ltda"},"timeZone":"GMT-4","webhook":null},{"id":185,"name":"Agrifrut","description":"","latitude":-32.9034219818308,"longitude":-70.9091198444366,"postalAddress":"","account":{"id":63,"name":"Agrifrut Comercial Ltda"},"timeZone":"GMT-4","webhook":null},{"id":719,"name":"Santa Juana de Chincolco","description":"V Región, Valparaiso","latitude":-32.2308814313991,"longitude":-70.8284282684326,"postalAddress":"","account":{"id":395,"name":"Agricola Santa Juana de Chincolco SA"},"timeZone":"GMT-4","webhook":null},{"id":520,"name":"Agrifrut Pozos","description":"","latitude":null,"longitude":null,"postalAddress":"","account":{"id":63,"name":"Agrifrut Comercial Ltda"},"timeZone":"GMT-4","webhook":null},{"id":669,"name":"Patio Los Cerezos 1046","description":"","latitude":-33.4645786,"longitude":-70.5866463,"postalAddress":"","account":{"id":354,"name":"Oficina CDTEC"},"timeZone":"GMT-4","webhook":null}]', null, 4)}}
          </div>

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Patio Los Cerezos 1046</h1>
          </div>

          <div class="row">
            {{JSON.stringify('{"id":669,"name":"Patio Los Cerezos 1046","description":"","latitude":-33.4645786,"longitude":-70.5866463,"postalAddress":"","account":{"id":354,"name":"Oficina CDTEC"},"timeZone":"GMT-4","webhook":null}', null, 4)}}
          </div>

          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">List Farm Zones</h1>
          </div>

          <div class="row">
            {{JSON.stringify('{"id":5707,"name":"Pasto Jardín","description":"","latitude":-32.9111162044348,"longitude":-71.2139984965324,"type":["Irrigation","Soil"],"farmId":669,"pumpSystemId":619,"kc":1,"theoreticalFlow":0.0302,"unitTheoreticalFlow":"m³/h","efficiency":null,"humidityRetention":null,"max":92,"min":86.6,"criticalPoint1":null,"criticalPoint2":null,"crops":"PALTOS","polygon":{"path":[{"lat":-32.91108805756142,"lng":-71.2137222290039},{"lat":-32.911025008427465,"lng":-71.21377319097519},{"lat":-32.9111466031456,"lng":-71.21427476406097},{"lat":-32.911207400442045,"lng":-71.21421307325363}],"bounds":{"southWest":{"lat":-32.911207400442045,"lng":-71.21427476406097},"northEast":{"lat":-32.911025008427465,"lng":-71.2137222290039', null, 4)}}
          </div>

          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">List Farm Hydraulics</h1>
          </div>

          <div class="row">
            {{JSON.stringify('', null, 4)}}
          </div>

          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">List Farm Nodes</h1>
          </div>

          <div class="row">
            {{JSON.stringify('[{"id":5188,"name":"Gw - Huerto California","lat":null,"lng":null,"nodeType":"RF-X1 GW","expansions":[{"nodePort":1,"expansionBoard":"EXP-2DI"},{"nodePort":2,"expansionBoard":"EXP-3AI"},{"nodePort":3,"expansionBoard":"EXP-SDI12"},{"nodePort":4,"expansionBoard":"EXP-232/485"}]}]', null, 4)}}
          </div>

          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">List Farm Pump Systems</h1>
          </div>

          <div class="row">
            {{JSON.stringify('[{"id":619,"name":"Equipo 1","farmId":669,"allowPumpSelection":false}]', null, 4)}}
          </div>

          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">List Farm Scheduled Irrigations 2019-07-22 / 2019-08-7 </h1>
          </div>

          <div class="row">
            {{JSON.stringify('[]', null, 4)}}
          </div>
        </div>
      </div>
      <br><br><br><br><br><br>
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
          </div>
        </div>
      </footer>
    </div>  
  </div>
</template>


