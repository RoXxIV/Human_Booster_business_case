<?php

namespace App\DataFixtures;

use App\Entity\Advert;
use App\Entity\Model;
use App\Entity\Skateshop;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    // generate a random date
    public function randomDate($start, $end, $format)
    {

        $min = strtotime($start);
        $max = strtotime($end);

        $timestamp = mt_rand($min, $max);

        return date($format, $timestamp);
    }

    public function load(ObjectManager $manager)
    {
        $widths = ['7.5', '7.6', '7.750', '8', '8.125', '8.250', '8.500', '9', '9.5', '10'];
        $concaves = ['Leger', 'Moyen', 'Forte'];
        $shapes = ['Strandard', 'Shaped', 'Full'];
        $price = [69.99, 71, 74, 68, 80, 99, 45];

        for ($i = 0; $i < 40; $i++) {

            $advert = new Advert();
            $advert->setDescription(
                'Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. Ab ut molestias expedita tenetur repellat tempore, 
                harum rerum praesentium beatae accusantium vel quibusdam ad 
                asperiores nobis, dignissimos culpa deserunt blanditiis deleniti!
            '
            );
            $advert->setWidth($widths[mt_rand(0, 9)]);
            $advert->setLength(mt_rand(29, 34));
            $advert->setShape($shapes[mt_rand(0, 2)]);
            $advert->setConcave($concaves[mt_rand(0, 2)]);
            $advert->setPrice($price[mt_rand(0, 6)]);

            $model = $manager
                ->getRepository(Model::class)
                ->find(mt_rand(1, 21));

            $skateshop = $manager
                ->getRepository(Skateshop::class)
                ->find(mt_rand(1, 10));

            $advert->setModel($model);
            $advert->setSkateshop($skateshop);
            $advert->setPicturePath('img/planches/SantaCruz-ScreamingHand-white.jpg');

            $manager->persist($advert);
        }

        $manager->flush();
    }
}
