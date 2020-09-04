DROP DATABASE IF EXISTS `moviesearch`;
CREATE DATABASE IF NOT EXISTS `moviesearch`;
USE `moviesearch`;

CREATE TABLE `credentials` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `passsword` varchar(1000) NOT NULL
);

--
-- Dumping data for table `credentials`
--

INSERT INTO `credentials` ( `username`, `email`, `passsword`) VALUES
( 'admin','admin@admin.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(12) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` varchar(5000) DEFAULT NULL,
  `timecreated` varchar(255) NOT NULL
) ;

--
-- Indexes for table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `credentials`
--
ALTER TABLE `credentials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
COMMIT;
