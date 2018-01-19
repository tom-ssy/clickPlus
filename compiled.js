"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Administrator on 2018/1/18 0018.
 */
var aa = [1, 2, 3];
aa.map(function (val) {
    return val + 1;
});

var PraiseButton = function () {
    function PraiseButton() {
        _classCallCheck(this, PraiseButton);

        this.value = 0;
    }

    _createClass(PraiseButton, [{
        key: "plusOne",
        value: function plusOne() {
            if (this.value >= 10) {
                this.value = 0;
                return "red";
            } else {
                this.value++;
                return "yellow";
            }
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb() {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));
    }

    _createClass(Thumb, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var thumb = document.createElement('div');
            thumb.style.backgroundColor = "red";
            var text = document.createTextNode("赞");
            var span = document.createElement('span');
            thumb.appendChild(text);
            thumb.appendChild(span);
            span.innerText = this.value;
            thumb.addEventListener('click', function () {
                var color = _this2.plusOne();
                thumb.style.backgroundColor = color;
                span.innerText = _this2.value;
            }, false);
            document.body.appendChild(thumb);
        }
    }]);

    return Thumb;
}(PraiseButton);

module.exports= Thumb;

