
const express = require('express')
import {handler5279} from "./handler5279";
const app = express()
app.get('/5279', handler5279)
app.listen(3000, () => {})
        