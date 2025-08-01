import { defineStore } from 'pinia'

interface SidebarContext {
    component: Component | null;
    props?: Record<string, never>;
}

export const useLayoutStore = defineStore('layout', () => {
    const sidebarContext = ref<SidebarContext>({
        component: null,
        props: {}
    });
    
    function setSideBarContext(content: SidebarContext) {
        sidebarContext.value = content;
    }
    
    return {
        sidebarContext,
        setSideBarContext,
    }
});