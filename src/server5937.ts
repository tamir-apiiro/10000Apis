
const express = require('express')
import {handler5937} from "./handler5937";
const app = express()
app.get('/5937', handler5937)
app.listen(3000, () => {})
        