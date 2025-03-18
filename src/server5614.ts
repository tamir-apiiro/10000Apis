
const express = require('express')
import {handler5614} from "./handler5614";
const app = express()
app.get('/5614', handler5614)
app.listen(3000, () => {})
        