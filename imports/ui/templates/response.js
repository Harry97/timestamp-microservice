import './response.html'
import {Template} from 'meteor/templating'
import {FlowRouter} from 'meteor/kadira:flow-router'
import moment from 'moment'

Template.response.helpers({
  result() {
    let input = FlowRouter.getParam("date"),
    date,
    formatted
    
    //Checking whether it's a natural or unix
    if (/[a-z]/i.test(input)) {
    //It's a natural format

        //Checking whether it's gibbresh or not
        if (Date.parse(input)) {
        //It's a valid date
        date = moment(input).unix();
        return `{unix: ${date}, natural: ${input}}`;
        }
        else {
        //It's a trap :P
        return `{unix: null, natural: null}`;
        }

    } else {
    //It's a unix format
    date = moment.unix(input);
    formatted = date.format("MMMM DD YYYY");
    return `{unix: ${input}, natural: ${formatted}}`;
    }
  }
});
