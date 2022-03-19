import type { Slots, VNodeChild } from 'vue'

export type Data = Record<string, unknown>

export function renderSlot(slots: Slots, name: string): VNodeChild | null
export function renderSlot<T extends Data = Data>(
  slots: Slots,
  name: string,
  props: T,
  fallback: (props: T) => VNodeChild
): VNodeChild | null
export function renderSlot<T extends Data = Data>(
  slots: Slots,
  name: string,
  props?: T,
  fallback?: (props?: T) => VNodeChild
): VNodeChild | null {
  const slot = slots[name] || fallback
  return typeof slot === 'function' ? slot(props) : null
}
