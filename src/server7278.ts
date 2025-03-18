
const express = require('express')
import {handler7278} from "./handler7278";
const app = express()
app.get('/7278', handler7278)
app.listen(3000, () => {})
        