<template>
	<div>
		<div class="form-group row ml-4 mt-5">
			<label for="upload" class="col-sm-2 col-form-label">Upload dokumen</label>
			<div class="col-sm-8">
				<div class="custom-file">
					<input type="file" id="file" name="file" ref="file" class="custom-file-input" @change="handleDocument()">
					<label class="custom-file-label" for="file">Choose file</label>
				</div>
			</div>

			<div class="form-group row pr-5 float-right">
				<button type="button" class="btn btn-info mr-5" @click="uploadDocument()">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */ 
import JQuery from 'jquery'
import { storageRef } from '../firebase'
import storage from 'firebase/storage'

export default {
	name: 'Order',
	data(){
		return {
			file: ''
		}
	},

  mounted(){
    let $ = JQuery
    $(".custom-file-input").on("change", function() {
      var fileName = $(this).val().split("\\").pop();
      $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    })
	},

	methods: { 
	  uploadDocument(){ 
			let file = document.querySelector('#file').files[0]
			let name = (+new Date()) + '-' + file.name
			const metadata = {
				contentType: file.type
			}

			storageRef.child(name).put(file, metadata)
				.then(function(snapshot) {
					console.log('Uploaded a blob or file!');
					alert('Upload dokumen berhasil!' + 'Untuk proses selanjutnya, silahkan tunggu respon dari Vendor!')
				})
    },

    handleDocument(){
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>