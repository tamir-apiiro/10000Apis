
const express = require('express')
import {handler3478} from "./handler3478";
const app = express()
app.get('/3478', handler3478)
app.listen(3000, () => {})
        