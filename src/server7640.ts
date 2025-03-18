
const express = require('express')
import {handler7640} from "./handler7640";
const app = express()
app.get('/7640', handler7640)
app.listen(3000, () => {})
        