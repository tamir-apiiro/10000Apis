
const express = require('express')
import {handler5151} from "./handler5151";
const app = express()
app.get('/5151', handler5151)
app.listen(3000, () => {})
        