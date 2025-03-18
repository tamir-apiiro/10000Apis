
const express = require('express')
import {handler6947} from "./handler6947";
const app = express()
app.get('/6947', handler6947)
app.listen(3000, () => {})
        