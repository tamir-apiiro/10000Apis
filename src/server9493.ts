
const express = require('express')
import {handler9493} from "./handler9493";
const app = express()
app.get('/9493', handler9493)
app.listen(3000, () => {})
        