// data.js

const bank = [    

    // ==========================================
    // PHYSICS
    // ==========================================
	
	{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Error Analysis",
  "level": "Beginner",
  "q": "Percentage Error =",
  "a": "(ΔA/A) × 100",
  "full": "%Error = (ΔA/A) × 100",
  "d": "A length is measured as 10.2 cm instead of 10.0 cm. Find the percentage error."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Error Analysis",
  "level": "Beginner",
  "q": "Relative Error in Product",
  "a": "ΔA/A + ΔB/B",                 
  "full": "ΔZ/Z = ΔA/A + ΔB/B",      
  "d": "The relative error in measuring mass is 0.02 and in velocity is 0.03. Find the maximum relative error in momentum."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Beginner",
  "q": "Magnitude of Vector A",
  "a": "√(A<sub>x</sub>² + A<sub>y</sub>² + A<sub>z</sub>²)",
  "full": "|A| = √(A<sub>x</sub>² + A<sub>y</sub>² + A<sub>z</sub>²)",
  "d": "A force vector has components (3, 4, 12) Newtons. Calculate its net resultant magnitude."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Beginner",
  "q": "Dot Product",
  "a": "AB cosθ",
  "full": "A·B = AB cosθ",
  "d": "Two vectors of magnitudes 6 and 5 units make an angle of 60° with each other. Find their scalar dot product."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Beginner",
  "q": "Cross Product Magnitude",
  "a": "AB sinθ",
  "full": "|A x B| = AB sinθ",
  "d": "Two vectors of magnitudes 8 and 5 units make an angle of 30° with each other. Find the magnitude of their cross product."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Advanced",
  "q": "Vector Triple Product",
  "a": "B(A·C) − C(A·B)",
  "full": "A × (B × C) = B(A·C) − C(A·B)",
  "d": "If A = i + j, B = 2i, and C = j, compute the final vector expansion resulting from A × (B × C)."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Equations of Motion",
  "level": "Beginner",
  "q": "First Equation of Motion",
  "a": "v = u + at",
  "full": "v = u + at",
  "d": "A car moving at 12 m/s accelerates at a constant rate of 3 m/s² for 4 seconds. Find its final velocity."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Equations of Motion",
  "level": "Beginner",
  "q": "Second Equation of Motion",
  "a": "ut + ½at²",
  "full": "s = ut + ½at²",
  "d": "A particle starts with an initial velocity of 5 m/s and accelerates uniformly at 2 m/s² for 6 seconds. Find its linear displacement."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Equations of Motion",
  "level": "Beginner",
  "q": "Third Equation of Motion",
  "a": "u² + 2as",
  "full": "v² = u² + 2as",
  "d": "A particle moving at 4 m/s accelerates uniformly at 3 m/s² over a distance of 8 meters. Find the square of its final velocity."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Projectile Motion",
  "level": "Advanced",
  "q": "Range of Projectile",
  "a": "u²sin(2θ)/g",
  "full": "R = u²sin(2θ)/g",
  "d": "A projectile is launched at 20 m/s at an angle of 15° to the horizontal. Taking g = 10 m/s², find the horizontal range covered."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Projectile Motion",
  "level": "Advanced",
  "q": "Maximum Height",
  "a": "u²sin²θ/(2g)",
  "full": "H = u²sin²θ/(2g)",
  "d": "An arrow is shot at an angle of 30° to the horizontal with an initial speed of 40 m/s. Taking g = 10 m/s², calculate its maximum vertical height."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Newton's Laws",
  "level": "Beginner",
  "q": "Newton's Second Law",
  "a": "F = ma",
  "full": "F = ma",
  "d": "Calculate the magnitude of the net horizontal force required to accelerate a 5 kg block across a smooth floor at 4 m/s²."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Momentum",
  "level": "Beginner",
  "q": "Linear Momentum",
  "a": "p = mv",
  "full": "p = mv",
  "d": "Find the momentum of a cricket ball of mass 0.15 kg moving horizontally with a uniform velocity of 40 m/s."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Impulse",
  "level": "Advanced",
  "q": "Impulse Magnitude",
  "a": "J=FΔt",
  "full": "J = FΔt",
  "d": "A bat strikes a ball exerting an average structural impact force of 800 N for a time duration of 0.01 seconds. Determine the impulse."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Friction",
  "level": "Advanced",
  "q": "Limiting Friction",
  "a": "f = μN",
  "full": "f = μN",
  "d": "A 10 kg box rests on a floor where the coefficient of static friction is 0.35 and the normal reaction is 100 N. Find the threshold limiting friction force."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Circular Motion",
  "level": "Advanced",
  "q": "Banking Angle",
  "a": "v²/(rg)",
  "full": "tanθ = v²/(rg)",
  "d": "Calculate tanθ for a racing track curve of radius 40 meters safely taken at a speed of 20 m/s."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Work",
  "level": "Beginner",
  "q": "Work Done",
  "a": "Fs cosθ",
  "full": "W = Fs cosθ",
  "d": "A steady pull force of 50 N acts on a crate at an angle of 60° to the horizontal ground over a displacement of 6 meters. Find the total work done."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Energy",
  "level": "Beginner",
  "q": "Kinetic Energy",
  "a": "½mv²",
  "full": "KE = ½mv²",
  "d": "Determine the operational kinetic energy of an athlete weighing 60 kg running at a steady forward velocity of 10 m/s."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Energy",
  "level": "Beginner",
  "q": "Potential Energy",
  "a": "mgh",
  "full": "PE = mgh",
  "d": "A construction brick of mass 2 kg is hoisted to a platform located 15 meters above the ground. Taking g = 10 m/s², calculate its potential energy."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Power",
  "level": "Beginner",
  "q": "Power Output",
  "a": "W/t",
  "full": "P = W/t",
  "d": "An electric lifting motor system performs 6000 Joules of mechanical work over a duration of 12 seconds. Calculate its average power output."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Spring",
  "level": "Advanced",
  "q": "Spring Potential Energy",
  "a": "½kx²",
  "full": "U = ½kx²",
  "d": "A spring with stiffness constant k = 400 N/m is compressed linearly by an execution distance of 0.1 meters. Find the stored elastic potential energy."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Position",
  "level": "Advanced",
  "q": "Center of Mass",
  "a": "Σ(mixi)/Σ(mi)",
  "full": "xcm = Σ(mixi)/Σ(mi)",
  "d": "Two point masses of 2 kg and 3 kg are positioned on the x-axis at milestones x = 1 m and x = 6 m respectively. Locate their center of mass coordinate."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Torque",
  "level": "Beginner",
  "q": "Torque Magnitude",
  "a": "rF sinθ",
  "full": "τ = rF sinθ",
  "d": "A mechanic applies a perpendicular force of 60 N to a wrench handle length of 0.25 meters. Find the net torque."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Angular Momentum",
  "level": "Advanced",
  "q": "Angular Momentum",
  "a": "Iω",
  "full": "L = Iω",
  "d": "A flywheel features a rotational moment of inertia of 4 kg·m² spun at an angular velocity of 15 rad/s. Calculate its angular momentum."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Moment of Inertia",
  "level": "Advanced",
  "q": "Parallel Axis Theorem",
  "a": "Icm + Md²",
  "full": "I = Icm + Md²",
  "d": "A body of mass M = 4 kg has an inertia Icm = 10 kg·m² about its center of mass. Find its new inertia about a parallel axis at a distance of d = 2 meters."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Universal Gravitation",
  "level": "Beginner",
  "q": "Gravitational Force",
  "a": "GMm/r²",
  "full": "F = GMm/r²",
  "d": "Two isolated spheres of masses 50 kg and 20 kg are separated by a center-to-center distance of 2 meters. Write the expression for the attraction force."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Satellite Motion",
  "level": "Advanced",
  "q": "Orbital Velocity",
  "a": "√(GM/R)",
  "full": "v = √(GM/R)",
  "d": "A satellite is orbiting just above Earth's surface. Given G = 6.67×10⁻¹¹, M = 6×10²⁴ kg and R = 6.4×10⁶ m, find its orbital velocity."
 },

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Escape Velocity",
  "level": "Advanced",
  "q": "Escape Velocity",
  "a": "√(2GM/R)",
  "full": "ve = √(2GM/R)",
  "d": "Using G = 6.67×10⁻¹¹, M = 6×10²⁴ kg and R = 6.4×10⁶ m, calculate the minimum speed required for a rocket to escape Earth's gravity."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Gravitational Potential",
  "level": "Advanced",
  "q": "Gravitational Potential",
  "a": "-GM/r",
  "full": "V = -GM/r",
  "d": "Find the gravitational potential at a point 8×10⁶ m from Earth's center. Take G = 6.67×10⁻¹¹ and M = 6×10²⁴ kg."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Satellite Motion",
  "level": "Advanced",
  "q": "Time Period of Satellite",
  "a": "2π√(R³/GM)",
  "full": "T = 2π√(R³/GM)",
  "d": "A satellite orbits Earth at a radius of 7×10⁶ m from its center. Take G = 6.67×10⁻¹¹ and M = 6×10²⁴ kg. Find its orbital period."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Elasticity",
  "level": "Beginner",
  "q": "Stress Formula",
  "a": "Force/Area",
  "full": "Stress = Force/Area",
  "d": "A heavy tensile load force of 4000 N acts perpendicular to a support cross-section profile area of 0.02 m². Find the internal stress."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Elasticity",
  "level": "Beginner",
  "q": "Longitudinal Strain",
  "a": "ΔL/L",
  "full": "Strain = ΔL/L",
  "d": "A structural wire exactly 5.0 meters long stretches and elongates by 0.01 meters under a sudden cargo payload weight. Calculate the longitudinal strain."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Elasticity",
  "level": "Advanced",
  "q": "Young's Modulus",
  "a": "Stress/Strain",
  "full": "Y = Stress/Strain",
  "d": "Calculate Young's Modulus for an alloy specimen that shows a structural stress rating of 6×10⁸ Pa alongside a calculated strain factor of 2×10⁻³."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Surface Tension",
  "level": "Advanced",
  "q": "Excess Pressure in Soap Bubble",
  "a": "4T/r",
  "full": "ΔP = 4T/r",
  "d": "Find the excess internal pressure inside a soap bubble of radius 0.02 meters if the surface tension of the solution is T = 0.03 N/m."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Fluid Pressure",
  "level": "Beginner",
  "q": "Pressure Definition",
  "a": "F/A",
  "full": "P = F/A",
  "d": "A perpendicular normal force of 150 Newtons presses uniformly directly down onto a flat platform tray area of 3 m². Find the pressure."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Hydrostatics",
  "level": "Beginner",
  "q": "Hydrostatic Pressure",
  "a": "ρgh",
  "full": "P = ρgh",
  "d": "Calculate the hydrostatic water gauge pressure at a depth of 4 meters inside a pool (density ρ = 1000 kg/m³, g = 10 m/s²)."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Buoyancy",
  "level": "Advanced",
  "q": "Buoyant Force",
  "a": "ρVg",
  "full": "Fb = ρVg",
  "d": "A solid block has a volume displacement of 0.05 m³ while completely submerged in fresh water (density ρ = 1000 kg/m³, g = 10 m/s²). Find the buoyant force."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Fluid Flow",
  "level": "Advanced",
  "q": "Bernoulli's Equation",
  "a": "P + ½ρv² + ρgh",
  "full": "P + ½ρv² + ρgh = constant",
  "d": "State the consolidated energy expression per unit volume tracking along an ideal fluid stream of density ρ at pressure P, velocity v, and height h."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Viscosity",
  "level": "Advanced",
  "q": "Poiseuille's Law Flow Rate",
  "a": "πr⁴ΔP/(8ηL)",
  "full": "Q = πr⁴ΔP/(8ηL)",
  "d": "Write the volume flow rate expression Q for a liquid of viscosity η through a capillary tube of radius r, length L, under a pressure difference of ΔP."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Thermal Expansion",
  "level": "Beginner",
  "q": "Linear Expansion =",
  "a": "αLΔT",
  "full": "ΔL = αLΔT",
  "d": "A steel rail track segment of initial length 20 meters experiences a temperature rise change of 30°C. If α = 1.2×10⁻⁵ /°C, calculate its extension."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Thermal Expansion",
  "level": "Advanced",
  "q": "Area Expansion",
  "a": "2αAΔT",
  "full": "ΔA = 2αAΔT",
  "d": "A flat sheet metal surface floor plate of area A has a linear expansion constant α. Write the change in area expression for a temperature increase of ΔT."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Calorimetry",
  "level": "Beginner",
  "q": "Heat Energy Required (Q)",
  "a": "mcΔT",
  "full": "Q = mcΔT",
  "d": "Determine the thermal heat energy needed to raise the temperature of a mass m = 2 kg of water (c = 4200 J/kg°C) by a delta of 10°C."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Latent Heat",
  "level": "Advanced",
  "q": "Latent Heat Process (Q)",
  "a": "mL",
  "full": "Q = mL",
  "d": "Find the heat energy requirement needed to fully melt a mass m = 5 kg of ice at 0°C into water (given latent heat capacity standard L = 3.36×10⁵ J/kg)."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "First Law",
  "level": "Beginner",
  "q": "First Law of Thermodynamics",
  "a": "ΔQ = ΔU + W",
  "full": "ΔQ = ΔU + W",
  "d": "A gas chamber absorbs ΔQ = 500 J of thermal heat energy, causing its internal energy to jump by ΔU = 300 J. Find the work done W by the gas."
},


{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Isothermal Process",
  "level": "Advanced",
  "q": "Work Done in Isothermal Process",
  "a": "nRT ln(V₂/V₁)",
  "full": "W = nRT ln(V₂/V₁)",
  "d": "Write the expression for work done W when n moles of an ideal gas expand at a constant temperature T from an initial volume V₁ to a final volume V₂."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Heat Engine",
  "level": "Advanced",
  "q": "Carnot Efficiency of heat engine",
  "a": "1 - Tc/Th",
  "full": "η = 1 - Tc/Th",
  "d": "An engine operates between a high-temperature heat source core at Th = 600 K and a cooling waste sink framework run at Tc = 300 K. Find its efficiency."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Gas Molecules",
  "level": "Advanced",
  "q": "RMS Speed",
  "a": "√(3RT/M)",
  "full": "v<sub>rms</sub> = √(3RT/M)",
  "d": "State the root-mean-square speed profile expression vrms for gas molecules of molar mass M floating inside a room held at absolute temperature T."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Gas Pressure",
  "level": "Advanced",
  "q": "Pressure of Ideal Gas",
  "a": "(1/3)ρv<sub>rms</sub>²",
  "full": "P = (1/3)ρvrms²",
  "d": "Derive the physical kinetic containment pressure expression P operating on system walls given a gas density value ρ and particle speed standard vrms."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Beginner",
  "q": "Displacement in SHM",
  "a": "A sin(ωt + φ)",
  "full": "x = A sin(ωt + φ)",
  "d": "Write the kinematic tracking equation mapping position x over time t for a particle executing SHM with amplitude A, angular frequency ω, and phase φ."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Beginner",
  "q": "Angular Frequency Formula",
  "a": "2π/T",
  "full": "ω = 2π/T",
  "d": "An ocean tracking navigation sensor float registers a regular wave tracking repeat time period clock window of T = 4 seconds. Calculate the angular frequency ω."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Advanced",
  "q": "Time Period of Spring-Mass System",
  "a": "2π√(m/k)",
  "full": "T = 2π√(m/k)",
  "d": "A calibration mass piece of m = 2 kg hangs attached from a micro mechanical load balance coil spring of stiffness k = 200 N/m. Find the time period T."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Advanced",
  "q": "Maximum Velocity",
  "a": "Aω",
  "full": "vmax = Aω",
  "d": "Determine the highest speed magnitude achieved by an oscillating particle execution path running over an amplitude A = 0.5 meters and angular speed ω = 10 rad/s."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Advanced",
  "q": "Maximum Acceleration",
  "a": "Aω²",
  "full": "a<sub>max</sub> = Aω²",
  "d": "Find the extreme boundary peak limit acceleration profile value triggered on an SHM track displaying amplitude A = 0.2 meters and frequency ω = 5 rad/s."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Energy in SHM",
  "level": "Advanced",
  "q": "Total Energy in SHM",
  "a": "½kA²",
  "full": "E = ½kA²",
  "d": "Calculate the total conserved mechanical energy internal capacity stored inside a system of spring factor k = 500 N/m and sweep track amplitude A = 0.2 meters."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Wave Motion",
  "level": "Beginner",
  "q": "Wave Speed",
  "a": "fλ",
  "full": "v = fλ",
  "d": "An acoustic wave generator array driver produces a tracking stream running at a frequency f = 440 Hz spanning a wavelength λ = 0.75 meters. Calculate velocity v."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Wave Motion",
  "level": "Beginner",
  "q": "Angular Frequency of Wave",
  "a": "2πf",
  "full": "ω = 2πf",
  "d": "Find the wave rotation angular velocity parameter tracking an operational signaling wave run at a standard baseline wave frequency f = 50 Hz."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Wave Motion",
  "level": "Advanced",
  "q": "Wave Number",
  "a": "2π/λ",
  "full": "k = 2π/λ",
  "d": "Determine the spatial wave number vector parameter tracking along a system displaying an explicit spatial wavelength metric size of λ = 0.2 meters."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "String Waves",
  "level": "Advanced",
  "q": "Speed of Wave on String",
  "a": "√(T/μ)",
  "full": "v = √(T/μ)",
  "d": "A guitar string instrument wire is mechanically tightened up to an active tension force T = 160 N. The linear mass density thickness is μ = 0.01 kg/m. Find wave speed v."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Standing Waves",
  "level": "Advanced",
  "q": "Fundamental Frequency",
  "a": "v/(2L)",
  "full": "f = v/(2L)",
  "d": "Calculate the baseline fundamental resonance frequency tracking inside an acoustic wire string fixed over length L = 2.0 meters if wave velocity v = 100 m/s."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Doppler Effect",
  "level": "Advanced",
  "q": "Doppler Effect Frequency Shift",
  "a": "f[(v ± vo)/(v ∓ vs)]",
  "full": "f' = f[(v ± vo)/(v ∓ vs)]",
  "d": "Write the general apparent frequency formula f' heard by an observer moving at velocity vo near a source moving at velocity vs inside a medium with wave speed v."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Charges",
  "level": "Beginner",
  "q": "Coulomb's Law",
  "a": "kq₁q₂/r²",
  "full": "F = kq₁q₂/r²",
  "d": "Two isolated test charges holding values q₁ = 2×10⁻⁶ C and q₂ = 3×10⁻⁶ C are positioned at a distance r = 0.3 meters apart. Compute the electrostatic force."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Field",
  "level": "Beginner",
  "q": "Electric Field Definition",
  "a": "F/q",
  "full": "E = F/q",
  "d": "A localized point sensor test charge core holding value q = 2×10⁻⁶ C encounters a structural deflection vector force of 0.12 N. Determine field intensity E."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Field",
  "level": "Advanced",
  "q": "Electric Field due to Point Charge",
  "a": "kq/r²",
  "full": "E = kq/r²",
  "d": "Calculate the electric field impact parameter value measured at a distance marker of r = 3.0 meters away from an isolated point source charge q = 4×10⁻⁶ C."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Potential",
  "level": "Advanced",
  "q": "Electric Potential",
  "a": "kq/r",
  "full": "V = kq/r",
  "d": "Determine the scalar absolute electrical potential value existing out at a radial location point step r = 2.0 meters away from a source charge q = 6×10⁻⁶ C."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Potential Energy",
  "level": "Advanced",
  "q": "Potential Energy of Two Charges",
  "a": "kq₁q₂/r",
  "full": "U = kq₁q₂/r",
  "d": "Evaluate the net interactive electrical work storage potential matrix balance holding two target charges q₁ = 1×10⁻⁶ C and q₂ = 4×10⁻⁶ C at distance r = 0.2 meters."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Dipole",
  "level": "Advanced",
  "q": "Dipole Moment",
  "a": "qd",
  "full": "p = qd",
  "d": "A dual terminal point matrix configuration features two opposing charges (+q and -q) of magnitude q = 3×10⁻⁶ C separated by a fine alignment gap span d = 0.02 meters. Find p."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitors",
  "level": "Beginner",
  "q": "Capacitance Definition",
  "a": "Q/V",
  "full": "C = Q/V",
  "d": "An electronics plate capacitor element stores an absolute internal electric charge volume layer of Q = 6×10⁻³ Coulombs at a potential V = 12 Volts. Find capacitance C."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Parallel Plate Capacitor",
  "level": "Advanced",
  "q": "Capacitance of Parallel Plate",
  "a": "ε₀A/d",
  "full": "C = ε₀A/d",
  "d": "State the storage capacitance performance scale expression C of a pair of parallel metal conduction plates of overlap area size A split by an absolute air gap layer d."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitor Energy",
  "level": "Advanced",
  "q": "Energy Stored in Capacitor",
  "a": "½CV²",
  "full": "U = ½CV²",
  "d": "A flash component capacitor node calibrated at value C = 50×10⁻⁶ Farads is energized up to an operating potential of V = 200 Volts. Find stored energy U."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitor Combination",
  "level": "Advanced",
  "q": "Series Combination",
  "a": "1/C₁ + 1/C₂ + ...",
  "full": "1/Ceq = 1/C₁ + 1/C₂ + ...",
  "d": "Two diagnostic electronic board capacitors with capacity ratings C₁ = 3 μF and C₂ = 6 μF are welded inside a single chain loop layout. Find equivalent inverse loop metrics."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitor Combination",
  "level": "Advanced",
  "q": "Parallel Combination",
  "a": "C₁ + C₂ + ...",
  "full": "Ceq = C₁ + C₂ + ...",
  "d": "Calculate the ultimate net composite active layout capacity achieved by grouping two storage capacitor tracks side-by-side in parallel (C₁ = 4 μF, C₂ = 8 μF)."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Current",
  "level": "Beginner",
  "q": "Electric Current Definition",
  "a": "Q/t",
  "full": "I = Q/t",
  "d": "An experimental cell system tracking interface monitors exactly Q = 60 Coulombs of charge streaming past a cross section checkpoint loop every t = 20 seconds. Find current I."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Ohm's Law",
  "level": "Beginner",
  "q": "Ohm's Law",
  "a": "V = IR",
  "full": "V = IR",
  "d": "An electrical heater element resistor track measures exactly R = 24 Ohms while carrying a working execution current stream of I = 5 Amps. Calculate terminal voltage V."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Resistance",
  "level": "Advanced",
  "q": "Resistance of Conductor",
  "a": "ρL/A",
  "full": "R = ρL/A",
  "d": "Write the resistance expression R of a copper distribution busbar line length L having cross section profile area template A and material matrix resistivity ρ."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electrical Power",
  "level": "Advanced",
  "q": "Electrical Power Basic",
  "a": "VI",
  "full": "P = VI",
  "d": "A current power server input line runs at terminal drop baseline potential V = 12 Volts delivering a working drive current line I = 5 Amps. Evaluate wattage score power P."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electrical Power",
  "level": "Advanced",
  "q": "Power using Resistance",
  "a": "I²R",
  "full": "P = I²R",
  "d": "A performance power resistor unit component line calibrated at R = 10 Ohms handles a steady operating execution load current of I = 3 Amps. Determine thermal loss wattage power P."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electrical Energy",
  "level": "Advanced",
  "q": "Electrical Work Done",
  "a": "VIt",
  "full": "W = VIt",
  "d": "Find the absolute net consumption work capacity energy score utilized by an appliance drawing voltage standard V = 100 V and current I = 2 A over execution timeframe t = 30 seconds."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Kirchhoff's Laws",
  "level": "Advanced",
  "q": "Junction Rule",
  "a": "ΣIin = ΣIout",
  "full": "ΣIin = ΣIout",
  "d": "Perform node circuit data balancing matching at a terminal split where three current lines meet: incoming are I₁ = 3 A and I₂ = 4 A, outgoing is single line I₃."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Wheatstone Bridge",
  "level": "Advanced",
  "q": "Balance Condition",
  "a": "P/Q = R/S",
  "full": "P/Q = R/S",
  "d": "Determine the exact network balancing equation condition relating bridge resistor arm values P, Q, R, and S when the center galvanometer cross line current drops to zero."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Field",
  "level": "Beginner",
  "q": "Magnetic Force on Moving Charge",
  "a": "qvB sinθ",
  "full": "F = qvB sinθ",
  "d": "A charge setup holding value q = 2×10⁻⁶ C moving at velocity speed scale v = 500 m/s shoots perpendicular (θ = 90°) into an external induction field grid B = 0.4 Tesla. Find force F."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Field",
  "level": "Beginner",
  "q": "Magnetic Force on Wire",
  "a": "BIL sinθ",
  "full": "F = BIL sinθ",
  "d": "A straight copper power busbar wire length L = 2.0 meters carrying current stream I = 5 Amps is positioned perpendicular (θ = 90°) across a magnetic flux grid B = 0.3 Tesla. Find force F."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Biot-Savart Law",
  "level": "Advanced",
  "q": "Field due to Long Straight Wire",
  "a": "μ₀I/(2πr)",
  "full": "B = μ₀I/(2πr)",
  "d": "Determine the induction magnetic field expression intensity B measured out at radius step gap point distance r away from a long linear conductor wire tracking direct current I."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Circular Loop",
  "level": "Advanced",
  "q": "Field at Center of Circular Loop",
  "a": "μ₀I/(2R)",
  "full": "B = μ₀I/(2R)",
  "d": "Find the high-intensity concentrated target center focal magnetic induction expression reading B developed inside a circular wire loop ring path of radius R driving current I."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Solenoid",
  "level": "Advanced",
  "q": "Field inside Solenoid",
  "a": "μ₀nI",
  "full": "B = μ₀nI",
  "d": "Calculate the uniform linear core hollow magnetic alignment force field profiling expression B inside a solenoid packing n wire turns per meter running current I."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Current Loop",
  "level": "Advanced",
  "q": "Magnetic Dipole Moment",
  "a": "NIA",
  "full": "M = NIA",
  "d": "An electromagnetic diagnostic induction actuator tool loop packages N = 200 turns wrapping flat surface profile face enclosure area size A = 0.05 m² carrying drive current I = 4 Amps. Find moment M."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Bar Magnet",
  "level": "Beginner",
  "q": "Torque on Magnetic Dipole",
  "a": "MB sinθ",
  "full": "τ = MB sinθ",
  "d": "An orientation balancing indicator needle element with magnetic moment scale M = 5 A·m² sits tracking skewed off at angle θ = 30° inside a field flux environment B = 0.4 Tesla. Find torque τ."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Bar Magnet",
  "level": "Advanced",
  "q": "Potential Energy of Dipole",
  "a": "-MB cosθ",
  "full": "U = -MB cosθ",
  "d": "Find the structural interactive storage potential energy balance curve score U of an orientation tracker bar with moment M = 3 A·m² aligned at angle θ = 60° inside field flux B = 0.5 Tesla."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Earth Magnetism",
  "level": "Advanced",
  "q": "Tan A Law",
  "a": "BH tanθ",
  "full": "B = BH tanθ",
  "d": "A calibration compass needle mechanism target inside a tangent galvanometer rig setup swings off line by angle deviation θ = 45°. If horizontal component BH = 4×10⁻⁵ T, find field B."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Materials",
  "level": "Advanced",
  "q": "Magnetic Susceptibility",
  "a": "M/H",
  "full": "χm = M/H",
  "d": "Find the raw operational structural susceptibility score factor χm of an alloy cylinder matrix testing magnetization profile value M = 400 A/m via external force field input H = 200 A/m."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Flux",
  "level": "Beginner",
  "q": "Magnetic Flux Definition",
  "a": "BA cosθ",
  "full": "Φ = BA cosθ",
  "d": "Calculate the volumetric flux count line metric Φ scoring clean across an loop area size template A = 0.5 m² positioned inside magnetic field B = 0.6 Tesla at angle alignment θ = 60°."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Faraday Law",
  "level": "Advanced",
  "q": "Induced EMF Magnitude",
  "a": "dΦ/dt",
  "full": "E = -dΦ/dt",
  "d": "A tracking diagnostic dynamo loop setup encounters an induction cycle where magnetic flux lines warp linearly dropping down by dΦ = 0.8 Webers over a time gap duration of dt = 0.2 seconds. Find EMF E."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Motional EMF",
  "level": "Advanced",
  "q": "Motional EMF Formula",
  "a": "Blv",
  "full": "E = Blv",
  "d": "A navigation metal wing rod link bar length l = 2.0 meters speeds horizontally at constant velocity rate v = 50 m/s right through vertical magnetic field flux zone B = 0.4 Tesla. Find induced EMF E."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Self Inductance",
  "level": "Advanced",
  "q": "Self Induced EMF",
  "a": "-L(dI/dt)",
  "full": "E = -L(dI/dt)",
  "d": "An electrical filter choke coil line rated at working self-inductance L = 0.5 Henrys encounters a linear current drop pulse cycle tracking shift rate dI/dt = -40 A/s. Calculate induced EMF E."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Inductor",
  "level": "Advanced",
  "q": "Energy Stored in Inductor",
  "a": "½LI²",
  "full": "U = ½LI²",
  "d": "An industrial filter reactor loop unit rated at working inductance standard L = 0.4 Henrys holds a steady continuous drive execution current level profile I = 5 Amps. Find magnetic energy stored U."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Current",
  "level": "Beginner",
  "q": "Instantaneous Current",
  "a": "I₀ sinωt",
  "full": "i = I₀ sinωt",
  "d": "Map out the target timeline wave equation current parameter profile tracking alternating signal wave current i scaled at a peak line boundary value marker standard of I₀ = 10 Amps."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Voltage",
  "level": "Beginner",
  "q": "Instantaneous Voltage",
  "a": "V₀ sinωt",
  "full": "V = V₀ sinωt",
  "d": "Plot the continuous tracking potential voltage timeline wave profile V of an alternate frequency power station running over peak drive voltage standard marker value V₀ = 311 Volts."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "RMS Values",
  "level": "Advanced",
  "q": "RMS Current",
  "a": "I₀/√2",
  "full": "Irms = I₀/√2",
  "d": "Determine the true equivalent baseline direct current match rating Irms value generated by an alternating current wave displaying a peak wave boundary line current score of I₀ = 14.14 Amps."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "RMS Values",
  "level": "Advanced",
  "q": "RMS Voltage",
  "a": "V₀/√2",
  "full": "Vrms = V₀/√2",
  "d": "An alternate source laboratory power generator unit outputs a clean sinusoidal wave potential pattern scaling up to a peak crest line wave marker value of V₀ = 141.4 Volts. Find RMS rating Vrms."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Circuit",
  "level": "Advanced",
  "q": "Inductive Reactance",
  "a": "ωL",
  "full": "XL = ωL",
  "d": "Calculate the frequency phase dependent reactance opposition score XL offered by an inductor coil L = 0.2 Henrys tied onto an AC circuit loop tracking angular speed ω = 100 rad/s."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Circuit",
  "level": "Advanced",
  "q": "Capacitive Reactance",
  "a": "1/(ωC)",
  "full": "XC = 1/(ωC)",
  "d": "Find the dynamic current regulation reactance opposition factor XC developed inside an electronic signaling circuit capacitor link C = 250×10⁻⁶ Farads run under angular speed ω = 40 rad/s."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Transformer",
  "level": "Advanced",
  "q": "Transformer Equation",
  "a": "Np/Ns",
  "full": "Vp/Vs = Np/Ns",
  "d": "An industrial distribution grid step-down conversion transformer core links primary input coil loops Np = 1000 down onto secondary grid collection layout containing loops Ns = 100. Find Vp/Vs."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Wave Properties",
  "level": "Beginner",
  "q": "Speed of EM Wave",
  "a": "νλ",
  "full": "c = νλ",
  "d": "An optical communication telecom laser system array line drives out an electromagnetic pulse burst wave signal run at frequency standard ν = 3×10¹⁴ Hz and wavelength λ = 1×10⁻⁶ meters."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Wave Properties",
  "level": "Advanced",
  "q": "Speed in Vacuum",
  "a": "1/√(μ₀ε₀)",
  "full": "c = 1/√(μ₀ε₀)",
  "d": "State the cosmic baseline dispersion velocity constant parameter profile expression defining light speed c matching up free space magnetic constant μ₀ and absolute electric capacity constant ε₀."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Electric and Magnetic Fields",
  "level": "Advanced",
  "q": "Field Ratio",
  "a": "E/B",
  "full": "c = E/B",
  "d": "Evaluate the synchronized wave amplitude correlation constant light speed metric c relating electric wave force vector amplitude value E directly over magnetic wave vector amplitude B."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Photon Energy",
  "level": "Advanced",
  "q": "Photon Energy Basic",
  "a": "hν",
  "full": "E = hν",
  "d": "Determine the baseline standalone quantum energy capacity packet score expression E tracking within an electromagnetic wave radiation field run at ray frequency standard ν."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Photon Momentum",
  "level": "Advanced",
  "q": "Photon Momentum Basic",
  "a": "h/λ",
  "full": "p = h/λ",
  "d": "Find the absolute localized target forward translation impact impulse momentum capacity expression p tracking inside a high energy x-ray packet ray beam scaling wavelength size dimension λ."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Reflection",
  "level": "Beginner",
  "q": "Mirror Formula",
  "a": "1/v + 1/u",
  "full": "1/f = 1/v + 1/u",
  "d": "A concave mirror system features focal radius parameter f = 20 cm. An illumination object target slide is tracked down at distance milestone coordinate u = -30 cm along axis line. Evaluate 1/v + 1/u."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Reflection",
  "level": "Advanced",
  "q": "Magnification in Mirror",
  "a": "-v/u",
  "full": "m = -v/u",
  "d": "A spherical reflector mirror setup casts a real focused reflection display image pattern out at position distance coordinate v = -60 cm given an initial object tracking coordinate u = -20 cm."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Refraction",
  "level": "Beginner",
  "q": "Snell's Law",
  "a": "n₂/n₁",
  "full": "sinθ₁/sinθ₂ = n₂/n₁",
  "d": "An oblique laser inspection light path transitions straight across the flat boundary line dividing a glass block layer n₁ = 1.0 away into liquid solution matrix n₂ = 1.5. Find sinθ₁/sinθ₂."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Refraction",
  "level": "Advanced",
  "q": "Refractive Index Definition",
  "a": "c/v",
  "full": "n = c/v",
  "d": "Calculate the absolute optical index scaling rating n of a glass matrix where light execution transport velocity drops down to speed v = 2×10⁸ m/s (taking light speed constant c = 3×10⁸ m/s)."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Lens",
  "level": "Beginner",
  "q": "Lens Formula",
  "a": "1/v - 1/u",
  "full": "1/f = 1/v - 1/u",
  "d": "A convex projection lens equipment kit features a calibrated spatial focal distance metric f = 10 cm. An object target slide is loaded up at position milestone coordinate u = -15 cm. Evaluate 1/v - 1/u."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Lens",
  "level": "Advanced",
  "q": "Magnification in Lens",
  "a": "v/u",
  "full": "m = v/u",
  "d": "Determine the linear geometric structural magnification display multiplier scale m achieved by a microscope glass lens layout placing target image position at distance v = 30 cm from object position u = -10 cm."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Lens",
  "level": "Advanced",
  "q": "Lens Maker Formula",
  "a": "(n-1)(1/R₁ - 1/R₂)",
  "full": "1/f = (n-1)(1/R₁ - 1/R₂)",
  "d": "An engineer designs a double convex lens assembly tracking glass core index rating n = 1.5 over curved sphere faces radius sizes R₁ = 20 cm and R₂ = -20 cm. Write the expression for 1/f."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Prism",
  "level": "Advanced",
  "q": "Prism Formula",
  "a": "sin((A+δm)/2)/sin(A/2)",
  "full": "μ = sin((A+δm)/2)/sin(A/2)",
  "d": "Find the refraction performance index rating score μ of an equilateral glass prism block design over apex angle shape metric A = 60° displaying a minimum angle of deviation record δm = 60°."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Interference",
  "level": "Advanced",
  "q": "Fringe Width",
  "a": "λD/d",
  "full": "β = λD/d",
  "d": "Map the precise projection stride separation gap width metric β defining alternating light strips cast on lab monitor wall screen D = 1.5 meters via slot split gap d = 0.5×10⁻³ meters using laser wave λ = 5×10⁻⁷ meters."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Interference",
  "level": "Advanced",
  "q": "Path Difference Condition",
  "a": "nλ",
  "full": "Δ = nλ",
  "d": "Establish the precise spatial path variance vector constraint condition metric Δ required to trigger 100% constructive laser light wave field reinforcement for order layer index standard n = 3 using wavelength λ."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Diffraction",
  "level": "Advanced",
  "q": "Single Slit Diffraction Minima",
  "a": "nλ",
  "full": "a sinθ = nλ",
  "d": "Track down the geometric path deflection condition expression a sinθ required to profile dark baseline diffraction band patterns for order row index standard n = 2 using laser wavelength λ."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Polarization",
  "level": "Advanced",
  "q": "Malus Law",
  "a": "I₀cos²θ",
  "full": "I = I₀cos²θ",
  "d": "An optical filtering polarizer crystal block layout disk array receives a polarized laser transmission beam stream tracking intensity I₀ = 40 W/m² skewed off at angle alignment marker step θ = 60°. Find final intensity I."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photon",
  "level": "Beginner",
  "q": "Photon Energy Advanced Version",
  "a": "hc/λ",
  "full": "E = hc/λ",
  "d": "Calculate the precise structural quantum energetic payload expression E carried inside a single specialized diagnostic color ray tracking wavelength node size parameter baseline metrics λ."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photon",
  "level": "Advanced",
  "q": "Photon Momentum Vector",
  "a": "E/c",
  "full": "p = E/c",
  "d": "Express light structural momentum tracking force p directly as a clean linear mathematical evaluation ratio matching absolute packet energy scale standard E = 6×10⁻¹⁹ Joules over velocity constant c = 3×10⁸ m/s."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Matter Waves",
  "level": "Advanced",
  "q": "de Broglie Wavelength",
  "a": "h/p",
  "full": "λ = h/p",
  "d": "Find the matter wave particle signature wave dimension footprint length size expression λ mapped to an accelerated subatomic electron stream cruising momentum vector rating value p."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photoelectric Effect",
  "level": "Advanced",
  "q": "Einstein Photoelectric Equation",
  "a": "Φ + KEmax",
  "full": "hν = Φ + KEmax",
  "d": "A specialized quantum photo-sensor panel featuring surface work function barrier potential Φ is illuminated by ray frequency standard ν. State the total incident photon energy hν expression."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photoelectric Effect",
  "level": "Advanced",
  "q": "Stopping Potential",
  "a": "eV₀",
  "full": "KEmax = eV₀",
  "d": "Determine the maximum kinetic energy expression KEmax for photo-electrons ejected from a surface layer when the blocking electrical suppression voltage threshold capacity value is set to V₀."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Radius of nth Orbit",
  "a": "n²a₀/Z",
  "full": "rn = n²a₀/Z",
  "d": "Calculate the quantized radius milestone boundary expression rn of an electron running in step ring shell layer n = 3 inside a atomic number node center matrix Z = 1 (Hydrogen atom)."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Velocity of Electron",
  "a": "(Zαc)/n",
  "full": "vn = (Zαc)/n",
  "d": "Determine the theoretical orbital tracking speed velocity standard expression vn of an electron running in atomic shell layer milestone n around a heavy core atomic number target structure Z."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Energy of nth Orbit",
  "a": "-13.6(Z²/n²)",
  "full": "En = -13.6(Z²/n²) eV",
  "d": "Find the total absolute structural quantum energy state level baseline scoring parameter En value in eV tracking an electron confined down in shell state row n = 2 around atomic number node center matrix Z = 1."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Spectral Series",
  "level": "Advanced",
  "q": "Rydberg Formula",
  "a": "RZ²(1/n₁² - 1/n₂²)",
  "full": "1/λ = RZ²(1/n₁² - 1/n₂²)",
  "d": "Map the specific electromagnetic signature inverse emission wavelength value 1/λ tracking a hydrogenic atomic number transition drop down from higher orbital shell state n₂ = 3 down to baseline layer state n₁ = 2."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Nuclear Properties",
  "level": "Beginner",
  "q": "Mass-Energy Relation",
  "a": "mc²",
  "full": "E = mc²",
  "d": "Evaluate the ultimate structural energy yield capacity equivalent unlocked by completely annihilating raw physical material fuel element tracking payload mass factor m = 0.001 kg (taking light speed c = 3×10⁸ m/s)."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Binding Energy",
  "level": "Advanced",
  "q": "Binding Energy Core",
  "a": "Δmc²",
  "full": "BE = Δmc²",
  "d": "Determine the net structural stabilization binding containment grid energy expression BE holding an atomic core unit stable given structural constituent mass defect sum total tracking score value Δm."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Radioactivity",
  "level": "Advanced",
  "q": "Radioactive Decay Law",
  "a": "N₀e^(-λt)",
  "full": "N = N₀e^(-λt)",
  "d": "Find the absolute residual active core particle cluster count volume expression N remaining un-decayed inside an isotope sample block after timeframe t given an initial start population N₀ and decay constant λ."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Radioactivity",
  "level": "Advanced",
  "q": "Half Life Formula",
  "a": "0.693/λ",
  "full": "T½ = 0.693/λ",
  "d": "An unstable radioactive isotope tracking core mass element is monitored in laboratory tests to determine its specific decomposition rate scale parameter constant value λ = 0.01 /second. Find half life timing T½."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Radioactivity",
  "level": "Advanced",
  "q": "Isotope Activity Rate",
  "a": "λN",
  "full": "A = λN",
  "d": "Calculate the dynamic instant raw nuclear disintegrations tracking rate score activity indicator A of an active material block holding current sample population mass volume N = 4×10¹⁰ particles and decay rate λ = 0.05 /s."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Current Flow",
  "level": "Beginner",
  "q": "Current Carrier Rate",
  "a": "Q/t",
  "full": "I = Q/t",
  "d": "Track down the localized net execution electrical signal current tracking score I passing along a semiconductor substrate handling charge flow volume Q = 15 Coulombs over time window t = 3 seconds."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Diode",
  "level": "Advanced",
  "q": "Diode Current Equation",
  "a": "I₀(e^(eV/ηkT)-1)",
  "full": "I = I₀(e^(eV/ηkT)-1)",
  "d": "Evaluate the precision forward bias operational conduction path direct current value expression I tracing straight across a diagnostic p-n junction diode gate module given saturation scale I₀ under potential V."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Logic Gates",
  "level": "Advanced",
  "q": "NOT Gate Output",
  "a": "Ā",
  "full": "Y = Ā",
  "d": "Determine the logic system bit stream output response state parameter variable Y delivered when an inverter digital processing gate chip receives a primary input condition bit line data of A = 1."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Logic Gates",
  "level": "Advanced",
  "q": "AND Gate Output",
  "a": "A·B",
  "full": "Y = A·B",
  "d": "Find the compound processing evaluation logic outcome profile tracking data score state variable Y generated by linking input condition bit lines A = 1 and B = 0 into a dual pin logic gate module."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Logic Gates",
  "level": "Advanced",
  "q": "OR Gate Output",
  "a": "A+B",
  "full": "Y = A+B",
  "d": "Predict the structural bit system switching logic result trace output state variable Y triggered when incoming monitoring data logic state signals are wired up as input lines A = 1 and B = 0."
},

    // ==========================================
    // CHEMISTRY
    // ==========================================
	
	{
  "subject": "Chemistry",
  "topic": "Mole Concept",
  "subtopic": "Basic Relations",
  "level": "Beginner",
  "q": "Number of Moles =",
  "a": "m/M",
  "full": "n = m/M",
  "d": "An analytical lab process weighs out an exact sample mass block tracking size of m = 88 grams of pure Carbon Dioxide gas (Molar Mass M = 44 g/mol). Find mole count volume n."
},

{
  "subject": "Chemistry",
  "topic": "Mole Concept",
  "subtopic": "Particles",
  "level": "Beginner",
  "q": "Number of Particles",
  "a": "nNA",
  "full": "N = nNA",
  "d": "Determine the absolute independent elemental atomic target particle tracking count score population N present inside a high purity reagent beaker staging exactly n = 2 moles of target substance compound."
},

{
  "subject": "Chemistry",
  "topic": "Mole Concept",
  "subtopic": "Gas Volume",
  "level": "Advanced",
  "q": "Volume at STP",
  "a": "22.4n",
  "full": "V = 22.4n",
  "d": "Calculate the volumetric space expansion displacement footprint liters metric V occupied by an ideal sample batch size tracking precisely n = 0.5 moles of pure Nitrogen gas measured at absolute STP conditions."
},

{
  "subject": "Chemistry",
  "topic": "Mole Concept",
  "subtopic": "Concentration",
  "level": "Beginner",
  "q": "Molarity Expression",
  "a": "n/V",
  "full": "M = n/V",
  "d": "An aqueous stock chemistry calibration beaker solution is mixed up by completely dissolving n = 0.4 moles of crystalline solute salt down into liquid volume capacity V = 2.0 liters. Find Molarity M."
},

{
  "subject": "Chemistry",
  "topic": "Atomic Structure",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Radius of nth Orbit",
  "a": "n²a₀/Z",
  "full": "rn = n²a₀/Z",
  "d": "Determine the physical coordinate shell radius rn hosting an excited state electron running line level n = 2 inside a single tracking helium ion matrix (Atomic tracking number Z = 2)."
},

{
  "subject": "Chemistry",
  "topic": "Atomic Structure",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Energy of nth Orbit",
  "a": "-13.6(Z²/n²)",
  "full": "E<sub>n</sub> = -13.6(Z²/n²)",
  "d": "Evaluate the absolute localized subatomic energy metric E<sub>n</sub> value in eV tracking an electron cruising atomic layer n = 1 within a hydrogen target ion structure tracking atomic scale Z = 1."
},

{
  "subject": "Chemistry",
  "topic": "Atomic Structure",
  "subtopic": "Matter Waves",
  "level": "Advanced",
  "q": "de Broglie Wavelength",
  "a": "h/p",
  "full": "λ = h/p",
  "d": "Find the matter wave spectrum trace dimension length expression λ mapping an accelerated subatomic electron particle stream catalyst beam driving over forward momentum track scale values p."
},

{
  "subject": "Chemistry",
  "topic": "States of Matter",
  "subtopic": "Gas Laws",
  "level": "Beginner",
  "q": "Ideal Gas Equation",
  "a": "PV = nRT",
  "full": "PV = nRT",
  "d": "Map out the full structural thermodynamic properties balance equation matrix running inside a vessel container matching pressure parameters P, volume footprint V, gas mole volume n, and absolute temperature T."
},

{
  "subject": "Chemistry",
  "topic": "States of Matter",
  "subtopic": "Gas Mixtures",
  "level": "Advanced",
  "q": "Dalton's Law",
  "a": "P1 + P2 + ...",
  "full": "P<sub>total<total> = P1 + P2 + ...",
  "d": "A gas supply chamber apparatus combines isolated partial pressure components tracking values of Oxygen (P1 = 0.2 atm) and Nitrogen (P2 = 0.8 atm). Calculate net absolute total pressure P<sub>total</sub>."
},

{
  "subject": "Chemistry",
  "topic": "States of Matter",
  "subtopic": "Kinetic Theory",
  "level": "Advanced",
  "q": "RMS Velocity Chemistry",
  "a": "√(3RT/M)",
  "full": "vrms = √(3RT/M)",
  "d": "Find the kinetic molecule tracking velocity expression vrms tracking an ideal hydrogen gas cloud material tracking molar mass M at thermal environment standard absolute temperature context parameters T."
},

{
  "subject": "Chemistry",
  "topic": "States of Matter",
  "subtopic": "Kinetic Theory",
  "level": "Advanced",
  "q": "Average KE per Mole",
  "a": "(3/2)RT",
  "full": "KE = (3/2)RT",
  "d": "Determine the baseline internal thermal kinetic work translation energy expression score capacity KE active inside exactly one full mole scale batch size of an ideal reactant gas at absolute temperature T."
},

{
  "subject": "Chemistry",
  "topic": "Thermal Chemistry",
  "subtopic": "First Law",
  "level": "Beginner",
  "q": "Change in internal energy",
  "a": "q + w",
  "full": "ΔU = q + w",
  "d": "An industrial reactor chamber vessel design absorbs a net thermal heat input context score of q = 400 J while system boundaries undergo internal work processing work factor w = -150 J. Find internal energy shifts ΔU."
},

{
  "subject": "Chemistry",
  "topic": "Thermal Chemistry",
  "subtopic": "Enthalpy",
  "level": "Advanced",
  "q": "Enthalpy Change",
  "a": "ΔU + ΔnRT",
  "full": "ΔH = ΔU + ΔnRT",
  "d": "Evaluate the thermodynamic reaction enthalpy balance metric expression ΔH mapping gas synthesis changes given internal base state shift data score ΔU and reaction gas mole yield changes value data metrics Δn."
},

{
  "subject": "Chemistry",
  "topic": "Thermal Chemistry",
  "subtopic": "Spontaneity",
  "level": "Advanced",
  "q": "Gibbs Free Energy",
  "a": "ΔH - TΔS",
  "full": "ΔG = ΔH - TΔS",
  "d": "Assess the pathway execution likelihood spontaneity index value ΔG tracking an transformation step running over enthalpy shift data metrics ΔH = -80000 J and entropy scale ΔS = -100 J/K at temp T = 300 K."
},

{
  "subject": "Chemistry",
  "topic": "Equilibrium",
  "subtopic": "Equilibrium Constant",
  "level": "Beginner",
  "q": "Equilibrium constant",
  "a": "[Products]/[Reactants]",
  "full": "K<sub>c</sub> = [Products]/[Reactants]",
  "d": "For the reaction A + B ⇌ C, the equilibrium concentrations are [A] = 0.2 M, [B] = 0.4 M and [C] = 0.8 M. Write the expression for Kc and calculate its value."
},

{
  "subject": "Chemistry",
  "topic": "Equilibrium",
  "subtopic": "Gas Equilibrium",
  "level": "Advanced",
  "q": "Kp from Kc",
  "a": "Kc(RT)^Δn",
  "full": "Kp = Kc(RT)^Δn",
  "d": "For a gaseous reaction, Kc = 2.0, Δn = 1, R = 0.0821 L·atm·mol⁻¹·K⁻¹ and T = 300 K. Calculate Kp."
},
{
  "subject": "Chemistry",
  "topic": "Equilibrium",
  "subtopic": "pH",
  "level": "Beginner",
  "q": "pH=",
  "a": "-log[H+]",
  "full": "pH = -log[H+]",
  "d": "A solution has hydrogen ion concentration [H+] = 1×10⁻³ M. Calculate its pH."
},

{
  "subject": "Chemistry",
  "topic": "Equilibrium",
  "subtopic": "pOH",
  "level": "Beginner",
  "q": "pOH=",
  "a": "-log[OH-]",
  "full": "pOH = -log[OH-]",
  "d": "A solution has hydroxide ion concentration [OH-] = 1×10⁻⁴ M. Calculate its pOH."
},

{
  "subject": "Chemistry",
  "topic": "Equilibrium",
  "subtopic": "Water",
  "level": "Advanced",
  "q": "Ionic Product of Water (Kw)",
  "a": "[H+][OH-]",
  "full": "Kw = [H+][OH-]",
  "d": "At 25°C, a solution has [H+] = 1×10⁻⁵ M. Calculate [OH⁻] using Kw = 1×10⁻¹⁴."
},

{
  "subject": "Chemistry",
  "topic": "Equilibrium",
  "subtopic": "Buffers",
  "level": "Advanced",
  "q": "Buffer Solution pH",
  "a": "pKa + log([Salt]/[Acid])",
  "full": "pH = pKa + log([Salt]/[Acid])",
  "d": "A buffer contains equal concentrations of acetic acid and sodium acetate. If pKa = 4.75, calculate the pH of the buffer."
},

 {
  "subject": "Chemistry",
  "topic": "Redox Reactions",
  "subtopic": "Equivalent Weight",
  "level": "Beginner",
  "q": "Equivalent Weight",
  "a": "Molecular Weight/n-factor",
  "full": "Equivalent Weight = Molecular Weight/n-factor",
  "d": "Calculate the equivalent weight of H₂SO₄ if its molecular weight is 98 and n-factor is 2."
 },

{
  "subject": "Chemistry",
  "topic": "Solutions",
  "subtopic": "Concentration",
  "level": "Beginner",
  "q": "Mole Fraction",
  "a": "Moles of Component/Total Moles",
  "full": "χ = Moles of Component/Total Moles",
  "d": "A solution contains 2 moles of ethanol and 3 moles of water. Calculate the mole fraction of ethanol."
},

{
  "subject": "Chemistry",
  "topic": "Solutions",
  "subtopic": "Colligative Properties",
  "level": "Advanced",
  "q": "Xsolute",
  "full": "ΔP/P° = Xsolute",
  "d": "Calculate the relative lowering of vapor pressure ratio delta value score expression ΔP/P° tracking an liquid solvent cell where a non volatile powder solid compound solute sits dissolved at explicit mole fraction Xsolute."
},

{
  "subject": "Chemistry",
  "topic": "Solutions",
  "subtopic": "Colligative Properties",
  "level": "Advanced",
  "q": "CRT",
  "full": "π = CRT",
  "d": "Determine the localized anti permeation threshold balancing osmotic pressure baseline metric expression π required across an matrix layer run at solute molarity concentration C and absolute temperature standard T."
},

{
  "subject": "Chemistry",
  "topic": "Electrochemistry",
  "subtopic": "Cells",
  "level": "Beginner",
  "q": "Cell EMF Potential",
  "a": "E<sub>cathode</sub> - E<sub>anode<sub>",
  "full": "E<sub>cell</sub> = E<sub>cathode</sub> - E<sub>anode</sub>",
  "d": "A wet galvanic cell generation block is assembled linking standard reduction half cell terminal pairs rated at performance voltage scores E<sub>cathode</sub> = +0.80 Volts and E<sub>anode</sub> = -0.76 Volts. Find total output Ecell."
},

{
  "subject": "Chemistry",
  "topic": "Electrochemistry",
  "subtopic": "Nernst Equation",
  "level": "Advanced",
  "q": "Cell Potential (E)",
  "a": "E° - (0.0591/n)logQ",
  "full": "E = E° - (0.0591/n)logQ",
  "d": "A galvanic cell has E° = 1.10 V, n = 2 and reaction quotient Q = 10. Calculate the cell potential using the Nernst equation."
},

{
  "subject": "Chemistry",
  "topic": "Chemical Kinetics",
  "subtopic": "Rate Law",
  "level": "Beginner",
  "q": "Rate of Reaction",
  "a": "k[A]^m[B]^n",
  "full": "Rate = k[A]^m[B]^n",
  "d": "For a reaction with rate constant k, reactant concentrations [A] and [B], and reaction orders m and n, write the rate law expression."
},

{
  "subject": "Chemistry",
  "topic": "Chemical Kinetics",
  "subtopic": "Half Life",
  "level": "Advanced",
  "q": "Half-Life of First Order Reaction",
  "a": "0.693/k",
  "full": "t1/2 = 0.693/k",
  "d": "A first-order reaction has rate constant k = 0.02 min⁻¹. Calculate its half-life."
},

{
  "subject": "Chemistry",
  "topic": "Chemical Kinetics",
  "subtopic": "Arrhenius Equation",
  "level": "Advanced",
  "q": "Rate Constant (k)",
  "a": "Ae^(-Ea/RT)",
  "full": "k = Ae^(-Ea/RT)",
  "d": "A reaction has pre-exponential factor A = 1×10¹² s⁻¹, activation energy Ea = 50 kJ/mol and temperature T = 300 K. Calculate the rate constant k."
},

{
  "subject": "Chemistry",
  "topic": "Surface Chemistry",
  "subtopic": "Adsorption",
  "level": "Advanced",
  "q": "Freundlich Adsorption Isotherm",
  "a": "kP^(1/n)",
  "full": "x/m = kP^(1/n)",
  "d": "For a gas adsorbed on a solid surface, k = 2, n = 2 and pressure P = 4 atm. Calculate the amount adsorbed per unit mass (x/m)."
},

{
  "subject": "Chemistry",
  "topic": "Solid State",
  "subtopic": "Density",
  "level": "Advanced",
  "q": "Crystal Density",
  "a": "ZM/(a³NA)",
  "full": "ρ = ZM/(a³NA)",
  "d": "A cubic crystal has Z = 4, molar mass M = 58.5 g/mol and edge length a = 5.64×10⁻⁸ cm. Calculate its density."
},

{
  "subject": "Chemistry",
  "topic": "Solid State",
  "subtopic": "Unit Cell",
  "level": "Beginner",
  "q": "Packing Efficiency",
  "a": "(Volume Occupied/Total Volume) × 100",
  "full": "Packing Efficiency = (Volume Occupied/Total Volume) × 100",
  "d": "A crystal structure occupies 68% of its unit cell volume with atoms. Determine its packing efficiency."
},

    // ==========================================
    // MATHEMATICS
    // ==========================================
	
	{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Quadratic Equations",
  "level": "Beginner",
  "q": "Quadratic Formula",
  "a": "x = (-b ± √(b²-4ac))/2a",
  "full": "x = (-b ± √(b²-4ac))/2a",
  "d": "Solve the equation 2x² + 5x - 3 = 0 using the quadratic formula."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Quadratic Equations",
  "level": "Beginner",
  "q": "Sum of Roots",
  "a": "-b/a",
  "full": "α + β = -b/a",
  "d": "Find the sum of the roots of the equation 3x² + 9x + 12 = 0."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Quadratic Equations",
  "level": "Beginner",
  "q": "Product of Roots",
  "a": "c/a",
  "full": "αβ = c/a",
  "d": "Find the product of the roots of the equation 5x² - 15x + 20 = 0."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Quadratic Equations",
  "level": "Beginner",
  "q": "Discriminant",
  "a": "b² - 4ac",
  "full": "D = b² - 4ac",
  "d": "Calculate the discriminant of the equation 2x² + 5x + 3 = 0."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Complex Numbers",
  "level": "Beginner",
  "q": "Magnitude of Complex Number",
  "a": "√(a²+b²)",
  "full": "|z| = √(a²+b²)",
  "d": "Find the magnitude of the complex number z = 5 + 12i."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Complex Numbers",
  "level": "Advanced",
  "q": "De Moivre's Theorem",
  "a": "cos(nθ)+i sin(nθ)",
  "full": "(cosθ+i sinθ)ⁿ = cos(nθ)+i sin(nθ)",
  "d": "Express (cos30° + i sin30°)⁶ using De Moivre's theorem."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Sequence & Series",
  "level": "Beginner",
  "q": "nth Term of AP",
  "a": "a + (n−1)d",
  "full": "aₙ = a + (n−1)d",
  "d": "Find the 20th term of an AP with first term 5 and common difference 4."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Sequence & Series",
  "level": "Advanced",
  "q": "Sum of n Terms of AP",
  "a": "n/2[2a+(n−1)d]",
  "full": "Sₙ = n/2[2a+(n−1)d]",
  "d": "Find the sum of the first 10 terms of an AP with first term 2 and common difference 3."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Sequence & Series",
  "level": "Beginner",
  "q": "nth Term of GP",
  "a": "arⁿ⁻¹",
  "full": "aₙ = arⁿ⁻¹",
  "d": "Find the 5th term of a GP with first term 3 and common ratio 2."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Sequence & Series",
  "level": "Advanced",
  "q": "Sum of n Terms of GP",
  "a": "a(rⁿ−1)/(r−1)",
  "full": "Sₙ = a(rⁿ−1)/(r−1)",
  "d": "Find the sum of the first 6 terms of a GP with first term 5 and common ratio 2."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Sequence & Series",
  "level": "Advanced",
  "q": "Sum of Infinite GP",
  "a": "a/(1−r)",
  "full": "S∞ = a/(1−r)",
  "d": "Find the sum of the infinite GP with first term 6 and common ratio 0.5."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Binomial Theorem",
  "level": "Advanced",
  "q": "General Term of Binomial Expansion",
  "a": "ⁿCᵣ aⁿ⁻ʳ bʳ",
  "full": "T(r+1) = ⁿCᵣ aⁿ⁻ʳ bʳ",
  "d": "Find the 4th term in the expansion of (x + 2)⁶."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Permutation & Combination",
  "level": "Beginner",
  "q": "Permutations (ⁿPᵣ)",
  "a": "n!/(n−r)!",
  "full": "ⁿPᵣ = n!/(n−r)!",
  "d": "How many ways can 3 students be selected and arranged from a group of 7 students?"
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Permutation & Combination",
  "level": "Beginner",
  "q": "Combinations (ⁿCᵣ)",
  "a": "n!/[r!(n−r)!]",
  "full": "ⁿCᵣ = n!/[r!(n−r)!]",
  "d": "How many ways can a team of 4 students be selected from a group of 8 students?"
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Matrices & Determinants",
  "level": "Advanced",
  "q": "Determinant of a 2×2 Matrix",
  "a": "ad−bc",
  "full": "|A| = ad−bc",
  "d": "Find the determinant of the matrix [[5, 2], [3, 4]]."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Probability",
  "level": "Advanced",
  "q": "Conditional Probability",
  "a": "P(A∩B)/P(B)",
  "full": "P(A|B) = P(A∩B)/P(B)",
  "d": "If P(A∩B) = 0.15 and P(B) = 0.50, find P(A|B)."
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Probability",
  "level": "Advanced",
  "q": "Bayes' Theorem",
  "a": "P(B|A)P(A)/P(B)",
  "full": "P(A|B) = P(B|A)P(A)/P(B)",
  "d": "A disease affects 2% of a population and a test detects it correctly 95% of the time. Which formula is used to find the probability that a person has the disease given a positive test result?"
},

{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Statistics",
  "level": "Beginner",
  "q": "Population Variance",
  "a": "Σ(x−μ)²/N",
  "full": "σ² = Σ(x−μ)²/N",
  "d": "Find the population variance of the data set {2, 4, 6, 8, 10}."
},
{
  "subject": "Maths",
  "topic": "Algebra",
  "subtopic": "Statistics",
  "level": "Beginner",
  "q": "Standard Deviation",
  "a": "√Variance",
  "full": "σ = √Variance",
  "d": "The variance of a data set is 16. Find its standard deviation."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Limits",
  "level": "Advanced",
  "q": "Standard Limit: sinx/x",
  "a": "1",
  "full": "lim(x→0) sinx/x = 1",
  "d": "Evaluate lim(x→0) sinx/x."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Limits",
  "level": "Advanced",
  "q": "Standard Limit: tanx/x",
  "a": "1",
  "full": "lim(x→0) tanx/x = 1",
  "d": "Evaluate lim(x→0) tanx/x."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Limits",
  "level": "Advanced",
  "q": "Standard Limit: (e^x−1)/x",
  "a": "1",
  "full": "lim(x→0) (e^x−1)/x = 1",
  "d": "Evaluate lim(x→0) (e^x−1)/x."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Limits",
  "level": "Advanced",
  "q": "Standard Limit: log(1+x)/x",
  "a": "1",
  "full": "lim(x→0) log(1+x)/x = 1",
  "d": "Evaluate lim(x→0) log(1+x)/x."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of xⁿ",
  "a": "nxⁿ⁻¹",
  "full": "d/dx(xⁿ) = nxⁿ⁻¹",
  "d": "Find the derivative of x⁴."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of sin(x)",
  "a": "cos x",
  "full": "d/dx(sinx) = cos x",
  "d": "Find the derivative of sin(x)."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of cos(x)",
  "a": "−sinx",
  "full": "d/dx(cosx) = −sinx",
  "d": "Find the derivative of cos(x)."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of tan(x)",
  "a": "sec²x",
  "full": "d/dx(tanx) = sec²x",
  "d": "Find the derivative of tan(x)."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of sec(x)",
  "a": "sec(x)tan(x)",
  "full": "d/dx(secx) = secx tanx",
  "d": "Find the derivative of sec(x)."
},
{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of e^x",
  "a": "e^x",
  "full": "d/dx(e^x) = e^x",
  "d": "Differentiate 3e^x."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Beginner",
  "q": "Derivative of ln(x)",
  "a": "1/x",
  "full": "d/dx(lnx) = 1/x",
  "d": "Differentiate ln(5x)."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differentiation",
  "level": "Advanced",
  "q": "Chain Rule",
  "a": "f'(g(x))·g'(x)",
  "full": "d/dx[f(g(x))] = f'(g(x))·g'(x)",
  "d": "Differentiate (3x² + 1)⁵."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Application of Derivatives",
  "level": "Beginner",
  "q": "Slope of Tangent Line",
  "a": "dy/dx",
  "full": "m = dy/dx",
  "d": "Find the slope of the tangent to y = x² at x = 2."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Application of Derivatives",
  "level": "Advanced",
  "q": "Slope of Normal Line",
  "a": "−1/(dy/dx)",
  "full": "m = −1/(dy/dx)",
  "d": "Find the slope of the normal to the curve y = x² at x = 1."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Indefinite Integration",
  "level": "Advanced",
  "q": "Integral of xⁿ",
  "a": "xⁿ⁺¹/(n+1)",
  "full": "∫xⁿdx = xⁿ⁺¹/(n+1) + C",
  "d": "Evaluate ∫x⁴ dx."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Indefinite Integration",
  "level": "Advanced",
  "q": "Integral of 1/x",
  "a": "ln|x|",
  "full": "∫dx/x = ln|x| + C",
  "d": "Evaluate ∫(1/x) dx."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Indefinite Integration",
  "level": "Beginner",
  "q": "Integral of e^x",
  "a": "e^x",
  "full": "∫e^x dx = e^x + C",
  "d": "Evaluate ∫e^x dx."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Indefinite Integration",
  "level": "Beginner",
  "q": "Integral of sin(x)",
  "a": "−cosx",
  "full": "∫sinx dx = −cosx + C",
  "d": "Evaluate ∫sinx dx."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Indefinite Integration",
  "level": "Beginner",
  "q": "Integral of cos(x)",
  "a": "sin(x)",
  "full": "∫cos(x) dx = sin(x) + C",
  "d":"Evaluate ∫cos(x) dx."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Indefinite Integration",
  "level": "Advanced",
  "q": "Integration by Parts",
  "a": "uv − ∫v du",
  "full": "∫u dv = uv − ∫v du",
  "d": "Evaluate ∫x eˣ dx using integration by parts."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Definite Integration",
  "level": "Beginner",
  "q": "Fundamental Theorem of Calculus",
  "a": "F(b) - F(a)",
  "full": "∫[a→b] f(x)dx = F(b) - F(a)",
  "d": "Evaluate ∫₁³ 2x dx using the antiderivative method."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Definite Integration",
  "level": "Advanced",
  "q": "King's Property",
  "a": "∫[0→a]f(a−x)dx",
  "full": "∫[0→a]f(x)dx = ∫[0→a]f(a−x)dx",
  "d": "Use King's Property to simplify ∫₀¹ x²/(1+x²) dx."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Area Under Curves",
  "level": "Advanced",
  "q": "Area Under a Curve",
  "a": "∫[a→b] y dx",
  "full": "A = ∫[a→b] y dx",
  "d": "Find the area enclosed by y = x² and the x-axis between x = 0 and x = 2."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differential Equations",
  "level": "Advanced",
  "q": "Separation of Variables",
  "a": "∫(1/g(y))dy = ∫f(x)dx",
  "full": "dy/dx = f(x)g(y) → ∫(1/g(y))dy = ∫f(x)dx",
  "d": "Solve dy/dx = xy using the method of separation of variables."
},

{
  "subject": "Maths",
  "topic": "Calculus",
  "subtopic": "Differential Equations",
  "level": "Advanced",
  "q": "Integrating Factor",
  "a": "e^(∫Pdx)",
  "full": "IF = e^(∫Pdx)",
  "d": "Find the integrating factor for the differential equation dy/dx + 2y = x."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Beginner",
  "q": "Slope Formula",
  "a": "(y₂-y₁)/(x₂-x₁)",
  "full": "m = (y₂-y₁)/(x₂-x₁)",
  "d": "Find the tracking tilt gradient slope score m of a straight linear path route connecting two spatial coordinate milestones positions logged at grid markers (x₁, y₁) = (2, 3) and (x₂, y₂) = (5, 9)."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Beginner",
  "q": "Point-Slope Form",
  "a": "y-y₁ = m(x-x₁)",
  "full": "y-y₁ = m(x-x₁)",
  "d": "Find the equation of the line with slope 3 passing through the point (1, 4)."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Beginner",
  "q": "Slope-Intercept Form",
  "a": "y = mx + c",
  "full": "y = mx + c",
  "d": "Write the equation of a line with slope 2 and y-intercept 5."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Beginner",
  "q": "Distance Between Two Points",
  "a": "√[(x₂-x₁)²+(y₂-y₁)²]",
  "full": "d = √[(x₂-x₁)²+(y₂-y₁)²]",
  "d": "Find the distance between the points (1, 2) and (4, 6)."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Advanced",
  "q": "Section Formula",
  "a": "((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
  "full": "P(x,y) = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
  "d": "Find the point dividing the line joining (1, 2) and (7, 8) internally in the ratio 2:1."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Advanced",
  "q": "Distance of Point from Line",
  "a": "|Ax₀+By₀+C|/√(A²+B²)",
  "full": "d = |Ax₀+By₀+C|/√(A²+B²)",
  "d": "Find the distance of the point (2, 5) from the line 3x + 4y - 6 = 0."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Straight Lines",
  "level": "Advanced",
  "q": "Angle Between Two Lines",
  "a": "|(m₁-m₂)/(1+m₁m₂)|",
  "full": "tanθ = |(m₁-m₂)/(1+m₁m₂)|",
  "d": "Find the angle between two lines having slopes 3 and 0.5."
},
{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Circles",
  "level": "Beginner",
  "q": "Standard Equation of Circle",
  "a": "(x-h)²+(y-k)²",
  "full": "(x-h)²+(y-k)² = r²",
  "d": "Write the equation of a circle with center (2, 3) and radius 5."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Circles",
  "level": "Beginner",
  "q": "General Equation of Circle",
  "a": "x²+y²+2gx+2fy+c",
  "full": "x²+y²+2gx+2fy+c = 0",
  "d": "Write the general form of the equation of a circle."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Circles",
  "level": "Advanced",
  "q": "Radius from General Equation",
  "a": "√(g²+f²-c)",
  "full": "r = √(g²+f²-c)",
  "d": "Find the radius of the circle x² + y² - 6x - 8y + 9 = 0."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Parabola",
  "level": "Advanced",
  "q": "Standard Equation of Parabola",
  "a": "y² = 4ax",
  "full": "y² = 4ax",
  "d": "Write the equation of a parabola with parameter a = 3."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Parabola",
  "level": "Advanced",
  "q": "Length of Latus Rectum",
  "a": "4a",
  "full": "LR = 4a",
  "d": "Find the length of the latus rectum of the parabola y² = 20x."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Parabola",
  "level": "Advanced",
  "q": "Equation of Tangent to Parabola",
  "a": "yy₁ = 2a(x+x₁)",
  "full": "yy₁ = 2a(x+x₁)",
  "d": "Find the equation of the tangent to y² = 8x at the point (2, 4)."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Ellipse",
  "level": "Advanced",
  "q": "Standard Equation of Ellipse",
  "a": "x²/a²+y²/b²",
  "full": "x²/a²+y²/b² = 1",
  "d": "Write the equation of an ellipse with semi-major axis a = 5 and semi-minor axis b = 4."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Ellipse",
  "level": "Advanced",
  "q": "Eccentricity of Ellipse",
  "a": "√(1-b²/a²)",
  "full": "e = √(1-b²/a²)",
  "d": "Find the eccentricity of an ellipse with a = 5 and b = 3."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Ellipse",
  "level": "Advanced",
  "q": "Length of Latus Rectum",
  "a": "2b²/a",
  "full": "LR = 2b²/a",
  "d": "Find the length of the latus rectum of an ellipse with a = 6 and b = 3."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Hyperbola",
  "level": "Beginner",
  "q": "Standard Equation of Hyperbola",
  "a": "x²/a²-y²/b²",
  "full": "x²/a²-y²/b² = 1",
  "d": "Write the equation of a hyperbola with a = 4 and b = 3."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Hyperbola",
  "level": "Advanced",
  "q": "Eccentricity of Hyperbola",
  "a": "√(1+b²/a²)",
  "full": "e = √(1+b²/a²)",
  "d": "Find the eccentricity of a hyperbola with a = 3 and b = 4."
},

{
  "subject": "Maths",
  "topic": "Coordinate Geometry",
  "subtopic": "Hyperbola",
  "level": "Advanced",
  "q": "Equations of Asymptotes",
  "a": "±(b/a)x",
  "full": "y = ±(b/a)x",
  "d": "Find the equations of the asymptotes of the hyperbola x²/9 − y²/36 = 1."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Ratios",
  "level": "Beginner",
  "q": "tanθ",
  "a": "sinθ/cosθ",
  "full": "tanθ = sinθ/cosθ",
  "d": "Express tanθ in terms of sinθ and cosθ."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Ratios",
  "level": "Beginner",
  "q": "secθ",
  "a": "1/cosθ",
  "full": "secθ = 1/cosθ",
  "d": "Express secθ in terms of cosθ."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Ratios",
  "level": "Beginner",
  "q": "cosecθ",
  "a": "1/sinθ",
  "full": "cosecθ = 1/sinθ",
  "d": "Express cosecθ in terms of sinθ."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Beginner",
  "q": "sin²θ + cos²θ",
  "a": "1",
  "full": "sin²θ + cos²θ = 1",
  "d": "Simplify sin²30° + cos²30°."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "1 + tan²θ",
  "a": "sec²θ",
  "full": "1 + tan²θ = sec²θ",
  "d": "Simplify 1 + tan²45°."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "1 + cot²θ",
  "a": "cosec²θ",
  "full": "1 + cot²θ = cosec²θ",
  "d": "Simplify 1 + cot²60°."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Beginner",
  "q": "sin(A+B)",
  "a": "sinA cosB + cosA sinB",
  "full": "sin(A+B) = sinA cosB + cosA sinB",
  "d": "Expand sin(30° + 45°)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Beginner",
  "q": "cos(A+B)",
  "a": "cosA cosB − sinA sinB",
  "full": "cos(A+B) = cosA cosB − sinA sinB",
  "d": "Expand cos(30° + 45°)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "tan(A+B)",
  "a": "(tanA+tanB)/(1−tanA tanB)",
  "full": "tan(A+B) = (tanA+tanB)/(1−tanA tanB)",
  "d": "Expand tan(30° + 45°)."
},
{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "sin 2θ",
  "a": "2sinθ cosθ",
  "full": "sin 2θ = 2sinθ cosθ",
  "d": "Expand sin(2 × 30°)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "cos 2θ",
  "a": "cos²θ−sin²θ",
  "full": "cos 2θ = cos²θ−sin²θ",
  "d": "Expand cos(2 × 45°)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "tan 2θ",
  "a": "2tanθ/(1−tan²θ)",
  "full": "tan 2θ = 2tanθ/(1−tan²θ)",
  "d": "Expand tan(2A)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "sin 3θ",
  "a": "3sinθ−4sin³θ",
  "full": "sin 3θ = 3sinθ−4sin³θ",
  "d": "Expand sin(3A)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "cos 3θ",
  "a": "4cos³θ−3cosθ",
  "full": "cos 3θ = 4cos³θ−3cosθ",
  "d": "Expand cos(3A)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "sin²(θ/2)",
  "a": "(1−cosθ)/2",
  "full": "sin²(θ/2) = (1−cosθ)/2",
  "d": "Express sin²(θ/2) in terms of cosθ."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Trigonometric Identities",
  "level": "Advanced",
  "q": "cos²(θ/2)",
  "a": "(1+cosθ)/2",
  "full": "cos²(θ/2) = (1+cosθ)/2",
  "d": "Express cos²(θ/2) in terms of cosθ."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Inverse Trigonometric Functions",
  "level": "Advanced",
  "q": "sin⁻¹x + cos⁻¹x",
  "a": "π/2",
  "full": "sin⁻¹x + cos⁻¹x = π/2",
  "d": "Simplify sin⁻¹(1/2) + cos⁻¹(1/2)."
},

{
  "subject": "Maths",
  "topic": "Trigonometry",
  "subtopic": "Inverse Trigonometric Functions",
  "level": "Advanced",
  "q": "tan⁻¹x + cot⁻¹x",
  "a": "π/2",
  "full": "tan⁻¹x + cot⁻¹x = π/2",
  "d": "Simplify tan⁻¹(1) + cot⁻¹(1)."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Beginner",
  "q": "Magnitude of a Vector",
  "a": "√(a₁²+a₂²+a₃²)",
  "full": "|a| = √(a₁²+a₂²+a₃²)",
  "d": "Find the magnitude of the vector 3i + 4j + 12k."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Beginner",
  "q": "Unit Vector",
  "a": "a/|a|",
  "full": "â = a/|a|",
  "d": "Find the unit vector in the direction of 3i + 4j."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Beginner",
  "q": "Dot Product",
  "a": "|a||b|cosθ",
  "full": "a·b = |a||b|cosθ",
  "d": "Find the dot product of two vectors with magnitudes 5 and 6 making an angle of 60°."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Advanced",
  "q": "Angle Between Vectors",
  "a": "(a·b)/(|a||b|)",
  "full": "cosθ = (a·b)/(|a||b|)",
  "d": "Find the angle between two vectors if a·b = 12, |a| = 4 and |b| = 5."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Advanced",
  "q": "Magnitude of Cross Product",
  "a": "|a||b|sinθ",
  "full": "|a×b| = |a||b|sinθ",
  "d": "Find |a×b| if |a| = 6, |b| = 5 and the angle between them is 30°."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Advanced",
  "q": "Area of Parallelogram",
  "a": "|a×b|",
  "full": "Area = |a×b|",
  "d": "Find the area of the parallelogram formed by vectors a and b."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "Vectors",
  "level": "Advanced",
  "q": "Area of Triangle",
  "a": "½|a×b|",
  "full": "Area = ½|a×b|",
  "d": "Find the area of the triangle formed by vectors a and b."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Beginner",
  "q": "Distance Between Two Points in 3D",
  "a": "√[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]",
  "full": "d = √[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]",
  "d": "Find the distance between the points (1, 2, 3) and (3, 6, 7)."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Advanced",
  "q": "Section Formula in 3D",
  "a": "((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n), (mz₂ + nz₁)/(m+n))",
  "full": "P(x,y,z) = ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n), (mz₂ + nz₁)/(m+n))",
  "d": "Find the point dividing the line joining (1, 2, 3) and (7, 8, 9) internally in the ratio 2:1."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Advanced",
  "q": "Direction Cosines Relation",
  "a": "1",
  "full": "l² + m² + n² = 1",
  "d": "If l = 1/3 and m = 2/3, find n using the direction cosine relation."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Advanced",
  "q": "Symmetric Equation of a Line",
  "a": "(x-x₁)/l = (y-y₁)/m = (z-z₁)/n",
  "full": "(x-x₁)/l = (y-y₁)/m = (z-z₁)/n",
  "d": "Write the symmetric equation of the line passing through (1, 2, 3) with direction ratios 2, 3 and 4."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Beginner",
  "q": "General Equation of a Plane",
  "a": "ax + by + cz + d",
  "full": "ax + by + cz + d = 0",
  "d": "Write the general equation of a plane in three-dimensional space."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Advanced",
  "q": "Distance of Point from Plane",
  "a": "|ax₁+by₁+cz₁+d|/√(a²+b²+c²)",
  "full": "Distance = |ax₁+by₁+cz₁+d|/√(a²+b²+c²)",
  "d": "Find the distance of the point (1, 2, 3) from the plane x + 2y + 2z - 9 = 0."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Advanced",
  "q": "Angle Between Two Planes",
  "a": "|a₁a₂+b₁b₂+c₁c₂|/(√(a₁²+b₁²+c₁²)√(a₂²+b₂²+c₂²))",
  "full": "cosθ = |a₁a₂+b₁b₂+c₁c₂|/(√(a₁²+b₁²+c₁²)√(a₂²+b₂²+c₂²))",
  "d": "Find the angle between the planes x + y + z = 0 and 2x - y + 2z = 0."
},

{
  "subject": "Maths",
  "topic": "Vectors & 3D Geometry",
  "subtopic": "3D Geometry",
  "level": "Advanced",
  "q": "Angle Between Line and Plane",
  "a": "|al+bm+cn|/(√(a²+b²+c²)√(l²+m²+n²))",
  "full": "sinθ = |al+bm+cn|/(√(a²+b²+c²)√(l²+m²+n²))",
  "d": "Find the angle between the line with direction ratios (1, 2, 2) and the plane x + y + z = 0."
},

{
  "subject": "Maths",
  "topic": "Probability",
  "subtopic": "Basic Probability",
  "level": "Beginner",
  "q": "Classical Probability",
  "a": "n(E)/n(S)",
  "full": "P(E) = n(E)/n(S)",
  "d": "A die is rolled once. Find the probability of getting an even number."
},

{
  "subject": "Maths",
  "topic": "Probability",
  "subtopic": "Basic Probability",
  "level": "Beginner",
  "q": "Complement Rule",
  "a": "1 - P(A)",
  "full": "P(A') = 1 - P(A)",
  "d": "If P(A) = 0.15, find P(A')."
},

{
  "subject": "Maths",
  "topic": "Probability",
  "subtopic": "Addition Theorem",
  "level": "Advanced",
  "q": "Addition Theorem of Probability",
  "a": "P(A) + P(B) - P(A∩B)",
  "full": "P(A∪B) = P(A) + P(B) - P(A∩B)",
  "d": "If P(A) = 0.40, P(B) = 0.35 and P(A∩B) = 0.15, find P(A∪B)."
},

{
  "subject": "Maths",
  "topic": "Probability",
  "subtopic": "Conditional Probability",
  "level": "Advanced",
  "q": "Conditional Probability",
  "a": "P(A∩B)/P(B)",
  "full": "P(A|B) = P(A∩B)/P(B)",
  "d": "If P(A∩B) = 0.2 and P(B) = 0.5, find P(A|B)."
},
{
  "subject": "Maths",
  "topic": "Probability",
  "subtopic": "Independent Events",
  "level": "Advanced",
  "q": "Independent Events",
  "a": "P(A)P(B)",
  "full": "P(A∩B) = P(A)P(B)",
  "d": "If P(A) = 0.20 and P(B) = 0.30, find P(A∩B)."
},

{
  "subject": "Maths",
  "topic": "Probability",
  "subtopic": "Bayes Theorem",
  "level": "Advanced",
  "q": "Bayes' Theorem",
  "a": "P(B|A)P(A)/P(B)",
  "full": "P(A|B) = P(B|A)P(A)/P(B)",
  "d": "If P(B|A) = 0.8, P(A) = 0.2 and P(B) = 0.4, find P(A|B)."
},

{
  "subject": "Maths",
  "topic": "Statistics",
  "subtopic": "Central Tendency",
  "level": "Beginner",
  "q": "Arithmetic Mean",
  "a": "Σx/n",
  "full": "Mean = Σx/n",
  "d": "Find the mean of the numbers 2, 4, 6, 8 and 10."
},

{
  "subject": "Maths",
  "topic": "Statistics",
  "subtopic": "Dispersion",
  "level": "Beginner",
  "q": "Population Variance",
  "a": "Σ(x-μ)²/N",
  "full": "σ² = Σ(x-μ)²/N",
  "d": "Find the variance of the data set {2, 4, 6, 8, 10}."
},

{
  "subject": "Maths",
  "topic": "Statistics",
  "subtopic": "Dispersion",
  "level": "Beginner",
  "q": "Standard Deviation",
  "a": "√Variance",
  "full": "σ = √Variance",
  "d": "The variance of a data set is 25. Find its standard deviation."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Sets",
  "level": "Beginner",
  "q": "Union of Two Sets",
  "a": "n(A) + n(B) - n(A∩B)",
  "full": "n(A∪B) = n(A) + n(B) - n(A∩B)",
  "d": "If n(A) = 40, n(B) = 35 and n(A∩B) = 15, find n(A∪B)."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Sets",
  "level": "Beginner",
  "q": "Complement of a Set",
  "a": "n(U) - n(A)",
  "full": "n(A') = n(U) - n(A)",
  "d": "If n(U) = 100 and n(A) = 30, find n(A')."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Sets",
  "level": "Advanced",
  "q": "Inclusion-Exclusion Principle",
  "a": "n(A)+n(B)+n(C)-n(A∩B)-n(B∩C)-n(C∩A)+n(A∩B∩C)",
  "full": "n(A∪B∪C) = n(A)+n(B)+n(C)-n(A∩B)-n(B∩C)-n(C∩A)+n(A∩B∩C)",
  "d": "Find n(A∪B∪C) using the inclusion-exclusion principle."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Relations",
  "level": "Advanced",
  "q": "Number of Relations from A to B",
  "a": "2^(mn)",
  "full": "Relations = 2^(mn)",
  "d": "Find the number of relations from a set of 3 elements to a set of 2 elements."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Relations",
  "level": "Advanced",
  "q": "Number of Relations on a Set",
  "a": "2^(n²)",
  "full": "Relations on Set = 2^(n²)",
  "d": "Find the number of relations on a set containing 3 elements."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Functions",
  "level": "Advanced",
  "q": "Composition of Functions",
  "a": "f(g(x))",
  "full": "(f∘g)(x) = f(g(x))",
  "d": "If f(x) = x² and g(x) = x + 1, find (f∘g)(x)."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Functions",
  "level": "Beginner",
  "q": "Inverse Function Property",
  "a": "f(f⁻¹(x)) = x",
  "full": "f(f⁻¹(x)) = x",
  "d": "Simplify f(f⁻¹(5))."
},

{
  "subject": "Maths",
  "topic": "Sets, Relations & Functions",
  "subtopic": "Functions",
  "level": "Beginner",
  "q": "Identity Function",
  "a": "I(x) = x",
  "full": "I(x) = x",
  "d": "Find I(7)."
},

{
  "subject": "Maths",
  "topic": "Mathematical Reasoning",
  "subtopic": "Logic",
  "level": "Beginner",
  "q": "Logical Implication",
  "a": "p→q ≡ ¬p ∨ q",
  "full": "p→q ≡ ¬p ∨ q",
  "d": "Express p→q using only OR and NOT operations."
},

{
  "subject": "Maths",
  "topic": "Mathematical Reasoning",
  "subtopic": "Logic",
  "level": "Beginner",
  "q": "Converse of an Implication",
  "a": "p→q ≡ q→p",
  "full": "Converse(p→q) = q→p",
  "d": "Find the converse of the statement p→q."
},

{
  "subject": "Maths",
  "topic": "Mathematical Reasoning",
  "subtopic": "Logic",
  "level": "Beginner",
  "q": "Contrapositive",
  "a": "p→q ≡ ¬q → ¬p",
  "full": "Contrapositive(p→q) = ¬q → ¬p",
  "d": "Find the contrapositive of the statement p→q."
},

{
  "subject": "Maths",
  "topic": "Mathematical Reasoning",
  "subtopic": "Logic",
  "level": "Beginner",
  "q": "De Morgan's Law",
  "a": "¬(p ∧ q) ≡ ¬p ∨ ¬q",
  "full": "¬(p ∧ q) ≡ ¬p ∨ ¬q",
  "d": "Simplify ¬(p ∧ q) using De Morgan's Law."
}

];