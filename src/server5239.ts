
const express = require('express')
import {handler5239} from "./handler5239";
const app = express()
app.get('/5239', handler5239)
app.listen(3000, () => {})
        