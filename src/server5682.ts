
const express = require('express')
import {handler5682} from "./handler5682";
const app = express()
app.get('/5682', handler5682)
app.listen(3000, () => {})
        