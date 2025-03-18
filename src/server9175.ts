
const express = require('express')
import {handler9175} from "./handler9175";
const app = express()
app.get('/9175', handler9175)
app.listen(3000, () => {})
        