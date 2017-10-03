function login2(){
    $.ajax({
        type: 'POST',
        url: '/login/',
        data: ({
            'username':$('#l_username').val(),
            'password':$('#l_password').val(),
            'captcha':$('#l_captcha').val(),
            'auto_login':$('#auto_login:checked').val()?1:0
        }),
        success: function(data) {
            if (data.result == 'ok') {
                if (!data.result.have_social) {
                    location.reload();
                }
                else {
                    location.reload();
                }
                return;
            }
            else {
                $('.captcha').show();
                $('.login-popup .captcha img').attr('src', '/login/image.jpg?'+Math.random());
                $('#l_captcha').val('');
            }
            if (data.errtype == 1) {
                alert(i18n('Enter the number that you see.'));
                $('.login-popup .captcha').removeClass('hidden');
            }
            else if (data.errtype == 2) {
                alert(i18n('You are banned.'));
            }
            else if (data.errtype == 3) {
                alert(i18n('Wrong number.'));
                $('#l_captcha').focus();
            }
            else if (data.errtype == 4) {
                alert(i18n('Password disabled. Please use password reminder for change your password.'));
                window.location.href = '/recover/';
            }
            else if (data.errtype == 5) {
                alert(i18n('Account disabled. Go ahead.'));
                $('#l_captcha').focus();
            }
            else if (data.errtype == 6) {
                alert(i18n('You are not registered.'));
            }
            else {
                alert(i18n('Wrong username or password.'));
                $('#l_password').val('');
                $('#l_password').focus();
            }
        }
    });
    return false;
}
function postComm() {
  $('#comments_form').hide();
  $.ajax({
      type: 'POST',
      url: location.href,
      data: ({
          comment: $('#comment_text').val(),
          flags: $('.comment_flags:checked').val()
          }),
      success: function(data) {
          if (data.result == 'ok') {
              $('#comments').html(data.comments);
              blocks();
              startInit();
              console.log('ok');
          }
          else {
              alert(data.message);
          }
      }
  });
  return false;
}
function sendMess() {

}
function blocks(){
	var overtoonArr = ['71szrobotkmw','atwbraicdolc','o3blicandypt','hxmpssavem34','m3donn2tr4re'];
	var overAuthorARR = ['Robot2014','brainslavsky','candy_dude','Saveliy8lollo','Donnie_Brasko'];
	for (var fiii = 0; fiii < maxbl; fiii++) {
		var hater = $('.toon_preview a[href="/user/' + blist[fiii] + '"].username:first').parent().parent();
			for (var i = 0; i < hater.length; i++) {
				var random = getRandomInt(0,5);
				var overtoon = overtoonArr[random];
				var overAuthor = overAuthorARR[random];
				if ($('.toon_moderator').length!=0) {
					hater.html(`<div class="toon_image"><a title="Cпасибо `+overAuthor+` за работу!" href="https://multator.ru/user/`+overAuthor+`"><img alt="Cпасибо `+overAuthor+` за работу!" src="/preview/`+overtoon+`" ></a></div>
					<div class="toon_name"><a class="link" href="#">Мульт скрыт!</a></div><div class="toon_tagline">0 кадров</div>
					<div class="toon_tagline">Пользователь в ЧС</div><div class="toon_tagline toon_moderator">	<a href="#" onclick="" title="Хорошо" class="mvote1">+</a>
		<a href="#" onclick="" title="Плохо" class="mvote2">-</a>
		<a href="#" onclick="" title="Ужасно" class="mvote3">✖</a></div>`);
				}
				else {
					hater.html(`<div class="toon_image"><a title="Cпасибо `+overAuthor+` за работу!" href="https://multator.ru/user/`+overAuthor+`"><img alt="Cпасибо `+overAuthor+` за работу!" src="/preview/`+overtoon+`" ></a></div>
					<div class="toon_name"><a class="link" href="#">Мульт скрыт!</a></div><div class="toon_tagline">0 кадров</div>
					<div class="toon_tagline">Пользователь в ЧС</div>`);
				}
			}

		var hatercomm = $('.comment a[href="/user/' + blist[fiii] + '"].username').parent().parent();
		hatercomm.html('<i>Комментарий скрыт!</i>');
	}
	}
