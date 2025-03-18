
const express = require('express')
import {handler868} from "./handler868";
const app = express()
app.get('/868', handler868)
app.listen(3000, () => {})
        