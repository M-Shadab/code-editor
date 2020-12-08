import React, { useState, useEffect, useRef, useCallback } from "react";
import safeEval from "safe-eval";
import AWS from "aws-sdk";
import { useSelector } from "react-redux";
import awsConfig from "../../config-aws";
import { getLanguageCode } from "../../utils/getLanguageCode";
import NavBar from "../../common/navBar";
import CodeEditor from "./components/codeEditor";
import ChatBot from "./components/chatBot";
import { Wrapper, Main } from "./styles";

const Home = () => {
  const awsTranslateRef = useRef(null);
  const [translatorObject, setTranslatorObject] = useState({
    translator: () => {},
  });
  const mainTabCode = useSelector(
    ({ editor: { tabs, activeTabId } }) => tabs[activeTabId]
  );

  //Initialize AWS Service
  useEffect(() => {
    AWS.config.update(awsConfig);
    awsTranslateRef.current = new AWS.Translate();
  }, []);

  const translate = (Text, sourceLang, targetLang) => {
    return new Promise((resolve, reject) => {
      if (!targetLang || !sourceLang)
        reject("Missing source language or target language");

      const SourceLanguageCode = getLanguageCode(sourceLang);
      const TargetLanguageCode = getLanguageCode(targetLang);

      const params = {
        SourceLanguageCode,
        TargetLanguageCode,
        Text,
      };

      awsTranslateRef.current.translateText(params, (err, resp) => {
        if (err) {
          reject(err);
        }
        resolve(resp.TranslatedText);
      });
    });
  };

  //Execuate MainTab Code
  const handleMainTabCodeExecuation = useCallback(() => {
    const editorContext = {
      CampK12: {
        translate,
      },
    };

    setTranslatorObject({
      translator: safeEval(mainTabCode.srcCode, editorContext),
    });
  }, [setTranslatorObject, mainTabCode.srcCode]);

  useEffect(() => {
    handleMainTabCodeExecuation();
  }, [handleMainTabCodeExecuation]);

  return (
    <Wrapper>
      <NavBar />
      <Main>
        <CodeEditor onMainTabCodeExecuation={handleMainTabCodeExecuation} />
        <ChatBot translator={translatorObject.translator} />
      </Main>
    </Wrapper>
  );
};

export default Home;
