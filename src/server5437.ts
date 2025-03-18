
const express = require('express')
import {handler5437} from "./handler5437";
const app = express()
app.get('/5437', handler5437)
app.listen(3000, () => {})
        