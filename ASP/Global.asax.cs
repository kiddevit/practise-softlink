using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using System.Data.Entity;
using WebApp.Models;

namespace WebApp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            Database.SetInitializer(new CompanyDevelopersInitializer());

            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
