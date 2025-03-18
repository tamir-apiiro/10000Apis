
const express = require('express')
import {handler8023} from "./handler8023";
const app = express()
app.get('/8023', handler8023)
app.listen(3000, () => {})
        