
const express = require('express')
import {handler271} from "./handler271";
const app = express()
app.get('/271', handler271)
app.listen(3000, () => {})
        