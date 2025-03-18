
const express = require('express')
import {handler8829} from "./handler8829";
const app = express()
app.get('/8829', handler8829)
app.listen(3000, () => {})
        