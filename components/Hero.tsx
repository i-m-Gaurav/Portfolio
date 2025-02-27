'use client'



import React, { useEffect, useRef, useState } from "react";
import { Twitter, Linkedin, Github, Instagram, File, Paintbrush, Trash2, Download } from "lucide-react";
import Link from "next/link";
import SocialLink from "./SocialLink";

const Hero: React.FC = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1Dl4hbHHD670mivJVFCRquueTB2oQD-cn/view?usp=drive_link";
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const [brushSize, setBrushSize] = useState(5);
  const [showControls, setShowControls] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Check if device is mobile (screen width < 768px)
  useEffect(() => {
    const checkMobileDevice = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobileDevice();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobileDevice);
    
    return () => {
      window.removeEventListener('resize', checkMobileDevice);
    };
  }, []);

  // Initialize canvas and load saved drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      // Store the current drawing to restore after resize
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCtx.drawImage(canvas, 0, 0);
      
      // Resize canvas
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      // Restore the drawing
      ctx.drawImage(tempCanvas, 0, 0);
    };

    // Initial resize
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Load saved drawing from localStorage
    const savedDrawing = localStorage.getItem('portfolioDrawing');
    if (savedDrawing) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
      img.src = savedDrawing;
    }

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Save drawing to localStorage when it changes
  const saveDrawingToStorage = () => {
    try {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dataURL = canvas.toDataURL('image/png');
      localStorage.setItem('portfolioDrawing', dataURL);
    } catch (e) {
      console.error('Error saving drawing:', e);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Disable drawing on mobile devices
    if (isMobileDevice) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    setIsDrawing(true);
    
    const rect = canvas.getBoundingClientRect();
    const x = 'clientX' in e ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const y = 'clientY' in e ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // Draw a dot at click position
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
    ctx.arc(x, y, brushSize/2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    // Disable drawing on mobile devices
    if (isMobileDevice || !isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'clientX' in e ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const y = 'clientY' in e ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;
    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveDrawingToStorage();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.removeItem('portfolioDrawing');
  };

  const saveDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "drawing-on-gauravs-site.png";
    link.href = image;
    link.click();
  };

  const toggleControls = () => {
    setShowControls(!showControls);
  };

  return (
    <section className="min-h-[90vh] relative flex flex-col justify-center items-center text-center px-4">
      {/* Canvas container that covers the entire section */}
      <div 
        ref={containerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className={`${!isMobileDevice ? "cursor-crosshair" : ""}`}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      {/* Drawing tools button - hidden on mobile */}
      {!isMobileDevice && (
        <div className="fixed top-4 right-4 z-20">
          <button 
            onClick={toggleControls}
            className="glass-effect w-12 h-12 rounded-full flex justify-center items-center hover:opacity-80"
          >
            <Paintbrush size={20} className="text-orange-400" />
          </button>
        </div>
      )}

      {/* Drawing controls - hidden on mobile */}
      {!isMobileDevice && showControls && (
        <div className="fixed top-20 right-4 glass-effect p-4 rounded-lg z-20 flex flex-col gap-3">
          <input 
            type="color" 
            value={currentColor} 
            onChange={(e) => setCurrentColor(e.target.value)} 
            className="w-full h-8 cursor-pointer"
          />
          <div className="flex items-center">
            <span className="text-xs mr-2">Size:</span>
            <input 
              type="range" 
              min="1" 
              max="50" 
              value={brushSize} 
              onChange={(e) => setBrushSize(parseInt(e.target.value))} 
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <button 
              onClick={clearCanvas}
              className="flex-1 glass-effect p-2 rounded-md flex justify-center items-center hover:opacity-80"
            >
              <Trash2 size={16} className="text-red-400" />
            </button>
            <button 
              onClick={saveDrawing}
              className="flex-1 glass-effect p-2 rounded-md flex justify-center items-center hover:opacity-80"
            >
              <Download size={16} className="text-green-400" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile-only drawing notification */}
      {isMobileDevice && (
        <div className="absolute top-4 right-4 z-20 glass-effect p-2 rounded-lg text-xs text-gray-300">
          <p>Drawing available on desktop</p>
        </div>
      )}

      {/* Hero content with z-index to appear above canvas */}
      <div className="relative z-10">
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass-effect mb-6">
            Welcome to my portfolio
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          I am Gaurav
          <span className="block text-2xl md:text-3xl mt-4 text-soft-gray font-normal">
            <span className="text-xs italic">trying to be </span>Full Stack Developer
          </span>
        </h1>

        <p
          className="max-w-xl text-soft-gray mb-8 animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          I write code, that code turn into something beautiful or sometime disaster, but i always make sure, it works on everyone machine.
        </p>

        <div
          className="flex justify-center gap-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          <SocialLink
            href="https://twitter.com/_i_gaurav"
            icon={Twitter}
            label="Twitter Profile"
          />
          <SocialLink
            href="https://linkedin.com/in/i-am-gaurav"
            icon={Linkedin}
            label="LinkedIn Profile"
          />
          <SocialLink
            href="https://github.com/i-m-Gaurav"
            icon={Github}
            label="GitHub Profile"
          />
          <SocialLink
            href="https://instagram.com/i.m.gauravkr"
            icon={Instagram}
            label="Instagram Profile"
          />
        </div>

        <div className="mt-10 flex gap-6 animate-fade-up opacity-0 justify-center"
          style={{ animationDelay: "0.8s" }}>
          <button className="glass-effect w-32 h-10 rounded-full text-sm flex justify-center items-center hover:opacity-80">
            <span className="mr-2">
              <File className="text-orange-400 text-xs" />
            </span>
            <Link href={resumeLink} target="_blank">
              Resume
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;