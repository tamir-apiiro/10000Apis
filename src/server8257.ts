
const express = require('express')
import {handler8257} from "./handler8257";
const app = express()
app.get('/8257', handler8257)
app.listen(3000, () => {})
        