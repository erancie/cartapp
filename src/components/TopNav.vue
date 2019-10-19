<template>
<div class="topnav">
  <nav id="mainNavbar" class="navbar navbar-expand-md fixed-top py-0">
    <router-link to='/' class="navbar-brand styled mr-5"> <i><img id="brand" alt="muze cube" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f2c57ee4-11e2-4c50-9887-f00dc3a7e358/d73pi5f-c821d7ce-901e-4f02-8d4d-ebbf2a00d108.png"></i>MUZE PARCEL</router-link>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" aria-label="togglenavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
     <router-link to='/history' class='nav-link mr-5'><i class="fas fa-archive"></i></i> My Subs</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/account' class="nav-link mr-5"><i class="fa fa-user"></i> My Acct</router-link>
        </li>
        <li id="deliverLink" class="nav-item">
              <router-link to='/login' class="nav-link mr-5"><i class="fa fa-sign-out-alt"></i> Sign Out</router-link>
        </li>
      </ul>
    </div>
  </nav><!--END NAVBAR-->
</div>
</template>

<script>
  import Cart from './Cart'
  export default {
    name: 'TopNav',
    components: {
      Cart
    }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap');
  /*NAVBAR*/
#mainNavbar .navbar-brand {
  color: #faa125;
  font-weight: 400;
  font-size: 1.7rem;

}
.navbar{
    font-family: 'Reem Kufi', sans-serif;
/*  background-color: #374f66;*/
background: rgb(27,42,55);
/*background: linear-gradient(90deg, rgba(17,48,67,1) 0%, rgba(22,20,54,1) 0%, rgba(55,79,102,1) 0%, rgba(17,46,66,1) 100%, rgba(14,65,75,1) 100%);*/
}
#mainNavbar .navbar-brand:hover {
  color: #faa125;
}
#mainNavbar {
  font-size: 1.5rem;
  font-weight: 400;
  z-index:;
}
#mainNavbar .nav-link {
  color: #eb831c;
}
#mainNavbar .nav-link:hover {
  color: #cad3e0;;
}
/*SCROLL COLOR*/
.navbar.scrolled {
  background: #8FCAEA;
  transition: background 1500ms;
/*  transition-duration: 1500ms; 
also works*/
}
#brand{
  /*  transform: translate(0, -150px);*/
  transform: scale(.5);
  position: relative;
  top: -20px;
}
.navbar-toggler {
  color: white;
  box-shadow: 6px 6px 4px 0px rgba(0,0,0,0.75);
}
.styled {
  font-family: 'Reem Kufi', sans-serif;
}

</style>