
const express = require('express')
import {handler9017} from "./handler9017";
const app = express()
app.get('/9017', handler9017)
app.listen(3000, () => {})
        