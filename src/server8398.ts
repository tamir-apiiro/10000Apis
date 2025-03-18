
const express = require('express')
import {handler8398} from "./handler8398";
const app = express()
app.get('/8398', handler8398)
app.listen(3000, () => {})
        