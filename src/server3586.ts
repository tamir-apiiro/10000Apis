
const express = require('express')
import {handler3586} from "./handler3586";
const app = express()
app.get('/3586', handler3586)
app.listen(3000, () => {})
        