
const express = require('express')
import {handler3241} from "./handler3241";
const app = express()
app.get('/3241', handler3241)
app.listen(3000, () => {})
        