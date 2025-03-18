
const express = require('express')
import {handler5667} from "./handler5667";
const app = express()
app.get('/5667', handler5667)
app.listen(3000, () => {})
        