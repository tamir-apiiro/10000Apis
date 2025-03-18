
const express = require('express')
import {handler3981} from "./handler3981";
const app = express()
app.get('/3981', handler3981)
app.listen(3000, () => {})
        