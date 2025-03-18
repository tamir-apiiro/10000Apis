
const express = require('express')
import {handler5406} from "./handler5406";
const app = express()
app.get('/5406', handler5406)
app.listen(3000, () => {})
        