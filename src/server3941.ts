
const express = require('express')
import {handler3941} from "./handler3941";
const app = express()
app.get('/3941', handler3941)
app.listen(3000, () => {})
        