
const express = require('express')
import {handler8924} from "./handler8924";
const app = express()
app.get('/8924', handler8924)
app.listen(3000, () => {})
        