
const express = require('express')
import {handler5820} from "./handler5820";
const app = express()
app.get('/5820', handler5820)
app.listen(3000, () => {})
        