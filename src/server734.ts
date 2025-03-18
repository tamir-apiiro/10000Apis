
const express = require('express')
import {handler734} from "./handler734";
const app = express()
app.get('/734', handler734)
app.listen(3000, () => {})
        