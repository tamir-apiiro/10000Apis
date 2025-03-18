
const express = require('express')
import {handler7582} from "./handler7582";
const app = express()
app.get('/7582', handler7582)
app.listen(3000, () => {})
        