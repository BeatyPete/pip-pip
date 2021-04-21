
import MainTabs from "../../components/Main-tabs";
import './stat.css'

function STAT() {
    return (
        <>
      <header>
        <MainTabs></MainTabs>

        <nav className='sub-tabs'>
          <ul className='small-text'>
            <li>STATUS</li>
            <li id='second'>SPECIAL</li>
            <li id='third'>PERKS</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="character">
          <div>
            <div className='limb-bar'></div>
          </div>

          <div className='char-middle'>
            <div className='left-limbs'>
              <div className='limb-bar'></div>
              <div className='limb-bar'></div>
            </div>

            <div className='vault-boy'>
              <svg id='vault-head' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 168" version="1.1">
                <g id="surface1">
                <path d="M 103.601562 96.109375 C 103.601562 95.097656 103.09375 94.019531 102.078125 92.863281 L 99.472656 90.703125 C 98.746094 90.34375 98.167969 90.523438 97.734375 91.242188 C 97.371094 91.964844 97.515625 92.539062 98.167969 92.972656 L 99.582031 94.269531 C 100.523438 95.207031 101.027344 96 101.101562 96.648438 C 101.171875 97.511719 101.644531 97.910156 102.515625 97.835938 C 103.308594 97.835938 103.671875 97.261719 103.601562 96.109375 M 99.253906 82.378906 C 98.601562 82.089844 98.09375 82.304688 97.734375 83.027344 C 97.300781 83.746094 97.550781 84.433594 98.492188 85.082031 L 102.730469 88 L 106.097656 91.785156 C 107.257812 93.226562 107.945312 93.585938 108.164062 92.863281 L 107.183594 89.835938 L 104.46875 86.164062 C 102.875 84.359375 101.136719 83.097656 99.253906 82.378906 M 45.367188 126.703125 L 36.242188 127.136719 C 32.476562 126.847656 29.613281 126.304688 27.660156 125.511719 L 14.730469 119.460938 C 13.789062 119.171875 13.171875 118.34375 12.882812 116.972656 C 12.667969 115.605469 13.464844 115.0625 15.273438 115.351562 L 22.445312 117.40625 C 28.019531 118.773438 32.585938 119.496094 36.132812 119.566406 C 41.855469 119.710938 49.421875 118.414062 58.839844 115.675781 C 61.15625 115.242188 62.894531 115.605469 64.054688 116.757812 C 64.921875 117.550781 65.066406 118.34375 64.488281 119.136719 C 64.054688 119.710938 63.402344 120.179688 62.535156 120.539062 C 54.132812 123.929688 48.410156 125.980469 45.367188 126.703125 M 25.050781 77.945312 C 25.339844 75.929688 25.195312 74.164062 24.617188 72.648438 C 24.039062 71.136719 23.203125 70.304688 22.117188 70.164062 C 21.03125 70.019531 20.019531 70.59375 19.078125 71.890625 C 18.136719 73.1875 17.519531 74.847656 17.230469 76.863281 C 16.941406 78.882812 17.085938 80.648438 17.664062 82.164062 C 18.242188 83.746094 19.078125 84.578125 20.164062 84.648438 C 21.25 84.792969 22.261719 84.214844 23.203125 82.917969 C 24.144531 81.621094 24.761719 79.964844 25.050781 77.945312 M 45.585938 72.863281 C 44.789062 72.578125 44.0625 73.117188 43.414062 74.488281 L 38.089844 82.59375 L 32.4375 88.972656 L 28.527344 92.972656 C 27.515625 93.980469 27.332031 95.136719 27.984375 96.433594 L 32.003906 104 C 32.800781 105.082031 33.886719 105.621094 35.265625 105.621094 L 37.109375 105.296875 L 38.304688 104.539062 L 38.199219 103.136719 L 34.722656 97.296875 C 33.996094 96 34.070312 94.8125 34.9375 93.730469 L 40.371094 85.621094 C 42.46875 82.378906 44.28125 78.882812 45.800781 75.136719 C 46.382812 73.910156 46.308594 73.152344 45.585938 72.863281 M 60.578125 106.378906 L 59.492188 106.164062 C 59.273438 106.304688 59.238281 106.628906 59.382812 107.136719 L 60.359375 110.703125 L 59.816406 112.433594 C 59.308594 112.9375 58.730469 113.261719 58.078125 113.40625 C 47.792969 116 40.226562 117.332031 35.371094 117.40625 C 32.332031 117.40625 28.128906 116.722656 22.769531 115.351562 L 15.601562 113.296875 L 14.296875 112.324219 C 13.933594 111.820312 13.789062 111.277344 13.863281 110.703125 L 14.078125 109.1875 L 13.863281 108.109375 C 13.644531 107.964844 13.316406 108.109375 12.882812 108.539062 L 8.429688 112.972656 C 7.488281 113.910156 7.269531 115.0625 7.777344 116.433594 L 11.6875 124 C 11.976562 124.578125 12.230469 124.828125 12.449219 124.757812 L 12.882812 123.785156 L 12.882812 122.703125 C 12.957031 122.125 13.210938 121.695312 13.644531 121.40625 L 15.164062 121.40625 L 21.574219 126.054688 C 26.71875 129.296875 31.496094 131.171875 35.914062 131.675781 C 40.335938 132.179688 46.417969 130.738281 54.167969 127.351562 C 58.007812 125.621094 61.410156 123.855469 64.378906 122.054688 L 66.117188 122.164062 L 67.421875 123.351562 L 66.988281 128.214844 L 67.855469 128.972656 L 68.617188 128.109375 L 71.660156 118.488281 C 72.019531 117.1875 71.660156 116.070312 70.574219 115.136719 L 60.578125 106.378906 M 70.355469 77.1875 C 69.777344 75.675781 68.941406 74.847656 67.855469 74.703125 C 66.769531 74.558594 65.71875 75.136719 64.707031 76.433594 C 63.765625 77.730469 63.148438 79.386719 62.859375 81.40625 C 62.570312 83.421875 62.714844 85.1875 63.292969 86.703125 C 63.875 88.289062 64.707031 89.117188 65.792969 89.1875 C 66.878906 89.332031 67.929688 88.757812 68.941406 87.460938 C 69.886719 86.164062 70.5 84.503906 70.789062 82.488281 C 71.078125 80.46875 70.933594 78.703125 70.355469 77.1875 M 72.855469 55.890625 L 71.332031 55.351562 C 70.828125 55.421875 70.390625 55.710938 70.03125 56.214844 L 68.292969 58.164062 C 67.132812 59.53125 66.660156 60.433594 66.878906 60.863281 C 66.953125 61.007812 67.601562 61.371094 68.835938 61.945312 L 72.746094 64.109375 L 77.089844 67.242188 C 78.683594 68.394531 79.699219 68.972656 80.132812 68.972656 C 80.785156 67.242188 79.769531 64.539062 77.089844 60.863281 L 72.855469 55.890625 M 30.484375 56.972656 L 30.375 54.8125 L 29.613281 53.296875 C 29.109375 53.007812 28.527344 53.007812 27.875 53.296875 L 19.078125 57.621094 L 18.207031 58.488281 C 18.207031 58.773438 18.570312 58.953125 19.292969 59.027344 L 27.984375 59.460938 C 28.78125 59.53125 29.398438 59.316406 29.832031 58.8125 C 30.339844 58.378906 30.554688 57.765625 30.484375 56.972656 M 7.34375 48 C 8.863281 49.511719 10.53125 50.558594 12.339844 51.136719 C 9.734375 55.027344 7.523438 58.917969 5.714844 62.8125 C 3.976562 59.710938 2.996094 57.226562 2.78125 55.351562 C 2.417969 52.394531 2.742188 50.089844 3.757812 48.433594 C 4.699219 46.703125 5.894531 46.558594 7.34375 48 M 90.128906 43.136719 L 99.6875 41.621094 C 103.746094 41.261719 106.496094 43.351562 107.945312 47.890625 C 109.539062 52.648438 107.222656 56.578125 100.992188 59.675781 C 100.703125 59.675781 100.378906 59.964844 100.015625 60.539062 C 99.507812 61.261719 99.726562 61.910156 100.667969 62.488281 C 105.085938 65.371094 108.417969 67.964844 110.660156 70.269531 C 116.023438 75.890625 118.554688 82.089844 118.265625 88.863281 C 115.949219 83.027344 113.269531 78.199219 110.226562 74.378906 C 106.171875 69.621094 103.382812 66.953125 101.863281 66.378906 C 100.921875 65.945312 100.230469 66.054688 99.796875 66.703125 C 99.363281 67.277344 99.507812 67.820312 100.230469 68.324219 L 102.949219 70.703125 L 108.273438 76.109375 C 111.457031 79.421875 114.535156 84.46875 117.507812 91.242188 L 116.746094 93.296875 C 114.5 88.035156 111.785156 83.710938 108.597656 80.324219 C 106.0625 77.441406 103.746094 75.605469 101.644531 74.8125 C 100.847656 74.449219 100.339844 74.738281 100.125 75.675781 C 99.980469 76.539062 100.449219 77.332031 101.535156 78.054688 L 106.75 82.269531 C 108.921875 84.648438 111.929688 89.046875 115.769531 95.460938 L 115.441406 96.324219 L 113.59375 96.757812 C 112.507812 97.261719 112.363281 98.125 113.160156 99.351562 C 118.375 103.675781 119.390625 108.792969 116.203125 114.703125 C 112.945312 120.613281 108.054688 123.027344 101.535156 121.945312 C 94.582031 133.1875 86.21875 141.695312 76.441406 147.460938 C 73.832031 148.902344 74.050781 149.585938 77.089844 149.511719 C 80.0625 149.371094 83.429688 148.144531 87.195312 145.835938 C 86.109375 152.46875 80.675781 157.835938 70.898438 161.945312 C 61.410156 165.980469 54.421875 166.34375 49.929688 163.027344 L 57.101562 162.054688 C 60.796875 161.1875 62.570312 160.433594 62.425781 159.785156 L 55.582031 160 C 49.421875 159.855469 42.542969 157.910156 34.9375 154.164062 C 32.621094 153.007812 30.195312 151.53125 27.660156 149.730469 C 23.601562 146.847656 19.910156 143.421875 16.578125 139.460938 C 9.988281 131.316406 5.570312 121.765625 3.324219 110.8125 C 1.148438 99.929688 1.367188 89.261719 3.976562 78.8125 C 6.148438 69.875 10.3125 60.757812 16.46875 51.460938 C 19.222656 51.171875 22.15625 49.875 25.269531 47.566406 L 30.917969 41.082031 C 34.394531 37.046875 36.710938 34.738281 37.871094 34.164062 C 39.246094 33.511719 41.167969 33.730469 43.628906 34.8125 L 47.324219 36.757812 C 49.421875 37.765625 51.667969 38.054688 54.058594 37.621094 C 55.796875 37.332031 58.042969 36.503906 60.796875 35.136719 L 70.03125 34.8125 C 73.578125 36.035156 76.730469 38.378906 79.480469 41.835938 C 81.582031 44.503906 85.132812 44.9375 90.128906 43.136719 M 93.0625 11.136719 C 97.335938 11.855469 101.101562 14.59375 104.359375 19.351562 L 110.445312 27.460938 C 113.195312 28.757812 116.023438 31.675781 118.917969 36.214844 C 121.019531 39.53125 122.757812 42.992188 124.132812 46.59375 C 126.667969 53.007812 126.851562 61.332031 124.675781 71.566406 C 123.519531 76.613281 122.140625 81.046875 120.546875 84.863281 C 119.460938 78.59375 116.890625 73.296875 112.835938 68.972656 L 104.578125 61.730469 C 106.96875 60.144531 109.03125 58.378906 110.769531 56.433594 C 113.160156 53.765625 114.246094 51.421875 114.03125 49.40625 C 113.667969 46.164062 112.582031 43.496094 110.769531 41.40625 C 108.308594 38.378906 104.722656 37.082031 100.015625 37.511719 L 91.867188 40.109375 C 88.390625 41.40625 86.109375 41.910156 85.023438 41.621094 L 77.199219 32.972656 C 72.78125 28 69.195312 26.054688 66.445312 27.136719 L 58.949219 31.242188 L 53.515625 34.164062 L 49.605469 34.488281 L 46.671875 32.863281 L 42 30.703125 C 40.40625 30.34375 38.414062 30.773438 36.023438 32 C 34.503906 32.722656 31.96875 35.097656 28.417969 39.136719 L 22.988281 45.296875 C 20.523438 47.171875 18.097656 48.289062 15.707031 48.648438 C 13.027344 49.007812 10.820312 48.289062 9.082031 46.488281 C 6.546875 43.820312 4.878906 40.394531 4.082031 36.214844 C 3.285156 32.179688 3.539062 28.648438 4.84375 25.621094 C 5.929688 23.171875 7.414062 21.117188 9.296875 19.460938 C 9.007812 22.199219 9.695312 24.289062 11.363281 25.730469 C 13.679688 27.746094 16.398438 28.648438 19.511719 28.433594 C 22.625 28.144531 25.339844 26.8125 27.660156 24.433594 C 34.613281 17.226562 39.285156 13.40625 41.675781 12.972656 C 43.773438 12.539062 46.636719 13.007812 50.257812 14.378906 L 56.558594 14.164062 C 57.5 13.371094 58.875 11.675781 60.6875 9.082031 C 64.742188 3.386719 67.601562 0.46875 69.269531 0.324219 C 71.585938 0.109375 74.339844 1.261719 77.527344 3.785156 L 80.351562 6.164062 C 81.507812 7.097656 82.597656 7.785156 83.609375 8.214844 C 87.59375 9.730469 90.746094 10.703125 93.0625 11.136719 "/>
                </g>
              </svg>
              <svg id='vault-body' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 173" version="1.1">
                <g id="surface1">
                <path d="M 28.625 153.746094 L 24.800781 147.738281 C 23.339844 144.855469 23.019531 142.648438 23.84375 141.113281 C 24.632812 139.6875 26.375 139.050781 29.074219 139.203125 C 31.0625 139.316406 32.992188 139.746094 34.867188 140.492188 C 37.082031 141.390625 39.160156 142.628906 41.109375 144.199219 C 43.660156 147.382812 46.246094 150.976562 48.871094 154.980469 L 51.796875 159.585938 L 39.03125 165.425781 C 35.28125 162.058594 31.8125 158.164062 28.625 153.746094 M 15.972656 67.882812 L 19.234375 68.503906 L 19.007812 70.410156 C 18.859375 71.234375 18.519531 72.152344 17.996094 73.164062 L 16.535156 75.410156 L 19.796875 80.292969 C 21.632812 83.253906 22.289062 84.957031 21.765625 85.40625 C 20.976562 86.078125 19.890625 85.6875 18.503906 84.226562 L 16.085938 81.53125 L 15.746094 81.53125 C 15.671875 81.792969 16.289062 83.046875 17.601562 85.292969 C 18.765625 87.351562 18.972656 88.699219 18.222656 89.335938 C 17.132812 90.234375 15.484375 89.46875 13.273438 87.035156 L 13.441406 86.921875 C 14.265625 86.320312 14.640625 85.179688 14.566406 83.496094 C 14.566406 82.523438 14.320312 80.875 13.835938 78.554688 L 12.992188 73.894531 C 14.789062 73.03125 15.785156 71.027344 15.972656 67.882812 M 14.058594 67.210938 C 14.058594 68.933594 13.628906 70.261719 12.765625 71.199219 L 11.417969 72.097656 L 10.460938 72.433594 L 11.640625 79.003906 C 12.390625 82.785156 12.542969 84.824219 12.089844 85.125 C 11.792969 85.273438 11.078125 85.011719 9.953125 84.339844 C 7.554688 82.914062 6.054688 80.070312 5.457031 75.800781 C 5.230469 74.117188 5.191406 71.832031 5.34375 68.953125 C 5.34375 68.390625 5.023438 68.089844 4.386719 68.054688 C 3.710938 68.015625 3.28125 68.238281 3.09375 68.726562 C 2.53125 70 2.550781 72.527344 3.148438 76.308594 C 3.9375 81.25 5.8125 84.582031 8.773438 86.304688 C 10.386719 87.238281 11.699219 87.558594 12.710938 87.257812 L 12.878906 87.761719 L 14.171875 90.234375 C 14.398438 90.535156 14.472656 90.925781 14.398438 91.414062 C 14.320312 91.976562 14.078125 92.367188 13.667969 92.59375 C 12.578125 93.230469 10.855469 92.628906 8.492188 90.796875 L 7.367188 89.898438 L 6.410156 88.773438 C 4.875 86.789062 3.5625 84.695312 2.472656 82.484375 C 0.863281 79.152344 0.0546875 75.988281 0.0546875 72.996094 C 0.0195312 68.765625 1.820312 63.484375 5.457031 57.160156 C 6.691406 61.652344 8.980469 64.738281 12.316406 66.425781 L 14.058594 67.210938 M 37.003906 11.222656 L 37.175781 12.683594 C 37.960938 15.679688 40.8125 18 45.722656 19.644531 C 45.871094 20.359375 45.554688 22.867188 44.765625 27.171875 C 43.867188 32.300781 43.417969 35.800781 43.417969 37.671875 C 43.492188 42.765625 44.015625 49.519531 44.992188 57.945312 C 45.554688 62.773438 45.777344 65.5625 45.667969 66.3125 C 41.917969 66.199219 38.597656 64.609375 35.710938 61.539062 L 35.65625 60.136719 C 35.503906 57.4375 34.773438 53.300781 33.460938 47.722656 L 31.886719 41.378906 L 30.539062 35.089844 L 27.667969 30.484375 C 27.933594 33.328125 28.550781 36.773438 29.527344 40.816406 L 32.054688 51.09375 C 27.105469 55.960938 23.078125 60.941406 19.964844 66.03125 C 18.578125 66.367188 16.273438 65.730469 13.046875 64.121094 C 10.984375 63.074219 9.46875 61.164062 8.492188 58.394531 C 7.929688 56.894531 7.574219 55.269531 7.421875 53.507812 C 7.421875 52.984375 7.6875 52.199219 8.210938 51.148438 L 8.4375 50.699219 C 10.386719 46.621094 12.765625 42.296875 15.578125 37.730469 C 20.152344 30.277344 25.101562 23.597656 30.425781 17.679688 L 37.003906 11.222656 M 54.328125 171.714844 L 54.214844 171.996094 L 52.132812 172.558594 C 50.445312 172.820312 48.515625 172.316406 46.339844 171.042969 C 45.027344 170.332031 43.324219 169.097656 41.222656 167.335938 L 52.863281 161.945312 L 53.035156 161.832031 C 55.320312 166.25 55.75 169.546875 54.328125 171.714844 M 61.414062 166.15625 L 57.421875 170.03125 C 57.53125 168.011719 56.875 165.519531 55.453125 162.5625 C 54.8125 161.179688 53.597656 159.027344 51.796875 156.105469 C 49.398438 152.175781 46.921875 148.582031 44.371094 145.324219 C 48.234375 146.632812 51.890625 149.273438 55.339844 153.242188 C 58.113281 156.421875 60.570312 160.222656 62.707031 164.640625 L 61.414062 166.15625 M 89.476562 115.113281 C 92.324219 117.359375 95.082031 120.332031 97.742188 124.039062 C 99.691406 126.773438 101.832031 130.253906 104.15625 134.484375 L 104.886719 135.71875 L 104.773438 136 C 103.535156 140.644531 101.042969 144.257812 97.292969 146.839844 C 93.167969 149.683594 88.96875 150.039062 84.695312 147.90625 L 79.523438 141.671875 C 83.308594 133.585938 86.625 124.734375 89.476562 115.113281 M 82.390625 154.027344 L 84.863281 150.265625 C 89.328125 152.324219 93.714844 152.0625 98.023438 149.480469 C 101.960938 147.121094 104.773438 143.582031 106.460938 138.867188 L 107.191406 141.449219 C 107.378906 143.246094 106.984375 145.359375 106.011719 147.792969 C 105.410156 149.328125 104.4375 151.277344 103.085938 153.632812 C 100.347656 158.539062 96.5625 162.355469 91.726562 165.089844 C 85.839844 168.308594 81.734375 168.777344 79.410156 166.492188 C 78.210938 165.296875 77.910156 163.648438 78.507812 161.550781 C 78.808594 160.542969 79.597656 158.875 80.871094 156.554688 C 83.269531 156.03125 86.121094 156.59375 89.421875 158.238281 C 90.207031 158.613281 90.621094 158.425781 90.65625 157.675781 C 90.695312 156.964844 90.394531 156.441406 89.757812 156.105469 C 87.09375 154.832031 84.640625 154.140625 82.390625 154.027344 M 90.375 76.871094 L 93.074219 74.960938 C 93.414062 80.726562 93.039062 86.996094 91.949219 93.773438 C 91.089844 99.125 89.683594 105.246094 87.734375 112.136719 C 83.722656 126.472656 78.210938 139.820312 71.199219 152.175781 C 68.800781 156.40625 66.417969 160.015625 64.054688 163.011719 C 61.65625 158.296875 58.902344 154.253906 55.789062 150.882812 C 52.003906 146.800781 47.992188 144.125 43.753906 142.851562 C 45.480469 140.195312 47.015625 136.414062 48.367188 131.507812 C 49.753906 126.378906 50.914062 120.054688 51.851562 112.527344 C 52.976562 103.730469 53.652344 95.382812 53.878906 87.484375 C 53.914062 86.882812 53.558594 86.359375 52.808594 85.910156 C 52.058594 85.5 51.664062 85.648438 51.628906 86.359375 C 51.441406 92.238281 51.046875 98.097656 50.445312 103.9375 C 46.472656 99.96875 43.210938 95.550781 40.660156 90.683594 C 37.847656 85.441406 36.160156 80.238281 35.597656 75.074219 C 37.886719 76.832031 40.71875 78.480469 44.089844 80.015625 C 51.101562 83.234375 58.9375 84.5625 67.597656 84 C 76.261719 83.402344 83.851562 81.023438 90.375 76.871094 M 105.28125 85.066406 C 106.066406 84.28125 106.816406 83.140625 107.527344 81.640625 L 116.300781 81.304688 C 120.3125 80.144531 123.332031 77.132812 125.355469 72.265625 C 126.257812 74.25 126.820312 76.121094 127.042969 77.878906 C 127.679688 83.121094 127.4375 87.820312 126.3125 91.976562 C 125.789062 93.996094 124.832031 95.007812 123.445312 95.007812 L 124.0625 90.910156 C 124.511719 88.027344 124.4375 86.304688 123.839844 85.742188 C 123.613281 85.515625 123.125 87.707031 122.375 92.3125 C 121.25 97.253906 119.675781 100.082031 117.652344 100.792969 L 116.976562 100.902344 L 116.753906 100.792969 L 117.765625 94.558594 C 118.363281 90.441406 118.25 88.269531 117.425781 88.042969 C 117.316406 88.007812 116.921875 89.878906 116.246094 93.660156 L 114.503906 101.410156 C 113.039062 105.378906 111.765625 107.175781 110.679688 106.800781 C 109.929688 106.574219 109.777344 104.292969 110.226562 99.949219 L 110.339844 98.9375 L 111.070312 88.324219 L 110.960938 87.761719 C 110.882812 87.613281 110.132812 87.875 108.710938 88.550781 L 104.828125 90.289062 L 101.003906 90.738281 C 99.878906 90.589844 99.46875 90.121094 99.769531 89.335938 L 100.21875 88.773438 L 101.175781 88.15625 L 105.28125 85.066406 M 81.265625 7.347656 C 80.964844 9.21875 80.535156 10.566406 79.972656 11.390625 C 78.472656 13.601562 76.335938 15.492188 73.5625 17.0625 C 70.824219 18.636719 68.085938 19.554688 65.351562 19.816406 C 62.460938 20.1875 60.945312 25.429688 60.792969 35.539062 C 60.71875 41.042969 61.039062 47.480469 61.75 54.855469 C 62.425781 61.21875 63.15625 65.582031 63.945312 67.941406 C 64.46875 69.4375 65.085938 70.1875 65.800781 70.1875 L 66.023438 70.128906 C 76.671875 69.308594 85.351562 66.761719 92.0625 62.492188 C 92.0625 65.078125 92.230469 67.359375 92.570312 69.34375 L 92.738281 70.804688 C 92.699219 71.140625 92.457031 71.554688 92.007812 72.039062 C 91.03125 73.050781 89.625 74.136719 87.789062 75.296875 C 84.527344 77.355469 80.234375 78.964844 74.910156 80.125 C 64.976562 82.410156 55.789062 82.074219 47.351562 79.117188 C 42.742188 77.503906 38.765625 75.296875 35.429688 72.488281 L 35.769531 64.683594 C 38.878906 67.265625 42.308594 68.558594 46.058594 68.558594 C 46.621094 68.558594 47.035156 68.390625 47.296875 68.054688 C 47.746094 67.566406 47.953125 66.574219 47.914062 65.078125 L 47.242188 57.664062 C 46.265625 49.351562 45.742188 42.6875 45.667969 37.671875 C 45.667969 35.574219 46.117188 32.207031 47.015625 27.5625 C 47.652344 23.933594 47.992188 21.59375 48.027344 20.542969 C 48.066406 19.011719 47.710938 18.054688 46.960938 17.679688 L 46.789062 17.625 C 42.402344 16.164062 39.929688 14.332031 39.367188 12.121094 C 39.066406 11.109375 39.199219 10.023438 39.761719 8.863281 L 43.640625 5.886719 C 44.878906 6.597656 46.472656 7.3125 48.421875 8.023438 C 49.433594 10.042969 50.953125 11.578125 52.976562 12.625 C 54.851562 13.601562 57.007812 14.085938 59.445312 14.085938 C 63.757812 14.085938 67.785156 12.777344 71.535156 10.15625 C 75.511719 7.386719 77.777344 4.015625 78.339844 0.046875 L 81.378906 2.238281 C 81.601562 3.773438 81.566406 5.476562 81.265625 7.347656 M 81.828125 12.683594 C 83.777344 9.875 84.527344 7.085938 84.078125 4.316406 C 87.789062 7.234375 90.84375 9.894531 93.246094 12.289062 C 99.429688 18.390625 104.265625 24.324219 107.753906 30.089844 C 111.878906 36.90625 115.476562 44.410156 118.550781 52.609375 C 120.464844 57.625 121.984375 62.304688 123.105469 66.648438 L 123.21875 67.097656 C 123.558594 68.332031 123.667969 69.15625 123.558594 69.570312 C 123.144531 71.179688 122.507812 72.714844 121.644531 74.171875 C 120.109375 76.71875 118.234375 78.3125 116.019531 78.945312 L 110.789062 79.84375 L 108.878906 79.507812 L 105.5625 72.097656 C 102.261719 65.992188 96.617188 59.125 88.632812 51.488281 C 83.160156 46.246094 79.148438 42.78125 76.597656 41.097656 L 75.585938 42.050781 C 84.171875 49.277344 89.757812 54.613281 92.34375 58.058594 L 92.230469 59.683594 C 90.09375 61.21875 87.46875 62.605469 84.359375 63.839844 C 78.960938 65.976562 72.941406 67.324219 66.304688 67.882812 C 65.105469 65.527344 64.148438 58.695312 63.4375 47.386719 C 62.6875 35.296875 63.0625 27.339844 64.5625 23.519531 C 64.898438 22.660156 65.238281 22.171875 65.574219 22.0625 C 68.648438 21.800781 71.6875 20.789062 74.683594 19.027344 C 77.722656 17.304688 80.101562 15.191406 81.828125 12.683594 "/>
                </g>
              </svg>
            </div>

            <div className='right-limbs'>
              <div className='limb-bar'></div>
              <div className='limb-bar'></div>
            </div>
          </div>

          <div>
            <div className='limb-bar'></div>
          </div>
        </section>
          
        <section className='equip-stats large-text'>
          <div className='weapon-stats'>
          <svg className='backing equip-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 90" version="1.1">
            <g id="surface1">
            <path d="M 127.304688 25.265625 L 127.097656 27.144531 L 126.054688 28.816406 L 115.019531 36.75 L 113.976562 38.421875 L 113.769531 40.300781 L 127.929688 81.4375 L 127.71875 83.109375 L 126.261719 84.152344 L 93.570312 90 L 91.695312 89.582031 L 90.652344 88.121094 L 81.492188 55.335938 C 80.519531 51.996094 79.339844 50.464844 77.953125 50.742188 L 64.417969 52.414062 C 54.976562 52.414062 48.105469 49.210938 43.800781 42.808594 C 41.023438 38.910156 39.429688 34.316406 39.011719 29.027344 C 39.011719 27.773438 37.414062 27.144531 34.222656 27.144531 L 7.566406 27.144531 L 5.902344 26.519531 L 5.277344 24.847656 L 5.277344 18.585938 L 4.445312 16.914062 L 2.988281 16.078125 L 2.363281 16.078125 L 0.695312 15.453125 L 0.0703125 13.78125 L 0.0703125 2.296875 L 0.695312 0.625 L 2.363281 0 L 116.890625 0 L 118.765625 0.625 L 120.015625 2.296875 L 127.304688 25.265625 M 68.996094 27.144531 C 69.832031 32.992188 69.207031 37.585938 67.125 40.929688 L 63.582031 43.851562 L 60.25 43.644531 L 61.5 41.347656 C 62.335938 39.535156 62.679688 37.585938 62.542969 35.5 C 62.402344 33.550781 61.015625 30.765625 58.378906 27.144531 L 50.046875 27.144531 L 47.757812 27.5625 L 46.714844 29.234375 C 46.992188 35.359375 48.660156 40.023438 51.714844 43.226562 C 54.351562 45.871094 57.753906 47.191406 61.917969 47.191406 L 68.996094 46.566406 L 75.660156 44.894531 L 77.117188 42.390625 L 77.328125 40.71875 L 74.203125 29.441406 L 72.953125 27.773438 L 71.078125 27.144531 L 68.996094 27.144531 "/>
            </g>
          </svg>
            <div className='backing stat-info'>
            <svg className='stat-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" version="1.1">
              <g id="surface1">
              <path d="M 89.8125 37.761719 C 83.699219 31.644531 76.300781 28.160156 67.625 27.308594 L 67.625 36.691406 L 66.558594 39.464844 L 64 40.320312 L 61.226562 39.464844 L 60.160156 36.691406 L 60.160156 27.308594 C 51.484375 28.160156 44.019531 31.644531 37.761719 37.761719 C 31.644531 44.019531 28.160156 51.484375 27.308594 60.160156 L 35.839844 60.160156 L 38.613281 61.226562 L 39.679688 64 L 38.613281 66.558594 L 35.839844 67.625 L 27.308594 67.625 C 28.160156 76.300781 31.644531 83.769531 37.761719 90.027344 C 44.019531 96.140625 51.484375 99.625 60.160156 100.480469 L 60.160156 91.09375 L 61.226562 88.535156 C 61.9375 87.679688 62.863281 87.253906 64 87.253906 C 64.996094 87.253906 65.847656 87.679688 66.558594 88.535156 L 67.625 91.09375 L 67.625 100.480469 C 76.300781 99.625 83.699219 96.140625 89.8125 90.027344 C 96.070312 83.769531 99.625 76.300781 100.480469 67.625 L 91.09375 67.625 L 88.535156 66.558594 C 87.679688 65.847656 87.253906 64.996094 87.253906 64 C 87.253906 62.863281 87.679688 61.9375 88.535156 61.226562 L 91.09375 60.160156 L 100.480469 60.160156 C 99.625 51.484375 96.070312 44.019531 89.8125 37.761719 M 66.558594 1.066406 L 67.625 3.625 L 67.625 19.625 C 78.4375 20.621094 87.609375 24.960938 95.148438 32.640625 C 102.828125 40.179688 107.09375 49.351562 107.945312 60.160156 L 124.160156 60.160156 L 126.71875 61.226562 L 128 64 L 126.71875 66.558594 L 124.160156 67.625 L 107.945312 67.625 C 107.09375 78.4375 102.828125 87.609375 95.148438 95.148438 C 87.609375 102.828125 78.4375 107.09375 67.625 107.945312 L 67.625 124.160156 L 66.558594 126.71875 L 64 128 C 62.863281 128 61.9375 127.574219 61.226562 126.71875 L 60.160156 124.160156 L 60.160156 107.945312 C 49.351562 107.09375 40.105469 102.828125 32.425781 95.148438 C 24.890625 87.609375 20.621094 78.4375 19.625 67.625 L 3.625 67.625 L 1.066406 66.558594 L 0 64 L 1.066406 61.226562 L 3.625 60.160156 L 19.625 60.160156 C 20.621094 49.351562 24.890625 40.179688 32.425781 32.640625 C 40.105469 24.960938 49.351562 20.621094 60.160156 19.625 L 60.160156 3.625 L 61.226562 1.066406 L 64 0 L 66.558594 1.066406 "/>
              </g>
            </svg>
              <div>18</div>
            </div>
          </div>

          <div className='armor-stats'>
            <svg className='backing equip-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 90" version="1.1">
              <g id="surface1">
              <path d="M 110.363281 19.027344 L 111.203125 20.503906 L 114.574219 29.585938 L 115.835938 38.875 L 115.835938 50.066406 C 115.835938 52.742188 116.539062 55.699219 117.945312 58.9375 C 119.488281 62.035156 121.242188 64.425781 123.207031 66.117188 L 123.839844 66.75 C 125.945312 68.441406 126.929688 70.480469 126.789062 72.875 C 126.648438 75.269531 125.457031 77.238281 123.207031 78.785156 L 115.625 84.277344 C 113.519531 85.824219 110.710938 87.234375 107.203125 88.5 L 98.144531 89.980469 L 80.875 89.980469 L 72.03125 87.867188 C 68.941406 86.460938 66.484375 84.769531 64.660156 82.800781 L 56.023438 73.507812 C 54.199219 71.535156 51.742188 69.917969 48.652344 68.652344 C 45.421875 67.242188 42.472656 66.539062 39.804688 66.539062 L 18.535156 66.539062 L 9.898438 65.695312 L 2.527344 63.582031 C 0.84375 62.738281 0.210938 61.542969 0.632812 59.992188 L 4.84375 55.769531 L 5.054688 55.769531 L 11.582031 49.644531 C 13.832031 46.972656 15.304688 44.367188 16.007812 41.832031 L 20.851562 24.09375 L 25.0625 15.859375 L 31.171875 9.101562 L 35.382812 5.933594 C 37.488281 4.246094 40.296875 2.835938 43.808594 1.710938 L 52.863281 0.0195312 L 80.242188 0.0195312 L 89.511719 1.5 C 93.019531 2.625 95.828125 3.890625 97.933594 5.300781 L 104.675781 11.425781 L 110.363281 19.027344 "/>
              </g>
            </svg>
            <div className='backing stat-info'>
              <svg className='stat-img' viewBox="0 0 128 223" version="1.1">
                <g id="surface1">
                <path d="M 110.914062 4.722656 L 63.527344 85.042969 L 126.078125 85.042969 L 127.972656 85.988281 L 127.972656 88.820312 L 37.9375 222.054688 L 36.039062 223 L 35.09375 222.054688 L 32.25 220.164062 L 51.207031 127.5625 L 2.871094 127.5625 L 0.0273438 125.671875 L 0.0273438 123.785156 L 30.355469 2.835938 L 34.144531 0 L 109.019531 0 L 110.914062 0.945312 L 110.914062 4.722656 "/>
                </g>
              </svg>
              <div>5</div>
            </div>
            <div className='backing stat-info'>
              <svg className='stat-img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 119" version="1.1">
                <g id="surface1">
                <path d="M 62.960938 119 C 51.847656 119 41.449219 116.113281 31.769531 110.34375 L 56.507812 67.074219 L 63.5 68.695312 L 69.953125 67.074219 L 95.230469 110.34375 C 85.191406 116.113281 74.433594 119 62.960938 119 M 31.769531 0 L 56.507812 43.8125 L 51.667969 48.140625 L 50.054688 55.171875 L 0.0390625 55.171875 C 0.0390625 43.992188 2.726562 33.535156 8.105469 23.800781 C 13.84375 13.703125 21.730469 5.769531 31.769531 0 M 63.5 47.058594 L 68.878906 49.761719 L 71.566406 55.171875 L 68.878906 61.121094 C 67.445312 62.566406 65.652344 63.285156 63.5 63.285156 C 60.988281 63.285156 59.019531 62.566406 57.585938 61.121094 L 55.433594 55.171875 L 57.585938 49.761719 L 63.5 47.058594 M 95.230469 0 C 104.910156 5.769531 112.621094 13.523438 118.355469 23.257812 C 124.09375 33.355469 126.960938 43.992188 126.960938 55.171875 L 76.945312 55.171875 L 74.792969 48.140625 L 69.953125 43.8125 L 95.230469 0 "/>
                </g>
              </svg>
              <div>10</div>
            </div>
          </div>
        </section>

        <section className='nameplate small-text'>Howard</section>
      </main>

      <footer className='large-text'>
        <div className='backing'>HP 90/90</div>

        <div className='backing xp-container'>
          LEVEL 1
          <div id='xp-bar'>
            <div id='xp-fill'></div>
          </div>
        </div>

        <div className='backing' id="ap">AP 70/70</div>
      </footer>
      </>
)}

export default STAT;