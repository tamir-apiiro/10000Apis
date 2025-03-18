
const express = require('express')
import {handler111} from "./handler111";
const app = express()
app.get('/111', handler111)
app.listen(3000, () => {})
        