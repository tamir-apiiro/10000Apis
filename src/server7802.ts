
const express = require('express')
import {handler7802} from "./handler7802";
const app = express()
app.get('/7802', handler7802)
app.listen(3000, () => {})
        