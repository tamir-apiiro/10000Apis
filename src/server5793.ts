
const express = require('express')
import {handler5793} from "./handler5793";
const app = express()
app.get('/5793', handler5793)
app.listen(3000, () => {})
        