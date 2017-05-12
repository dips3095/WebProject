'use strict';

describe("Slider", function () {
    it("correct change of scene", function () {
        start = 1;
        Show();
        assert.equal(start, 2);
    });
    it("check out of range", function () {
        start = 4;
        Show();
        assert.equal(start, 1);
    });
});
describe("Validation email field", function () {
    it("blank field", function () {
        popup_email.value = "";
        assert.equal(validate(popup_email, reg_email), false);
    });
    it("correct email", function () {
        popup_email.value = "test@google.ccm";
        assert.equal(validate(popup_email, reg_email), true);
    });
    it("email without @", function () {
        popup_email.value = "testgoogle.com";
        assert.equal(validate(popup_email, reg_email), false);
    });
    it("email without .", function () {
        popup_email.value = "test@googlecom";
        assert.equal(validate(popup_email, reg_email), false);
    });
    it("just @...", function () {
        popup_email.value = "@googlecom";
        assert.equal(validate(popup_email, reg_email), false);
    });
    it("extra symbols in email name", function () {
        popup_email.value = "erir234.!@googlecom";
        assert.equal(validate(popup_email, reg_email), false);
    });
    it("too long domain", function () {
        popup_email.value = "test@google.ccccccom";
        assert.equal(validate(popup_email, reg_email), false);
    });
});

describe("Validation name field", function () {
    it("blank field", function () {
        popup_name.value = "";
        assert.equal(validate(popup_name, reg_name), false);
    });
    it("correct name", function () {
        popup_name.value = "Name name name";
        assert.equal(validate(popup_name, reg_name), true);
    });
    it("incorrect symbols in name", function () {
        popup_name.value = "name123";
        assert.equal(validate(popup_name, reg_name), false);
    });
});