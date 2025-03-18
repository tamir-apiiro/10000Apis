
const express = require('express')
import {handler4146} from "./handler4146";
const app = express()
app.get('/4146', handler4146)
app.listen(3000, () => {})
        