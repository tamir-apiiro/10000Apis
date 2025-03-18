
const express = require('express')
import {handler3601} from "./handler3601";
const app = express()
app.get('/3601', handler3601)
app.listen(3000, () => {})
        