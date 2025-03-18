
const express = require('express')
import {handler3554} from "./handler3554";
const app = express()
app.get('/3554', handler3554)
app.listen(3000, () => {})
        