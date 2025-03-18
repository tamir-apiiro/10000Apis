
const express = require('express')
import {handler9484} from "./handler9484";
const app = express()
app.get('/9484', handler9484)
app.listen(3000, () => {})
        