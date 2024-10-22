<template>
  <main class="bg-body-tertiary h-100 w-100 d-flex p-5 flex-wrap" style="gap: 2rem;">
    <profile-card
      v-for="profile in profileData"
      :key="profile.id"
      :id="profile.id"
      :image-url="profile.imageUrl"
      :name="profile.name"
      :bio="profile.bio"
    >
    </profile-card>
  </main>
</template>

<script>
import ProfileCard from "./ProfileCard.vue";
export default {
  components: { ProfileCard },
  data() {
    return {
      profileData: [
        {
          id: 1,
          imageUrl: require("../assets/profilePic1.jpg"),
          name: "John Doe",
          bio: "I am a Frontend developer who likes to build user-friendly websites using VueJs.",
        },
        {
          id: 2,
          imageUrl: require("../assets/profilePic2.jpg"),
          name: "Nick John",
          bio: "I am a Java developer who enjoys building scalable and efficient backend systems using Java, focusing on clean code and robust performance.",
        },
        {
          id: 3,
          imageUrl: require("../assets/profilePic3.jpg"),
          name: "Smith Johnsen",
          bio: "I am a Data Scientist who loves to uncover meaningful insights from data using statistical models and machine learning algorithms to drive data-driven decisions.",
        },
        {
          id: 4,
          imageUrl: require("../assets/profilePic4.jpg"),
          name: "Emily Clark",
          bio: "I am a UX/UI designer passionate about creating intuitive user experiences and beautiful interfaces.",
        },
        {
          id: 5,
          imageUrl: require("../assets/profilePic5.jpg"),
          name: "Michael Smith",
          bio: "I am a Full Stack Developer specializing in JavaScript frameworks and building responsive web applications.",
        },
        {
          id: 6,
          imageUrl: require("../assets/profilePic6.jpg"),
          name: "Alice Johnson",
          bio: "I am a Product Manager dedicated to delivering exceptional products that meet user needs and drive business growth.",
        },
        {
          id: 7,
          imageUrl: require("../assets/profilePic7.jpg"),
          name: "David Brown",
          bio: "I am a Cloud Engineer with expertise in designing scalable cloud solutions and optimizing cloud architectures.",
        },
        {
          id: 8,
          imageUrl: require("../assets/profilePic8.jpg"),
          name: "Sophie Williams",
          bio: "I am a Mobile App Developer focused on creating engaging and functional applications for both iOS and Android platforms.",
        },
        {
          id: 9,
          imageUrl: require("../assets/profilePic9.jpg"),
          name: "Chris Wilson",
          bio: "I am a DevOps Engineer skilled in automating workflows and improving collaboration between development and operations teams.",
        },
        {
          id: 10,
          imageUrl: require("../assets/profilePic10.jpg"),
          name: "Rachel Green",
          bio: "I am a Data Analyst passionate about transforming data into actionable insights and supporting decision-making processes.",
        },
      ],
    };
  },
};
</script>
