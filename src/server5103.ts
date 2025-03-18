
const express = require('express')
import {handler5103} from "./handler5103";
const app = express()
app.get('/5103', handler5103)
app.listen(3000, () => {})
        