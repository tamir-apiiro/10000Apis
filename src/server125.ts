
const express = require('express')
import {handler125} from "./handler125";
const app = express()
app.get('/125', handler125)
app.listen(3000, () => {})
        