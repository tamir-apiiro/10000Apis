
const express = require('express')
import {handler8736} from "./handler8736";
const app = express()
app.get('/8736', handler8736)
app.listen(3000, () => {})
        