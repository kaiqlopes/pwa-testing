namespace testing_pwa.Controllers;

public class NetworkInformationDto
{
    public string? NetworkEffectiveType { get; set; }
    public string? NetworkType { get; set; }
    public double? Downlink { get; set; }
    public double? DownlinkMax { get; set; }

    public override string ToString()
    {
        string networkInfo = "\n=======================================================================\n\n" +
                             "                          Network Informations: \n\n" +
                             $"NetworkType: {NetworkType}\n" +
                             $"NetworkEffectiveType: {NetworkEffectiveType}\n" +
                             $"Downlink: {Downlink}\n" +
                             $"DowlinkMax: {DownlinkMax}\n\n" +
                             "=======================================================================";
                    
        return networkInfo;
    }
}