
const express = require('express')
import {handler8802} from "./handler8802";
const app = express()
app.get('/8802', handler8802)
app.listen(3000, () => {})
        