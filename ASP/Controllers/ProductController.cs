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
    public class ProductController : ApiController
    {
        CompanyDevelopersContext db = new CompanyDevelopersContext();

        public IEnumerable<Product> GetProducts()
        {
            return db.Products.ToList();
        }

        public IHttpActionResult GetProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
                ModelState.AddModelError("id", "Элемента с таким id не существует");

            if (ModelState.IsValid)
                return Ok(product);

            return BadRequest(ModelState);
        }
        [HttpPost]
        public IHttpActionResult CreateProduct([FromBody]Product product)
        {
            Product new_product = db.Products.FirstOrDefault(x => x.name == product.name);
            if (new_product != null)
                ModelState.AddModelError("name", "Название продукта должно быть уникально");

            if (ModelState.IsValid)
            {
                db.Products.Add(product);
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IHttpActionResult EditProduct(int id, [FromBody]Product product)
        {
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product != null)
            {
                db.Products.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
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
