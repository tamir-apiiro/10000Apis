
const express = require('express')
import {handler5031} from "./handler5031";
const app = express()
app.get('/5031', handler5031)
app.listen(3000, () => {})
        