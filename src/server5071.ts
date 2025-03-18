
const express = require('express')
import {handler5071} from "./handler5071";
const app = express()
app.get('/5071', handler5071)
app.listen(3000, () => {})
        