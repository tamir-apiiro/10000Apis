
const express = require('express')
import {handler3312} from "./handler3312";
const app = express()
app.get('/3312', handler3312)
app.listen(3000, () => {})
        