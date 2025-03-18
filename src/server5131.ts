
const express = require('express')
import {handler5131} from "./handler5131";
const app = express()
app.get('/5131', handler5131)
app.listen(3000, () => {})
        