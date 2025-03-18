
const express = require('express')
import {handler5334} from "./handler5334";
const app = express()
app.get('/5334', handler5334)
app.listen(3000, () => {})
        