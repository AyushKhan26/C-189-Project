AFRAME.registerComponent('movement',{
    schema:{
        blimp_position: {type: 'number',default: 0},
        blimp_rotation: {type: 'number',default: 0},
        camera_position: {type:'number',default: 0},
        camera_rotation: {type: 'number',default: 0},
    },
    init:function(){
         this.blimpMovement()
    },
    blimpMovement: function(){
        this.data.blimp_position = this.el.getAttribute('position');
        this.data.blimp_rotation = this.el.getAttribute('rotation');

        this.data.camera_position = this.el.getAttribute('position');
        this.data.camera_rotation = this.el.getAttribute('rotation');

        var position = this.data.blimp_position;
        var rotation = this.data.blimp_rotation;

        var cameraPosition = this.data.camera_position;
        var cameraRotation = this.data.camera_rotation;

        var hot_air_ballon = document.querySelector('#ballon');

        var camera = document.querySelector('#camera');

        window.addEventListener('keydown', function(r){
             if(r.code === 'ARROWUP'){
                cameraPosition.y += 1;
                 position.y += 1;
                 hot_air_ballon.setAttribute('position',{x: 0,y: position.y,z: 0});
                 camera.setAttribute('position',{x:0,y: camera.y,z: 0});
             }

             if(r.code === 'ARROWDOWN'){
                cameraPosition.y -= 1;
                position.y -= 1;
                hot_air_ballon.setAttribute('position',{x: 0,y: position.y,z: 0});
                camera.setAttribute('position',{x:0,y: camera.y,z: 0});
             }

             if(r.code === 'I'){
                cameraPosition.z -= 20;
                position.z -= 20
                hot_air_ballon.setAttribute('position',{x: 0,y: 0,z: position.z});
                camera.setAttribute('position',{x: 0,y: 0,z: cameraPosition.z})
             }

             if(r.code === 'K'){
                cameraPosition.y += 20;
                position.z += 20
                hot_air_ballon.setAttribute('position',{x: 0,y: 0,z: position.z});
                camera.setAttribute('position',{x: 0,y: 0,z: cameraPosition.z});
             }

             if(r.code === 'ARROWLEFT'){
                cameraPosition.x += 1;
                 position.x += 1;
                 hot_air_ballon.setAttribute('position',{x: position.x,y: 0,z: 0});
                 camera.setAttribute('position',{x: position.x,y: 0,z: 0});
             }

             if(r.code === 'ARROWRIGHT'){
                cameraPosition.x -= 1;
                position.x -= 1;
                hot_air_ballon.setAttribute('position',{x: position.x,y: 0,z: 0});
                camera.setAttribute('position',{x:0,y: camera.y,z: 0});
             }
        })
    }
})