
const express = require('express')
import {handler5956} from "./handler5956";
const app = express()
app.get('/5956', handler5956)
app.listen(3000, () => {})
        