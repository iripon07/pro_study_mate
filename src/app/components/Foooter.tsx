// Footer.tsx
const Foooter = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex justify-between">
        {/* First Column */}
        <div className="flex-1 mr-8">
          <h3 className="font-semibold mb-4">About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Mission & Values</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Second Column */}
        <div className="flex-1 mr-8">
          <h3 className="font-semibold mb-4">Support</h3>
          <ul>
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="flex-1 mr-8">
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Tutorials</li>
            <li>News</li>
          </ul>
        </div>

        {/* Fourth Column (aligned to the end but taking the same space) */}
        <div className="flex-1 text-right">
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="flex justify-end space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Foooter;
