
const express = require('express')
import {handler5562} from "./handler5562";
const app = express()
app.get('/5562', handler5562)
app.listen(3000, () => {})
        