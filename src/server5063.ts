
const express = require('express')
import {handler5063} from "./handler5063";
const app = express()
app.get('/5063', handler5063)
app.listen(3000, () => {})
        