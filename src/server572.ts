
const express = require('express')
import {handler572} from "./handler572";
const app = express()
app.get('/572', handler572)
app.listen(3000, () => {})
        