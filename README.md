# adapt-contrib-languagePicker

**Language Picker** is an *extension* bundled with the [Adapt framework](https://github.com/adaptlearning/adapt_framework). It is not yet compatible with the Adapt Authoring Tool.

**Language Picker** is intended to be used with courses that provide content in more than one language. Prior to entering the course, the learner is presented with a group of buttons. Each button is labelled with a language. Clicking a language button loads content in the chosen language.

**Language Picker** allows the learner to switch languages while the course is in progress. Clicking the icon in the navigation bar reveals the Language Picker in the [Drawer](https://github.com/adaptlearning/adapt_framework/wiki/Core-modules#drawer).

[Visit the **Course Localisation** wiki](https://github.com/adaptlearning/adapt_framework/wiki/Course-Localisation) for more information about how to localise Adapt courses.

<img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/language-picker.gif" alt="" align="center">

## Installation

As one of Adapt's *[core extensions](https://github.com/adaptlearning/adapt_framework/wiki/Core-Plug-ins-in-the-Adapt-Learning-Framework#extensions),* **Language Picker** is included with the [installation of the Adapt framework](https://github.com/adaptlearning/adapt_framework/wiki/Manual-installation-of-the-Adapt-framework#installation).

* If **Language Picker** has been uninstalled from the Adapt framework, it may be reinstalled.
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:
    ```console
    adapt install adapt-contrib-languagePicker
    ```

    Alternatively, this extension can also be installed by adding the following line of code to the *adapt.json* file:
    ```json
    "adapt-contrib-languagePicker": "*"
    ```
    Then running the command:
    ```console
    adapt install
    ```
    (This second method will reinstall all plug-ins listed in *adapt.json*.)

<div float align=right><a href="#top">Back to Top</a></div>

## Settings Overview

This extension is configured in *config.json* with the attributes that follow. The attributes are properly formatted as JSON in [*example.json*](https://github.com/adaptlearning/adapt-contrib-languagePicker/blob/master/example.json).

## Attributes (config.json)

The following attributes are set within *config.json*.

### \_languagePicker (object):
The languagePicker object that contains values for `_isEnabled`, `title`, `displayTitle`, `body`, `_showOnCourseLoad`, `_languagePickerIconClass` and `_restoreStateOnLanguageChange` settings and the `_languages` array.

#### \_isEnabled (boolean):
Enables/disables this extension. The default value is `false`. Set this to `true` to enable this extension.

#### title (string):
Browser window title text. For example, "Language selection".

#### displayTitle (string):
Header text. For example, "Language selection"

#### body (string):
Introductory or explanatory text. For example, "Welcome to ACME Learning. This course is available in several languages."

#### instruction (string):
Instruction text. For example, "Please make a selection."

### \_graphic (object):
The graphic object that defines the image shown. It contains the following settings:

#### src (string):
File name (including path) of the image. Path should be relative to the `src` folder (e.g. `"course/en/images/origami-menu-two.jpg"`).

#### alt (string):
The alternative text for this image. Assign [alt text](https://github.com/adaptlearning/adapt_framework/wiki/Providing-good-alt-text) to images that convey course content only.

### \_backgroundImage (object):
The background image object that defines the image set a s abackground. It contains the following settings:

#### src (string):
File name (including path) of the image. Path should be relative to the `src` folder (e.g. `"course/en/images/origami-menu-two.jpg"`).

#### \_showOnCourseLoad (boolean):
Determines whether the language picker will be displayed on course load. If set to `false`, the course will load with the default language selected and the user will need to use the icon in the navigation bar to change languages. The default value is `true`.

#### \_languagePickerIconClass (string):
Defines which icon will be displayed in the navigation bar. The [vanilla theme](https://github.com/adaptlearning/adapt-contrib-vanilla) supports the following icon styles: `"icon-globe"`, `"icon-language-1"`, `"icon-language-2"`. The default value for this setting is `"icon-language-2"`.

#### \_restoreStateOnLanguageChange (boolean):
Determines whether or not the language picker will try to restore the 'state' of the course when the user changes language. It is advised that you only set this to `true` if all course languages have exactly the same structure; if they do not, some loss of tracking data will occur. If set to `false`, all tracking data will be cleared when the user switches language - the warningMessage (see below) should be used to warn the user of this. The default value is `false`.

#### \_languages (array):
The languages array contains the list of the available languages and the various settings associated with each. Each entry in the array should be an object, containing the following settings:

##### \_language (string):
This text must match the name of the language-specific folder located in the course root, for example, `"en"` from *course/en*. It is used as the value for the HTML `lang` attribute. It is highly recommended that codes for web languages be used. Reference a source such as the [IANA Language Subtag Registry](http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

##### \_direction (string):
Specifies the value of the HTML `dir` attribute and, consequently, the base direction of text. Acceptable values are `"rtl"` (right-to-left) and `"ltr"` (left-to-right). The default value is `"ltr"`.

##### \_isDisabled (boolean):
Setting this to `true` allows the language to be shown in the list but in a 'disabled' state (so it cannot be selected). This can be useful in situations where localisation into a particular language has not yet been completed. The default value is `false`.

##### displayName (string):
The display name of the language. This value is used as the button label.

##### warningTitle (string):
This text appears as the header of the dialog confirming the learner's intent to change languages, for example, "Change language?".

##### warningMessage (string):
This text appears as the body of the dialog confirming the learner's intent to change languages, for example, "Changing the language will reset course progress.&lt;br&gt;&lt;br&gt;Would you like to proceed?".

##### \_buttons (object):
The buttons object contains the following settings:

###### yes (string):
Label for the button that confirms the learner's intent to switch languages.

###### no (string):
Label for the button that cancels the switch languages dialog.

<div float align=right><a href="#top">Back to Top</a></div>

## Attributes (course.json)

The following attributes should be added to _course.json_ under _\_globals.\_extensions_.

### \_languagePicker (object):
The languagePicker object that contains values for `navigationBarLabel`, `languageSelector` and `_navTooltip` that contains `_isEnabled`, `text`.

#### navigationBarLabel (string):
Label shown next to the language picker button when navigation bar labels are enabled. Defaults to Language picker.

#### languageSelector (string):
Aria label that appears at the top of the drawer displayed when language picker button is clicked. Defaults to Language selector.

#### \_navTooltip (object):
The _navTooltip object that contains values for `_isEnabled` and `text`.

#### \_isEnabled (boolean):
Enables/disables tooltips for the language picker button in the navigation bar. The default value is `true`.

#### text (string):
Text to be displayed in the tooltip when the user hovers over the language picker button in the navigation bar. Defaults to 'Language selector'

## Limitations

- If the [**Spoor**](https://github.com/adaptlearning/adapt-contrib-spoor) extension is disabled (or not installed), **Language Picker** will not remember the learner's language choice from the previous session.
- Switching languages during an [**Assessment**](https://github.com/adaptlearning/adapt-contrib-assessment) will reset assessment attempts.
- Language Picker is not yet compatible with the Adapt Authoring Tool.

## Notes

If the [**Spoor**](https://github.com/adaptlearning/adapt-contrib-spoor) extension is enabled and the course is being run from an <abbr title='Learning Management System'>LMS</abbr> that has support for the `cmi.student_preference.language` data model element, the spoor extension will record the learner's choice of language to that data model element. Note that this is for reporting purposes only: as support for that data model element is not mandatory in SCORM 1.2 it cannot be relied upon for saving/restoring the learner's choice of language - the `cmi.suspend_data` data model element will be used for that, even when `cmi.student_preference.language` is available.

----------------------------

<a href="https://community.adaptlearning.org/" target="_blank"><img src="https://github.com/adaptlearning/documentation/blob/master/04_wiki_assets/plug-ins/images/adapt-logo-mrgn-lft.jpg" alt="adapt learning logo" align="right"></a>
**Author / maintainer:** Adapt Core Team with [contributors](https://github.com/adaptlearning/adapt-contrib-bookmarking/graphs/contributors)<br>
**Accessibility support:** WAI AA<br>
**RTL support:** Yes<br>
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge, Safari for macOS/iOS/iPadOS, Opera<br>
