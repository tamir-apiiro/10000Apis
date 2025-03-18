
const express = require('express')
import {handler8132} from "./handler8132";
const app = express()
app.get('/8132', handler8132)
app.listen(3000, () => {})
        