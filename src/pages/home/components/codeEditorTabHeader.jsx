import React, { useState } from "react"
import { Button } from "../../../commonStyles/button"
import {
  EditorHeader,
  EmptyBorderDiv,
  TabWrapper,
  ApplyChangesBtnWrapper,
} from "../styles/codeEditor"
import sync from "../../../assets/svgs/sync.svg"

const CodeEditorTabHeader = ({
  currentActiveTabId,
  isCodeEdited,
  tabs,
  onAddAndRemoveTab,
  onClickTab,
  onMainTabExecuation,
}) => {
  const [isRotate, setIsRotate] = useState(0)

  const handleClick = () => {
    setIsRotate((isRotate) => isRotate + 1)
    return onMainTabExecuation()
  }

  const tabList = Object.values(tabs)
  return (
    <EditorHeader>
      <EmptyBorderDiv />
      <TabWrapper>
        {tabList.map((tab) => (
          <Button
            border
            key={tab.id}
            background={currentActiveTabId === tab.id && "#1e1e1e"}
            active={currentActiveTabId === tab.id}
            onClick={(e) => onClickTab(tab.id)}
          >
            {tab.tabLabel === 0 ? "main.js" : `tab-${tab.tabLabel}.js`}
            <span
              onClick={(e) => {
                e.stopPropagation()
                tab.isRemovable && onAddAndRemoveTab(false, tab.id)
              }}
            >
              x
            </span>
          </Button>
        ))}
      </TabWrapper>
      <ApplyChangesBtnWrapper isRotate={isRotate}>
        <Button onClick={() => onAddAndRemoveTab(true)}>+</Button>
        <Button
          borderRadius
          disabled={!isCodeEdited}
          background={isCodeEdited ? "#66d68d" : "#8bab96"}
          onClick={handleClick}
        >
          <img src={sync} alt="Sync" /> apply changes
        </Button>
      </ApplyChangesBtnWrapper>
    </EditorHeader>
  )
}

export default CodeEditorTabHeader
