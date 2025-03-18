
const express = require('express')
import {handler5096} from "./handler5096";
const app = express()
app.get('/5096', handler5096)
app.listen(3000, () => {})
        