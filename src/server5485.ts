
const express = require('express')
import {handler5485} from "./handler5485";
const app = express()
app.get('/5485', handler5485)
app.listen(3000, () => {})
        