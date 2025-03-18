
const express = require('express')
import {handler5696} from "./handler5696";
const app = express()
app.get('/5696', handler5696)
app.listen(3000, () => {})
        