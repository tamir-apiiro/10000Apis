
const express = require('express')
import {handler6691} from "./handler6691";
const app = express()
app.get('/6691', handler6691)
app.listen(3000, () => {})
        