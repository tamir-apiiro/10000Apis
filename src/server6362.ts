
const express = require('express')
import {handler6362} from "./handler6362";
const app = express()
app.get('/6362', handler6362)
app.listen(3000, () => {})
        