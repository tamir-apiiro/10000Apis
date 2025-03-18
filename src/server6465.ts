
const express = require('express')
import {handler6465} from "./handler6465";
const app = express()
app.get('/6465', handler6465)
app.listen(3000, () => {})
        