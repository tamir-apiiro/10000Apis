
const express = require('express')
import {handler8640} from "./handler8640";
const app = express()
app.get('/8640', handler8640)
app.listen(3000, () => {})
        