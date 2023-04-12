import { onMounted, ref, onUnmounted } from 'vue';

export default function (containerRef) {
    const showMenu = ref(false);
    const x = ref(0);
    const y = ref(0);
    onMounted(() => {
        const div = containerRef.value;
        div.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('click', closeMenu, true); // 捕获阶段
        window.addEventListener('contextmenu', closeMenu, true); // 捕获阶段

    });
    onUnmounted(() => {
        const div = containerRef.value;
        div.removeEventListener('contextmenu', handleContextMenu);
        window.removeEventListener('click', closeMenu, true);
        window.removeEventListener('contextmenu', closeMenu, true);
    })

    const handleContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // console.log(e.clientX, e.clienty);
        showMenu.value = true;
        x.value = e.clientX;
        y.value = e.clientY;
        
    }

    const closeMenu = (e) => {
        showMenu.value = false
    }

    return {
        showMenu,
        x,
        y
    }

} 