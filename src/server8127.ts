
const express = require('express')
import {handler8127} from "./handler8127";
const app = express()
app.get('/8127', handler8127)
app.listen(3000, () => {})
        