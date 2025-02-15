import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

export default function Dashboard() {
    return (
        <>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"> 
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">$100.00</p>
                    <p className="text-xs text-muted-foreground">Based on 100 Charges</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Sales</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">+50</p>
                    <p className="text-xs text-muted-foreground">Total Sales on Shopsmart</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Products</CardTitle>
                    <PartyPopper className="h-4 w-4 text-indigo-500" />
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">87</p>
                    <p className="text-xs text-muted-foreground">Total Products Created</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Users</CardTitle>
                    <User2 className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">200</p>
                    <p className="text-xs text-muted-foreground">Total Users Signed Up</p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}