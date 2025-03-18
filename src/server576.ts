
const express = require('express')
import {handler576} from "./handler576";
const app = express()
app.get('/576', handler576)
app.listen(3000, () => {})
        