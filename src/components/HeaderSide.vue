<template>
  <div class="bg-white">
    <div
      class="h-[70px] fixed left-0 top-0 z-[999] bg-white w-full md:shadow-none shadow-[rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px]"
    >
      <div
        class="md:px-[130px] px-[40px] py-[15px] flex items-center justify-between"
      >
        <div class="md:hidden block" @click="showBar">
          <img src="../images/Group 2728.png" />
        </div>
        <div class="flex items-center">
          <img src="../images/logo (1).png" />
          <ul
            class="menu transition items-center ml-[48px] gap-x-4 md:flex md:static md:p-[0px] absolute md:w-auto w-full md:h-[auto] -left-[48px] top-[70px] z-[100] px-[40px] md:bg-white bg-white hidden"
          >
            <li class="md:pb-[0px] pb-[30px]">
              <a href="">My Orders</a>
            </li>
            <li class="md:pb-[0px] pb-[30px]">
              <a href="">Help</a>
            </li>
            <li class="md:pb-[0px] pb-[30px]">
              <a href="">Services</a>
            </li>
            <li class="pb-[30px] md:hidden block">
              <div class="flex items-center">
                <p class="">Sign in</p>
              </div>
            </li>
            <li class="md:hidden block pb-[30px]">
              <div
                class="flex items-center justify-center w-[130px] h-[40px] bg-[#5920BC] text-center text-white leading-[40px] rounded-[5px]"
              >
                <img src="../images/Group 32.png" />
                <p class="text-center uppercase ml-2">Sign up</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="items-center gap-x-7 md:flex hidden">
          <div>
            <img src="../images/Group 31.png" />
          </div>
          <div class="flex items-center">
            <p class="ml-3">Sign in</p>
          </div>
          <div
            class="flex items-center justify-center w-[130px] h-[40px] bg-[#5920BC] text-center text-white leading-[40px] rounded-[5px]"
          >
            <img src="../images/Group 32.png" />
            <p class="text-center uppercase ml-2">Sign up</p>
          </div>
        </div>
        <div class="md:hidden block">
          <img src="../images/Oval (1).png" />
        </div>
      </div>
    </div>
    <div class="relative sm:h-auto h-[200px] mt-[70px]">
      <img src="../images/Frame 9.png" class="bg-[#d1c0df] sm:block hidden" />
      <div class="sm:px-[0px] px-[40px]">
        <div class="flex gap-x-2 items-center sm:hidden absolute top-[30px]">
          <img src="../images/image 1044.png" />
          <p class="">All Services</p>
        </div>
        <h1
          class="absolute bottom-[100px] sm:px-[120px] px-[0px] text-3xl font-semibold"
        >
          Find your best
        </h1>
        <p class="sm:hidden block absolute bottom-[50px]">
          lorem ipsum dolar amet lorem ipsum dolar amet lorem ipsum dolar amet
          lorem ipsum dolar amet
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showBar() {
      let item = document.querySelector(".menu");
      if (item.classList.contains("hidden")) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    },
  },
};
</script>

<style></style>
