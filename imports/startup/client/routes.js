import {FlowRouter} from 'meteor/kadira:flow-router'
import {BlazeLayout} from 'meteor/kadira:blaze-layout'

//importing the needed templates  
import '../../ui/templates/homepage.js'
import '../../ui/templates/response.js'


FlowRouter.route('/', {
    action() {
        BlazeLayout.render('homepage');
    }
})

FlowRouter.route('/:date', {
    action(params) {
        BlazeLayout.render('response');
    }
})

