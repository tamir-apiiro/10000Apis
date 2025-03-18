
const express = require('express')
import {handler5169} from "./handler5169";
const app = express()
app.get('/5169', handler5169)
app.listen(3000, () => {})
        