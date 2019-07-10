using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp.Models;
using System.Data.Entity;
using System.Web.Http.Cors;

namespace WebApp.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CompanyController : ApiController
    {
        CompanyDevelopersContext db = new CompanyDevelopersContext();

        public IEnumerable<Company> GetCompanies()
        {
            return db.Companies.ToList();
        }

        public IHttpActionResult GetCompany(int id)
        {
            Company company = db.Companies.Find(id);
            if (company == null)
                ModelState.AddModelError("id", "Элемента с таким id не существует");

            if (ModelState.IsValid)
                return Ok(company);

            return BadRequest(ModelState);
        }

        [HttpPost]
        public IHttpActionResult CreateCompany([FromBody]Company company)
        {
            Company new_company = db.Companies.FirstOrDefault(x => x.name == company.name);
            if (new_company != null)
                ModelState.AddModelError("name", "Название компании должно быть уникально");

            if (ModelState.IsValid)
            {
                db.Companies.Add(company);
                db.SaveChanges();
                return Ok(company);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IHttpActionResult EditCompany(int id, [FromBody]Company company)
        {
            if(ModelState.IsValid)
            {
                db.Entry(company).State = EntityState.Modified;
                db.SaveChanges();
                return Ok(company);
            }
            return BadRequest(ModelState);
        }

        public IHttpActionResult DeleteCompany(int id)
        {
            Company company = db.Companies.Find(id);
            if (company != null)
            {
                db.Companies.Remove(company);
                db.SaveChanges();
            }
            return Ok(company);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
