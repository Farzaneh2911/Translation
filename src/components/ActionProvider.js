class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend!");
      const message = this.createChatBotMessage("Our Translation Document service provides accurate and professional translations of your documents across multiple languages.", {
        widget: "translationLinks",
      });
      this.updateChatbotState(greetingMessage,message);
    }
  
    handleInterpretationService() {
        const message = this.createChatBotMessage("Our Interpretation service offers real-time interpretation for various scenarios, including conferences, medical appointments, and legal proceedings.", {
          widget: "interpretationLinks",
        });
        this.updateChatbotState(message);
      }
    
      handleLocalizationService() {
        const message = this.createChatBotMessage("Our Localization service adapts your content and products for specific regional markets, considering cultural, linguistic, and technical factors.", {
          widget: "localizationLinks",
        });
        this.updateChatbotState(message);
      }
    
      updateChatbotState(message) {
        this.setState(prevState => ({
          ...prevState,
          messages: [...prevState.messages, message]
        }));
      }
    }
  
  export default ActionProvider;
  