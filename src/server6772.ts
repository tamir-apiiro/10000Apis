
const express = require('express')
import {handler6772} from "./handler6772";
const app = express()
app.get('/6772', handler6772)
app.listen(3000, () => {})
        