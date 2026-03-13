import useTheme from "../../Contexts/Theme"
function SwitchBtn() {
    const { themeMode, lightMode, darkMode } = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkMode()
        } else {
            lightMode()
        }
    }
    return (
        <label className="relative flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === 'dark'}
            />
            <div className="w-11 h-6 bg-neutral-500 dark:bg-neutral-600 peer-focus:outline-none ring-4 ring-neutral-600 dark:ring-neutral-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-neutral-50 after:border-neutral-50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-500 peer-checked:bg-neutral-900"></div>
            <span className=" sr-only ml-3">Toggle Theme</span>
        </label>
    )
}

export default SwitchBtn



