
const express = require('express')
import {handler990} from "./handler990";
const app = express()
app.get('/990', handler990)
app.listen(3000, () => {})
        