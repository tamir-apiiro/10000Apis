
const express = require('express')
import {handler3316} from "./handler3316";
const app = express()
app.get('/3316', handler3316)
app.listen(3000, () => {})
        