
const express = require('express')
import {handler371} from "./handler371";
const app = express()
app.get('/371', handler371)
app.listen(3000, () => {})
        