import moment from "moment";

export default defineNuxtPlugin( ( nuxtApp ) =>
{
    nuxtApp.filters = {
        formatDate ( value )
        {
            if ( value )
            {
                return moment( String( value ) ).format( "MMMM Do YYYY" );
            }
        },
    };
})
