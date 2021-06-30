<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AuthenticationController extends AbstractController
{
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $em = $this->getDoctrine()->getManager();

        $user = new User;

        $data = get_object_vars(
            json_decode($request->getContent())
        );

        $user->setUsername($data['username']);
        $user->setPassword($encoder->encodePassword($user, $data['password']));
        $user->setRoles(['ROLES_USER']);
        $user->setEmail($data['email']);
        $user->setLastName($data['lastName']);
        $user->setFirstName($data['firstName']);
        $user->setSiretNumber($data['siretNumber']);
        $user->setPhone($data['phone']);

        $em->persist($user);
        $em->flush();

        return new Response(sprintf('User %s successfully created', $user->getUsername()));
    }

    public function api()
    {
        return new Response(sprintf('Logged in as %s', $this->getUser()->getUsername()));
    }

    public function getCompleteUser()
    {
        return $this->json(parent::getUser());
    }
}
