
const express = require('express')
import {handler3130} from "./handler3130";
const app = express()
app.get('/3130', handler3130)
app.listen(3000, () => {})
        