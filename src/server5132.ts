
const express = require('express')
import {handler5132} from "./handler5132";
const app = express()
app.get('/5132', handler5132)
app.listen(3000, () => {})
        