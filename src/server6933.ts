
const express = require('express')
import {handler6933} from "./handler6933";
const app = express()
app.get('/6933', handler6933)
app.listen(3000, () => {})
        