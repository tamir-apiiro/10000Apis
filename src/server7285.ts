
const express = require('express')
import {handler7285} from "./handler7285";
const app = express()
app.get('/7285', handler7285)
app.listen(3000, () => {})
        