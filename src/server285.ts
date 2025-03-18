
const express = require('express')
import {handler285} from "./handler285";
const app = express()
app.get('/285', handler285)
app.listen(3000, () => {})
        