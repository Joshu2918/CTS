using System.ServiceModel;

namespace SoapDemo
{
    [ServiceContract]
    public interface IEmployeeService
    {
        [OperationContract]
        string GetEmployee(int id);
    }

    public class EmployeeService : IEmployeeService
    {
        public string GetEmployee(int id)
        {
            return $"Employee Details for ID : {id}";
        }
    }

    public class SoapClient
    {
        public void ConsumeService()
        {
            // Example placeholder for consuming a SOAP service.
            // Normally, a generated WCF client proxy is used.

            EmployeeService service = new EmployeeService();

            string result = service.GetEmployee(101);

            Console.WriteLine(result);
        }
    }
}