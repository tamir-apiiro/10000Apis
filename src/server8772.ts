
const express = require('express')
import {handler8772} from "./handler8772";
const app = express()
app.get('/8772', handler8772)
app.listen(3000, () => {})
        