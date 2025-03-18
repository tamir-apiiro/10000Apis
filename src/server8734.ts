
const express = require('express')
import {handler8734} from "./handler8734";
const app = express()
app.get('/8734', handler8734)
app.listen(3000, () => {})
        