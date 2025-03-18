
const express = require('express')
import {handler5655} from "./handler5655";
const app = express()
app.get('/5655', handler5655)
app.listen(3000, () => {})
        