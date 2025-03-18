
const express = require('express')
import {handler5055} from "./handler5055";
const app = express()
app.get('/5055', handler5055)
app.listen(3000, () => {})
        