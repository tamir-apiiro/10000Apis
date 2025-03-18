
const express = require('express')
import {handler6775} from "./handler6775";
const app = express()
app.get('/6775', handler6775)
app.listen(3000, () => {})
        