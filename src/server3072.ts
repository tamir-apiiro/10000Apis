
const express = require('express')
import {handler3072} from "./handler3072";
const app = express()
app.get('/3072', handler3072)
app.listen(3000, () => {})
        