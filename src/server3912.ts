
const express = require('express')
import {handler3912} from "./handler3912";
const app = express()
app.get('/3912', handler3912)
app.listen(3000, () => {})
        