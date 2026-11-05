const projectData = {
  backup: {
    en: { category: 'ENTERPRISE EXPERIENCE / SETECT', title: 'Backup, recovery and business continuity.', intro: 'Data protection work across enterprise engagements at SETECT, covering Veeam deployment, disaster recovery support and a critical backup incident.', sections: [
      {heading: 'The context', text: 'Organizations depend on backup operations to protect important data and support recovery when systems fail. My work covered both implementation and incident resolution in separate client environments.'},
      {heading: 'My contribution', list: ['Deployed and configured an enterprise backup solution using Veeam Backup & Replication.', 'Implemented a Veeam Data Platform environment to support business continuity and disaster recovery.', 'Investigated a critical incident in which scheduled backup jobs had stopped, performed root-cause analysis and restored normal backup operations.']},
      {heading: 'The perspective', text: 'Deployment and day-to-day operation are connected. Troubleshooting backup failures is part of keeping a recovery capability dependable.'}
    ], tags: ['Veeam Backup & Replication', 'Veeam Data Platform', 'Root-cause analysis', 'Disaster recovery'] },
    fr: { category: 'EXPÉRIENCE EN ENTREPRISE / SETECT', title: 'Sauvegarde, reprise et continuité des activités.', intro: 'Plusieurs missions chez SETECT : déploiement Veeam, soutien à la reprise après sinistre et résolution d’un incident critique de sauvegarde.', sections: [
      {heading: 'Le contexte', text: 'Les organisations s’appuient sur leurs sauvegardes pour protéger les données importantes et reprendre leurs activités en cas de panne. Mon travail a porté sur l’implantation et la résolution d’incidents dans des environnements clients distincts.'},
      {heading: 'Ma contribution', list: ['Déploiement et configuration d’une solution de sauvegarde avec Veeam Backup & Replication.', 'Mise en place d’une plateforme Veeam Data Platform pour soutenir la continuité des activités et la reprise après sinistre.', 'Analyse d’un incident critique ayant interrompu des tâches de sauvegarde planifiées, recherche de la cause et rétablissement du fonctionnement normal.']},
      {heading: 'Mon approche', text: 'Le déploiement et l’exploitation au quotidien sont liés. Résoudre les échecs de sauvegarde fait partie du travail nécessaire pour disposer d’une capacité de reprise fiable.'}
    ], tags: ['Veeam Backup & Replication', 'Veeam Data Platform', 'Analyse des causes', 'Reprise après sinistre'] }
  },
  vmware: {
    en: { category: 'ENTERPRISE EXPERIENCE / SETECT', title: 'Building the virtual infrastructure foundation.', intro: 'Deployment of an enterprise virtual infrastructure using the VMware ecosystem.', sections: [
      {heading: 'The context', text: 'A virtual infrastructure brings compute resources and their management into one coordinated environment. It provides the foundation on which business systems run.'},
      {heading: 'My contribution', list: ['Deployed a virtual infrastructure using VMware ESXi, vCenter and vSphere.', 'Worked with enterprise systems as part of infrastructure engineering engagements at SETECT.']},
      {heading: 'Technical focus', text: 'Hypervisors, centralized management and the relationship between the infrastructure platform and the workloads it supports.'}
    ], tags: ['VMware ESXi', 'vCenter', 'vSphere', 'Virtualization'] },
    fr: { category: 'EXPÉRIENCE EN ENTREPRISE / SETECT', title: 'Bâtir les fondations de l’infrastructure virtuelle.', intro: 'Déploiement d’une infrastructure virtuelle en entreprise à l’aide de l’écosystème VMware.', sections: [
      {heading: 'Le contexte', text: 'Une infrastructure virtuelle réunit les ressources de calcul et leur gestion dans un environnement coordonné. Elle forme la base sur laquelle fonctionnent les systèmes de l’organisation.'},
      {heading: 'Ma contribution', list: ['Déploiement d’une infrastructure virtuelle avec VMware ESXi, vCenter et vSphere.', 'Travail sur des systèmes d’entreprise dans le cadre de missions d’ingénierie d’infrastructure chez SETECT.']},
      {heading: 'Les aspects techniques', text: 'Les hyperviseurs, la gestion centralisée et les liens entre la plateforme d’infrastructure et les charges de travail qu’elle héberge.'}
    ], tags: ['VMware ESXi', 'vCenter', 'vSphere', 'Virtualisation'] }
  },
  storage: {
    en: { category: 'ENTERPRISE EXPERIENCE / SETECT', title: 'Taking data protection offsite.', intro: 'Long-term protection and offsite archiving of critical company data using magnetic-tape storage.', sections: [
      {heading: 'The context', text: 'Critical data may need to be retained beyond routine operational backups. Offsite archiving addresses a different part of the data-protection lifecycle.'},
      {heading: 'My contribution', list: ['Implemented offsite backup archiving on magnetic tape.', 'Used a Quantum SuperLoader 3 tape library for long-term protection and externalization of critical company data.']},
      {heading: 'Related storage experience', text: 'My broader storage toolkit includes Quantum DXi, Scalar i3 and SuperLoader technologies. The offsite archive deployment described here used SuperLoader 3.'}
    ], tags: ['Quantum SuperLoader 3', 'Tape storage', 'Offsite archiving', 'Data protection'] },
    fr: { category: 'EXPÉRIENCE EN ENTREPRISE / SETECT', title: 'Protéger les données au-delà du site principal.', intro: 'Protection à long terme et archivage hors site de données critiques grâce au stockage sur bandes magnétiques.', sections: [
      {heading: 'Le contexte', text: 'Les données critiques peuvent nécessiter une conservation au-delà des sauvegardes opérationnelles courantes. L’archivage hors site répond à un autre besoin du cycle de protection des données.'},
      {heading: 'Ma contribution', list: ['Mise en œuvre de l’archivage hors site de sauvegardes sur bandes magnétiques.', 'Utilisation d’une bibliothèque Quantum SuperLoader 3 pour la protection à long terme et l’externalisation des données critiques.']},
      {heading: 'Expérience connexe en stockage', text: 'Mes compétences en stockage comprennent également Quantum DXi, Scalar i3 et SuperLoader. Le déploiement d’archivage décrit ici utilisait SuperLoader 3.'}
    ], tags: ['Quantum SuperLoader 3', 'Stockage sur bandes', 'Archivage hors site', 'Protection des données'] }
  },
  linux: {
    en: { category: 'HANDS-ON LABS / CYBERSECURITY STUDIES', title: 'Turning security concepts into configuration.', intro: 'Practical Linux and web-server exercises completed as part of my cybersecurity studies.', sections: [
      {heading: 'Web-server security', list: ['Configured Apache HTTPS virtual hosts with a self-signed certificate in a lab environment.', 'Practiced directory access restrictions and HTTP redirects.', 'Used curl, OpenSSL handshake checks and Apache logs to inspect behavior.']},
      {heading: 'Accounts and encrypted storage', list: ['Practiced password complexity, password history, expiration and sudo permissions on Linux.', 'Worked with LUKS encrypted storage, loop devices and mounting encrypted filesystems.']},
      {heading: 'Scope', text: 'These are educational lab activities. They demonstrate practical configuration and verification rather than a claim of production deployment.'}
    ], tags: ['Linux', 'Apache', 'TLS', 'LUKS', 'Access control'] },
    fr: { category: 'LABORATOIRES / ÉTUDES EN CYBERSÉCURITÉ', title: 'Passer des concepts de sécurité à la configuration.', intro: 'Exercices pratiques sous Linux et sur serveur web réalisés dans le cadre de mes études en cybersécurité.', sections: [
      {heading: 'Sécurisation du serveur web', list: ['Configuration d’hôtes virtuels HTTPS Apache avec un certificat autosigné en laboratoire.', 'Mise en pratique de restrictions d’accès aux répertoires et de redirections HTTP.', 'Vérification du comportement avec curl, les échanges TLS via OpenSSL et les journaux Apache.']},
      {heading: 'Comptes et stockage chiffré', list: ['Mise en pratique de la complexité, de l’historique et de l’expiration des mots de passe, ainsi que des permissions sudo sous Linux.', 'Travail avec le stockage chiffré LUKS, les périphériques de boucle et le montage de systèmes de fichiers chiffrés.']},
      {heading: 'Le cadre', text: 'Il s’agit d’activités pédagogiques en laboratoire. Elles illustrent la configuration et la vérification pratiques, sans être présentées comme des déploiements en production.'}
    ], tags: ['Linux', 'Apache', 'TLS', 'LUKS', 'Contrôle d’accès'] }
  },
  zerotrust: {
    en: { category: 'ACADEMIC RESEARCH / ANALYTICAL REPORT', title: 'Zero Trust in Canada’s banking system.', intro: 'An academic investigation into the challenges of implementing Zero Trust Architecture in Canada’s banking system.', sections: [
      {heading: 'The research question', text: 'Why can consistent least-privilege and contextual access decisions be difficult to enforce across interconnected banking environments?'},
      {heading: 'Areas of investigation', list: ['Access visibility and the complexity of legacy systems and integrations.', 'Governance and business ownership of access decisions.', 'How implementation sequencing and testing can affect operational continuity.']},
      {heading: 'The approach', text: 'The report examines root causes, contributing factors and business implications, then evaluates realistic implementation recommendations. This is academic analysis, rather than a banking consulting engagement.'}
    ], tags: ['Zero Trust', 'Least privilege', 'Governance', 'Analytical research'] },
    fr: { category: 'RECHERCHE UNIVERSITAIRE / RAPPORT ANALYTIQUE', title: 'Le Zero Trust dans le système bancaire canadien.', intro: 'Une recherche universitaire sur les défis de mise en œuvre de l’architecture Zero Trust dans le système bancaire canadien.', sections: [
      {heading: 'La question de recherche', text: 'Pourquoi peut-il être difficile d’appliquer de façon cohérente le moindre privilège et les décisions d’accès contextuelles dans des environnements bancaires interconnectés ?'},
      {heading: 'Les axes étudiés', list: ['La visibilité des accès et la complexité des systèmes existants et de leurs intégrations.', 'La gouvernance et la responsabilité des métiers dans les décisions d’accès.', 'Les effets de l’ordre de déploiement et des tests sur la continuité des activités.']},
      {heading: 'La démarche', text: 'Le rapport examine les causes profondes, les facteurs contributifs et les enjeux pour l’organisation, puis évalue des recommandations réalistes. Il s’agit d’une analyse universitaire, et non d’une mission de conseil bancaire.'}
    ], tags: ['Zero Trust', 'Moindre privilège', 'Gouvernance', 'Recherche analytique'] }
  }
};

