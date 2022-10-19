package com.perficient.techbootcampDavidCarney.repositorys;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.perficient.techbootcampDavidCarney.models.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>
{
	
	Location findByZipcode(int zipcode);

}
