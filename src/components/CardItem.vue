<template>
  <div class="my-5 rounded-md mb-[90px]">
    <div class="h-[296px] relative" @click="showList">
      <img :src="data.image" class="w-full h-full" />
      <div
        class="absolute w-[280px] bg-white bottom-0 m-5 rounded-md py-4 px-5"
      >
        <h3 class="text-xl">{{ data.name }}</h3>
        <div class="flex items-center mt-2">
          <img src="../images/image 1019.png" />
          <p class="ml-1 text-[#4f4e4e]">Starts from {{ data.price }}$/h</p>
        </div>
      </div>
    </div>
    <div class="list h-[249px] md:block hidden">
      <ul>
        <li
          class="h-[50px] leading-[50px] border-solid border-b-[1px] border-[#aaa9a9] pl-2"
        >
          Gather all your cleaning tools
        </li>
        <li
          class="h-[50px] leading-[50px] border-solid border-b-[1px] border-[#aaa9a9] pl-2"
        >
          Clear the clutter
        </li>
        <li
          class="h-[50px] leading-[50px] border-solid border-b-[1px] border-[#aaa9a9] pl-2"
        >
          Dust and vacuum
        </li>
        <li
          class="h-[50px] leading-[50px] border-solid border-b-[1px] border-[#aaa9a9] pl-2"
        >
          Focus on tubs, sinkds an toilets
        </li>
        <li
          class="h-[50px] leading-[50px] border-solid border-b-[1px] border-[#aaa9a9] pl-2"
        >
          Focus on tubs, sinks and tolilets
        </li>
        <li class="h-[50px] leading-[50px] pl-2">Sweep, then mop</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],

  methods: {
    showList(e) {
      let item = e.target.parentElement.parentElement;
      let list = item.querySelector(".list");
    //     document.querySelectorAll(".list").forEach((item) => {
    //     item.classList.add("hidden");
    //   });

      if (list.classList.contains("hidden")) {
        list.classList.remove("hidden");
        console.log("no");
      }
      else if(!(list.classList.contains('hidden'))){
          list.classList.add('hidden')
          console.log('yes')
      }

    
    },
  },
};
</script>

<style scoped></style>
