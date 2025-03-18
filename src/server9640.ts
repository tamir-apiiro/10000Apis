
const express = require('express')
import {handler9640} from "./handler9640";
const app = express()
app.get('/9640', handler9640)
app.listen(3000, () => {})
        