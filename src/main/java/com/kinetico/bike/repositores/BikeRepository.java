package com.kinetico.bike.repositores;

import com.kinetico.bike.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event;

public interface BikeRepository extends JpaRepository<Bike, Long> {
}