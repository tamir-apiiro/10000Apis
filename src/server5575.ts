
const express = require('express')
import {handler5575} from "./handler5575";
const app = express()
app.get('/5575', handler5575)
app.listen(3000, () => {})
        