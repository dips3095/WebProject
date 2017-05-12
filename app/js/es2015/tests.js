'use strict';
describe("Slider", () => {
    it("correct change of scene", () => {
        window.start = 1
        window.Show()
        assert.equal(window.start, 2)
    })
    it("check out of range", () => {
        window.start = 4
        window.Show()
        assert.equal(window.start, 1)
    })
})
describe("Validation email field", () => {
    it("blank field", () => {
        window.popup_email.value = ""
        assert.equal(window.validate(popup_email, reg_email), false)
    })
    it("correct email", () => {
        window.popup_email.value = "test@google.ccm"
        assert.equal(window.validate(popup_email, reg_email), true)
    })
    it("email without @", () => {
        window.popup_email.value = "testgoogle.com"
        assert.equal(window.validate(popup_email, reg_email), false)
    })
    it("email without .", () => {
        window.popup_email.value = "test@googlecom"
        assert.equal(window.validate(popup_email, reg_email), false)
    })
    it("just @...", () => {
        window.popup_email.value = "@googlecom"
        assert.equal(window.validate(popup_email, reg_email), false)
    })
    it("extra symbols in email name", () => {
        window.popup_email.value = "erir234.!@googlecom"
        assert.equal(window.validate(popup_email, reg_email), false)
    })
    it("too long domain", () => {
        window.popup_email.value = "test@google.ccccccom"
        assert.equal(window.validate(popup_email, reg_email), false)
    })
})

describe("Validation name field", () => {
    it("blank field", () => {
        window.popup_name.value = ""
        assert.equal(window.validate(popup_name, reg_name), false)
    })
    it("correct name", () => {
        window.popup_name.value = "Name name name"
        assert.equal(window.validate(popup_name, reg_name), true)
    })
    it("incorrect symbols in name", () => {
        window.popup_name.value = "name123"
        assert.equal(window.validate(popup_name, reg_name), false)
    })
})
