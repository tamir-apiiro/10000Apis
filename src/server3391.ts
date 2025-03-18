
const express = require('express')
import {handler3391} from "./handler3391";
const app = express()
app.get('/3391', handler3391)
app.listen(3000, () => {})
        