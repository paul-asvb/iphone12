import ffmpeg

in_file = ffmpeg.input('input.mp4')

ffmpeg.concat(
    in_file.trim(start_frame=10, end_frame=20),
    in_file.trim(start_frame=30, end_frame=40),
).drawbox(50, 50, 120, 120, color='red', thickness=5).output('out.mp4').run()
