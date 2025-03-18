
const express = require('express')
import {handler5805} from "./handler5805";
const app = express()
app.get('/5805', handler5805)
app.listen(3000, () => {})
        