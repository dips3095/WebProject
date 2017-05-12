'use strict';
describe("Slider", () => {
    it("correct change of scene", () => {
        start = 1
        Show()
        assert.equal(start, 2)
    })
    it("check out of range", () => {
        start = 4
        Show()
        assert.equal(start, 1)
    })
})
describe("Validation email field", () => {
    it("blank field", () => {
        popup_email.value = ""
        assert.equal(validate(popup_email, reg_email), false)
    })
    it("correct email", () => {
        popup_email.value = "test@google.ccm"
        assert.equal(validate(popup_email, reg_email), true)
    })
    it("email without @", () => {
        popup_email.value = "testgoogle.com"
        assert.equal(validate(popup_email, reg_email), false)
    })
    it("email without .", () => {
        popup_email.value = "test@googlecom"
        assert.equal(validate(popup_email, reg_email), false)
    })
    it("just @...", () => {
        popup_email.value = "@googlecom"
        assert.equal(validate(popup_email, reg_email), false)
    })
    it("extra symbols in email name", () => {
        popup_email.value = "erir234.!@googlecom"
        assert.equal(validate(popup_email, reg_email), false)
    })
    it("too long domain", () => {
        popup_email.value = "test@google.ccccccom"
        assert.equal(validate(popup_email, reg_email), false)
    })
    after(() => {
        popup_email.value = ""
        reset_error(popup_email)
    })

})

describe("Validation name field", () => {
    it("blank field", () => {
        popup_name.value = ""
        assert.equal(validate(popup_name, reg_name), false)
    })
    it("correct name", () => {
        popup_name.value = "Name name name"
        assert.equal(validate(popup_name, reg_name), true)
    })
    it("incorrect symbols in name", () => {
        popup_name.value = "name123"
        assert.equal(validate(popup_name, reg_name), false)
    })
    after(() => {
        popup_name.value = ""
        reset_error(popup_name)
    })
})
