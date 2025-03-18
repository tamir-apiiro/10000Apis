
const express = require('express')
import {handler9145} from "./handler9145";
const app = express()
app.get('/9145', handler9145)
app.listen(3000, () => {})
        