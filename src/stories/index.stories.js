import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, text } from '@storybook/addon-knobs'

import AppButton from '../components/AppButton.vue'
import HeaderItem from '../components/Header/HeaderItem.vue'
import AppHero from '../components/AppHero.vue'

storiesOf('Usage|Button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('AppButton', () => {
    const buttonText = text('text', 'Usage Button')
    const color = text('color', '')
    const size = text('size', '')
    return {
      components: { AppButton },
      template: `<AppButton text="${buttonText}" color="${color}" size="${size}" />`
    }
  })

storiesOf('Usage|Header', module)
  .addDecorator(VueInfoAddon)
  .add('HeaderItem', () => ({
    data () {
      return {
        item: {
          text: '事業紹介',
          href: '/works'
        }
      }
    },
    components: { HeaderItem },
    template: `<HeaderItem :item="item" />`
  }))

storiesOf('Usage|Hero', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('AppHero', () => {
    const title = text('title', 'JSLounge')
    const subtitle = text('subtitle', 'Vue.js + Storybookによる柔軟なコンポーネント開発')
    const size = text('size', '')
    const color = text('color', '')
    return {
      components: { AppHero },
      template: `<AppHero title="${title}" subtitle="${subtitle}" size="${size}" color="${color}" />`
    }
  })
