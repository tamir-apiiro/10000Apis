
const express = require('express')
import {handler5166} from "./handler5166";
const app = express()
app.get('/5166', handler5166)
app.listen(3000, () => {})
        