
const express = require('express')
import {handler5577} from "./handler5577";
const app = express()
app.get('/5577', handler5577)
app.listen(3000, () => {})
        