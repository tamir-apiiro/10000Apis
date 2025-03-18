
const express = require('express')
import {handler3155} from "./handler3155";
const app = express()
app.get('/3155', handler3155)
app.listen(3000, () => {})
        