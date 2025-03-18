
const express = require('express')
import {handler7672} from "./handler7672";
const app = express()
app.get('/7672', handler7672)
app.listen(3000, () => {})
        