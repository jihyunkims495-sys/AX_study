'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { PinStore } from '../types/pin.types';
import type { Todo } from '../types/todo.types';

export const usePinStore = create<PinStore>()(
    persist(
        immer((set) => ({
            items: [],
            _hasHydrated: false,
            setHasHydrated:(state : boolean) => {
                set((_state)=>_state._hasHydrated = state);
            },
            add: (item: Todo) => {
                // 등록 여부 확인
                set((state) => {
                    const exists = state.items.some(
                        (savedItem) => savedItem.id === item.id,
                    );

                    if (!exists) {
                        state.items.push(item);
                    }
                });
            },
            remove: (id: string) => {
                set((state) => {
                    const index = state.items.findIndex(
                        (item) => item.id === id,
                    );

                    // -1은 못 찾은 경우이므로 찾은 경우에만 제거
                    if (index !== -1) {
                        state.items.splice(index, 1);
                    }
                });
            },
        })),
        {
            name: 'todo-pin-storage',
            partialize : (state)=>({items : state.items}),
            onRehydrateStorage : () => (state) => {
                state?.setHasHydrated(true); //하이드레이션 완료를 표기
            }
        },
    ),
);
