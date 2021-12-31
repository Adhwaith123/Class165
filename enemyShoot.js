AFRAME.registerComponent("enemyBullets",{
    init: function(){
        setInterval(this.shootenemy,2000)

    },
    shootenemy: function(){
        var enemy=document.querySelectorAll(".enemy");
        for(var i=0; i<enemy.length; i++){
            var enemyBullets = document.createElement("a-entity");
            enemyBullets.setAttribute("geometry",{
                primitive:"sphere",
                radius:0.1
            })
            enemyBullets.setAttribute("material","color:black");
            var position=enemy[i].getAttribute("position")
            enemyBullets.setAttribute("position",{
                x:position.x+1.5,
                y:position.y+3.5,
                z:position.z
            })
            var scene=document.querySelector("#scene")
            scene.appendChild("enemyBullets")
            var enemy1=enemy[i].object3D
            var player=document.querySelector("#weapon").object3D
            var position1=new THREE.Vector3()
            var position2=new THREE.Vector3()
            player.getWorldPosition(position1)
            enemy.getWorldPosition(position2)
            var direction=new THREE.Vector3()
            direction.subVectors(position1,position2).normalize()
            enemyBullets.setAttribute("velocity",direction.multiplyScalar(10))
        }



    }

})