using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApp.Models;
using System.Data.Entity;

namespace WebApp.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class AuthController : ApiController
    {
        CompanyDevelopersContext db = new CompanyDevelopersContext();

        [HttpPost]
        public IHttpActionResult Authorization([FromBody]User user)
        {
            User server_user = db.Users.FirstOrDefault(x => x.login == user.login);
            if(server_user == null)
                ModelState.AddModelError("login", "Пользователя с таким логином нет в базе данных");
            else if (server_user.password != user.password)
                ModelState.AddModelError("password", "Неверный пароль для этого пользователя");

            if (ModelState.IsValid)
                return Ok(true);

            return BadRequest(ModelState);
        }
    }
}
