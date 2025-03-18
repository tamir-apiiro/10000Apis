
const express = require('express')
import {handler2640} from "./handler2640";
const app = express()
app.get('/2640', handler2640)
app.listen(3000, () => {})
        