import React, { ReactNode } from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  ProjectDataContainer,
  ProjectDataItem,
  Divider,
  ProjectHeader,
  ProjectDescription,
  ProjectJustification,
  ProjectStatus,
  ProjectUpdated,
  ProjectStatusItem,
  ArrowIcon,
  ProjetcOwner,
  ProjectOwnerItem,
  OwnerIcon,
} from './styles';

import { IProject } from '../../interfaces/Project';

const Project: React.FC<IProject> = ({ id, ...rest }) => {
  return (
    <Container>
      <Card>
        <CardHeader>
          <ProjectHeader>
            <div className="project-title">
              <h1>
                Controle no NBA - Drop 3 [Mecânica Get RTDM e MA sem incentivo
                {id}
              </h1>
            </div>
          </ProjectHeader>
        </CardHeader>
        <CardContent>
          <ProjectDescription>
            <span>Breve Descrição</span>
            <p>
              Disponibilizar informações do ambiente SAS-CDM no Big Data, a fim
              de não impactar o ambiente transacional e possibilitar análises e
              explorações no âmbito analítico.
            </p>
          </ProjectDescription>
          <Divider />
          <ProjectJustification>
            <span>Defesa/Justificativa</span>
            <p>
              Disponibilizar dentro do NBA a possibilidade de campanhas com
              incentivo e contratação de plugin para o controle
            </p>
          </ProjectJustification>
          <Divider />
          <ProjectDataContainer>
            <ProjectDataItem>
              <span>Solicitação</span>
              <p>20/05/2021</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Escrita DE</span>
              <p>20/05/2021</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Envio SC</span>
              <p>20/05/2021</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Postagem</span>
              <p>20/05/2021</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Rollout</span>
              <p>20/05/2021</p>
            </ProjectDataItem>
            <ProjectDataItem>
              <span>Expectativa MKT</span>
              <p>20/05/2021</p>
            </ProjectDataItem>
          </ProjectDataContainer>
          <Divider />
          <ProjectStatus>
            <span>Status - Timeline</span>
            <ProjectStatusItem>
              Necessidade enviada para Automação
            </ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Análise de Automação</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>
              Use Cases em definição por Segmento
            </ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>DE sendo escrita</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>DE em revisão por segmento</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>
              Aguardando Priorização por Segmento
            </ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Demanda com baixa prioridade</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>DE Fechada</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>DE enviada para SC</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Apresentação DL Projetos</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Aguardando análise TI</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Aguardando Plano de Entrega</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Em desenvolvimento</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Teste IT/UAT</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Rollout Planejado</ProjectStatusItem>
            <ArrowIcon />
            <ProjectStatusItem>Concluída</ProjectStatusItem>
          </ProjectStatus>
          <Divider />
          <ProjetcOwner>
            <ProjectOwnerItem>
              <span>Solicitantes</span>
              <OwnerIcon />
              <p>João Stricker</p>
              <OwnerIcon />
              <p>Antonio Tinoco</p>
              <OwnerIcon />
              <p>Juliana Pilloto</p>
              <OwnerIcon />
              <p>Lucas Lial</p>
            </ProjectOwnerItem>
          </ProjetcOwner>
          <Divider />
          <ProjectUpdated>
            <span>Última atualização</span>
            <p>Em 21/05/2021 por Renaldy Pereira Sousa</p>
          </ProjectUpdated>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Project;
