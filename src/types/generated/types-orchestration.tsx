/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Payload": [
      "ActionPayload",
      "ActivitiesPayload",
      "ApiCallPayload",
      "BaselineInfoPayload",
      "ChecklistPayload",
      "ElementsPayload",
      "EmptyPayload",
      "EmrReportPayload",
      "FormPayload",
      "HostedSessionPayload",
      "MessagePayload",
      "PathwayDataPointDefinitionsPayload",
      "PathwayPayload",
      "PathwaysPayload",
      "PatientPathwaysPayload",
      "PatientPayload",
      "PatientsPayload",
      "PublishedPathwayDefinitionsPayload",
      "RetryWebhookCallPayload",
      "ScheduledStepsPayload",
      "SearchPatientsPayload",
      "StartHostedPathwaySessionPayload",
      "StopTrackPayload",
      "UpdatePatientLanguagePayload",
      "UpdatePatientPayload",
      "UserPayload",
      "WebhookCallPayload",
      "WebhookCallsPayload"
    ]
  }
};
      export default result;
    
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Safe date scalar that can serialize string or date */
  SafeDate: any;
};

export type ActionPayload = Payload & {
  __typename?: 'ActionPayload';
  calculationId: Scalars['String'];
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export enum ActionType {
  ApiCall = 'API_CALL',
  Calculation = 'CALCULATION',
  Checklist = 'CHECKLIST',
  Form = 'FORM',
  Message = 'MESSAGE',
  PushToEmr = 'PUSH_TO_EMR'
}

export type ActivitiesPayload = Payload & {
  __typename?: 'ActivitiesPayload';
  activities: Array<Activity>;
  code: Scalars['String'];
  pagination?: Maybe<PaginationOutput>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean'];
};

export type Activity = {
  __typename?: 'Activity';
  action: ActivityAction;
  container_name?: Maybe<Scalars['String']>;
  context?: Maybe<PathwayContext>;
  date: Scalars['String'];
  id: Scalars['ID'];
  indirect_object?: Maybe<ActivityObject>;
  isUserActivity: Scalars['Boolean'];
  label?: Maybe<ActivityLabel>;
  object: ActivityObject;
  public?: Maybe<Scalars['Boolean']>;
  reference_id: Scalars['String'];
  resolution?: Maybe<ActivityResolution>;
  session_id?: Maybe<Scalars['String']>;
  status: ActivityStatus;
  stream_id: Scalars['String'];
  sub_activities: Array<SubActivity>;
  subject: ActivitySubject;
  track?: Maybe<ActivityTrack>;
};

export enum ActivityAction {
  Activate = 'ACTIVATE',
  Assigned = 'ASSIGNED',
  Complete = 'COMPLETE',
  Computed = 'COMPUTED',
  Deliver = 'DELIVER',
  Discard = 'DISCARD',
  Failed = 'FAILED',
  FailedToSend = 'FAILED_TO_SEND',
  IsWaitingOn = 'IS_WAITING_ON',
  Processed = 'PROCESSED',
  Read = 'READ',
  Remind = 'REMIND',
  Scheduled = 'SCHEDULED',
  Send = 'SEND',
  Stopped = 'STOPPED',
  Submitted = 'SUBMITTED'
}

export type ActivityLabel = {
  __typename?: 'ActivityLabel';
  color: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type ActivityObject = {
  __typename?: 'ActivityObject';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  preferred_language?: Maybe<Scalars['String']>;
  type: ActivityObjectType;
};

export enum ActivityObjectType {
  Action = 'ACTION',
  ApiCall = 'API_CALL',
  Calculation = 'CALCULATION',
  Checklist = 'CHECKLIST',
  EmrReport = 'EMR_REPORT',
  EmrRequest = 'EMR_REQUEST',
  EvaluatedRule = 'EVALUATED_RULE',
  Form = 'FORM',
  Message = 'MESSAGE',
  Pathway = 'PATHWAY',
  Patient = 'PATIENT',
  Reminder = 'REMINDER',
  Stakeholder = 'STAKEHOLDER',
  Step = 'STEP',
  Track = 'TRACK',
  User = 'USER'
}

export enum ActivityResolution {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export enum ActivityStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Done = 'DONE',
  Failed = 'FAILED'
}

export type ActivitySubject = {
  __typename?: 'ActivitySubject';
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: ActivitySubjectType;
};

export enum ActivitySubjectType {
  Awell = 'AWELL',
  Stakeholder = 'STAKEHOLDER',
  User = 'USER'
}

export type ActivityTrack = {
  __typename?: 'ActivityTrack';
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  street?: InputMaybe<Scalars['String']>;
  zip?: InputMaybe<Scalars['String']>;
};

export type Answer = {
  __typename?: 'Answer';
  question_id: Scalars['String'];
  value: Scalars['String'];
  value_type: DataPointValueType;
};

export type AnswerInput = {
  question_id: Scalars['String'];
  value: Scalars['String'];
};

export type ApiCall = {
  __typename?: 'ApiCall';
  id: Scalars['ID'];
  request: ApiCallRequest;
  responses: Array<ApiCallResponse>;
};

export type ApiCallHeader = {
  __typename?: 'ApiCallHeader';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ApiCallPayload = Payload & {
  __typename?: 'ApiCallPayload';
  api_call: ApiCall;
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export type ApiCallRequest = {
  __typename?: 'ApiCallRequest';
  body: Scalars['String'];
  endpoint: Scalars['String'];
  headers: Array<ApiCallHeader>;
};

export type ApiCallResponse = {
  __typename?: 'ApiCallResponse';
  body: Scalars['String'];
  date: Scalars['String'];
  status: Scalars['Float'];
};

export type ApiPathwayContext = {
  __typename?: 'ApiPathwayContext';
  id: Scalars['String'];
  pathway_definition_id: Scalars['String'];
  patient_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['String']>;
};

export type BaselineDataPoint = {
  __typename?: 'BaselineDataPoint';
  definition: DataPointDefinition;
  value?: Maybe<Scalars['String']>;
};

export type BaselineInfoInput = {
  data_point_definition_id: Scalars['String'];
  value: Scalars['String'];
};

export type BaselineInfoPayload = Payload & {
  __typename?: 'BaselineInfoPayload';
  baselineDataPoints: Array<BaselineDataPoint>;
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CalculationResultsPayload = {
  __typename?: 'CalculationResultsPayload';
  result: Array<SingleCalculationResult>;
};

export type Checklist = {
  __typename?: 'Checklist';
  items: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ChecklistPayload = Payload & {
  __typename?: 'ChecklistPayload';
  checklist?: Maybe<Checklist>;
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export type CreatePatientInput = {
  address?: InputMaybe<AddressInput>;
  birth_date?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['String']>;
  national_registry_number?: InputMaybe<Scalars['String']>;
  patient_code?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preferred_language?: InputMaybe<Scalars['String']>;
  /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
  sex?: InputMaybe<Sex>;
};

export type CreatePatientPayload = {
  __typename?: 'CreatePatientPayload';
  patient?: Maybe<User>;
};

export type DataPointDefinition = {
  __typename?: 'DataPointDefinition';
  category: DataPointSourceType;
  id: Scalars['ID'];
  key: Scalars['String'];
  optional?: Maybe<Scalars['Boolean']>;
  possibleValues?: Maybe<Array<DataPointPossibleValue>>;
  range?: Maybe<Range>;
  title: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  valueType: DataPointValueType;
};

export type DataPointInput = {
  data_point_definition_id: Scalars['String'];
  value: Scalars['String'];
};

export type DataPointPossibleValue = {
  __typename?: 'DataPointPossibleValue';
  label?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export enum DataPointSourceType {
  Calculation = 'CALCULATION',
  Form = 'FORM',
  Pathway = 'PATHWAY',
  PatientProfile = 'PATIENT_PROFILE',
  Step = 'STEP',
  Track = 'TRACK'
}

export enum DataPointValueType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  NumbersArray = 'NUMBERS_ARRAY',
  String = 'STRING'
}

export type DateFilter = {
  gte?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
};

export type DeletePathwayInput = {
  pathway_id: Scalars['String'];
};

export type DeletePatientInput = {
  patient_id: Scalars['String'];
};

export type Element = {
  __typename?: 'Element';
  activity_type?: Maybe<ActionType>;
  context: PathwayContext;
  end_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  label?: Maybe<ActivityLabel>;
  name: Scalars['String'];
  parent_id?: Maybe<Scalars['ID']>;
  stakeholders: Array<ElementStakeholder>;
  start_date: Scalars['String'];
  status: ElementStatus;
  type: ElementType;
};

export type ElementStakeholder = {
  __typename?: 'ElementStakeholder';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export enum ElementStatus {
  Active = 'ACTIVE',
  Done = 'DONE',
  Scheduled = 'SCHEDULED',
  Stopped = 'STOPPED'
}

export enum ElementType {
  Action = 'ACTION',
  Pathway = 'PATHWAY',
  Step = 'STEP',
  Track = 'TRACK',
  Trigger = 'TRIGGER'
}

export type ElementsPayload = Payload & {
  __typename?: 'ElementsPayload';
  code: Scalars['String'];
  elements: Array<Element>;
  success: Scalars['Boolean'];
};

export type EmptyPayload = Payload & {
  __typename?: 'EmptyPayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export type EmrReport = {
  __typename?: 'EmrReport';
  id: Scalars['ID'];
  message_html: Scalars['String'];
  metadata?: Maybe<Array<EmrReportMetadataField>>;
};

export type EmrReportMetadataField = {
  __typename?: 'EmrReportMetadataField';
  id: Scalars['ID'];
  label: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type EmrReportPayload = Payload & {
  __typename?: 'EmrReportPayload';
  code: Scalars['String'];
  report?: Maybe<EmrReport>;
  success: Scalars['Boolean'];
};

export type EvaluateFormRulesInput = {
  answers: Array<AnswerInput>;
  form_id: Scalars['String'];
};

export type EvaluateFormRulesPayload = {
  __typename?: 'EvaluateFormRulesPayload';
  results: Array<QuestionRuleResult>;
};

export type FilterActivitiesParams = {
  action: StringArrayFilter;
  activity_status: StringArrayFilter;
  activity_type: StringArrayFilter;
  pathway_definition_id: StringArrayFilter;
  patient_id: TextFilter;
};

export type FilterPathwayDataPointDefinitionsParams = {
  category?: InputMaybe<StringArrayFilter>;
  value_type?: InputMaybe<StringArrayFilter>;
};

export type FilterPathways = {
  pathway_definition_id?: InputMaybe<IdFilter>;
  patient_id?: InputMaybe<StringArrayFilter>;
  release_id?: InputMaybe<StringArrayFilter>;
  start_date?: InputMaybe<DateFilter>;
  status?: InputMaybe<StringArrayFilter>;
  version?: InputMaybe<NumberArrayFilter>;
};

export type FilterPatientPathways = {
  status: StringArrayFilter;
};

export type FilterPatients = {
  national_registry_number?: InputMaybe<TextFilter>;
  patient_code?: InputMaybe<TextFilter>;
  profile_id?: InputMaybe<StringArrayFilter>;
};

export type Form = {
  __typename?: 'Form';
  id: Scalars['String'];
  questions: Array<Question>;
  title: Scalars['String'];
};

export type FormPayload = Payload & {
  __typename?: 'FormPayload';
  code: Scalars['String'];
  form?: Maybe<Form>;
  success: Scalars['Boolean'];
};

export type FormResponse = {
  __typename?: 'FormResponse';
  answers: Array<Answer>;
};

export type FormResponsePayload = {
  __typename?: 'FormResponsePayload';
  response: FormResponse;
};

export type FormattedText = {
  __typename?: 'FormattedText';
  content: TranslatedText;
  format: Scalars['String'];
};

export type HostedSession = {
  __typename?: 'HostedSession';
  cancel_url: Scalars['String'];
  id: Scalars['ID'];
  pathway_id: Scalars['String'];
  status: HostedSessionStatus;
  success_url: Scalars['String'];
};

export type HostedSessionPayload = Payload & {
  __typename?: 'HostedSessionPayload';
  code: Scalars['String'];
  session: HostedSession;
  success: Scalars['Boolean'];
};

export enum HostedSessionStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED'
}

export type IdFilter = {
  eq?: InputMaybe<Scalars['String']>;
};

export type MarkMessageAsReadInput = {
  activity_id: Scalars['String'];
};

export type MarkMessageAsReadPayload = {
  __typename?: 'MarkMessageAsReadPayload';
  activity: Activity;
};

export type Message = {
  __typename?: 'Message';
  attachments?: Maybe<Array<MessageAttachment>>;
  body: Scalars['String'];
  format: MessageFormat;
  id: Scalars['ID'];
  subject: Scalars['String'];
};

export type MessageAttachment = {
  __typename?: 'MessageAttachment';
  id: Scalars['ID'];
  name: Scalars['String'];
  type: MessageAttachmentType;
  url: Scalars['String'];
};

export enum MessageAttachmentType {
  File = 'FILE',
  Link = 'LINK',
  Video = 'VIDEO'
}

export enum MessageFormat {
  Html = 'HTML',
  Slate = 'SLATE'
}

export type MessagePayload = Payload & {
  __typename?: 'MessagePayload';
  code: Scalars['String'];
  message?: Maybe<Message>;
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPatient: CreatePatientPayload;
  deletePathway: EmptyPayload;
  deletePatient: EmptyPayload;
  evaluateFormRules: EvaluateFormRulesPayload;
  markMessageAsRead: MarkMessageAsReadPayload;
  retryActivity: EmptyPayload;
  retryAllFailedWebhookCalls: EmptyPayload;
  retryAllFailedWebhookCallsForPathwayDefinition: EmptyPayload;
  retryAllWebhookCalls: EmptyPayload;
  retryPushToEmr: EmptyPayload;
  retryWebhookCall: RetryWebhookCallPayload;
  saveBaselineInfo: EmptyPayload;
  startHostedPathwaySession: StartHostedPathwaySessionPayload;
  startPathway: StartPathwayPayload;
  stopPathway: EmptyPayload;
  stopTrack: StopTrackPayload;
  submitChecklist: SubmitChecklistPayload;
  submitFormResponse: SubmitFormResponsePayload;
  updateBaselineInfo: EmptyPayload;
  updatePatient: UpdatePatientPayload;
  updatePatientLanguage: UpdatePatientLanguagePayload;
};


export type MutationCreatePatientArgs = {
  input?: InputMaybe<CreatePatientInput>;
};


export type MutationDeletePathwayArgs = {
  input: DeletePathwayInput;
};


export type MutationDeletePatientArgs = {
  input: DeletePatientInput;
};


export type MutationEvaluateFormRulesArgs = {
  input: EvaluateFormRulesInput;
};


export type MutationMarkMessageAsReadArgs = {
  input: MarkMessageAsReadInput;
};


export type MutationRetryActivityArgs = {
  input: RetryActivityInput;
};


export type MutationRetryAllFailedWebhookCallsArgs = {
  input: RetryAllFailedWebhookCallsInput;
};


export type MutationRetryAllFailedWebhookCallsForPathwayDefinitionArgs = {
  input: RetryAllFailedWebhookCallsForPathwayDefinitionInput;
};


export type MutationRetryAllWebhookCallsArgs = {
  input: RetryAllWebhookCallsInput;
};


export type MutationRetryPushToEmrArgs = {
  input: RetryPushToEmrInput;
};


export type MutationRetryWebhookCallArgs = {
  input: RetryWebhookCallInput;
};


export type MutationSaveBaselineInfoArgs = {
  input: SaveBaselineInfoInput;
};


export type MutationStartHostedPathwaySessionArgs = {
  input: StartHostedPathwaySessionInput;
};


export type MutationStartPathwayArgs = {
  input: StartPathwayInput;
};


export type MutationStopPathwayArgs = {
  input: StopPathwayInput;
};


export type MutationStopTrackArgs = {
  input: StopTrackInput;
};


export type MutationSubmitChecklistArgs = {
  input: SubmitChecklistInput;
};


export type MutationSubmitFormResponseArgs = {
  input: SubmitFormResponseInput;
};


export type MutationUpdateBaselineInfoArgs = {
  input: UpdateBaselineInfoInput;
};


export type MutationUpdatePatientArgs = {
  input: UpdatePatientInput;
};


export type MutationUpdatePatientLanguageArgs = {
  input: UpdatePatientLanguageInput;
};

export type NumberArrayFilter = {
  in?: InputMaybe<Array<Scalars['Float']>>;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  label: Scalars['String'];
  value: Scalars['Float'];
};

export type PaginationOutput = {
  __typename?: 'PaginationOutput';
  count?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
  total_count?: Maybe<Scalars['Float']>;
};

export type PaginationParams = {
  count: Scalars['Float'];
  offset: Scalars['Float'];
};

export type Pathway = {
  __typename?: 'Pathway';
  activities: Array<Activity>;
  complete_date?: Maybe<Scalars['SafeDate']>;
  dashboards?: Maybe<PathwayDashboard>;
  id: Scalars['ID'];
  pathway_definition_id: Scalars['String'];
  patient: User;
  patient_id: Scalars['String'];
  release_id: Scalars['String'];
  start_date?: Maybe<Scalars['SafeDate']>;
  status: PathwayStatus;
  status_explanation?: Maybe<Scalars['String']>;
  stop_date?: Maybe<Scalars['SafeDate']>;
  swimlanes: Swimlanes;
  title: Scalars['String'];
  tracks: Array<Track>;
  version?: Maybe<Scalars['Float']>;
};

export type PathwayContext = {
  __typename?: 'PathwayContext';
  action_id?: Maybe<Scalars['String']>;
  instance_id: Scalars['String'];
  pathway_id: Scalars['String'];
  step_id?: Maybe<Scalars['String']>;
  track_id?: Maybe<Scalars['String']>;
};

export type PathwayDashboard = {
  __typename?: 'PathwayDashboard';
  cumulio_auth_id: Scalars['String'];
  cumulio_auth_token: Scalars['String'];
  dashboard_ids: Array<Scalars['String']>;
};

export type PathwayDataPointDefinitionsPayload = Payload & {
  __typename?: 'PathwayDataPointDefinitionsPayload';
  code: Scalars['String'];
  data_point_definitions: Array<DataPointDefinition>;
  success: Scalars['Boolean'];
};

export type PathwayPayload = Payload & {
  __typename?: 'PathwayPayload';
  code: Scalars['String'];
  pathway?: Maybe<Pathway>;
  success: Scalars['Boolean'];
};

export enum PathwayStatus {
  Active = 'active',
  Completed = 'completed',
  MissingBaselineInfo = 'missing_baseline_info',
  Starting = 'starting',
  Stopped = 'stopped'
}

export type PathwaySummary = {
  __typename?: 'PathwaySummary';
  complete_date?: Maybe<Scalars['SafeDate']>;
  id: Scalars['ID'];
  pathway_definition_id?: Maybe<Scalars['String']>;
  patient_id?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['SafeDate']>;
  status: PathwayStatus;
  status_explanation?: Maybe<Scalars['String']>;
  stop_date?: Maybe<Scalars['SafeDate']>;
  title: Scalars['String'];
  version?: Maybe<Scalars['Float']>;
};

export type PathwaysPayload = Payload & {
  __typename?: 'PathwaysPayload';
  code: Scalars['String'];
  pagination?: Maybe<PaginationOutput>;
  pathways: Array<PathwaySummary>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean'];
};

export type PatientPathway = {
  __typename?: 'PatientPathway';
  baseline_info?: Maybe<Array<BaselineDataPoint>>;
  complete_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pathway_definition_id: Scalars['String'];
  release_id: Scalars['String'];
  status: PathwayStatus;
  status_explanation?: Maybe<Scalars['String']>;
  stop_date?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  version?: Maybe<Scalars['Float']>;
};

export type PatientPathwaysPayload = Payload & {
  __typename?: 'PatientPathwaysPayload';
  code: Scalars['String'];
  patientPathways: Array<PatientPathway>;
  success: Scalars['Boolean'];
};

export type PatientPayload = Payload & {
  __typename?: 'PatientPayload';
  code: Scalars['String'];
  patient?: Maybe<User>;
  success: Scalars['Boolean'];
};

export type PatientProfileInput = {
  address?: InputMaybe<AddressInput>;
  birth_date?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['String']>;
  national_registry_number?: InputMaybe<Scalars['String']>;
  patient_code?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  preferred_language?: InputMaybe<Scalars['String']>;
  /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
  sex?: InputMaybe<Sex>;
};

export type PatientsPayload = Payload & {
  __typename?: 'PatientsPayload';
  code: Scalars['String'];
  pagination: PaginationOutput;
  patients: Array<User>;
  sorting: SortingOutput;
  success: Scalars['Boolean'];
};

export type Payload = {
  code: Scalars['String'];
  success: Scalars['Boolean'];
};

export type PublishedPathwayDefinition = {
  __typename?: 'PublishedPathwayDefinition';
  /** Starting/baseline data point definitions for the pathway */
  dataPointDefinitions: Array<DataPointDefinition>;
  id: Scalars['ID'];
  release_id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  version?: Maybe<Scalars['Float']>;
};

export type PublishedPathwayDefinitionsPayload = Payload & {
  __typename?: 'PublishedPathwayDefinitionsPayload';
  code: Scalars['String'];
  publishedPathwayDefinitions: Array<PublishedPathwayDefinition>;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  activities: ActivitiesPayload;
  apiCall: ApiCallPayload;
  baselineInfo: BaselineInfoPayload;
  calculationAction: ActionPayload;
  calculationResults: CalculationResultsPayload;
  checklist: ChecklistPayload;
  emrReport: EmrReportPayload;
  form: FormPayload;
  formResponse: FormResponsePayload;
  hostedSession: HostedSessionPayload;
  message: MessagePayload;
  myActivities: ActivitiesPayload;
  myPathways: PathwaysPayload;
  myPendingActivities: ActivitiesPayload;
  pathway: PathwayPayload;
  pathwayActivities: ActivitiesPayload;
  pathwayDataPointDefinitions: PathwayDataPointDefinitionsPayload;
  pathwayElements: ElementsPayload;
  pathwayStepActivities: ActivitiesPayload;
  pathways: PathwaysPayload;
  patient: PatientPayload;
  patientPathways: PatientPathwaysPayload;
  patients: PatientsPayload;
  publishedPathwayDefinitions: PublishedPathwayDefinitionsPayload;
  scheduledSteps: ScheduledStepsPayload;
  searchPatientsByNationalRegistryNumber: SearchPatientsPayload;
  searchPatientsByPatientCode: SearchPatientsPayload;
  webhookCall: WebhookCallPayload;
  webhookCalls: WebhookCallsPayload;
  webhookCallsForPathwayDefinition: WebhookCallsPayload;
  webhookCallsForTenant: WebhookCallsPayload;
  whoami: UserPayload;
};


export type QueryActivitiesArgs = {
  filters?: InputMaybe<FilterActivitiesParams>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryApiCallArgs = {
  id: Scalars['String'];
};


export type QueryBaselineInfoArgs = {
  pathway_id: Scalars['String'];
};


export type QueryCalculationActionArgs = {
  id: Scalars['String'];
};


export type QueryCalculationResultsArgs = {
  activity_id: Scalars['String'];
  pathway_id: Scalars['String'];
};


export type QueryChecklistArgs = {
  id: Scalars['String'];
};


export type QueryEmrReportArgs = {
  id: Scalars['String'];
};


export type QueryFormArgs = {
  id: Scalars['String'];
};


export type QueryFormResponseArgs = {
  activity_id: Scalars['String'];
  pathway_id: Scalars['String'];
};


export type QueryMessageArgs = {
  id: Scalars['String'];
};


export type QueryMyActivitiesArgs = {
  pathway_id: Scalars['String'];
};


export type QueryPathwayArgs = {
  id: Scalars['String'];
};


export type QueryPathwayActivitiesArgs = {
  pathway_id: Scalars['String'];
};


export type QueryPathwayDataPointDefinitionsArgs = {
  filters?: InputMaybe<FilterPathwayDataPointDefinitionsParams>;
  pathway_definition_id?: InputMaybe<Scalars['String']>;
  release_id: Scalars['String'];
};


export type QueryPathwayElementsArgs = {
  pathway_id: Scalars['String'];
};


export type QueryPathwayStepActivitiesArgs = {
  pathway_id: Scalars['String'];
  step_id: Scalars['String'];
};


export type QueryPathwaysArgs = {
  filters?: InputMaybe<FilterPathways>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryPatientArgs = {
  id: Scalars['String'];
};


export type QueryPatientPathwaysArgs = {
  filters?: InputMaybe<FilterPatientPathways>;
  patient_id: Scalars['String'];
};


export type QueryPatientsArgs = {
  filters?: InputMaybe<FilterPatients>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryScheduledStepsArgs = {
  pathway_id: Scalars['String'];
};


export type QuerySearchPatientsByNationalRegistryNumberArgs = {
  national_registry_number: Scalars['String'];
};


export type QuerySearchPatientsByPatientCodeArgs = {
  patient_code: Scalars['String'];
};


export type QueryWebhookCallArgs = {
  webhook_call_id: Scalars['String'];
};


export type QueryWebhookCallsArgs = {
  pathway_id: Scalars['String'];
};


export type QueryWebhookCallsForPathwayDefinitionArgs = {
  pathway_definition_id: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  dataPointValueType?: Maybe<DataPointValueType>;
  id: Scalars['ID'];
  options?: Maybe<Array<Option>>;
  questionConfig?: Maybe<QuestionConfig>;
  questionType?: Maybe<QuestionType>;
  title: Scalars['String'];
  userQuestionType?: Maybe<UserQuestionType>;
};

export type QuestionConfig = {
  __typename?: 'QuestionConfig';
  mandatory: Scalars['Boolean'];
  recode_enabled?: Maybe<Scalars['Boolean']>;
  slider?: Maybe<SliderConfig>;
};

export type QuestionResponseInput = {
  question_id: Scalars['String'];
  value: Scalars['String'];
};

export type QuestionRuleResult = {
  __typename?: 'QuestionRuleResult';
  question_id: Scalars['String'];
  rule_id: Scalars['String'];
  satisfied: Scalars['Boolean'];
};

export enum QuestionType {
  Input = 'INPUT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  NoInput = 'NO_INPUT'
}

export type Range = {
  __typename?: 'Range';
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export type RetryActivityInput = {
  activity_id: Scalars['String'];
};

export type RetryAllFailedWebhookCallsForPathwayDefinitionInput = {
  pathway_definition_id: Scalars['String'];
};

export type RetryAllFailedWebhookCallsInput = {
  pathway_id: Scalars['String'];
};

export type RetryAllWebhookCallsInput = {
  pathway_id: Scalars['String'];
};

export type RetryPushToEmrInput = {
  activity_id: Scalars['String'];
};

export type RetryWebhookCallInput = {
  webhook_call_id: Scalars['String'];
};

export type RetryWebhookCallPayload = Payload & {
  __typename?: 'RetryWebhookCallPayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  webhook_call: WebhookCall;
};

export type SaveBaselineInfoInput = {
  baseline_info: Array<BaselineInfoInput>;
  pathway_id: Scalars['String'];
};

export type ScheduledStepsPayload = Payload & {
  __typename?: 'ScheduledStepsPayload';
  code: Scalars['String'];
  steps: Array<Element>;
  success: Scalars['Boolean'];
};

export type SearchPatientsPayload = Payload & {
  __typename?: 'SearchPatientsPayload';
  code: Scalars['String'];
  patients: Array<User>;
  success: Scalars['Boolean'];
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  NotKnown = 'NOT_KNOWN'
}

export type SingleCalculationResult = {
  __typename?: 'SingleCalculationResult';
  status?: Maybe<Scalars['String']>;
  subresult_id: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  value: Scalars['String'];
  value_type?: Maybe<DataPointValueType>;
};

export type SliderConfig = {
  __typename?: 'SliderConfig';
  display_marks: Scalars['Boolean'];
  is_value_tooltip_on: Scalars['Boolean'];
  max: Scalars['Float'];
  max_label: Scalars['String'];
  min: Scalars['Float'];
  min_label: Scalars['String'];
  show_min_max_values: Scalars['Boolean'];
  step_value: Scalars['Float'];
};

export type SortingOutput = {
  __typename?: 'SortingOutput';
  direction: Scalars['String'];
  field: Scalars['String'];
};

export type SortingParams = {
  direction: Scalars['String'];
  field: Scalars['String'];
};

export type StartHostedPathwaySessionInput = {
  cancel_url: Scalars['String'];
  data_points?: InputMaybe<Array<DataPointInput>>;
  pathway_definition_id: Scalars['String'];
  patient_id?: InputMaybe<Scalars['String']>;
  success_url: Scalars['String'];
};

export type StartHostedPathwaySessionPayload = Payload & {
  __typename?: 'StartHostedPathwaySessionPayload';
  code: Scalars['String'];
  pathway_id: Scalars['String'];
  patient_id: Scalars['String'];
  session_id: Scalars['String'];
  session_url: Scalars['String'];
  success: Scalars['Boolean'];
};

export type StartPathwayInput = {
  data_points?: InputMaybe<Array<DataPointInput>>;
  pathway_definition_id: Scalars['String'];
  patient_id: Scalars['String'];
};

export type StartPathwayPayload = {
  __typename?: 'StartPathwayPayload';
  pathway_id: Scalars['String'];
};

export type StopPathwayInput = {
  pathway_id: Scalars['String'];
  reason?: InputMaybe<Scalars['String']>;
};

export type StopTrackInput = {
  pathway_id: Scalars['String'];
  track_id: Scalars['String'];
};

export type StopTrackPayload = Payload & {
  __typename?: 'StopTrackPayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  track: Element;
};

export type StringArrayFilter = {
  in?: InputMaybe<Array<Scalars['String']>>;
};

export type SubActivity = {
  __typename?: 'SubActivity';
  action: ActivityAction;
  date: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  object?: Maybe<ActivityObject>;
  subject: ActivitySubject;
};

export type SubmitChecklistInput = {
  activity_id: Scalars['String'];
};

export type SubmitChecklistPayload = {
  __typename?: 'SubmitChecklistPayload';
  activity: Activity;
};

export type SubmitFormResponseInput = {
  activity_id: Scalars['String'];
  response: Array<QuestionResponseInput>;
};

export type SubmitFormResponsePayload = {
  __typename?: 'SubmitFormResponsePayload';
  activity: Activity;
};

export type Subscription = {
  __typename?: 'Subscription';
  activityCompleted: Activity;
  activityCreated: Activity;
  activityUpdated: Activity;
  elementCompleted: Element;
  elementCreated: Element;
  elementUpdated: Element;
  pathwayUpdated: Pathway;
  sessionCompleted: HostedSession;
  sessionExpired: HostedSession;
  webhookCallCreated: WebhookCall;
  webhookCallUpdated: WebhookCall;
};


export type SubscriptionActivityCompletedArgs = {
  only_patient_activities?: InputMaybe<Scalars['Boolean']>;
  pathway_id?: InputMaybe<Scalars['String']>;
};


export type SubscriptionActivityCreatedArgs = {
  only_patient_activities?: InputMaybe<Scalars['Boolean']>;
  pathway_id?: InputMaybe<Scalars['String']>;
};


export type SubscriptionActivityUpdatedArgs = {
  only_patient_activities?: InputMaybe<Scalars['Boolean']>;
  pathway_id?: InputMaybe<Scalars['String']>;
};


export type SubscriptionElementCompletedArgs = {
  pathway_id: Scalars['String'];
};


export type SubscriptionElementCreatedArgs = {
  pathway_id: Scalars['String'];
};


export type SubscriptionElementUpdatedArgs = {
  pathway_id: Scalars['String'];
};


export type SubscriptionPathwayUpdatedArgs = {
  id: Scalars['ID'];
};


export type SubscriptionWebhookCallCreatedArgs = {
  pathway_id: Scalars['String'];
};


export type SubscriptionWebhookCallUpdatedArgs = {
  pathway_id: Scalars['String'];
};

export type Swimlane = {
  __typename?: 'Swimlane';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type SwimlaneItem = {
  __typename?: 'SwimlaneItem';
  category: SwimlaneItemCategory;
  column_index: Scalars['Float'];
  date?: Maybe<Scalars['SafeDate']>;
  documentation?: Maybe<FormattedText>;
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  lane_id: Scalars['ID'];
  row_index: Scalars['Float'];
  title: Scalars['String'];
  track_id?: Maybe<Scalars['ID']>;
  type: SwimlaneItemType;
};

export enum SwimlaneItemCategory {
  Action = 'ACTION',
  PathwayEnd = 'PATHWAY_END',
  PathwayStart = 'PATHWAY_START',
  Step = 'STEP',
  Track = 'TRACK',
  TrackEnd = 'TRACK_END',
  TrackStart = 'TRACK_START'
}

export enum SwimlaneItemType {
  Active = 'active',
  Completed = 'completed',
  Pending = 'pending',
  Possible = 'possible'
}

export type SwimlaneLink = {
  __typename?: 'SwimlaneLink';
  destination_id: Scalars['ID'];
  id: Scalars['ID'];
  origin_id: Scalars['ID'];
};

export type Swimlanes = {
  __typename?: 'Swimlanes';
  items: Array<SwimlaneItem>;
  lanes: Array<Swimlane>;
  links: Array<SwimlaneLink>;
};

export type Tenant = {
  __typename?: 'Tenant';
  is_default: Scalars['Boolean'];
  name: Scalars['String'];
};

export type TextFilter = {
  eq?: InputMaybe<Scalars['String']>;
};

export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type TranslatedText = {
  __typename?: 'TranslatedText';
  en?: Maybe<Scalars['String']>;
};

export type UpdateBaselineInfoInput = {
  baseline_info: Array<BaselineInfoInput>;
  pathway_id: Scalars['String'];
};

export type UpdatePatientInput = {
  patient_id: Scalars['String'];
  profile: PatientProfileInput;
};

export type UpdatePatientLanguageInput = {
  preferred_language: Scalars['String'];
};

export type UpdatePatientLanguagePayload = Payload & {
  __typename?: 'UpdatePatientLanguagePayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UpdatePatientPayload = Payload & {
  __typename?: 'UpdatePatientPayload';
  code: Scalars['String'];
  patient?: Maybe<User>;
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  profile?: Maybe<UserProfile>;
  tenant: Tenant;
};

export type UserPayload = Payload & {
  __typename?: 'UserPayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  user: User;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<Address>;
  birth_date?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  national_registry_number?: Maybe<Scalars['String']>;
  patient_code?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
  sex?: Maybe<Sex>;
};

export enum UserQuestionType {
  Date = 'DATE',
  Description = 'DESCRIPTION',
  LongText = 'LONG_TEXT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  MultipleChoiceGrid = 'MULTIPLE_CHOICE_GRID',
  MultipleSelect = 'MULTIPLE_SELECT',
  Number = 'NUMBER',
  ShortText = 'SHORT_TEXT',
  Signature = 'SIGNATURE',
  Slider = 'SLIDER',
  YesNo = 'YES_NO'
}

export type WebhookCall = {
  __typename?: 'WebhookCall';
  created_at: Scalars['String'];
  event_type: Scalars['String'];
  id: Scalars['ID'];
  pathway?: Maybe<ApiPathwayContext>;
  request: WebhookCallRequest;
  responses: Array<WebhookCallResponse>;
  status: Scalars['String'];
  webhook_id: Scalars['String'];
  webhook_name: Scalars['String'];
};

export type WebhookCallHeader = {
  __typename?: 'WebhookCallHeader';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type WebhookCallPayload = Payload & {
  __typename?: 'WebhookCallPayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  webhook_call: WebhookCall;
};

export type WebhookCallRequest = {
  __typename?: 'WebhookCallRequest';
  body: Scalars['String'];
  endpoint: Scalars['String'];
  headers: Array<WebhookCallHeader>;
  method: Scalars['String'];
};

export type WebhookCallResponse = {
  __typename?: 'WebhookCallResponse';
  body: Scalars['String'];
  date: Scalars['String'];
  status: Scalars['Float'];
};

export type WebhookCallsPayload = Payload & {
  __typename?: 'WebhookCallsPayload';
  code: Scalars['String'];
  success: Scalars['Boolean'];
  webhook_calls: Array<WebhookCall>;
};

export type GetChecklistQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetChecklistQuery = { __typename?: 'Query', checklist: { __typename?: 'ChecklistPayload', checklist?: { __typename?: 'Checklist', title: string, items: Array<string> } | null } };

export type EvaluateFormRulesMutationVariables = Exact<{
  input: EvaluateFormRulesInput;
}>;


export type EvaluateFormRulesMutation = { __typename?: 'Mutation', evaluateFormRules: { __typename?: 'EvaluateFormRulesPayload', results: Array<{ __typename?: 'QuestionRuleResult', question_id: string, rule_id: string, satisfied: boolean }> } };

export type FormFragment = { __typename?: 'Form', id: string, title: string, questions: Array<{ __typename?: 'Question', id: string, title: string, dataPointValueType?: DataPointValueType | null, questionType?: QuestionType | null, userQuestionType?: UserQuestionType | null, options?: Array<{ __typename?: 'Option', id: string, value: number, label: string }> | null, questionConfig?: { __typename?: 'QuestionConfig', recode_enabled?: boolean | null, mandatory: boolean, slider?: { __typename?: 'SliderConfig', min: number, max: number, step_value: number, display_marks: boolean, min_label: string, max_label: string, is_value_tooltip_on: boolean, show_min_max_values: boolean } | null } | null }> };

export type GetFormQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetFormQuery = { __typename?: 'Query', form: { __typename?: 'FormPayload', form?: { __typename?: 'Form', id: string, title: string, questions: Array<{ __typename?: 'Question', id: string, title: string, dataPointValueType?: DataPointValueType | null, questionType?: QuestionType | null, userQuestionType?: UserQuestionType | null, options?: Array<{ __typename?: 'Option', id: string, value: number, label: string }> | null, questionConfig?: { __typename?: 'QuestionConfig', recode_enabled?: boolean | null, mandatory: boolean, slider?: { __typename?: 'SliderConfig', min: number, max: number, step_value: number, display_marks: boolean, min_label: string, max_label: string, is_value_tooltip_on: boolean, show_min_max_values: boolean } | null } | null }> } | null } };

export type GetFormResponseQueryVariables = Exact<{
  pathway_id: Scalars['String'];
  activity_id: Scalars['String'];
}>;


export type GetFormResponseQuery = { __typename?: 'Query', formResponse: { __typename?: 'FormResponsePayload', response: { __typename?: 'FormResponse', answers: Array<{ __typename?: 'Answer', question_id: string, value: string, value_type: DataPointValueType }> } } };

export type QuestionFragment = { __typename?: 'Question', id: string, title: string, dataPointValueType?: DataPointValueType | null, questionType?: QuestionType | null, userQuestionType?: UserQuestionType | null, options?: Array<{ __typename?: 'Option', id: string, value: number, label: string }> | null, questionConfig?: { __typename?: 'QuestionConfig', recode_enabled?: boolean | null, mandatory: boolean, slider?: { __typename?: 'SliderConfig', min: number, max: number, step_value: number, display_marks: boolean, min_label: string, max_label: string, is_value_tooltip_on: boolean, show_min_max_values: boolean } | null } | null };

export type GetHostedSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHostedSessionQuery = { __typename?: 'Query', hostedSession: { __typename?: 'HostedSessionPayload', session: { __typename?: 'HostedSession', pathway_id: string, status: HostedSessionStatus, success_url: string, cancel_url: string } } };

export type GetMessageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMessageQuery = { __typename?: 'Query', message: { __typename?: 'MessagePayload', message?: { __typename?: 'Message', id: string, body: string, subject: string, format: MessageFormat, attachments?: Array<{ __typename?: 'MessageAttachment', id: string, name: string, type: MessageAttachmentType, url: string }> | null } | null } };

export type MarkMessageAsReadMutationVariables = Exact<{
  input: MarkMessageAsReadInput;
}>;


export type MarkMessageAsReadMutation = { __typename?: 'Mutation', markMessageAsRead: { __typename?: 'MarkMessageAsReadPayload', activity: { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null } } };

export type ActivityFragment = { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null };

export type OnActivityCompletedSubscriptionVariables = Exact<{
  pathway_id: Scalars['String'];
}>;


export type OnActivityCompletedSubscription = { __typename?: 'Subscription', activityCompleted: { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null } };

export type OnActivityCreatedSubscriptionVariables = Exact<{
  pathway_id: Scalars['String'];
}>;


export type OnActivityCreatedSubscription = { __typename?: 'Subscription', activityCreated: { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null } };

export type OnActivityUpdatedSubscriptionVariables = Exact<{
  pathway_id: Scalars['String'];
}>;


export type OnActivityUpdatedSubscription = { __typename?: 'Subscription', activityUpdated: { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null } };

export type PathwayActivitiesQueryVariables = Exact<{
  pathway_id: Scalars['String'];
}>;


export type PathwayActivitiesQuery = { __typename?: 'Query', pathwayActivities: { __typename?: 'ActivitiesPayload', success: boolean, activities: Array<{ __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null }> } };

export type SubmitChecklistMutationVariables = Exact<{
  input: SubmitChecklistInput;
}>;


export type SubmitChecklistMutation = { __typename?: 'Mutation', submitChecklist: { __typename?: 'SubmitChecklistPayload', activity: { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null } } };

export type SubmitFormResponseMutationVariables = Exact<{
  input: SubmitFormResponseInput;
}>;


export type SubmitFormResponseMutation = { __typename?: 'Mutation', submitFormResponse: { __typename?: 'SubmitFormResponsePayload', activity: { __typename?: 'Activity', id: string, stream_id: string, action: ActivityAction, date: string, status: ActivityStatus, resolution?: ActivityResolution | null, reference_id: string, container_name?: string | null, isUserActivity: boolean, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string }, indirect_object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null, track?: { __typename?: 'ActivityTrack', id?: string | null, title: string } | null, label?: { __typename?: 'ActivityLabel', id?: string | null, text: string, color: string } | null, sub_activities: Array<{ __typename?: 'SubActivity', id: string, date: string, action: ActivityAction, error?: string | null, subject: { __typename?: 'ActivitySubject', id?: string | null, type: ActivitySubjectType, name: string }, object?: { __typename?: 'ActivityObject', id: string, type: ActivityObjectType, name: string } | null }>, context?: { __typename?: 'PathwayContext', instance_id: string, pathway_id: string, track_id?: string | null, step_id?: string | null, action_id?: string | null } | null } } };

export const QuestionFragmentDoc = gql`
    fragment Question on Question {
  id
  title
  dataPointValueType
  options {
    id
    value
    label
  }
  questionType
  userQuestionType
  questionConfig {
    recode_enabled
    mandatory
    slider {
      min
      max
      step_value
      display_marks
      min_label
      max_label
      is_value_tooltip_on
      show_min_max_values
    }
  }
}
    `;
export const FormFragmentDoc = gql`
    fragment Form on Form {
  id
  title
  questions {
    ...Question
  }
}
    ${QuestionFragmentDoc}`;
export const ActivityFragmentDoc = gql`
    fragment Activity on Activity {
  id
  stream_id
  subject {
    id
    type
    name
  }
  action
  date
  object {
    id
    type
    name
  }
  indirect_object {
    id
    type
    name
  }
  status
  resolution
  reference_id
  track {
    id
    title
  }
  container_name
  label {
    id
    text
    color
  }
  sub_activities {
    id
    date
    action
    error
    subject {
      id
      type
      name
    }
    object {
      id
      type
      name
    }
  }
  isUserActivity
  context {
    instance_id
    pathway_id
    track_id
    step_id
    action_id
  }
}
    `;
export const GetChecklistDocument = gql`
    query GetChecklist($id: String!) {
  checklist(id: $id) {
    checklist {
      title
      items
    }
  }
}
    `;

/**
 * __useGetChecklistQuery__
 *
 * To run a query within a React component, call `useGetChecklistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChecklistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChecklistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChecklistQuery(baseOptions: Apollo.QueryHookOptions<GetChecklistQuery, GetChecklistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChecklistQuery, GetChecklistQueryVariables>(GetChecklistDocument, options);
      }
export function useGetChecklistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChecklistQuery, GetChecklistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChecklistQuery, GetChecklistQueryVariables>(GetChecklistDocument, options);
        }
export type GetChecklistQueryHookResult = ReturnType<typeof useGetChecklistQuery>;
export type GetChecklistLazyQueryHookResult = ReturnType<typeof useGetChecklistLazyQuery>;
export type GetChecklistQueryResult = Apollo.QueryResult<GetChecklistQuery, GetChecklistQueryVariables>;
export const EvaluateFormRulesDocument = gql`
    mutation EvaluateFormRules($input: EvaluateFormRulesInput!) {
  evaluateFormRules(input: $input) {
    results {
      question_id
      rule_id
      satisfied
    }
  }
}
    `;
export type EvaluateFormRulesMutationFn = Apollo.MutationFunction<EvaluateFormRulesMutation, EvaluateFormRulesMutationVariables>;

/**
 * __useEvaluateFormRulesMutation__
 *
 * To run a mutation, you first call `useEvaluateFormRulesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEvaluateFormRulesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [evaluateFormRulesMutation, { data, loading, error }] = useEvaluateFormRulesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEvaluateFormRulesMutation(baseOptions?: Apollo.MutationHookOptions<EvaluateFormRulesMutation, EvaluateFormRulesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EvaluateFormRulesMutation, EvaluateFormRulesMutationVariables>(EvaluateFormRulesDocument, options);
      }
export type EvaluateFormRulesMutationHookResult = ReturnType<typeof useEvaluateFormRulesMutation>;
export type EvaluateFormRulesMutationResult = Apollo.MutationResult<EvaluateFormRulesMutation>;
export type EvaluateFormRulesMutationOptions = Apollo.BaseMutationOptions<EvaluateFormRulesMutation, EvaluateFormRulesMutationVariables>;
export const GetFormDocument = gql`
    query GetForm($id: String!) {
  form(id: $id) {
    form {
      ...Form
    }
  }
}
    ${FormFragmentDoc}`;

/**
 * __useGetFormQuery__
 *
 * To run a query within a React component, call `useGetFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFormQuery(baseOptions: Apollo.QueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
      }
export function useGetFormLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormQuery, GetFormQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormQuery, GetFormQueryVariables>(GetFormDocument, options);
        }
export type GetFormQueryHookResult = ReturnType<typeof useGetFormQuery>;
export type GetFormLazyQueryHookResult = ReturnType<typeof useGetFormLazyQuery>;
export type GetFormQueryResult = Apollo.QueryResult<GetFormQuery, GetFormQueryVariables>;
export const GetFormResponseDocument = gql`
    query GetFormResponse($pathway_id: String!, $activity_id: String!) {
  formResponse(pathway_id: $pathway_id, activity_id: $activity_id) {
    response {
      answers {
        question_id
        value
        value_type
      }
    }
  }
}
    `;

/**
 * __useGetFormResponseQuery__
 *
 * To run a query within a React component, call `useGetFormResponseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFormResponseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFormResponseQuery({
 *   variables: {
 *      pathway_id: // value for 'pathway_id'
 *      activity_id: // value for 'activity_id'
 *   },
 * });
 */
export function useGetFormResponseQuery(baseOptions: Apollo.QueryHookOptions<GetFormResponseQuery, GetFormResponseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFormResponseQuery, GetFormResponseQueryVariables>(GetFormResponseDocument, options);
      }
export function useGetFormResponseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFormResponseQuery, GetFormResponseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFormResponseQuery, GetFormResponseQueryVariables>(GetFormResponseDocument, options);
        }
export type GetFormResponseQueryHookResult = ReturnType<typeof useGetFormResponseQuery>;
export type GetFormResponseLazyQueryHookResult = ReturnType<typeof useGetFormResponseLazyQuery>;
export type GetFormResponseQueryResult = Apollo.QueryResult<GetFormResponseQuery, GetFormResponseQueryVariables>;
export const GetHostedSessionDocument = gql`
    query GetHostedSession {
  hostedSession {
    session {
      pathway_id
      status
      success_url
      cancel_url
    }
  }
}
    `;

/**
 * __useGetHostedSessionQuery__
 *
 * To run a query within a React component, call `useGetHostedSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHostedSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHostedSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHostedSessionQuery(baseOptions?: Apollo.QueryHookOptions<GetHostedSessionQuery, GetHostedSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHostedSessionQuery, GetHostedSessionQueryVariables>(GetHostedSessionDocument, options);
      }
export function useGetHostedSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHostedSessionQuery, GetHostedSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHostedSessionQuery, GetHostedSessionQueryVariables>(GetHostedSessionDocument, options);
        }
export type GetHostedSessionQueryHookResult = ReturnType<typeof useGetHostedSessionQuery>;
export type GetHostedSessionLazyQueryHookResult = ReturnType<typeof useGetHostedSessionLazyQuery>;
export type GetHostedSessionQueryResult = Apollo.QueryResult<GetHostedSessionQuery, GetHostedSessionQueryVariables>;
export const GetMessageDocument = gql`
    query GetMessage($id: String!) {
  message(id: $id) {
    message {
      id
      body
      subject
      format
      attachments {
        id
        name
        type
        url
      }
    }
  }
}
    `;

/**
 * __useGetMessageQuery__
 *
 * To run a query within a React component, call `useGetMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMessageQuery(baseOptions: Apollo.QueryHookOptions<GetMessageQuery, GetMessageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessageQuery, GetMessageQueryVariables>(GetMessageDocument, options);
      }
export function useGetMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessageQuery, GetMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessageQuery, GetMessageQueryVariables>(GetMessageDocument, options);
        }
export type GetMessageQueryHookResult = ReturnType<typeof useGetMessageQuery>;
export type GetMessageLazyQueryHookResult = ReturnType<typeof useGetMessageLazyQuery>;
export type GetMessageQueryResult = Apollo.QueryResult<GetMessageQuery, GetMessageQueryVariables>;
export const MarkMessageAsReadDocument = gql`
    mutation MarkMessageAsRead($input: MarkMessageAsReadInput!) {
  markMessageAsRead(input: $input) {
    activity {
      ...Activity
    }
  }
}
    ${ActivityFragmentDoc}`;
export type MarkMessageAsReadMutationFn = Apollo.MutationFunction<MarkMessageAsReadMutation, MarkMessageAsReadMutationVariables>;

/**
 * __useMarkMessageAsReadMutation__
 *
 * To run a mutation, you first call `useMarkMessageAsReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMessageAsReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMessageAsReadMutation, { data, loading, error }] = useMarkMessageAsReadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMarkMessageAsReadMutation(baseOptions?: Apollo.MutationHookOptions<MarkMessageAsReadMutation, MarkMessageAsReadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkMessageAsReadMutation, MarkMessageAsReadMutationVariables>(MarkMessageAsReadDocument, options);
      }
export type MarkMessageAsReadMutationHookResult = ReturnType<typeof useMarkMessageAsReadMutation>;
export type MarkMessageAsReadMutationResult = Apollo.MutationResult<MarkMessageAsReadMutation>;
export type MarkMessageAsReadMutationOptions = Apollo.BaseMutationOptions<MarkMessageAsReadMutation, MarkMessageAsReadMutationVariables>;
export const OnActivityCompletedDocument = gql`
    subscription OnActivityCompleted($pathway_id: String!) {
  activityCompleted(pathway_id: $pathway_id) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useOnActivityCompletedSubscription__
 *
 * To run a query within a React component, call `useOnActivityCompletedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnActivityCompletedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnActivityCompletedSubscription({
 *   variables: {
 *      pathway_id: // value for 'pathway_id'
 *   },
 * });
 */
export function useOnActivityCompletedSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnActivityCompletedSubscription, OnActivityCompletedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnActivityCompletedSubscription, OnActivityCompletedSubscriptionVariables>(OnActivityCompletedDocument, options);
      }
export type OnActivityCompletedSubscriptionHookResult = ReturnType<typeof useOnActivityCompletedSubscription>;
export type OnActivityCompletedSubscriptionResult = Apollo.SubscriptionResult<OnActivityCompletedSubscription>;
export const OnActivityCreatedDocument = gql`
    subscription OnActivityCreated($pathway_id: String!) {
  activityCreated(pathway_id: $pathway_id) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useOnActivityCreatedSubscription__
 *
 * To run a query within a React component, call `useOnActivityCreatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnActivityCreatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnActivityCreatedSubscription({
 *   variables: {
 *      pathway_id: // value for 'pathway_id'
 *   },
 * });
 */
export function useOnActivityCreatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnActivityCreatedSubscription, OnActivityCreatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnActivityCreatedSubscription, OnActivityCreatedSubscriptionVariables>(OnActivityCreatedDocument, options);
      }
export type OnActivityCreatedSubscriptionHookResult = ReturnType<typeof useOnActivityCreatedSubscription>;
export type OnActivityCreatedSubscriptionResult = Apollo.SubscriptionResult<OnActivityCreatedSubscription>;
export const OnActivityUpdatedDocument = gql`
    subscription OnActivityUpdated($pathway_id: String!) {
  activityUpdated(pathway_id: $pathway_id) {
    ...Activity
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __useOnActivityUpdatedSubscription__
 *
 * To run a query within a React component, call `useOnActivityUpdatedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnActivityUpdatedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnActivityUpdatedSubscription({
 *   variables: {
 *      pathway_id: // value for 'pathway_id'
 *   },
 * });
 */
export function useOnActivityUpdatedSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnActivityUpdatedSubscription, OnActivityUpdatedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnActivityUpdatedSubscription, OnActivityUpdatedSubscriptionVariables>(OnActivityUpdatedDocument, options);
      }
export type OnActivityUpdatedSubscriptionHookResult = ReturnType<typeof useOnActivityUpdatedSubscription>;
export type OnActivityUpdatedSubscriptionResult = Apollo.SubscriptionResult<OnActivityUpdatedSubscription>;
export const PathwayActivitiesDocument = gql`
    query PathwayActivities($pathway_id: String!) {
  pathwayActivities(pathway_id: $pathway_id) {
    success
    activities {
      ...Activity
    }
  }
}
    ${ActivityFragmentDoc}`;

/**
 * __usePathwayActivitiesQuery__
 *
 * To run a query within a React component, call `usePathwayActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePathwayActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePathwayActivitiesQuery({
 *   variables: {
 *      pathway_id: // value for 'pathway_id'
 *   },
 * });
 */
export function usePathwayActivitiesQuery(baseOptions: Apollo.QueryHookOptions<PathwayActivitiesQuery, PathwayActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PathwayActivitiesQuery, PathwayActivitiesQueryVariables>(PathwayActivitiesDocument, options);
      }
export function usePathwayActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PathwayActivitiesQuery, PathwayActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PathwayActivitiesQuery, PathwayActivitiesQueryVariables>(PathwayActivitiesDocument, options);
        }
export type PathwayActivitiesQueryHookResult = ReturnType<typeof usePathwayActivitiesQuery>;
export type PathwayActivitiesLazyQueryHookResult = ReturnType<typeof usePathwayActivitiesLazyQuery>;
export type PathwayActivitiesQueryResult = Apollo.QueryResult<PathwayActivitiesQuery, PathwayActivitiesQueryVariables>;
export const SubmitChecklistDocument = gql`
    mutation SubmitChecklist($input: SubmitChecklistInput!) {
  submitChecklist(input: $input) {
    activity {
      ...Activity
    }
  }
}
    ${ActivityFragmentDoc}`;
export type SubmitChecklistMutationFn = Apollo.MutationFunction<SubmitChecklistMutation, SubmitChecklistMutationVariables>;

/**
 * __useSubmitChecklistMutation__
 *
 * To run a mutation, you first call `useSubmitChecklistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitChecklistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitChecklistMutation, { data, loading, error }] = useSubmitChecklistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitChecklistMutation(baseOptions?: Apollo.MutationHookOptions<SubmitChecklistMutation, SubmitChecklistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitChecklistMutation, SubmitChecklistMutationVariables>(SubmitChecklistDocument, options);
      }
export type SubmitChecklistMutationHookResult = ReturnType<typeof useSubmitChecklistMutation>;
export type SubmitChecklistMutationResult = Apollo.MutationResult<SubmitChecklistMutation>;
export type SubmitChecklistMutationOptions = Apollo.BaseMutationOptions<SubmitChecklistMutation, SubmitChecklistMutationVariables>;
export const SubmitFormResponseDocument = gql`
    mutation SubmitFormResponse($input: SubmitFormResponseInput!) {
  submitFormResponse(input: $input) {
    activity {
      ...Activity
    }
  }
}
    ${ActivityFragmentDoc}`;
export type SubmitFormResponseMutationFn = Apollo.MutationFunction<SubmitFormResponseMutation, SubmitFormResponseMutationVariables>;

/**
 * __useSubmitFormResponseMutation__
 *
 * To run a mutation, you first call `useSubmitFormResponseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFormResponseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFormResponseMutation, { data, loading, error }] = useSubmitFormResponseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitFormResponseMutation(baseOptions?: Apollo.MutationHookOptions<SubmitFormResponseMutation, SubmitFormResponseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitFormResponseMutation, SubmitFormResponseMutationVariables>(SubmitFormResponseDocument, options);
      }
export type SubmitFormResponseMutationHookResult = ReturnType<typeof useSubmitFormResponseMutation>;
export type SubmitFormResponseMutationResult = Apollo.MutationResult<SubmitFormResponseMutation>;
export type SubmitFormResponseMutationOptions = Apollo.BaseMutationOptions<SubmitFormResponseMutation, SubmitFormResponseMutationVariables>;