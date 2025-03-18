
const express = require('express')
import {handler5059} from "./handler5059";
const app = express()
app.get('/5059', handler5059)
app.listen(3000, () => {})
        