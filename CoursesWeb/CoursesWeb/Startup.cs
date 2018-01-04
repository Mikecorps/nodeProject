using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CoursesWeb.Startup))]
namespace CoursesWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
