
const express = require('express')
import {handler5826} from "./handler5826";
const app = express()
app.get('/5826', handler5826)
app.listen(3000, () => {})
        