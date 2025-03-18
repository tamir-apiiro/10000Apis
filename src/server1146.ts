
const express = require('express')
import {handler1146} from "./handler1146";
const app = express()
app.get('/1146', handler1146)
app.listen(3000, () => {})
        