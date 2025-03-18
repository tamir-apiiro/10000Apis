
const express = require('express')
import {handler5622} from "./handler5622";
const app = express()
app.get('/5622', handler5622)
app.listen(3000, () => {})
        