import Adapt from 'core/js/adapt';
import NavigationView from './languagePickerNavigationView';
import router from 'core/js/router';

export default class LanguagePickerView extends Backbone.View {

  get template() {
    return 'languagePickerView';
  }

  events() {
    return {
      'click .js-languagepicker-btn-click': 'onLanguageClick'
    };
  }

  className() {
    return 'languagepicker';
  }

  initialize() {
    this.initializeNavigation();
    $('html').addClass('in-languagepicker');
    this.listenTo(Adapt, 'remove', this.remove);
    this.render();
  }

  render() {
    const data = this.model.toJSON();
    const template = Handlebars.templates[this.template];
    this.$el.html(template(data));
    this.$el.addClass(data._classes);

    document.title = this.model.get('title') || '';

    this.setBackgroundImage();

    _.defer(this.postRender.bind(this));
  }

  setBackgroundImage() {
    const hasBackgroundImage = this.model.get('_backgroundImage')?.src;
    if (!hasBackgroundImage) return;

    this.$el.toggleClass('has-bg-image', Boolean(hasBackgroundImage));
    this.$el.css('background-image', 'url(' + this.model.get('_backgroundImage').src + ')');
  }

  postRender() {
    router.hideLoading();
  }

  onLanguageClick(event) {
    this.destroyNavigation();
    const lang = event.currentTarget.value;
    this.model.setLanguage(lang);
  }

  initializeNavigation() {
    this.navigationView = new NavigationView({ model: this.model });
  }

  destroyNavigation() {
    this.navigationView.remove();
  }

  remove() {
    $('html').removeClass('in-languagepicker');

    super.remove();
  }

}
