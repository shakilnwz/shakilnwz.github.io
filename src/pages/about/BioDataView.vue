<script setup>
import Button from "../../components/atoms/Button.vue";
import Section from "../../components/atoms/Section.vue";
import avatar from "../../assets/images/avatar-formal.webp";
import SocialLink from "../../components/atoms/SocialLink.vue";
import { inject } from "vue";
import bioContent from "../../assets/biodataContent.json";

const iconList = inject("icons");

const printPage = () => window.print();
</script>

<template>
  <Section contained class="print:max-w-5xl print:p-0">
    <div
      class="flex flex-wrap justify-between pt-2 pb-4 items-center print:hidden"
    >
      <h2 class="bioheader">Bio-Data</h2>
      <Button
        @click.prevent="printPage"
        secondary
        :svgd="iconList.pdf"
        text="Print"
      />
    </div>

    <!-- biodata -->
    <div class="biodata">
      <!-- aside section -->
      <div class="px-6">
        <!-- avatar -->
        <div class="w-full grid place-items-center pb-8">
          <div
            class="bg-radial from-brand-x/90 to-brand-y/30 to-45% dark:from-brand-y/90 dark:to-brand-x/90 max-w-40 aspect-square overflow-hidden rounded-none"
          >
            <img
              class="relative z-10 w-40 object-contain"
              :src="avatar"
              alt="avatar"
            />
          </div>
        </div>

        <!-- Personal Info -->
        <h2>Personal Info</h2>
        <ul class="info-list">
          <li>
            <span class="label">Date of Birth:</span>
            <span class="value">{{ bioContent.personalInfo.dateOfBirth }}</span>
          </li>
          <li>
            <span class="label">Blood Group:</span>
            <span class="value font-bold text-brand-x">{{ bioContent.personalInfo.bloodGroup }}</span>
          </li>
          <li>
            <span class="label">Height:</span>
            <span class="value">{{ bioContent.personalInfo.height }}</span>
          </li>
          <li>
            <span class="label">Marital Status:</span>
            <span class="value">{{ bioContent.personalInfo.maritalStatus }}</span>
          </li>
          <li>
            <span class="label">Religion:</span>
            <span class="value">{{ bioContent.personalInfo.religion }}</span>
          </li>
          <li>
            <span class="label">Nationality:</span>
            <span class="value">{{ bioContent.personalInfo.nationality }}</span>
          </li>
        </ul>

        <!-- Family Details -->
        <h2>Family</h2>
        <ul class="info-list">
          <li>
            <span class="label">Father's Name:</span>
            <span class="value">{{ bioContent.family.fatherName }}</span>
          </li>
          <li>
            <span class="label">Mother's Name:</span>
            <span class="value">{{ bioContent.family.motherName }}</span>
          </li>
        </ul>

        <!-- Address -->
        <h2>Address</h2>
        <ul class="info-list address-list">
          <li>
            <span class="label">Present Address:</span>
            <p class="value">{{ bioContent.address.present }}</p>
          </li>
          <li>
            <span class="label">Permanent Address:</span>
            <p class="value">{{ bioContent.address.permanent }}</p>
          </li>
        </ul>
      </div>

      <!-- main section -->
      <div class="col-span-2 px-6">
        <h1 class="text-3xl sm:text-4xl font-bold text-brand-y">{{ bioContent.name }}</h1>
        <h3 class="text-base sm:text-lg font-bold text-brand-x/90">{{ bioContent.title }}</h3>
        <a class="hover:text-brand-y inline-block pb-2" :href="bioContent.website.url">
          🌏
          <span class="underline underline-offset-1">{{ bioContent.website.label }}</span>
        </a>

        <!-- bio summary -->
        <p class="text-justify pb-4 pt-1">
          {{ bioContent.bio }}
        </p>

        <!-- contact / socials -->
        <ul class="gap-2 grid grid-flow-row sm:grid-rows-2 sm:grid-flow-col pb-4">
          <li>
            <SocialLink
              :textHighlight="bioContent.contact.email"
              :href="'mailto:' + bioContent.contact.email"
              :svgd="iconList.email"
              ariaLebel="Email me"
            />
          </li>
          <li>
            <SocialLink
              :textHighlight="bioContent.contact.phone"
              :href="bioContent.contact.whatsappUrl"
              :svgd="iconList.whatsapp"
              ariaLebel="Connect on WhatsApp"
            />
          </li>
          <li>
            <SocialLink
              :textHighlight="bioContent.contact.linkedin"
              :href="bioContent.contact.linkedinUrl"
              :svgd="iconList.linkedin"
              ariaLebel="LinkedIn"
            />
          </li>
          <li>
            <SocialLink
              :textHighlight="bioContent.contact.github"
              :href="bioContent.contact.githubUrl"
              :svgd="iconList.github"
              ariaLebel="GitHub"
            />
          </li>
        </ul>

        <!-- work history (history only, no detail) -->
        <h2>Work History</h2>
        <ul class="workhistory">
          <li v-for="(wexp, index) in bioContent.workHistory" :key="index">
            <div class="flex flex-row justify-between items-baseline gap-2">
              <p class="grow">
                <strong>{{ wexp.jobtitle }}</strong>
              </p>
              <p class="text-right text-xs shrink-0 pl-2 whitespace-nowrap">
                <span class="text-brand-x/80">
                  {{ wexp.startdate ? wexp.startdate + " - " : "" }}{{ wexp.enddate }}
                </span>
              </p>
            </div>
            <div class="flex flex-row justify-between pb-1 text-sm gap-2">
              <p class="grow leading-5">
                <template v-for="(line, i) in wexp.company.split('<br>')" :key="i">
                  {{ line }}
                  <br v-if="i < wexp.company.split('<br>').length - 1">
                </template>
              </p>
              <p class="text-right shrink-0 pl-2 text-brand-x/80 leading-5">
                <template v-for="(line, i) in wexp.location.split('<br>')" :key="i">
                  {{ line }}
                  <br v-if="i < wexp.location.split('<br>').length - 1">
                </template>
              </p>
            </div>
          </li>
        </ul>

        <!-- education -->
        <h2>Education</h2>
        <ul class="education">
          <li
            v-for="(education, index) in bioContent.education"
            :key="index"
          >
            <strong>{{ education.class }} - {{ education.major }}</strong>
            <p>{{ education.institute }}</p>
            <p>{{ education.passYear }}</p>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<style scoped>
@import "tailwindcss/theme" theme(reference);
@import "../../assets/styles/theme.css" theme(reference);

@media print {
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  @page {
    size: 210mm 297mm;
    margin: 0;
  }
}

.biodata {
  @apply mx-auto max-w-[211mm] print:max-w-[210mm] grid-cols-1 sm:grid-cols-3 print:w-[210mm] print:grid-cols-3 overflow-x-auto print:overflow-hidden gap-4 sm:gap-0 grid divide-brand-y sm:divide-x-2 bg-surface w-full border-1 print:border-0 border-brand-y/40 py-6;
}

ul.info-list {
  @apply space-y-1.5 pb-4;
  & > li {
    @apply flex flex-row justify-between items-baseline text-xs sm:text-sm;
    & .label {
      @apply font-bold text-brand-x/90;
    }
    & .value {
      @apply text-right;
    }
  }
}

ul.address-list {
  & > li {
    @apply flex flex-col text-left;
    & .value {
      @apply text-left pt-0.5;
    }
  }
}

ul.workhistory {
  @apply space-y-2 pb-4;
  & > li {
    @apply border-b border-dashed border-brand-y/20 pb-2 last:border-b-0;
  }
  & strong {
    @apply text-base sm:text-lg text-brand-x/90;
  }
}

ul.education {
  @apply space-y-2;
  & strong {
    @apply text-base text-brand-x/90;
  }
}

ul {
  @apply pt-1;

  &:not(:last-of-type) {
    @apply pb-4;
  }
}

a,
p,
li {
  @apply text-sm;
}

i {
  @apply text-brand-x/80;
}

h2:not(.bioheader) {
  @apply text-2xl;
  &::before {
    @apply content-['•\0020'];
  }
}
</style>
