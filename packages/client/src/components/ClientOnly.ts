import { defineComponent, onMounted, ref } from 'vue'

import { renderSlot } from '../helpers/renderSlot'

export const ClientOnly = defineComponent({
  name: 'ClientOnly',
  setup(_, { slots }) {
    const isMounted = ref(false)

    onMounted(() => {
      isMounted.value = true
    })

    return () => (isMounted.value ? renderSlot(slots, 'default') : null)
  }
})
