using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string fio { get; set; }
        public int price { get; set; }

        public int id_company { get; set; }
        [ForeignKey("id_company")]
        public Company Company { get; set; }
    }
}