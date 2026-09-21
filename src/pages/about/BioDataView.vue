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
            class="bg-radial from-brand-x/90 to-brand-y/30 to-45% dark:from-brand-y/90 dark:to-brand-x/90 max-w-40 aspect-square overflow-hidden rounded-full"
          >
            <img
              class="relative z-10 w-40 object-contain"
              :src="avatar"
              alt="avatar"
            />
          </div>
        </div>

        <!-- social / contact links -->
        <ul class="gap-2 flex flex-col pb-4">
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

        <!-- address -->
        <ul class="info-list address-list mt-4">
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
        <h1 class="text-4xl font-bold text-brand-y">{{ bioContent.name }}</h1>
        <h3 class="font-bold">{{ bioContent.title }}</h3>
        <a class="hover:text-brand-y inline-block pb-2.5" :href="bioContent.website.url">
          🌏
          <span class="underline underline-offset-1">{{ bioContent.website.label }}</span>
        </a>

        <!-- bio summary -->
        <p class="text-justify pb-5 pt-1">
          {{ bioContent.bio }}
        </p>

        <!-- work history (history only, no detail) -->
        <h2>Work History</h2>
        <ul class="workhistory">
          <li v-for="(wexp, index) in bioContent.workHistory" :key="index">
            <div class="flex flex-row justify-between items-baseline">
              <p>
                <strong>{{ wexp.jobtitle }}</strong>
              </p>
              <p class="text-right text-xs shrink-0 pl-2">
                <i>
                  {{ wexp.startdate ? wexp.startdate + " - " : "" }}{{ wexp.enddate }}
                </i>
              </p>
            </div>
            <div class="flex flex-row justify-between pb-1 text-sm">
              <p v-html="wexp.company"></p>
              <p class="text-right shrink-0 pl-2 text-brand-x/80" v-html="wexp.location"></p>
            </div>
          </li>
        </ul>

        <h2 class="!mb-2">Personal Info</h2>
        <table class="personal-info-table w-full text-sm border-separate border-spacing-2 pb-4">
          <tbody>
            <tr
              v-for="(row, key) in bioContent.personalInfoRows"
              :key="key"
              class="[&_td]:border-b  [&_td]:border-dashed [&_td]:border-brand-x/20 last:[&_td]:border-b-0 hover:bg-base-x/30 transition-colors"
            >
              <td
                class="py-1.5 pr-4 font-bold text-brand-x/90 whitespace-nowrap label-cell"
                v-text="bioContent.personalInfoLabels[key]"
              ></td>
              <td
                class="py-1.5 text-right value-cell"
                :class="key === 'bloodGroup' ? 'font-bold text-brand-x' : ''"
                v-html="row"
              ></td>
            </tr>
          </tbody>
        </table>

        <!-- Family Details -->
        <h2>Family</h2>
        <ul class="info-list">
          <li class="border-b pb-1.5 mb-1.5 border-brand-x/20 border-dashed">
            <span class="label">Father's Name:</span>
            <span class="value">{{ bioContent.family.fatherName }}</span>
          </li>
          <li>
            <span class="label">Mother's Name:</span>
            <span class="value">{{ bioContent.family.motherName }}</span>
          </li>
        </ul>

        <!-- education -->
        <h2>Education</h2>
        <ul class="education">
          <li
            v-for="(education, index) in bioContent.education"
            :key="index"
          >
            <span class="flex flex-col justify-between">
              <strong>{{ education.class }} - {{ education.major }}</strong> 
              <span>{{ education.passYear }}</span> 
            </span>
            <p>{{ education.institute }}</p>
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
  @apply mx-auto max-w-[211mm] print:max-w-[210mm] grid-cols-1 sm:grid-cols-3 print:w-[210mm] print:grid-cols-3 overflow-x-auto print:overflow-visible gap-4 sm:gap-0 grid divide-brand-y sm:divide-x-2 bg-surface w-full border-1 print:border-0 border-brand-y/40 py-9;
}

ul.info-list {
  @apply pb-5;
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
  @apply space-y-2 pb-5;
  & > li {
    @apply border-b border-dashed border-brand-y/20 pb-2 last:border-b-0 break-inside-avoid;
  }
  & strong {
    @apply text-base sm:text-lg text-brand-x/90;
  }
}

ul.education {
  @apply space-y-2;
  & > li {
    @apply break-inside-avoid;
  }
  & strong {
    @apply text-base text-brand-x/90;
  }
}

ul {
  @apply pt-2;

  &:not(:last-of-type) {
    @apply pb-5;
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
    @apply content-['❖\0020'];
  }
}

.personal-info-table {
  border-spacing: 0;
}
.personal-info-table td {
  vertical-align: top;
}
</style>
