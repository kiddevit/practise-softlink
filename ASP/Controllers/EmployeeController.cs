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
    public class EmployeeController : ApiController
    {
        CompanyDevelopersContext db = new CompanyDevelopersContext();

        public IEnumerable<Employee> GetEmployees()
        {
            return db.Employees.ToList();
        }

        public IHttpActionResult GetEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if(employee == null)
                ModelState.AddModelError("id", "Элемента с таким id не существует");

            if (ModelState.IsValid)
                return Ok(employee);

            return BadRequest(ModelState);
        }

        [HttpPost]
        public IHttpActionResult CreateEmployee([FromBody]Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Employees.Add(employee);
                db.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IHttpActionResult EditEmployee(int id, [FromBody]Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Entry(employee).State = EntityState.Modified;
                db.SaveChanges();
                return Ok(employee);
            }
            return BadRequest(ModelState);
        }

        public IHttpActionResult DeleteEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee != null)
            {
                db.Employees.Remove(employee);
                db.SaveChanges();
            }
            return Ok(employee);
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
