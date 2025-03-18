
const express = require('express')
import {handler7743} from "./handler7743";
const app = express()
app.get('/7743', handler7743)
app.listen(3000, () => {})
        