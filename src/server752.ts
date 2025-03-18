
const express = require('express')
import {handler752} from "./handler752";
const app = express()
app.get('/752', handler752)
app.listen(3000, () => {})
        