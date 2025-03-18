
const express = require('express')
import {handler7974} from "./handler7974";
const app = express()
app.get('/7974', handler7974)
app.listen(3000, () => {})
        