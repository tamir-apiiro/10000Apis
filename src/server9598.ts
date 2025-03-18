
const express = require('express')
import {handler9598} from "./handler9598";
const app = express()
app.get('/9598', handler9598)
app.listen(3000, () => {})
        