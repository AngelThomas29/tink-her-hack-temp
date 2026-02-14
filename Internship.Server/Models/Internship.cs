using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Internship.Server.Models
{
    public class Internship
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Company { get; set; }

        public string Location { get; set; }

        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
