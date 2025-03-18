
const express = require('express')
import {handler6640} from "./handler6640";
const app = express()
app.get('/6640', handler6640)
app.listen(3000, () => {})
        