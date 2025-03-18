
const express = require('express')
import {handler484} from "./handler484";
const app = express()
app.get('/484', handler484)
app.listen(3000, () => {})
        