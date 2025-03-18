
const express = require('express')
import {handler704} from "./handler704";
const app = express()
app.get('/704', handler704)
app.listen(3000, () => {})
        