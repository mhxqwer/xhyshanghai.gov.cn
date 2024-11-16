var helangSearch = {
    els: {},
    searchIndex: 0,
    init: function() {
        var _this = this;
        this.els = {
            pickerBtn: $(".bock01"),
            pickerList: $(".xia-la"),
            logo: $(".logo"),
            hotList: $(".hot-list"),
            input: $("#search-input"),
            button: $(".search")
        };
        this.els.pickerBtn.click(function() {
            if (_this.els.pickerList.is(':hidden')) {
                setTimeout(function() {
                    _this.els.pickerList.show();
                },
                100);
            }
        });
        this.els.pickerList.on("click", ">li",
        function() {
            _this.searchIndex = $(this).index();
            _this.els.pickerBtn.html($(this).html())
        });
        this.els.input.click(function() {
            if (!$(this).val()) {
                setTimeout(function() {
                    _this.els.hotList.show();
                },
                100);
            }
        });
        this.els.input.on("input",
        function() {
            if ($(this).val()) {
                _this.els.hotList.hide();
            }
        });
        $(document).click(function() {
            _this.els.pickerList.hide();
            _this.els.hotList.hide();
        });
    }
};