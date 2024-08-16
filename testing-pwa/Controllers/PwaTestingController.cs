using Microsoft.AspNetCore.Mvc;

namespace testing_pwa.Controllers;

[Route("[controller]")]
[ApiController]
public class PwaTestingController : ControllerBase
{

    [HttpPost]
    public async Task<ActionResult> SaveImage(IFormFile image)
    {
        if (image is null || image.Length == 0)
            return BadRequest("An image is required");

        var filePath = Path.Combine("wwwroot/images", image.FileName);

        var fileStream = new FileStream(filePath, FileMode.Create);
        await image.CopyToAsync(fileStream);

        Console.WriteLine("Funcionou");

        return Ok(new { filePath });
    }

    [HttpPost("NetworkInformation")]
    public ActionResult<string> GetNetworkInformation(NetworkInformationDto networkInformation)
    {
        Console.WriteLine(networkInformation.ToString());

        return Ok("Network information read, check application console for more");
    }

    [HttpPost("NetworkUpdate")]
    public ActionResult<string> GetNetworkUpdate([FromBody] string networkUpdate)
    {
        if (string.IsNullOrEmpty(networkUpdate))
            return BadRequest("string is empty ma dude");

        Console.WriteLine(networkUpdate);

        return Ok("Network update registered");
    }
}