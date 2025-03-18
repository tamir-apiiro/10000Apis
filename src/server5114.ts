
const express = require('express')
import {handler5114} from "./handler5114";
const app = express()
app.get('/5114', handler5114)
app.listen(3000, () => {})
        