using Microsoft.AspNetCore.Mvc;
using Internship.Server.Data;
using Internship.Server.Models;
using Microsoft.EntityFrameworkCore;


namespace Internship.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InternshipsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public InternshipsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [HttpGet]
public IActionResult GetInternships()
{
    return Ok(_context.Internships.ToList());
}


        [HttpPost]
        public async Task<IActionResult> AddInternship(Internship.Server.Models.Internship internship)

        {
            _context.Internships.Add(internship);
            await _context.SaveChangesAsync();
            return Ok(internship);
        }
    }
}
