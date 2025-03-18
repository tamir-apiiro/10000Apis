
const express = require('express')
import {handler6768} from "./handler6768";
const app = express()
app.get('/6768', handler6768)
app.listen(3000, () => {})
        