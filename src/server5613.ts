
const express = require('express')
import {handler5613} from "./handler5613";
const app = express()
app.get('/5613', handler5613)
app.listen(3000, () => {})
        