
const express = require('express')
import {handler7654} from "./handler7654";
const app = express()
app.get('/7654', handler7654)
app.listen(3000, () => {})
        