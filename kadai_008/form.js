$(function () {
    // classがbtnの要素がクリックされる
    $('.btn').on('click', function () {
        // valメソッドによる指定
        $('.text-box').val('クリックしました！');
    });
});