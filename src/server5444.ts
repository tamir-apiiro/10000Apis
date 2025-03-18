
const express = require('express')
import {handler5444} from "./handler5444";
const app = express()
app.get('/5444', handler5444)
app.listen(3000, () => {})
        