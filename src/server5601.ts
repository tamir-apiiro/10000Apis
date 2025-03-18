
const express = require('express')
import {handler5601} from "./handler5601";
const app = express()
app.get('/5601', handler5601)
app.listen(3000, () => {})
        