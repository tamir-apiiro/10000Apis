
const express = require('express')
import {handler5802} from "./handler5802";
const app = express()
app.get('/5802', handler5802)
app.listen(3000, () => {})
        