
const express = require('express')
import {handler3695} from "./handler3695";
const app = express()
app.get('/3695', handler3695)
app.listen(3000, () => {})
        