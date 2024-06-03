class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();}
        if (lowerCaseMessage.includes("translation")) {
            this.actionProvider.handleTranslationService();
          } else if (lowerCaseMessage.includes("interpretation")) {
            this.actionProvider.handleInterpretationService();
          } else if (lowerCaseMessage.includes("localization")) {
            this.actionProvider.handleLocalizationService();
      }
    }
  }
  
  export default MessageParser;
  