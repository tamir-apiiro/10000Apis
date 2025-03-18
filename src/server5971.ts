
const express = require('express')
import {handler5971} from "./handler5971";
const app = express()
app.get('/5971', handler5971)
app.listen(3000, () => {})
        