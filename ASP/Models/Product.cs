using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApp.Models
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public double version { get; set; }
        public string type_license { get; set; }
        public int license_period { get; set; }

        public int id_company { get; set; }
        [ForeignKey("id_company")]
        public Company Company { get; set; }
    }
}