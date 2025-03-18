
const express = require('express')
import {handler3412} from "./handler3412";
const app = express()
app.get('/3412', handler3412)
app.listen(3000, () => {})
        