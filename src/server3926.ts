
const express = require('express')
import {handler3926} from "./handler3926";
const app = express()
app.get('/3926', handler3926)
app.listen(3000, () => {})
        