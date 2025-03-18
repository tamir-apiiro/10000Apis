
const express = require('express')
import {handler225} from "./handler225";
const app = express()
app.get('/225', handler225)
app.listen(3000, () => {})
        