
const express = require('express')
import {handler5708} from "./handler5708";
const app = express()
app.get('/5708', handler5708)
app.listen(3000, () => {})
        