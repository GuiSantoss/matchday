package gui.matchday.controller;

import gui.matchday.dto.reports.ReportsResponseDTO;
import gui.matchday.service.ReportsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/reports")

public class ReportsController {

    @Autowired
    private ReportsService reportsService;

    @GetMapping
    private ReportsResponseDTO getReports(){
        return reportsService.getAllReports();
    }
}
