interface Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof webkitSpeechRecognition;
}
interface Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof webkitSpeechRecognition;
}

interface SpeechRecognitionEvent extends Event {
  error(arg0: string, error: any): unknown;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList extends Array<SpeechRecognitionResult> {}

interface SpeechRecognitionResult extends Array<SpeechRecognitionAlternative> {}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}
