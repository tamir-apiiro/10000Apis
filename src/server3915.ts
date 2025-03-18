
const express = require('express')
import {handler3915} from "./handler3915";
const app = express()
app.get('/3915', handler3915)
app.listen(3000, () => {})
        