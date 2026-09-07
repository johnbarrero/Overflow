using System.ComponentModel;

namespace ProfileService.DTOs;

public record ProfileSummaryDto(string UserId, string DisplayName, int Reputation);