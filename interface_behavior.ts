/**
 * 
 * 界面行为 在界面上的操作和行为
 * 
 */

/**
 * 复制内容到剪切板
 * @param text 
 * @returns 
 */
export const copyToClipboard = (text) => navigator.clipboard.writeText(text);


//判断当前标签页是否激活
export const isTabInView = () => !document.hidden; 

/**
 * 界面滚动到顶部
 * @param element 
 * @returns 
 */
export const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });
  /**
   * 平滑滚动到顶部
   */
export const scrollToTop1 = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
   

/**
 * 界面滚动到底部
 * @param element 
 * @returns 
 */
export const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });

/**
 * @param 检查是否苹果设备
 */
export const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
