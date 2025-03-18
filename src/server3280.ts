
const express = require('express')
import {handler3280} from "./handler3280";
const app = express()
app.get('/3280', handler3280)
app.listen(3000, () => {})
        