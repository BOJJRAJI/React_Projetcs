import './index.css'

const TabItem = props => {
  const {tabDetails, changingTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const toChangeTab = () => {
    changingTab(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={toChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
