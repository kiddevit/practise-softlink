using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Company
    {
        public int id { get; set; }
        public string name { get; set; }
        public string main_address { get; set; }
        public string main_number { get; set; }
        public int count_employee { get; set; }

        public ICollection<Employee> Employees { get; set; }
        public ICollection<Product> Products { get; set; }
        public Company()
        {
            Employees = new List<Employee>();
            Products = new List<Product>();
        }
    }
}