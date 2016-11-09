"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var server_model_1 = require("../models/server.model");
var ServerService = (function () {
    function ServerService() {
    }
    return ServerService;
}());
ServerService.servers = [
    new server_model_1.Server("SMARTHealthIT DSTU2", 'https://fhir-open-api-dstu2.smarthealthit.org'),
    new server_model_1.Server("AEGIS WildFHIR - STU 3 Ballot (v1.6.0-9810)", "http://wildfhir.aegis.net/fhir1-6-0"),
    // new Server("Google", "https://Google.com"),
    // new Server("Epic's Sandbox", "http://open.epic.com/Interface/FHIR"),
    // new Server("HAPI / University Health Network test server DSTU2", " http://fhirtest.uhn.ca/baseDstu2"),
    new server_model_1.Server("HAPI / University Health Network test server DSTU3", " http://fhirtest.uhn.ca/baseDstu3"),
    // new Server("Allscripts Sandbox", "https://cloud.allscriptsunity.com/FHIRAnon"),
    new server_model_1.Server("CareEvolution HIEBus", "http://fhir.careevolution.com/apitest/fhir")
];
ServerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ServerService);
exports.ServerService = ServerService;
//# sourceMappingURL=server.service.js.map