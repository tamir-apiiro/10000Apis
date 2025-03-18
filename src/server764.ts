
const express = require('express')
import {handler764} from "./handler764";
const app = express()
app.get('/764', handler764)
app.listen(3000, () => {})
        