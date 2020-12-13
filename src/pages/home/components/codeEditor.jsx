import React, { useState } from "react"
import MonacoEditor from "react-monaco-editor"
import { v4 as uuidv4 } from "uuid"
import { useDispatch, useSelector } from "react-redux"
import CodeEditorTabHeader from "./codeEditorTabHeader"

const CodeEditor = ({ onMainTabCodeExecuation }) => {
  const dispatch = useDispatch()
  const [
    mainTabId,
    defaultTabs,
    getNewTabSampleCode,
  ] = useSelector(({ editor: { tabs, activeTabId, getNewTabSampleCode } }) => [
    activeTabId,
    tabs,
    getNewTabSampleCode,
  ])
  const [currentActiveTabId, setCurrentActiveTabId] = useState(mainTabId)
  const [tabs, setTabs] = useState(defaultTabs)
  const [isCodeEdited, setIsCodeEdited] = useState(false)

  const handleAddAndRemoveTab = (isAdd, tabId = null) => {
    const prevTabs = { ...tabs }
    if (isAdd) {
      const tabkeys = Object.keys(tabs)
      const tabCount = tabkeys.length
      const prevTabLabel = tabs[tabkeys[tabCount - 1]].tabLabel
      const id = uuidv4()
      prevTabs[id] = {
        id,
        tabLabel: prevTabLabel + 1,
        isRemovable: true,
        srcCode: getNewTabSampleCode(prevTabLabel),
      }
      setCurrentActiveTabId(id)
    } else {
      if (tabId === currentActiveTabId) setCurrentActiveTabId(mainTabId)

      tabId && delete prevTabs[tabId]
    }
    setTabs(prevTabs)
  }

  //Switch tabs
  const handleActiveTab = (activeTabId) => {
    setCurrentActiveTabId(activeTabId)
  }

  const editorDidMount = (editor) => {
    editor.focus()
  }

  const onChange = (newValue, e) => {
    const prevTabs = { ...tabs }
    prevTabs[currentActiveTabId].srcCode = newValue
    setIsCodeEdited(true)
    setTabs(prevTabs)
  }

  const handleMainTabExecuation = async () => {
    setIsCodeEdited(false)
    //Storing all tab's data in redux store, in case we want to save entire configuration of user's code ediotr.
    //When user clicks over "apply changes" button
    dispatch({
      type: "TABS_ADDED",
      payload: {
        tabs,
      },
    })

    //It will execute updated code in the MainTab.
    return onMainTabCodeExecuation()
  }

  const options = {
    selectOnLineNumbers: true,
    colorDecorators: true,
  }

  return (
    <div>
      <CodeEditorTabHeader
        currentActiveTabId={currentActiveTabId}
        isCodeEdited={isCodeEdited}
        tabs={tabs}
        onAddAndRemoveTab={handleAddAndRemoveTab}
        onClickTab={handleActiveTab}
        onMainTabExecuation={handleMainTabExecuation}
      />
      <MonacoEditor
        width="auto"
        height="calc(100% - 86px)"
        language="javascript"
        theme="vs-dark"
        value={tabs[currentActiveTabId].srcCode}
        options={options}
        onChange={onChange}
        editorDidMount={editorDidMount}
      />
    </div>
  )
}

export default CodeEditor
