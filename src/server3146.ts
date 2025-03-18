
const express = require('express')
import {handler3146} from "./handler3146";
const app = express()
app.get('/3146', handler3146)
app.listen(3000, () => {})
        