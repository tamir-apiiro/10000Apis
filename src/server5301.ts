
const express = require('express')
import {handler5301} from "./handler5301";
const app = express()
app.get('/5301', handler5301)
app.listen(3000, () => {})
        