
const express = require('express')
import {handler443} from "./handler443";
const app = express()
app.get('/443', handler443)
app.listen(3000, () => {})
        