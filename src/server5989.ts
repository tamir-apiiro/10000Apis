
const express = require('express')
import {handler5989} from "./handler5989";
const app = express()
app.get('/5989', handler5989)
app.listen(3000, () => {})
        