
const express = require('express')
import {handler208} from "./handler208";
const app = express()
app.get('/208', handler208)
app.listen(3000, () => {})
        