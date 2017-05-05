import { MissingTranslationHandler, MissingTranslationHandlerParams } from 'ng2-translate';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
    public handle(params: MissingTranslationHandlerParams) {
        console.log(params);
        return 'Translations not available for ' + params.key;
    }
}
