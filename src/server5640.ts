
const express = require('express')
import {handler5640} from "./handler5640";
const app = express()
app.get('/5640', handler5640)
app.listen(3000, () => {})
        