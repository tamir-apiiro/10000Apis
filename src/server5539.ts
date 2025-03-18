
const express = require('express')
import {handler5539} from "./handler5539";
const app = express()
app.get('/5539', handler5539)
app.listen(3000, () => {})
        