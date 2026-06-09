// data.js

const bank = [    

    // Physics
	
	{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Error Analysis",
  "level": "Beginner",
  "q": "Percentage Error",
  "a": "% Error = (ΔA/A) × 100",
  "d": "Percentage uncertainty in a measurement."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Error Analysis",
  "level": "Advanced",
  "q": "Error in Product",
  "a": "ΔZ/Z = ΔA/A + ΔB/B",
  "d": "Relative errors add during multiplication."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Beginner",
  "q": "Magnitude of Vector",
  "a": "|A| = √(Ax² + Ay² + Az²)",
  "d": "Calculates the magnitude of a vector."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Advanced",
  "q": "Dot Product",
  "a": "A·B = AB cosθ",
  "d": "Scalar product of two vectors."
},

{
  "subject": "Physics",
  "topic": "Units & Vectors",
  "subtopic": "Vector Operations",
  "level": "Advanced",
  "q": "Vector Triple Product",
  "a": "A × (B × C) = B(A·C) − C(A·B)",
  "d": "Expansion of vector triple product."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Equations of Motion",
  "level": "Beginner",
  "q": "First Equation of Motion",
  "a": "v = u + at",
  "d": "Relates final velocity to initial velocity."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Equations of Motion",
  "level": "Beginner",
  "q": "Second Equation of Motion",
  "a": "s = ut + ½at²",
  "d": "Displacement after time t."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Equations of Motion",
  "level": "Beginner",
  "q": "Third Equation of Motion",
  "a": "v² = u² + 2as",
  "d": "Velocity-displacement relation."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Projectile Motion",
  "level": "Advanced",
  "q": "Range of Projectile",
  "a": "R = u²sin(2θ)/g",
  "d": "Horizontal distance travelled."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Projectile Motion",
  "level": "Advanced",
  "q": "Maximum Height",
  "a": "H = u²sin²θ/(2g)",
  "d": "Maximum vertical height attained."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Newton's Laws",
  "level": "Beginner",
  "q": "Newton's Second Law",
  "a": "F = ma",
  "d": "Force equals mass times acceleration."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Momentum",
  "level": "Beginner",
  "q": "Linear Momentum",
  "a": "p = mv",
  "d": "Product of mass and velocity."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Impulse",
  "level": "Advanced",
  "q": "Impulse",
  "a": "J = FΔt",
  "d": "Change in momentum."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Friction",
  "level": "Advanced",
  "q": "Limiting Friction",
  "a": "f = μN",
  "d": "Maximum static friction."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Circular Motion",
  "level": "Advanced",
  "q": "Banking Angle",
  "a": "tanθ = v²/(rg)",
  "d": "Angle required for frictionless banking."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Work",
  "level": "Beginner",
  "q": "Work Done",
  "a": "W = Fs cosθ",
  "d": "Work done by a constant force."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Energy",
  "level": "Beginner",
  "q": "Kinetic Energy",
  "a": "KE = ½mv²",
  "d": "Energy due to motion."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Energy",
  "level": "Beginner",
  "q": "Potential Energy",
  "a": "PE = mgh",
  "d": "Energy due to height."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Power",
  "level": "Beginner",
  "q": "Power",
  "a": "P = W/t",
  "d": "Rate of doing work."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Spring",
  "level": "Advanced",
  "q": "Spring Potential Energy",
  "a": "U = ½kx²",
  "d": "Energy stored in a spring."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Position",
  "level": "Advanced",
  "q": "Center of Mass",
  "a": "xcm = Σ(mixi)/Σ(mi)",
  "d": "Position of center of mass."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Torque",
  "level": "Beginner",
  "q": "Torque",
  "a": "τ = rF sinθ",
  "d": "Turning effect of force."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Angular Momentum",
  "level": "Advanced",
  "q": "Angular Momentum",
  "a": "L = Iω",
  "d": "Rotational equivalent of momentum."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Moment of Inertia",
  "level": "Advanced",
  "q": "Parallel Axis Theorem",
  "a": "I = Icm + Md²",
  "d": "Moment of inertia about a parallel axis."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Universal Gravitation",
  "level": "Beginner",
  "q": "Gravitational Force",
  "a": "F = GMm/r²",
  "d": "Force between two masses."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Satellite Motion",
  "level": "Advanced",
  "q": "Orbital Velocity",
  "a": "v = √(GM/R)",
  "d": "Velocity required for satellite orbit."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Escape Velocity",
  "level": "Advanced",
  "q": "Escape Velocity",
  "a": "ve = √(2GM/R)",
  "d": "Minimum velocity required to escape a planet's gravitational field."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Gravitational Potential",
  "level": "Advanced",
  "q": "Gravitational Potential",
  "a": "V = -GM/r",
  "d": "Potential energy per unit mass."
},

{
  "subject": "Physics",
  "topic": "Mechanics",
  "subtopic": "Satellite Motion",
  "level": "Advanced",
  "q": "Time Period of Satellite",
  "a": "T = 2π√(R³/GM)",
  "d": "Orbital time period of a satellite."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Elasticity",
  "level": "Beginner",
  "q": "Stress",
  "a": "Stress = Force/Area",
  "d": "Internal restoring force per unit area."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Elasticity",
  "level": "Beginner",
  "q": "Strain",
  "a": "Strain = ΔL/L",
  "d": "Fractional deformation."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Elasticity",
  "level": "Advanced",
  "q": "Young's Modulus",
  "a": "Y = Stress/Strain",
  "d": "Ratio of longitudinal stress to strain."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Surface Tension",
  "level": "Advanced",
  "q": "Excess Pressure in Soap Bubble",
  "a": "ΔP = 4T/r",
  "d": "Pressure difference across a soap bubble."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Fluid Pressure",
  "level": "Beginner",
  "q": "Pressure",
  "a": "P = F/A",
  "d": "Force acting per unit area."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Hydrostatics",
  "level": "Beginner",
  "q": "Hydrostatic Pressure",
  "a": "P = ρgh",
  "d": "Pressure due to a liquid column."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Buoyancy",
  "level": "Advanced",
  "q": "Buoyant Force",
  "a": "Fb = ρVg",
  "d": "Upward force exerted by a fluid."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Fluid Flow",
  "level": "Advanced",
  "q": "Bernoulli's Equation",
  "a": "P + ½ρv² + ρgh = constant",
  "d": "Conservation of energy in fluid flow."
},

{
  "subject": "Physics",
  "topic": "Matter & Fluids",
  "subtopic": "Viscosity",
  "level": "Advanced",
  "q": "Poiseuille's Law",
  "a": "Q = πr⁴ΔP/(8ηL)",
  "d": "Rate of fluid flow through a tube."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Thermal Expansion",
  "level": "Beginner",
  "q": "Linear Expansion",
  "a": "ΔL = αLΔT",
  "d": "Change in length due to temperature."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Thermal Expansion",
  "level": "Advanced",
  "q": "Area Expansion",
  "a": "ΔA = 2αAΔT",
  "d": "Change in area due to temperature."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Calorimetry",
  "level": "Beginner",
  "q": "Heat Energy",
  "a": "Q = mcΔT",
  "d": "Heat required to change temperature."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Latent Heat",
  "level": "Advanced",
  "q": "Latent Heat",
  "a": "Q = mL",
  "d": "Heat required during phase change."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "First Law",
  "level": "Beginner",
  "q": "First Law of Thermodynamics",
  "a": "ΔQ = ΔU + W",
  "d": "Conservation of energy for thermodynamic systems."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Ideal Gas",
  "level": "Beginner",
  "q": "Ideal Gas Equation",
  "a": "PV = nRT",
  "d": "Equation of state for an ideal gas."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Isothermal Process",
  "level": "Advanced",
  "q": "Work Done in Isothermal Process",
  "a": "W = nRT ln(V₂/V₁)",
  "d": "Work done during isothermal expansion/compression."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Heat Engine",
  "level": "Advanced",
  "q": "Carnot Efficiency",
  "a": "η = 1 - Tc/Th",
  "d": "Maximum possible efficiency of a heat engine."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Gas Molecules",
  "level": "Advanced",
  "q": "RMS Speed",
  "a": "vrms = √(3RT/M)",
  "d": "Root mean square speed of gas molecules."
},

{
  "subject": "Physics",
  "topic": "Thermal Physics",
  "subtopic": "Gas Pressure",
  "level": "Advanced",
  "q": "Pressure of Ideal Gas",
  "a": "P = (1/3)ρvrms²",
  "d": "Pressure exerted by gas molecules."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Beginner",
  "q": "Displacement in SHM",
  "a": "x = A sin(ωt + φ)",
  "d": "Position of particle executing SHM."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Beginner",
  "q": "Angular Frequency",
  "a": "ω = 2π/T",
  "d": "Relation between angular frequency and time period."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Advanced",
  "q": "Time Period of Spring-Mass System",
  "a": "T = 2π√(m/k)",
  "d": "Time period of a mass attached to a spring."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Advanced",
  "q": "Maximum Velocity",
  "a": "vmax = Aω",
  "d": "Maximum speed in SHM."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Simple Harmonic Motion",
  "level": "Advanced",
  "q": "Maximum Acceleration",
  "a": "amax = Aω²",
  "d": "Maximum acceleration in SHM."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Energy in SHM",
  "level": "Advanced",
  "q": "Total Energy in SHM",
  "a": "E = ½kA²",
  "d": "Total mechanical energy remains constant."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Wave Motion",
  "level": "Beginner",
  "q": "Wave Speed",
  "a": "v = fλ",
  "d": "Relation between speed, frequency and wavelength."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Wave Motion",
  "level": "Beginner",
  "q": "Angular Frequency",
  "a": "ω = 2πf",
  "d": "Angular frequency of a wave."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Wave Motion",
  "level": "Advanced",
  "q": "Wave Number",
  "a": "k = 2π/λ",
  "d": "Spatial frequency of a wave."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "String Waves",
  "level": "Advanced",
  "q": "Speed of Wave on String",
  "a": "v = √(T/μ)",
  "d": "Wave speed on a stretched string."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Standing Waves",
  "level": "Advanced",
  "q": "Fundamental Frequency",
  "a": "f = v/(2L)",
  "d": "Frequency of first harmonic in a stretched string."
},

{
  "subject": "Physics",
  "topic": "Oscillations & Waves",
  "subtopic": "Doppler Effect",
  "level": "Advanced",
  "q": "Doppler Effect",
  "a": "f' = f[(v ± vo)/(v ∓ vs)]",
  "d": "Apparent frequency due to relative motion."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Charges",
  "level": "Beginner",
  "q": "Coulomb's Law",
  "a": "F = kq₁q₂/r²",
  "d": "Electrostatic force between two charges."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Field",
  "level": "Beginner",
  "q": "Electric Field",
  "a": "E = F/q",
  "d": "Force experienced per unit charge."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Field",
  "level": "Advanced",
  "q": "Electric Field due to Point Charge",
  "a": "E = kq/r²",
  "d": "Electric field at distance r."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Potential",
  "level": "Advanced",
  "q": "Electric Potential",
  "a": "V = kq/r",
  "d": "Potential due to a point charge."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Potential Energy",
  "level": "Advanced",
  "q": "Potential Energy of Two Charges",
  "a": "U = kq₁q₂/r",
  "d": "Electrostatic potential energy."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Dipole",
  "level": "Advanced",
  "q": "Dipole Moment",
  "a": "p = qd",
  "d": "Measure of electric dipole strength."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitors",
  "level": "Beginner",
  "q": "Capacitance Definition",
  "a": "C = Q/V",
  "d": "Charge stored per unit potential difference."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Parallel Plate Capacitor",
  "level": "Advanced",
  "q": "Capacitance of Parallel Plate Capacitor",
  "a": "C = ε₀A/d",
  "d": "Capacitance of two parallel conducting plates."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitor Energy",
  "level": "Advanced",
  "q": "Energy Stored",
  "a": "U = ½CV²",
  "d": "Electrostatic energy stored in capacitor."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitor Combination",
  "level": "Advanced",
  "q": "Series Combination",
  "a": "1/Ceq = 1/C₁ + 1/C₂ + ...",
  "d": "Equivalent capacitance in series."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Capacitor Combination",
  "level": "Advanced",
  "q": "Parallel Combination",
  "a": "Ceq = C₁ + C₂ + ...",
  "d": "Equivalent capacitance in parallel."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electric Current",
  "level": "Beginner",
  "q": "Electric Current",
  "a": "I = Q/t",
  "d": "Rate of flow of electric charge."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Ohm's Law",
  "level": "Beginner",
  "q": "Ohm's Law",
  "a": "V = IR",
  "d": "Relation between voltage, current and resistance."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Resistance",
  "level": "Advanced",
  "q": "Resistance of Conductor",
  "a": "R = ρL/A",
  "d": "Resistance in terms of resistivity."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electrical Power",
  "level": "Advanced",
  "q": "Electrical Power",
  "a": "P = VI",
  "d": "Rate of electrical energy consumption."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electrical Power",
  "level": "Advanced",
  "q": "Power using Resistance",
  "a": "P = I²R",
  "d": "Power dissipated in resistor."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Electrical Energy",
  "level": "Advanced",
  "q": "Electrical Energy",
  "a": "W = VIt",
  "d": "Electrical work done."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Kirchhoff's Laws",
  "level": "Advanced",
  "q": "Junction Rule",
  "a": "ΣIin = ΣIout",
  "d": "Conservation of charge at a junction."
},

{
  "subject": "Physics",
  "topic": "Electricity",
  "subtopic": "Wheatstone Bridge",
  "level": "Advanced",
  "q": "Balance Condition",
  "a": "P/Q = R/S",
  "d": "Condition for balanced Wheatstone bridge."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Field",
  "level": "Beginner",
  "q": "Magnetic Force on Moving Charge",
  "a": "F = qvB sinθ",
  "d": "Force acting on a moving charge in magnetic field."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Field",
  "level": "Beginner",
  "q": "Magnetic Force on Current Carrying Wire",
  "a": "F = BIL sinθ",
  "d": "Force acting on a current carrying conductor."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Biot-Savart Law",
  "level": "Advanced",
  "q": "Field due to Long Straight Wire",
  "a": "B = μ₀I/(2πr)",
  "d": "Magnetic field at distance r from wire."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Circular Loop",
  "level": "Advanced",
  "q": "Field at Center of Circular Loop",
  "a": "B = μ₀I/(2R)",
  "d": "Magnetic field at center of current loop."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Solenoid",
  "level": "Advanced",
  "q": "Field inside Solenoid",
  "a": "B = μ₀nI",
  "d": "Magnetic field inside a long solenoid."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Current Loop",
  "level": "Advanced",
  "q": "Magnetic Dipole Moment",
  "a": "M = NIA",
  "d": "Magnetic moment of a current loop."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Bar Magnet",
  "level": "Beginner",
  "q": "Torque on Magnetic Dipole",
  "a": "τ = MB sinθ",
  "d": "Torque acting on magnetic dipole."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Bar Magnet",
  "level": "Advanced",
  "q": "Potential Energy of Dipole",
  "a": "U = -MB cosθ",
  "d": "Potential energy in magnetic field."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Earth Magnetism",
  "level": "Advanced",
  "q": "Tan A Law",
  "a": "B = BH tanθ",
  "d": "Used in tangent galvanometer."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Materials",
  "level": "Advanced",
  "q": "Magnetic Susceptibility",
  "a": "χm = M/H",
  "d": "Measure of magnetization of material."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Magnetic Flux",
  "level": "Beginner",
  "q": "Magnetic Flux",
  "a": "Φ = BA cosθ",
  "d": "Magnetic field passing through area."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Faraday Law",
  "level": "Advanced",
  "q": "Induced EMF",
  "a": "E = -dΦ/dt",
  "d": "Faraday's law of electromagnetic induction."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Motional EMF",
  "level": "Advanced",
  "q": "Motional EMF",
  "a": "E = Blv",
  "d": "EMF induced in moving conductor."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Self Inductance",
  "level": "Advanced",
  "q": "Self Induced EMF",
  "a": "E = -L(dI/dt)",
  "d": "EMF due to changing current."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Inductor",
  "level": "Advanced",
  "q": "Energy Stored in Inductor",
  "a": "U = ½LI²",
  "d": "Magnetic energy stored in an inductor."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Current",
  "level": "Beginner",
  "q": "Instantaneous Current",
  "a": "i = I₀ sinωt",
  "d": "Current variation in AC circuit."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Voltage",
  "level": "Beginner",
  "q": "Instantaneous Voltage",
  "a": "V = V₀ sinωt",
  "d": "Voltage variation in AC circuit."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "RMS Values",
  "level": "Advanced",
  "q": "RMS Current",
  "a": "Irms = I₀/√2",
  "d": "Effective value of AC current."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "RMS Values",
  "level": "Advanced",
  "q": "RMS Voltage",
  "a": "Vrms = V₀/√2",
  "d": "Effective value of AC voltage."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Circuit",
  "level": "Advanced",
  "q": "Inductive Reactance",
  "a": "XL = ωL",
  "d": "Opposition offered by inductor."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "AC Circuit",
  "level": "Advanced",
  "q": "Capacitive Reactance",
  "a": "XC = 1/(ωC)",
  "d": "Opposition offered by capacitor."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Transformer",
  "level": "Advanced",
  "q": "Transformer Equation",
  "a": "Vp/Vs = Np/Ns",
  "d": "Relation between voltage and turns ratio."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Wave Properties",
  "level": "Beginner",
  "q": "Speed of Electromagnetic Wave",
  "a": "c = νλ",
  "d": "Relation between frequency and wavelength."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Wave Properties",
  "level": "Advanced",
  "q": "Speed in Vacuum",
  "a": "c = 1/√(μ₀ε₀)",
  "d": "Speed of light in vacuum."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Electric and Magnetic Fields",
  "level": "Advanced",
  "q": "Field Ratio",
  "a": "E/B = c",
  "d": "Relation between electric and magnetic field amplitudes."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Photon Energy",
  "level": "Advanced",
  "q": "Photon Energy",
  "a": "E = hν",
  "d": "Energy carried by a photon."
},

{
  "subject": "Physics",
  "topic": "Magnetism & EMI",
  "subtopic": "Photon Momentum",
  "level": "Advanced",
  "q": "Photon Momentum",
  "a": "p = h/λ",
  "d": "Momentum associated with a photon."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Reflection",
  "level": "Beginner",
  "q": "Mirror Formula",
  "a": "1/f = 1/v + 1/u",
  "d": "Relation between focal length, image distance and object distance."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Reflection",
  "level": "Advanced",
  "q": "Magnification in Mirror",
  "a": "m = -v/u",
  "d": "Ratio of image height to object height."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Refraction",
  "level": "Beginner",
  "q": "Snell's Law",
  "a": "n₁sinθ₁ = n₂sinθ₂",
  "d": "Law governing refraction of light."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Refraction",
  "level": "Advanced",
  "q": "Refractive Index",
  "a": "n = c/v",
  "d": "Ratio of speed of light in vacuum to medium."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Lens",
  "level": "Beginner",
  "q": "Lens Formula",
  "a": "1/f = 1/v - 1/u",
  "d": "Relation between focal length, image distance and object distance."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Lens",
  "level": "Advanced",
  "q": "Magnification in Lens",
  "a": "m = v/u",
  "d": "Linear magnification produced by lens."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Lens",
  "level": "Advanced",
  "q": "Lens Maker Formula",
  "a": "1/f = (n-1)(1/R₁ - 1/R₂)",
  "d": "Focal length of a lens from its radii of curvature."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Prism",
  "level": "Advanced",
  "q": "Prism Formula",
  "a": "μ = sin((A+δm)/2)/sin(A/2)",
  "d": "Refractive index of prism material."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Interference",
  "level": "Advanced",
  "q": "Fringe Width",
  "a": "β = λD/d",
  "d": "Width of interference fringes in YDSE."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Interference",
  "level": "Advanced",
  "q": "Path Difference",
  "a": "Δ = nλ",
  "d": "Condition for constructive interference."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Diffraction",
  "level": "Advanced",
  "q": "Single Slit Diffraction",
  "a": "a sinθ = nλ",
  "d": "Condition for diffraction minima."
},

{
  "subject": "Physics",
  "topic": "Optics",
  "subtopic": "Polarization",
  "level": "Advanced",
  "q": "Malus Law",
  "a": "I = I₀cos²θ",
  "d": "Intensity after passing through analyzer."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photon",
  "level": "Beginner",
  "q": "Photon Energy",
  "a": "E = hν",
  "d": "Energy carried by a photon."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photon",
  "level": "Advanced",
  "q": "Photon Momentum",
  "a": "p = h/λ",
  "d": "Momentum associated with light."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Matter Waves",
  "level": "Advanced",
  "q": "de Broglie Wavelength",
  "a": "λ = h/p",
  "d": "Wavelength associated with moving particle."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photoelectric Effect",
  "level": "Advanced",
  "q": "Einstein Photoelectric Equation",
  "a": "hν = Φ + KEmax",
  "d": "Energy conservation in photoelectric effect."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Photoelectric Effect",
  "level": "Advanced",
  "q": "Stopping Potential",
  "a": "KEmax = eV₀",
  "d": "Maximum kinetic energy of photoelectrons."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Radius of nth Orbit",
  "a": "rn = n²a₀/Z",
  "d": "Radius of electron orbit in Bohr model."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Velocity of Electron",
  "a": "vn = (Zαc)/n",
  "d": "Electron speed in nth orbit."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Bohr Model",
  "level": "Advanced",
  "q": "Energy of nth Orbit",
  "a": "En = -13.6(Z²/n²) eV",
  "d": "Energy of electron in hydrogen-like atom."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Spectral Series",
  "level": "Advanced",
  "q": "Rydberg Formula",
  "a": "1/λ = RZ²(1/n₁² - 1/n₂²)",
  "d": "Wavelength of emitted spectral lines."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Nuclear Properties",
  "level": "Beginner",
  "q": "Mass-Energy Relation",
  "a": "E = mc²",
  "d": "Equivalence of mass and energy."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Binding Energy",
  "level": "Advanced",
  "q": "Binding Energy",
  "a": "BE = Δmc²",
  "d": "Energy required to separate nucleus."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Radioactivity",
  "level": "Advanced",
  "q": "Radioactive Decay Law",
  "a": "N = N₀e^(-λt)",
  "d": "Number of undecayed nuclei after time t."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Radioactivity",
  "level": "Advanced",
  "q": "Half Life",
  "a": "T½ = 0.693/λ",
  "d": "Time required for half the nuclei to decay."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Radioactivity",
  "level": "Advanced",
  "q": "Activity",
  "a": "A = λN",
  "d": "Rate of radioactive disintegration."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Current Flow",
  "level": "Beginner",
  "q": "Current",
  "a": "I = Q/t",
  "d": "Rate of flow of charge carriers."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Diode",
  "level": "Advanced",
  "q": "Diode Current Equation",
  "a": "I = I₀(e^(eV/ηkT)-1)",
  "d": "Current-voltage relation of p-n junction diode."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Logic Gates",
  "level": "Advanced",
  "q": "NOT Gate Output",
  "a": "Y = Ā",
  "d": "Output is complement of input."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Logic Gates",
  "level": "Advanced",
  "q": "AND Gate Output",
  "a": "Y = A·B",
  "d": "Output is high only when all inputs are high."
},

{
  "subject": "Physics",
  "topic": "Modern Physics",
  "subtopic": "Logic Gates",
  "level": "Advanced",
  "q": "OR Gate Output",
  "a": "Y = A+B",
  "d": "Output is high when at least one input is high."
},


	
	//Chemistry
	
	{
  "subject":"Chemistry",
  "topic":"Mole Concept",
  "subtopic":"Basic Relations",
  "level":"Beginner",
  "q":"Number of Moles",
  "a":"n = m/M",
  "d":"Number of moles from mass."
},

{
  "subject":"Chemistry",
  "topic":"Mole Concept",
  "subtopic":"Particles",
  "level":"Beginner",
  "q":"Number of Particles",
  "a":"N = nNA",
  "d":"Particles present in n moles."
},

{
  "subject":"Chemistry",
  "topic":"Mole Concept",
  "subtopic":"Gas Volume",
  "level":"Advanced",
  "q":"Volume at STP",
  "a":"V = 22.4n",
  "d":"Volume occupied by ideal gas at STP."
},

{
  "subject":"Chemistry",
  "topic":"Mole Concept",
  "subtopic":"Concentration",
  "level":"Advanced",
  "q":"Molarity",
  "a":"M = n/V",
  "d":"Moles per litre of solution."
},

{
  "subject":"Chemistry",
  "topic":"Atomic Structure",
  "subtopic":"Bohr Model",
  "level":"Advanced",
  "q":"Radius of nth Orbit",
  "a":"rn = n²a₀/Z",
  "d":"Radius of Bohr orbit."
},

{
  "subject":"Chemistry",
  "topic":"Atomic Structure",
  "subtopic":"Bohr Model",
  "level":"Advanced",
  "q":"Energy of nth Orbit",
  "a":"En = -13.6(Z²/n²)",
  "d":"Energy of electron in orbit."
},

{
  "subject":"Chemistry",
  "topic":"Atomic Structure",
  "subtopic":"Matter Waves",
  "level":"Advanced",
  "q":"de Broglie Wavelength",
  "a":"λ = h/p",
  "d":"Wavelength associated with particle."
},

{
  "subject":"Chemistry",
  "topic":"States of Matter",
  "subtopic":"Gas Laws",
  "level":"Beginner",
  "q":"Ideal Gas Equation",
  "a":"PV = nRT",
  "d":"Equation of state of ideal gas."
},

{
  "subject":"Chemistry",
  "topic":"States of Matter",
  "subtopic":"Gas Mixtures",
  "level":"Advanced",
  "q":"Dalton's Law",
  "a":"Ptotal = P1 + P2 + ...",
  "d":"Total pressure equals sum of partial pressures."
},

{
  "subject":"Chemistry",
  "topic":"States of Matter",
  "subtopic":"Kinetic Theory",
  "level":"Advanced",
  "q":"RMS Velocity",
  "a":"vrms = √(3RT/M)",
  "d":"Root mean square velocity."
},

{
  "subject":"Chemistry",
  "topic":"States of Matter",
  "subtopic":"Kinetic Theory",
  "level":"Advanced",
  "q":"Average KE",
  "a":"KE = (3/2)RT",
  "d":"Average kinetic energy per mole."
},

{
  "subject":"Chemistry",
  "topic":"Thermal Chemistry",
  "subtopic":"First Law",
  "level":"Beginner",
  "q":"First Law",
  "a":"ΔU = q + w",
  "d":"Conservation of energy."
},

{
  "subject":"Chemistry",
  "topic":"Thermal Chemistry",
  "subtopic":"Enthalpy",
  "level":"Advanced",
  "q":"Enthalpy Change",
  "a":"ΔH = ΔU + ΔnRT",
  "d":"Relation between enthalpy and internal energy."
},

{
  "subject":"Chemistry",
  "topic":"Thermal Chemistry",
  "subtopic":"Spontaneity",
  "level":"Advanced",
  "q":"Gibbs Free Energy",
  "a":"ΔG = ΔH - TΔS",
  "d":"Criterion for spontaneity."
},

{
  "subject":"Chemistry",
  "topic":"Equilibrium",
  "subtopic":"Equilibrium Constant",
  "level":"Beginner",
  "q":"Kc Expression",
  "a":"Kc = [Products]/[Reactants]",
  "d":"Equilibrium constant."
},

{
  "subject":"Chemistry",
  "topic":"Equilibrium",
  "subtopic":"Gas Equilibrium",
  "level":"Advanced",
  "q":"Kp and Kc Relation",
  "a":"Kp = Kc(RT)^Δn",
  "d":"Relation between Kp and Kc."
},

{
  "subject":"Chemistry",
  "topic":"Equilibrium",
  "subtopic":"pH",
  "level":"Beginner",
  "q":"pH",
  "a":"pH = -log[H+]",
  "d":"Measure of acidity."
},

{
  "subject":"Chemistry",
  "topic":"Equilibrium",
  "subtopic":"pOH",
  "level":"Beginner",
  "q":"pOH",
  "a":"pOH = -log[OH-]",
  "d":"Measure of basicity."
},

{
  "subject":"Chemistry",
  "topic":"Equilibrium",
  "subtopic":"Water",
  "level":"Advanced",
  "q":"Ionic Product of Water",
  "a":"Kw = [H+][OH-]",
  "d":"Water ionization constant."
},

{
  "subject":"Chemistry",
  "topic":"Equilibrium",
  "subtopic":"Buffers",
  "level":"Advanced",
  "q":"Henderson Equation",
  "a":"pH = pKa + log([Salt]/[Acid])",
  "d":"Buffer pH."
},

{
  "subject":"Chemistry",
  "topic":"Redox Reactions",
  "subtopic":"Equivalent Weight",
  "level":"Advanced",
  "q":"Equivalent Weight",
  "a":"Eq. wt = Molecular Weight/n-factor",
  "d":"Equivalent weight calculation."
},

{
  "subject":"Chemistry",
  "topic":"Solutions",
  "subtopic":"Concentration",
  "level":"Beginner",
  "q":"Mole Fraction",
  "a":"χ = Moles of Component/Total Moles",
  "d":"Mole fraction of component."
},

{
  "subject":"Chemistry",
  "topic":"Solutions",
  "subtopic":"Colligative Properties",
  "level":"Advanced",
  "q":"Relative Lowering of Vapour Pressure",
  "a":"ΔP/P° = Xsolute",
  "d":"Raoult's law."
},

{
  "subject":"Chemistry",
  "topic":"Solutions",
  "subtopic":"Colligative Properties",
  "level":"Advanced",
  "q":"Osmotic Pressure",
  "a":"π = CRT",
  "d":"Osmotic pressure of solution."
},

{
  "subject":"Chemistry",
  "topic":"Electrochemistry",
  "subtopic":"Cells",
  "level":"Beginner",
  "q":"Cell EMF",
  "a":"Ecell = Ecathode - Eanode",
  "d":"Cell potential."
},

{
  "subject":"Chemistry",
  "topic":"Electrochemistry",
  "subtopic":"Nernst Equation",
  "level":"Advanced",
  "q":"Nernst Equation",
  "a":"E = E° - (0.0591/n)logQ",
  "d":"Electrode potential."
},

{
  "subject":"Chemistry",
  "topic":"Chemical Kinetics",
  "subtopic":"Rate Law",
  "level":"Beginner",
  "q":"Rate Equation",
  "a":"Rate = k[A]^m[B]^n",
  "d":"General rate law."
},

{
  "subject":"Chemistry",
  "topic":"Chemical Kinetics",
  "subtopic":"Half Life",
  "level":"Advanced",
  "q":"First Order Half Life",
  "a":"t1/2 = 0.693/k",
  "d":"Half-life of first order reaction."
},

{
  "subject":"Chemistry",
  "topic":"Chemical Kinetics",
  "subtopic":"Arrhenius Equation",
  "level":"Advanced",
  "q":"Arrhenius Equation",
  "a":"k = Ae^(-Ea/RT)",
  "d":"Temperature dependence of rate constant."
},


{
  "subject":"Chemistry",
  "topic":"Surface Chemistry",
  "subtopic":"Adsorption",
  "level":"Advanced",
  "q":"Freundlich Adsorption Isotherm",
  "a":"x/m = kP^(1/n)",
  "d":"Adsorption relationship."
},

{
  "subject":"Chemistry",
  "topic":"Solid State",
  "subtopic":"Density",
  "level":"Advanced",
  "q":"Crystal Density",
  "a":"ρ = ZM/(a³NA)",
  "d":"Density of unit cell."
},

{
  "subject":"Chemistry",
  "topic":"Solid State",
  "subtopic":"Unit Cell",
  "level":"Advanced",
  "q":"Packing Efficiency",
  "a":"Packing Efficiency = (Volume Occupied/Total Volume) × 100",
  "d":"Space occupied in crystal lattice."
},





	//--------------------------------------
	//Mathematics
	//--------------------------------------------------------------------


//Algebra

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Quadratic Equations",
  level:"Beginner",
  q:"Quadratic Formula",
  a:"x = (-b ± √(b²-4ac))/2a",
  d:"Roots of ax² + bx + c = 0."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Quadratic Equations",
  level:"Beginner",
  q:"Sum of Roots",
  a:"α + β = -b/a",
  d:"Relation between roots and coefficients."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Quadratic Equations",
  level:"Beginner",
  q:"Product of Roots",
  a:"αβ = c/a",
  d:"Relation between roots and coefficients."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Quadratic Equations",
  level:"Beginner",
  q:"Discriminant",
  a:"D = b² - 4ac",
  d:"Determines nature of roots."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Complex Numbers",
  level:"Beginner",
  q:"Magnitude of complex number",
  a:"|z| = √(a²+b²)",
  d:"Magnitude of z = a + ib."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Complex Numbers",
  level:"Advanced",
  q:"De Moivre's Theorem",
  a:"(cosθ+i sinθ)ⁿ = cos(nθ)+i sin(nθ)",
  d:"Used for powers and roots of complex numbers."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Sequence & Series",
  level:"Beginner",
  q:"nth Term of AP",
  a:"aₙ = a + (n−1)d",
  d:"General term of arithmetic progression."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Sequence & Series",
  level:"Advanced",
  q:"Sum of AP",
  a:"Sₙ = n/2[2a+(n−1)d]",
  d:"Sum of first n terms of AP."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Sequence & Series",
  level:"Beginner",
  q:"nth Term of GP",
  a:"aₙ = arⁿ⁻¹",
  d:"General term of geometric progression."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Sequence & Series",
  level:"Advanced",
  q:"Sum of GP",
  a:"Sₙ = a(rⁿ−1)/(r−1)",
  d:"Sum of first n terms of GP."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Sequence & Series",
  level:"Advanced",
  q:"Infinite GP",
  a:"S∞ = a/(1−r)",
  d:"Valid when |r| < 1."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Binomial Theorem",
  level:"Advanced",
  q:"General Term",
  a:"T(r+1)=ⁿCᵣ aⁿ⁻ʳ bʳ",
  d:"General term in binomial expansion."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Permutation & Combination",
  level:"Beginner",
  q:"Permutation Formula",
  a:"ⁿPᵣ = n!/(n−r)!",
  d:"Number of arrangements."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Permutation & Combination",
  level:"Beginner",
  q:"Combination Formula",
  a:"ⁿCᵣ = n!/[r!(n−r)!]",
  d:"Number of selections."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Matrices & Determinants",
  level:"Advanced",
  q:"Inverse Matrix",
  a:"A⁻¹ = adj(A)/|A|",
  d:"Exists only if determinant ≠ 0."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Matrices & Determinants",
  level:"Advanced",
  q:"2×2 Determinant",
  a:"|A| = ad−bc",
  d:"Determinant of a 2×2 matrix."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Probability",
  level:"Advanced",
  q:"Conditional Probability",
  a:"P(A|B)=P(A∩B)/P(B)",
  d:"Probability of A given B."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Probability",
  level:"Advanced",
  q:"Bayes Theorem",
  a:"P(A|B)=P(B|A)P(A)/P(B)",
  d:"Updates probability using evidence."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Statistics",
  level:"Beginner",
  q:"Variance",
  a:"σ² = Σ(x−μ)²/N",
  d:"Measure of spread."
},

{
  subject:"Maths",
  topic:"Algebra",
  subtopic:"Statistics",
  level:"Beginner",
  q:"Standard Deviation",
  a:"σ = √Variance",
  d:"Square root of variance."
},

// =====================
// LIMITS
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Limits",
  level:"Advanced",
  q:"Standard Limit",
  a:"lim(x→0) sinx/x = 1",
  d:"Most important standard limit."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Limits",
  level:"Advanced",
  q:"Standard Limit",
  a:"lim(x→0) tanx/x = 1",
  d:"Used frequently in trigonometric limits."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Limits",
  level:"Advanced",
  q:"Exponential Limit",
  a:"lim(x→0) (e^x−1)/x = 1",
  d:"Important exponential limit."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Limits",
  level:"Advanced",
  q:"Logarithmic Limit",
  a:"lim(x→0) log(1+x)/x = 1",
  d:"Important logarithmic limit."
},

// =====================
// DIFFERENTIATION
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Power Rule",
  a:"d/dx(xⁿ)=nxⁿ⁻¹",
  d:"Basic differentiation rule."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Derivative of sin(x)",
  a:"d/dx(sinx)=cosx",
  d:"Basic trigonometric derivative."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Derivative of cos(x)",
  a:"d/dx(cosx)=−sinx",
  d:"Basic trigonometric derivative."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Derivative of tan(x)",
  a:"d/dx(tanx)=sec²x",
  d:"Important derivative."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Derivative of sec(x)",
  a:"d/dx(secx)=secx tanx",
  d:"Important derivative."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Derivative of e^x",
  a:"d/dx(e^x)=e^x",
  d:"Exponential differentiation."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Beginner",
  q:"Derivative of ln(x)",
  a:"d/dx(lnx)=1/x",
  d:"Logarithmic differentiation."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differentiation",
  level:"Advanced",
  q:"Chain Rule",
  a:"d/dx[f(g(x))]=f'(g(x))·g'(x)",
  d:"Derivative of composite functions."
},

// =====================
// APPLICATION OF DERIVATIVES
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Application of Derivatives",
  level:"Beginner",
  q:"Slope of Tangent",
  a:"m=dy/dx",
  d:"Slope of tangent to a curve."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Application of Derivatives",
  level:"Advanced",
  q:"Slope of Normal",
  a:"m=−1/(dy/dx)",
  d:"Slope of normal to a curve."
},

// =====================
// INDEFINITE INTEGRATION
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Indefinite Integration",
  level:"Advanced",
  q:"Power Rule Integration",
  a:"∫xⁿdx = xⁿ⁺¹/(n+1)+C",
  d:"n ≠ −1"
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Indefinite Integration",
  level:"Advanced",
  q:"Integral of 1/x",
  a:"∫dx/x = ln|x|+C",
  d:"Special logarithmic integral."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Indefinite Integration",
  level:"Beginner",
  q:"Integral of e^x",
  a:"∫e^x dx = e^x + C",
  d:"Basic exponential integral."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Indefinite Integration",
  level:"Beginner",
  q:"Integral of sin(x)",
  a:"∫sinx dx = −cosx + C",
  d:"Basic trigonometric integral."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Indefinite Integration",
  level:"Beginner",
  q:"Integral of cos(x)",
  a:"∫cosx dx = sinx + C",
  d:"Basic trigonometric integral."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Indefinite Integration",
  level:"Advanced",
  q:"Integration by Parts",
  a:"∫u dv = uv − ∫v du",
  d:"Very important integration technique."
},

// =====================
// DEFINITE INTEGRATION
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Definite Integration",
  level:"Advanced",
  q:"Fundamental Theorem",
  a:"∫[a→b] f(x)dx = F(b)-F(a)",
  d:"Main theorem of definite integration."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Definite Integration",
  level:"Advanced",
  q:"Property",
  a:"∫[0→a]f(x)dx = ∫[0→a]f(a−x)dx",
  d:"Frequently used JEE property."
},

// =====================
// AREA UNDER CURVE
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Area Under Curves",
  level:"Advanced",
  q:"Area Under Curve",
  a:"A = ∫[a→b] y dx",
  d:"Area bounded by curve and x-axis."
},

// =====================
// DIFFERENTIAL EQUATIONS
// =====================

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differential Equations",
  level:"Advanced",
  q:"Variable Separable Form",
  a:"dy/dx = f(x)g(y)",
  d:"Solve by separating variables."
},

{
  subject:"Maths",
  topic:"Calculus",
  subtopic:"Differential Equations",
  level:"Advanced",
  q:"Linear Differential Equation",
  a:"dy/dx + Py = Q",
  d:"Standard first-order linear DE."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:"Beginner",
  q:"Slope Formula",
  a:"m=(y₂-y₁)/(x₂-x₁)",
  d:"Slope of line through two points."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:"Beginner",
  q:"Point-Slope Form",
  a:"y-y₁=m(x-x₁)",
  d:"Equation of line through a point."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:"Beginner",
  q:"Slope-Intercept Form",
  a:"y=mx+c",
  d:"Most common equation of line."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:"Beginner",
  q:"Distance Between Two Points",
  a:"√[(x₂-x₁)²+(y₂-y₁)²]",
  d:"Distance formula."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:["JEE","Advanced"],
  q:"Section Formula",
  a:"[(mx₂+nx₁)/(m+n),(my₂+ny₁)/(m+n)]",
  d:"Internal division."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:"Advanced",
  q:"Distance of Point from Line",
  a:"|Ax₀+By₀+C|/√(A²+B²)",
  d:"Shortest distance."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Straight Lines",
  level:"Advanced",
  q:"Angle Between Two Lines",
  a:"tanθ=|(m₁-m₂)/(1+m₁m₂)|",
  d:"Angle between lines."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Circles",
  level:"Beginner",
  q:"Standard Equation of Circle",
  a:"(x-h)²+(y-k)²=r²",
  d:"Circle with centre (h,k)."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Circles",
  level:"Beginner",
  q:"General Equation of Circle",
  a:"x²+y²+2gx+2fy+c=0",
  d:"General form."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Circles",
  level:"Advanced",
  q:"Radius from General Equation",
  a:"√(g²+f²-c)",
  d:"Radius of circle."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Parabola",
  level:"Advanced",
  q:"Standard Parabola",
  a:"y²=4ax",
  d:"Parabola opening right."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Parabola",
  level:"Advanced",
  q:"Length of Latus Rectum in Parabola",
  a:"4a",
  d:"Important property."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Parabola",
  level:"Advanced",
  q:"Equation of Tangent in Parabola",
  a:"yy₁=2a(x+x₁)",
  d:"Tangent at point."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Ellipse",
  level:"Advanced",
  q:"Standard Ellipse",
  a:"x²/a²+y²/b²=1",
  d:"Ellipse equation."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Ellipse",
  level:["JEE","Advanced"],
  q:"Eccentricity of Ellipse",
  a:"√(1-b²/a²)",
  d:"Shape parameter."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Ellipse",
  level:["JEE","Advanced"],
  q:"Length of Latus Rectum in Ellipse",
  a:"2b²/a",
  d:"Important property."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Hyperbola",
  level:"Beginner",
  q:"Standard Hyperbola",
  a:"x²/a²-y²/b²=1",
  d:"Hyperbola equation."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Hyperbola",
  level:"Advanced",
  q:"Eccentricity of Hyperbola",
  a:"√(1+b²/a²)",
  d:"Always > 1."
},

{
  subject:"Maths",
  topic:"Coordinate Geometry",
  subtopic:"Hyperbola",
  level:"Advanced",
  q:"Asymptotes",
  a:"y=±(b/a)x",
  d:"Most frequently used formula."
},

//Trigonometry

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Ratios",
  level:"Beginner",
  q:"tan θ",
  a:"sinθ/cosθ",
  d:"Fundamental ratio."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Ratios",
  level:"Beginner",
  q:"sec θ",
  a:"1/cosθ",
  d:"Reciprocal of cosine."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Ratios",
  level:"Beginner",
  q:"cosec θ",
  a:"1/sinθ",
  d:"Reciprocal of sine."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Beginner",
  q:"Identity",
  a:"sin²θ + cos²θ = 1",
  d:"Most important identity."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"Identity",
  a:"1 + tan²θ = sec²θ",
  d:"Important identity."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"Identity",
  a:"1 + cot²θ = cosec²θ",
  d:"Important identity."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Beginner",
  q:"sin(A+B)",
  a:"sinA cosB + cosA sinB",
  d:"Addition formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Beginner",
  q:"cos(A+B)",
  a:"cosA cosB − sinA sinB",
  d:"Addition formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"tan(A+B)",
  a:"(tanA+tanB)/(1−tanA tanB)",
  d:"Addition formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"sin 2θ",
  a:"2sinθ cosθ",
  d:"Double angle."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"cos 2θ",
  a:"cos²θ−sin²θ",
  d:"Double angle."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"tan 2θ",
  a:"2tanθ/(1−tan²θ)",
  d:"Double angle."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"sin 3θ",
  a:"3sinθ−4sin³θ",
  d:"Triple angle formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"cos 3θ",
  a:"4cos³θ−3cosθ",
  d:"Triple angle formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"sin²(θ/2)",
  a:"(1−cosθ)/2",
  d:"Half-angle formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Trigonometric Identities",
  level:"Advanced",
  q:"cos²(θ/2)",
  a:"(1+cosθ)/2",
  d:"Half-angle formula."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Inverse Trigonometric Functions",
  level:"Advanced",
  q:"sin⁻¹x + cos⁻¹x",
  a:"π/2",
  d:"Fundamental identity."
},

{
  subject:"Maths",
  topic:"Trigonometry",
  subtopic:"Inverse Trigonometric Functions",
  level:"Advanced",
  q:"tan⁻¹x + cot⁻¹x",
  a:"π/2",
  d:"Fundamental identity."
},

// =====================
// VECTORS
// =====================

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Beginner",
  q:"Magnitude of Vector",
  a:"|a| = √(a₁²+a₂²+a₃²)",
  d:"Length of vector."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Beginner",
  q:"Unit Vector",
  a:"â = a/|a|",
  d:"Vector of magnitude 1."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Beginner",
  q:"Dot Product",
  a:"a·b = |a||b|cosθ",
  d:"Scalar product of vectors."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Advanced",
  q:"Angle Between Vectors",
  a:"cosθ = (a·b)/(|a||b|)",
  d:"Angle between two vectors."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Advanced",
  q:"Cross Product",
  a:"|a×b| = |a||b|sinθ",
  d:"Vector product."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Advanced",
  q:"Area of Parallelogram",
  a:"|a×b|",
  d:"Area formed by two vectors."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Advanced",
  q:"Area of Triangle",
  a:"½|a×b|",
  d:"Area formed by two vectors."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Advanced",
  q:"Scalar Triple Product",
  a:"a·(b×c)",
  d:"Volume-related quantity."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"Vectors",
  level:"Advanced",
  q:"Volume of Parallelepiped",
  a:"|a·(b×c)|",
  d:"Volume generated by three vectors."
},

// =====================
// 3D GEOMETRY
// =====================

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Beginner",
  q:"Distance Between Two Points",
  a:"√[(x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²]",
  d:"Distance in 3D space."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Advanced",
  q:"Section Formula",
  a:"((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n), (mz₂+nz₁)/(m+n))",
  d:"Division of line segment."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Advanced",
  q:"Direction Cosines Relation",
  a:"l²+m²+n² = 1",
  d:"Fundamental relation."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Advanced",
  q:"Equation of Line",
  a:"(x-x₁)/l = (y-y₁)/m = (z-z₁)/n",
  d:"Symmetric form of line."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Beginner",
  q:"Plane Equation",
  a:"ax + by + cz + d = 0",
  d:"General equation of plane."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Advanced",
  q:"Distance of Point from Plane",
  a:"|ax₁+by₁+cz₁+d|/√(a²+b²+c²)",
  d:"Shortest distance."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Advanced",
  q:"Angle Between Planes",
  a:"cosθ = |a₁a₂+b₁b₂+c₁c₂|/(√(a₁²+b₁²+c₁²)√(a₂²+b₂²+c₂²))",
  d:"Angle between two planes."
},

{
  subject:"Maths",
  topic:"Vectors & 3D Geometry",
  subtopic:"3D Geometry",
  level:"Advanced",
  q:"Angle Between Line and Plane",
  a:"sinθ = |al+bm+cn|/(√(a²+b²+c²)√(l²+m²+n²))",
  d:"Angle between line and plane."
},

// =====================
// PROBABILITY
// =====================

{
  subject:"Maths",
  topic:"Probability",
  subtopic:"Basic Probability",
  level:"Beginner",
  q:"Probability Formula",
  a:"P(E)=n(E)/n(S)",
  d:"Classical probability."
},

{
  subject:"Maths",
  topic:"Probability",
  subtopic:"Basic Probability",
  level:"Beginner",
  q:"Complement Rule",
  a:"P(A')=1-P(A)",
  d:"Probability of complement."
},

{
  subject:"Maths",
  topic:"Probability",
  subtopic:"Addition Theorem",
  level:"Advanced",
  q:"Addition Rule",
  a:"P(A∪B)=P(A)+P(B)-P(A∩B)",
  d:"Probability of union."
},

{
  subject:"Maths",
  topic:"Probability",
  subtopic:"Conditional Probability",
  level:"Advanced",
  q:"Conditional Probability",
  a:"P(A|B)=P(A∩B)/P(B)",
  d:"Given B has occurred."
},

{
  subject:"Maths",
  topic:"Probability",
  subtopic:"Independent Events",
  level:"Advanced",
  q:"Independent Events",
  a:"P(A∩B)=P(A)P(B)",
  d:"For independent events."
},

{
  subject:"Maths",
  topic:"Probability",
  subtopic:"Bayes Theorem",
  level:"Advanced",
  q:"Bayes Theorem",
  a:"P(A|B)=P(B|A)P(A)/P(B)",
  d:"Posterior probability."
},

// =====================
// STATISTICS
// =====================

{
  subject:"Maths",
  topic:"Statistics",
  subtopic:"Central Tendency",
  level:"Beginner",
  q:"Mean",
  a:"Mean=Σx/n",
  d:"Arithmetic mean."
},

{
  subject:"Maths",
  topic:"Statistics",
  subtopic:"Dispersion",
  level:"Beginner",
  q:"Variance",
  a:"σ²=Σ(x-μ)²/N",
  d:"Measure of spread."
},

{
  subject:"Maths",
  topic:"Statistics",
  subtopic:"Dispersion",
  level:"Beginner",
  q:"Standard Deviation",
  a:"σ=√Variance",
  d:"Square root of variance."
},

// =====================
// SETS
// =====================

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Sets",
  level:"Advanced",
  q:"Union of Two Sets",
  a:"n(A∪B)=n(A)+n(B)-n(A∩B)",
  d:"Inclusion-Exclusion Principle."
},

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Sets",
  level:"Advanced",
  q:"Complement Rule",
  a:"n(A')=n(U)-n(A)",
  d:"Elements outside set A."
},

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Sets",
  level:"Advanced",
  q:"Three Set Formula",
  a:"n(A∪B∪C)=n(A)+n(B)+n(C)-n(A∩B)-n(B∩C)-n(C∩A)+n(A∩B∩C)",
  d:"Inclusion-Exclusion for three sets."
},

// =====================
// RELATIONS
// =====================

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Relations",
  level:"Advanced",
  q:"Number of Relations",
  a:"2^(mn)",
  d:"Number of relations from set A(m) to set B(n)."
},

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Relations",
  level:"Advanced",
  q:"Number of Relations on Set",
  a:"2^(n²)",
  d:"Relations on a set having n elements."
},

// =====================
// FUNCTIONS
// =====================

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Functions",
  level:"Advanced",
  q:"Composition of Functions",
  a:"(f∘g)(x)=f(g(x))",
  d:"Composite function."
},

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Functions",
  level:"Advanced",
  q:"Inverse Function Property",
  a:"f(f⁻¹(x))=x",
  d:"Property of inverse functions."
},

{
  subject:"Maths",
  topic:"Sets, Relations & Functions",
  subtopic:"Functions",
  level:"Advanced",
  q:"Identity Function",
  a:"I(x)=x",
  d:"Maps every element to itself."
},

// =====================
// MATHEMATICAL REASONING
// =====================

{
  subject:"Maths",
  topic:"Mathematical Reasoning",
  subtopic:"Logic",
  level:"Beginner",
  q:"Implication",
  a:"p→q ≡ ¬p∨q",
  d:"Logical implication."
},

{
  subject:"Maths",
  topic:"Mathematical Reasoning",
  subtopic:"Logic",
  level:"Advanced",
  q:"Converse",
  a:"q→p",
  d:"Converse of implication."
},

{
  subject:"Maths",
  topic:"Mathematical Reasoning",
  subtopic:"Logic",
  level:"Advanced",
  q:"Contrapositive",
  a:"¬q→¬p",
  d:"Equivalent to implication."
},

{
  subject:"Maths",
  topic:"Mathematical Reasoning",
  subtopic:"Logic",
  level:"Advanced",
  q:"De Morgan's Law",
  a:"¬(p∧q)=¬p∨¬q",
  d:"Logical identity."
}



];