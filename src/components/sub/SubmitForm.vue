<template>
<div class="main-wrapper">
<section class="about-generic-area">
<div class="container border-top-generic">
  <form action="#" id="submit-form">
    <h3 class="about-title mb-70" style="text-align: center">Submit your result!</h3>
    <div class="row">
      <div class="col-md-4">
        <div class="input-group-icon mt-10">
          <div class="icon"><i class="fa fa-cubes" aria-hidden="true"></i></div>
          <div class="form-select">
            <select>
              <option value="333">三阶速拧</option>
              <option value="222">二阶速拧</option>
              <option value="444">四阶速拧</option>
              <option value="555">五阶速拧</option>
              <option value="666">六阶速拧</option>
              <option value="777">七阶速拧</option>
              <option value="333oh">三阶单手</option>
              <option value="333bf">三阶盲拧</option>
              <option value="444bf">四阶盲拧</option>
              <option value="555bf">五阶盲拧</option>
              <option value="py">金字塔</option>
              <option value="sk">斜转</option>
              <option value="sq1">SQ-1</option>
            </select>
            <!-- 
            血泪教训啊，这个模板用了nice-select，上述select默认属性为display:none，应当监听下面自动增加的.nice-select紧跟的span.current
            -->
          </div>
        </div>
        <div class="mt-10">
          <input type="text" name="time1" placeholder="Time1" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Time1'" required class="single-input-primary">
        </div>
        <div class="mt-10">
          <input type="text" name="time2" placeholder="Time2" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Time2'" required class="single-input-primary">
        </div>
        <div class="mt-10">
          <input type="text" name="time3" placeholder="Time3" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Time3'" required class="single-input-primary">
        </div>
        <div class="mt-10">
          <input type="text" name="time4" placeholder="Time4" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Time4'" required class="single-input-primary">
        </div>
        <div class="mt-10">
          <input type="text" name="time5" placeholder="Time5" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Time5'" required class="single-input-primary">
        </div>
      </div>
      <div class="col-md-4">
        <div class="switch-wrap d-flex justify-content-between">
          <p>匿名提交</p>
          <div class="confirm-switch">
            <input type="checkbox" id="confirm-switch" checked>
            <label for="confirm-switch"></label>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
</section>
</div>
</template>

<script>
export default {
  name: 'SubmitForm',
}
</script>
