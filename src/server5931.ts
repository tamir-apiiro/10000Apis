
const express = require('express')
import {handler5931} from "./handler5931";
const app = express()
app.get('/5931', handler5931)
app.listen(3000, () => {})
        