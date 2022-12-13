import defaultTheme from "../styles/theme/theme-default.module.scss";
import darkTheme from "../styles/theme/theme-dark.module.scss";
import { ThemeConfig } from "../redux/interface";


/**
 * @description 全局主题设置
 * */
const useTheme = (themeConfig: ThemeConfig) => {
	const { isDark } = themeConfig;
	const initTheme = () => {
		console.log(defaultTheme, 'default Theme')
		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
    
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		// styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;