
const express = require('express')
import {handler5107} from "./handler5107";
const app = express()
app.get('/5107', handler5107)
app.listen(3000, () => {})
        