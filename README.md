# mailchimp-assignment

[mailchimp-form.html](https://github.com/evolvingweb/mailchimp-assignment/blob/master/mailchimp-form.html) is the Mailchimp newsletter signup form, as copied-and-pasted from their admin UI. It's ready to be customized and embedded on your own site. We are including it for reference.

[homepage-form.html](https://github.com/evolvingweb/mailchimp-assignment/blob/master/homepage-form.html) is Evolving Web's customizations, as currently implemented in the new D8 version of [http://evolvingweb.ca](http://evolvingweb.ca) homepage (not yet released).

Currently **homepage-form.html** collects only the email field. We want to improve it as follows:
* Collect the user's city also. **mailchimp-form.html** includes the HTML you'll need to include in the form to do this.
* We would like to use CSS and/or JavaScript to initially hide the city field, and then show it only once the user starts entering the email address. (onfocus?). See mockup below.
* If possible, we would like the city field to use Autocomplete from some web service of cities. For the purposes of this task, use suggestions from a JSON file with the following cities: `[ "Montreal, Canada", "Ottawa, Canada", "Toronto, Canada", "New York, USA"]`
* The city field should be prefilled with the user city using Geoip. To not break caching, the SmartIP service should only be triggered via AJAX. Initially, stub this out to always return "Montreal, Canada". After everything works we may ask you to do the GeoIP integration.

![GitHub Logo](https://github.com/evolvingweb/mailchimp-assignment/blob/master/mockup.jpg?raw=true)

Please be sure to test your work with Mailchimp test account. Provide the initial solution as a pull request. There should be no PHP code yet. 

You can use the following service for previewing HTML hosted in GitHub:

[https://htmlpreview.github.io/?https://github.com/evolvingweb/mailchimp-assignment/blob/master/homepage-form.html](https://htmlpreview.github.io/?https://github.com/evolvingweb/mailchimp-assignment/blob/master/homepage-form.html)
