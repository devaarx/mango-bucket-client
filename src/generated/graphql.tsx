import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  userInfo: User;
  bucketInfo: Bucket;
  allBuckets: Array<Bucket>;
  taskInfo: Task;
};


export type QueryBucketInfoArgs = {
  bucket_id: Scalars['String'];
};


export type QueryTaskInfoArgs = {
  task_id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};


export type Bucket = {
  __typename?: 'Bucket';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  deadline: Scalars['DateTime'];
  pinned: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  tasks?: Maybe<Array<Task>>;
};

export type Task = {
  __typename?: 'Task';
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  schedule_time: Scalars['DateTime'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  login: User;
  createBucket: Bucket;
  deleteBucket: Scalars['Boolean'];
  updateBucket: Bucket;
  createTask: Task;
  deleteTask: Scalars['Boolean'];
  updateTask: Task;
};


export type MutationRegisterArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateBucketArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  deadline: Scalars['DateTime'];
};


export type MutationDeleteBucketArgs = {
  bucket_id: Scalars['String'];
};


export type MutationUpdateBucketArgs = {
  bucket_id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  deadline?: Maybe<Scalars['DateTime']>;
  pinned?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTaskArgs = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  schedule_time: Scalars['DateTime'];
  bucket_id: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  task_id: Scalars['String'];
};


export type MutationUpdateTaskArgs = {
  task_id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  schedule_time?: Maybe<Scalars['DateTime']>;
};

export type AllBucketsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBucketsQuery = (
  { __typename?: 'Query' }
  & { allBuckets: Array<(
    { __typename?: 'Bucket' }
    & Pick<Bucket, 'id' | 'name' | 'description' | 'pinned' | 'deadline' | 'color'>
    & { tasks?: Maybe<Array<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'name' | 'description' | 'status' | 'schedule_time'>
    )>> }
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'created_at'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email' | 'created_at'>
  ) }
);


export const AllBucketsDocument = gql`
    query allBuckets {
  allBuckets {
    id
    name
    description
    pinned
    deadline
    color
    tasks {
      id
      name
      description
      status
      schedule_time
    }
  }
}
    `;

/**
 * __useAllBucketsQuery__
 *
 * To run a query within a React component, call `useAllBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBucketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBucketsQuery(baseOptions?: Apollo.QueryHookOptions<AllBucketsQuery, AllBucketsQueryVariables>) {
        return Apollo.useQuery<AllBucketsQuery, AllBucketsQueryVariables>(AllBucketsDocument, baseOptions);
      }
export function useAllBucketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBucketsQuery, AllBucketsQueryVariables>) {
          return Apollo.useLazyQuery<AllBucketsQuery, AllBucketsQueryVariables>(AllBucketsDocument, baseOptions);
        }
export type AllBucketsQueryHookResult = ReturnType<typeof useAllBucketsQuery>;
export type AllBucketsLazyQueryHookResult = ReturnType<typeof useAllBucketsLazyQuery>;
export type AllBucketsQueryResult = Apollo.QueryResult<AllBucketsQuery, AllBucketsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    name
    email
    created_at
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $password: String!) {
  register(name: $name, email: $email, password: $password) {
    id
    name
    email
    created_at
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;