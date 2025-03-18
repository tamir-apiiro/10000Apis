
const express = require('express')
import {handler9685} from "./handler9685";
const app = express()
app.get('/9685', handler9685)
app.listen(3000, () => {})
        