import ibm_boto3




cos = ibm_boto3.client(
    "s3",
    ibm_api_key_id="AerehQeOtiZljYn3cp3Rv5--PTLRVXJvROW8YJib6Fd6",
    ibm_service_instance_id=COS_INSTANCE_CRN,
    config=Config(signature_version="oauth"),
    endpoint_url=COS_ENDPOINT
)


