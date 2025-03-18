
const express = require('express')
import {handler5194} from "./handler5194";
const app = express()
app.get('/5194', handler5194)
app.listen(3000, () => {})
        