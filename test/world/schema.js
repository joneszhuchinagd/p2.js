var pkg = require(__dirname + '/../../package.json');

var sample = {
    p2: pkg.version,
    gravity: [0,-10],
    solver: {
        type: "GSSolver",
        iterations: 10,
    },
    broadphase: {
        type:"SAPBroadphase",
    },
    bodies: [{
        id :       1,
        mass :     1,
        angle :    0,
        position : [0,0],
        velocity : [0,0],
        angularVelocity : 0,
        force : [0,0],
        type : 1,
        fixedRotation : false,
        //concavePath : [], // Not given
        capsuleShapes : [{
            length : 1,
            radius : 2,
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
        circleShapes : [{
            radius : 2,
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
        convexShapes : [{
            vertices : [[0,1],[0,0],[1,0]],
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
        lineShapes : [{
            length : 1,
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
        particleShapes : [{
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
        planeShapes : [{
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
        rectangleShapes :   [{
            width:1,
            height:1,
            offset : [0,0],
            angle : 0,
            collisionGroup:1,
            collisionMask : 1,
            material : 1,
        }],
    },{
        id :       2,
        mass :     1,
        angle :    0,
        position : [0,0],
        velocity : [0,0],
        angularVelocity : 0,
        force : [0,0],
        type : 1,
        fixedRotation : false,
        concavePath : [[0,0],[1,0],[1,1]],
        capsuleShapes :     [],
        circleShapes :      [],
        convexShapes :      [],
        lineShapes :        [],
        particleShapes :    [],
        planeShapes :       [],
        rectangleShapes :   [],
    }],
    springs: [{
        bodyA :         0,
        bodyB :         1,
        stiffness :     100,
        damping :       1,
        restLength :    1,
        localAnchorA :  [1,2],
        localAnchorB :  [-1,-2],
    }],
    distanceConstraints :   [{
        bodyA:      0,
        bodyB:      1,
        distance:   1,
        maxForce:   1e6,
        collideConnected : true,
    }],
    revoluteConstraints :   [{
        bodyA:              0,
        bodyB:              1,
        pivotA:             [0,0],
        pivotB:             [0,0],
        maxForce:           1e6,
        motorEnabled :      true,
        motorSpeed:         1,
        lowerLimit:         0,
        lowerLimitEnabled:  false,
        upperLimit:         1,
        upperLimitEnabled:  false,
        collideConnected : true,
    }],
    prismaticConstraints :  [{
        bodyA:      0,
        bodyB:      1,
        localAnchorA: [0,0],
        localAnchorB: [0,0],
        localAxisA: [0,0],
        maxForce:   1e6,
        motorEnabled:false,
        motorSpeed:1,
        lowerLimit:         0,
        lowerLimitEnabled:  false,
        upperLimit:         1,
        upperLimitEnabled:  false,
        collideConnected : true,
    }],
    lockConstraints : [{
        bodyA:          0,
        bodyB:          1,
        localOffsetB:   [0,0],
        localAngleB:    0,
        maxForce:       1e6,
        collideConnected : true,
    }],
    gearConstraints : [{
        bodyA:          0,
        bodyB:          1,
        angle:          0,
        ratio:          0,
        maxForce:       1e6,
        collideConnected : true,
    }],
    contactMaterials : [{
        id:1,
        materialA:1,
        materialB:2,
        stiffness:1e6,
        relaxation:3,
        frictionStiffness:1e6,
        frictionRelaxation:3,
        friction:0.3,
        restitution:0.3,
    }],
    materials : [{
        id:1,
    },{
        id:2,
    }],
    defaultContactMaterial : {
        id:2,
        materialA:1,
        materialB:1,
        stiffness:1e6,
        relaxation:3,
        frictionStiffness:1e6,
        frictionRelaxation:3,
        friction:0.3,
        restitution:0.3,
    }
};

var num_v1 = { type:"number" },
num_le0_v1 = { type:"number", minimum:0 },
id_v1 = {
    type:"integer",
    minimum:0,
},
nullable_id_v1 = {
    type:["integer","null"],
},
uint_v1 = {
    type:"integer",
    minimum:0,
},
bool_v1 = { type:"boolean" },
vec2_v1 = {
    type:"array",
    maxItems:2,
    minItems:2,
    items:num_v1,
    additionalItems:false,
},
capsuleShape_v1 = {
    type:"object",
    properties:{
        length:num_v1,
        radius:num_v1,
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
circleShape_v1 = {
    type:"object",
    properties:{
        radius:num_v1,
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
convexShape_v1 = {
    type:"object",
    properties:{
        vertices:{
            type:"array",
            items:vec2_v1,
            additionalItems:false
        },
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
lineShape_v1 = {
    type:"object",
    properties:{
        length:num_v1,
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
particleShape_v1 = {
    type:"object",
    properties:{
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
planeShape_v1 = {
    type:"object",
    properties:{
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
rectangleShape_v1 = {
    type:"object",
    properties:{
        width:num_v1,
        height:num_v1,
        offset : vec2_v1,
        angle : num_v1,
        collisionGroup : uint_v1,
        collisionMask : uint_v1,
        material : nullable_id_v1,
    },
    additionalProperties:false,
},
body_v1 = {
    type:"object",
    properties:{
        id :                id_v1,
        mass :              num_v1,
        angle :             num_v1,
        position :          vec2_v1,
        velocity :          vec2_v1,
        angularVelocity :   num_v1,
        force :             vec2_v1,
        type :       uint_v1,
        fixedRotation :     bool_v1,
        capsuleShapes :     { type:"array", additionalItems:false, items:capsuleShape_v1 },
        circleShapes :      { type:"array", additionalItems:false, items:circleShape_v1 },
        convexShapes :      { type:"array", additionalItems:false, items:convexShape_v1 },
        lineShapes :        { type:"array", additionalItems:false, items:lineShape_v1 },
        particleShapes :    { type:"array", additionalItems:false, items:particleShape_v1 },
        planeShapes :       { type:"array", additionalItems:false, items:planeShape_v1 },
        rectangleShapes :   { type:"array", additionalItems:false, items:rectangleShape_v1 },
        concavePath :       {
            type:"array",
            items:vec2_v1,
            additionalItems:false
        },
        concavePathDefined:{
            type:"boolean"
        }
    },
    additionalProperties:false,
},
spring_v1 = {
    type:"object",
    properties:{
        bodyA :         num_v1,
        bodyB :         num_v1,
        stiffness :     num_v1,
        damping :       num_v1,
        restLength :    num_v1,
        localAnchorA :  vec2_v1,
        localAnchorB :  vec2_v1,
    },
    additionalProperties:false,
},
contactMaterial_v1 = {
    type:"object",
    properties : {
        id:                 id_v1,
        materialA:          id_v1,
        materialB:          id_v1,
        friction:           num_le0_v1,
        restitution:        num_le0_v1,
        stiffness:          num_le0_v1,
        relaxation:         num_le0_v1,
        frictionStiffness:  num_le0_v1,
        frictionRelaxation: num_le0_v1,
    },
    additionalProperties:false,
},
material_v1 = {
    type:"object",
    properties : {
        id: id_v1,
    },
    additionalProperties:false,
},
distanceConstraint_v1 = {
    type:"object",
    properties:{
        bodyA:      num_v1,
        bodyB:      num_v1,
        distance:   num_v1,
        maxForce:   num_v1,
        collideConnected:   bool_v1,
    },
    additionalProperties:false,
},
prismaticConstraint_v1 = {
    type:"object",
    properties:{
        bodyA:              num_v1,
        bodyB:              num_v1,
        localAxisA:         vec2_v1,
        localAnchorA:       vec2_v1,
        localAnchorB:       vec2_v1,
        maxForce:           num_v1,
        motorEnabled:       bool_v1,
        motorSpeed:         num_v1,
        lowerLimit:         num_v1,
        lowerLimitEnabled:  bool_v1,
        upperLimit:         num_v1,
        upperLimitEnabled:  bool_v1,
        collideConnected:   bool_v1,
    },
    additionalProperties:false,
},
revoluteConstraint_v1 = {
    type:"object",
    properties:{
        bodyA:              id_v1,
        bodyB:              id_v1,
        pivotA:             vec2_v1,
        pivotB:             vec2_v1,
        maxForce:           num_v1,
        motorEnabled :      bool_v1,
        motorSpeed:         num_v1,
        lowerLimit:         num_v1,
        lowerLimitEnabled:  bool_v1,
        upperLimit:         num_v1,
        upperLimitEnabled:  bool_v1,
        collideConnected:   bool_v1,
    },
    additionalProperties:false,
},
lockConstraint_v1 = {
    type:"object",
    properties:{
        bodyA:              id_v1,
        bodyB:              id_v1,
        localOffsetB:       vec2_v1,
        localAngleB:        num_v1,
        maxForce:           num_v1,
        collideConnected:   bool_v1,
    },
    additionalProperties:false,
},
gearConstraint_v1 = {
    type:"object",
    properties:{
        bodyA:              num_v1,
        bodyB:              num_v1,
        angle:              num_v1,
        ratio:              num_v1,
        maxForce:           num_v1,
        collideConnected:   bool_v1,
    },
    additionalProperties:false,
},
solver_v1 = {
    type:"object",
    properties:{
        type:{
            type:"string",
            pattern:"^(GSSolver)$",
            maxLength: 100,
        },
        iterations:  {
		    type:"integer",
		    minimum:1,
		},
    },
    additionalProperties:false
},
broadphase_v1 = {
    type:"object",
    properties:{
        type:{
            type:"string",
            pattern:'^(NaiveBroadphase|SAPBroadphase)$',
            maxLength:100
        },
    },
    additionalProperties:true,
},
version_v1 = {
    type:"string",
    pattern:'^\\d+.\\d+.\\d+$',
    maxLength: 100
};

var schema = {
    type: "object",
    properties: {
        p2:                     version_v1,
        gravity:                vec2_v1,
        solver:                 solver_v1,
        broadphase:             broadphase_v1,
        bodies:                 { type:"array", additionalItems:false, items: body_v1,   },
        springs:                { type:"array", additionalItems:false, items: spring_v1, },
        distanceConstraints :   { type:"array", additionalItems:false, items: distanceConstraint_v1,   },
        revoluteConstraints :   { type:"array", additionalItems:false, items: revoluteConstraint_v1,   },
        prismaticConstraints :  { type:"array", additionalItems:false, items: prismaticConstraint_v1,  },
        lockConstraints :       { type:"array", additionalItems:false, items: lockConstraint_v1,  },
        gearConstraints :       { type:"array", additionalItems:false, items: gearConstraint_v1,  },
        contactMaterials :      { type:"array", additionalItems:false, items: contactMaterial_v1,      },
        materials :             { type:"array", additionalItems:false, items: material_v1,      },
        defaultContactMaterial: contactMaterial_v1,
        enableIslandSleeping: bool_v1,
        islandSplit: bool_v1,
        enableBodySleeping: bool_v1,
    },
    additionalProperties:false,
};

exports.schema = schema;
exports.sample = sample;