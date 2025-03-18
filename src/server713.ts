
const express = require('express')
import {handler713} from "./handler713";
const app = express()
app.get('/713', handler713)
app.listen(3000, () => {})
        