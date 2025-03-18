
const express = require('express')
import {handler674} from "./handler674";
const app = express()
app.get('/674', handler674)
app.listen(3000, () => {})
        