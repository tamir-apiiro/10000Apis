
const express = require('express')
import {handler5707} from "./handler5707";
const app = express()
app.get('/5707', handler5707)
app.listen(3000, () => {})
        