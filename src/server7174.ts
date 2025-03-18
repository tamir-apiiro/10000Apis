
const express = require('express')
import {handler7174} from "./handler7174";
const app = express()
app.get('/7174', handler7174)
app.listen(3000, () => {})
        