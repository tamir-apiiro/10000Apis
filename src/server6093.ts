
const express = require('express')
import {handler6093} from "./handler6093";
const app = express()
app.get('/6093', handler6093)
app.listen(3000, () => {})
        