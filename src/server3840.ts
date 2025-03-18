
const express = require('express')
import {handler3840} from "./handler3840";
const app = express()
app.get('/3840', handler3840)
app.listen(3000, () => {})
        