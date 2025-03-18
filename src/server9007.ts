
const express = require('express')
import {handler9007} from "./handler9007";
const app = express()
app.get('/9007', handler9007)
app.listen(3000, () => {})
        