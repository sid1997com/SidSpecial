public with sharing class Accounttest22 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Type, Rating, Phone 
            FROM Account];
    }
}