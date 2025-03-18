
const express = require('express')
import {handler5851} from "./handler5851";
const app = express()
app.get('/5851', handler5851)
app.listen(3000, () => {})
        