
const express = require('express')
import {handler5164} from "./handler5164";
const app = express()
app.get('/5164', handler5164)
app.listen(3000, () => {})
        