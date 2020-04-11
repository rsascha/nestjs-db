/* SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"; */
/* SET AUTOCOMMIT = 0; */
/* START TRANSACTION; */
/* SET time_zone = "+00:00"; */
--
-- Database: `contacts`
--
CREATE DATABASE IF NOT EXISTS `contacts` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ContactList` generated from model 'ContactList'
--

CREATE TABLE IF NOT EXISTS `contacts`.`ContactList` (
  `id` TEXT DEFAULT NULL,
  `persons` JSON DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `Group` generated from model 'Group'
--

CREATE TABLE IF NOT EXISTS `contacts`.`Group` (
  `id` TEXT DEFAULT NULL,
  `name` TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `Person` generated from model 'Person'
--

CREATE TABLE IF NOT EXISTS `contacts`.`Person` (
  `id` TEXT NOT NULL,
  `name` TEXT NOT NULL,
  `phoneNumber` TEXT DEFAULT NULL,
  `group` TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

