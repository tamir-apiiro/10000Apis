
const express = require('express')
import {handler5695} from "./handler5695";
const app = express()
app.get('/5695', handler5695)
app.listen(3000, () => {})
        