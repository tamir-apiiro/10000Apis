
const express = require('express')
import {handler903} from "./handler903";
const app = express()
app.get('/903', handler903)
app.listen(3000, () => {})
        