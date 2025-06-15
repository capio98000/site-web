using UnityEngine;

[RequireComponent(typeof(CharacterController))]
public class EnemyPlayerBehaviour : MonoBehaviour
{
    public Transform player;            // Cible à suivre (le joueur)
    public float moveSpeed = 5f;        // Vitesse de déplacement
    public float jumpHeight = 1.5f;     // Hauteur de saut
    public float attackDistance = 2f;   // Distance d'attaque
    public float gravity = -9.81f;      // Gravitation appliquée

    private CharacterController controller;
    private Vector3 velocity;

    void Awake()
    {
        controller = GetComponent<CharacterController>();
    }

    void Update()
    {
        if (!player) return;

        // Avance vers le joueur comme le ferait un joueur
        Vector3 direction = (player.position - transform.position).normalized;
        Vector3 move = new Vector3(direction.x, 0f, direction.z);
        controller.Move(move * moveSpeed * Time.deltaTime);

        // Saut aléatoire pour imiter le comportement d'un joueur
        if (controller.isGrounded && Random.value < 0.02f)
        {
            velocity.y = Mathf.Sqrt(jumpHeight * -2f * gravity);
        }

        velocity.y += gravity * Time.deltaTime;
        controller.Move(velocity * Time.deltaTime);

        // Si assez proche, attaquer
        if (Vector3.Distance(transform.position, player.position) <= attackDistance)
        {
            Attack();
        }
    }

    void Attack()
    {
        // Logique d'attaque simple (peut être remplacée par une vraie attaque)
        Debug.Log("Enemy attacks like a player!");
    }
}
