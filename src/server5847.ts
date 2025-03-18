
const express = require('express')
import {handler5847} from "./handler5847";
const app = express()
app.get('/5847', handler5847)
app.listen(3000, () => {})
        