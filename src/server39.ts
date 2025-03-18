
const express = require('express')
import {handler39} from "./handler39";
const app = express()
app.get('/39', handler39)
app.listen(3000, () => {})
        