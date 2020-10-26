#import ffmpeg

from youtube_search import YoutubeSearch

results = YoutubeSearch('iphone 12', max_results=1).to_dict()

print(results)
video_id = "cnXapYkboRQ"

from pytube import YouTube 
  
try: 
    #object creation using YouTube which was imported in the beginning 
    yt = YouTube("https://www.youtube.com/watch?v="+video_id) 
    print(yt)

    
except: 
    print("Connection Error") #to handle exception 
      
   
#from youtube_transcript_api import YouTubeTranscriptApi

#transcript = YouTubeTranscriptApi.get_transcript(video_id)
#print(transcript)
#in_file = ffmpeg.input('input.mp4')

# ffmpeg.concat(
#     in_file.trim(start_frame=10, end_frame=20),
#     in_file.trim(start_frame=30, end_frame=40),
# ).drawbox(50, 50, 120, 120, color='red', thickness=5).output('out.mp4').run()
