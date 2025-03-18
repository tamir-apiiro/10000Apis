
const express = require('express')
import {handler3111} from "./handler3111";
const app = express()
app.get('/3111', handler3111)
app.listen(3000, () => {})
        