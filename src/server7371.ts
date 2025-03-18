
const express = require('express')
import {handler7371} from "./handler7371";
const app = express()
app.get('/7371', handler7371)
app.listen(3000, () => {})
        