export interface ApiResponse<T> {
  data?: T;
  isSuccess: boolean;
  message: string;
  errorCode: string;
  validationErrors: {
    emailAddress?: string;
    password?: string;
    name?: string;
    otp?: string;
    newPassword?: string;
  };
  meta: {
    pageNumber?: string;
    pageSize?: string;
    totalCount?: string;
    totalPages?: string;
    hasNext?: string;
    hasPrevious?: string;
  };
  instance: string;
  traceId: string;
}
