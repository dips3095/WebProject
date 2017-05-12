"use strict";describe("Slider",function(){it("correct change of scene",function(){window.start=1,window.Show(),assert.equal(window.start,2)}),it("check out of range",function(){window.start=4,window.Show(),assert.equal(window.start,1)})}),describe("Validation email field",function(){it("blank field",function(){window.popup_email.value="",assert.equal(window.validate(popup_email,reg_email),!1)}),it("correct email",function(){window.popup_email.value="test@google.ccm",assert.equal(window.validate(popup_email,reg_email),!0)}),it("email without @",function(){window.popup_email.value="testgoogle.com",assert.equal(window.validate(popup_email,reg_email),!1)}),it("email without .",function(){window.popup_email.value="test@googlecom",assert.equal(window.validate(popup_email,reg_email),!1)}),it("just @...",function(){window.popup_email.value="@googlecom",assert.equal(window.validate(popup_email,reg_email),!1)}),it("extra symbols in email name",function(){window.popup_email.value="erir234.!@googlecom",assert.equal(window.validate(popup_email,reg_email),!1)}),it("too long domain",function(){window.popup_email.value="test@google.ccccccom",assert.equal(window.validate(popup_email,reg_email),!1)})}),describe("Validation name field",function(){it("blank field",function(){window.popup_name.value="",assert.equal(window.validate(popup_name,reg_name),!1)}),it("correct name",function(){window.popup_name.value="Name name name",assert.equal(window.validate(popup_name,reg_name),!0)}),it("incorrect symbols in name",function(){window.popup_name.value="name123",assert.equal(window.validate(popup_name,reg_name),!1)})});