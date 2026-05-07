import { createContext, useContext, useState } from "react";

interface AuthUser {
    user_id: number,
    name: string,
    role: string,
    access: string,
    refresh: string,
}

