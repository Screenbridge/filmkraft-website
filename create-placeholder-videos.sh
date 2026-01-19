#!/bin/bash

# Create placeholder video using FFmpeg
# This creates a simple colored gradient video for testing

echo "Creating placeholder videos for Filmkraft website..."

# Create assets directory structure
mkdir -p assets/work

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "⚠️  FFmpeg not found. Install it to generate placeholder videos:"
    echo "    brew install ffmpeg"
    echo ""
    echo "For now, the site will work with static images."
    exit 0
fi

# Generate hero showreel (20 seconds, gradient animation)
echo "Generating hero-showreel.mp4..."
ffmpeg -f lavfi -i "color=c=0x2B3990:s=1920x1080:d=20,format=rgb24" \
       -f lavfi -i "color=c=0xFF2D7A:s=1920x1080:d=20,format=rgb24" \
       -filter_complex "[0:v][1:v]blend=all_expr='A*(1-T/20)+B*T/20':shortest=1" \
       -c:v libx264 -pix_fmt yuv420p -t 20 -y assets/hero-showreel.mp4 2>/dev/null

# Generate Keepsake preview (10 seconds)
echo "Generating keepsake-preview.mp4..."
ffmpeg -f lavfi -i "color=c=0x8B5CF6:s=1280x720:d=10" \
       -c:v libx264 -pix_fmt yuv420p -t 10 -y assets/work/keepsake-preview.mp4 2>/dev/null

# Generate PSD preview (10 seconds)
echo "Generating psd-preview.mp4..."
ffmpeg -f lavfi -i "color=c=0x0EA5E9:s=1280x720:d=10" \
       -c:v libx264 -pix_fmt yuv420p -t 10 -y assets/work/psd-preview.mp4 2>/dev/null

echo "✅ Placeholder videos created!"
echo ""
echo "📌 Replace these with real videos:"
echo "   - assets/hero-showreel.mp4 (Hero background loop)"
echo "   - assets/work/keepsake-preview.mp4 (Hover preview)"
echo "   - assets/work/psd-preview.mp4 (Hover preview)"
echo ""
echo "The site will now work with video hover effects!"
