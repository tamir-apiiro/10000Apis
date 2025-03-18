
const express = require('express')
import {handler5433} from "./handler5433";
const app = express()
app.get('/5433', handler5433)
app.listen(3000, () => {})
        